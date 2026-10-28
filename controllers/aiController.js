const { GoogleGenAI } = require('@google/genai');
const store = require('../config/store');

/**
 * Deterministic fallback generator for offline / test environments
 */
const generateFallbackQuestions = (topic, difficulty, count) => {
  const diffCap = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  const questions = [];

  for (let i = 1; i <= count; i++) {
    const questionText = `[${diffCap}] What is a foundational concept or principle in ${topic} (Concept #${i})?`;
    const correctAnswer = `Primary core mechanism #${i} governing ${topic}`;
    const options = [
      correctAnswer,
      `Unrelated superficial property in general computing`,
      `Deprecated legacy configuration obsolete since 2012`,
      `Hypothetical theoretical anti-pattern with zero practical usage`,
    ];

    // Shuffle options
    for (let j = options.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [options[j], options[k]] = [options[k], options[j]];
    }

    questions.push({
      topic,
      difficulty,
      questionText,
      options,
      correctAnswer,
      explanation: `In ${topic}, "${correctAnswer}" is the fundamental principle that defines expected behavior at the ${difficulty} level.`,
    });
  }

  return questions;
};

/**
 * @desc    Generate AI Quiz using Google Gemini API
 * @route   POST /api/questions/ai/generate
 * @access  Public
 */
const generateAIQuiz = async (req, res) => {
  try {
    const {
      topic: rawTopic,
      difficulty: rawDiff = 'medium',
      count: rawCount = 5,
      contextText = '',
    } = req.body;

    if (!rawTopic || typeof rawTopic !== 'string' || rawTopic.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'A valid topic (at least 2 characters) is required.',
      });
    }

    const topic = rawTopic.trim();
    const difficulty = ['easy', 'medium', 'hard'].includes(rawDiff?.toLowerCase())
      ? rawDiff.toLowerCase()
      : 'medium';

    let count = parseInt(rawCount, 10);
    if (isNaN(count) || count < 1) count = 5;
    if (count > 10) count = 10; // Cap at 10 to protect token usage

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    let rawQuestions = [];
    let source = 'mock-fallback';

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });

        const systemInstruction =
          'You are an expert academic quiz author for QuiznGroww. ' +
          'Generate high-quality multiple choice questions. ' +
          'Return ONLY a valid JSON array of objects. Each object MUST contain:\n' +
          '- "questionText": string (clear, unambiguous)\n' +
          '- "options": array of exactly 4 strings (distinct, plausible choices)\n' +
          '- "correctAnswer": string (must match exactly one of the strings in "options")\n' +
          '- "explanation": string (1-2 sentences explaining why the correct answer is true)';

        const prompt =
          `Topic: "${topic}"\n` +
          `Difficulty Level: "${difficulty}"\n` +
          `Number of Questions: ${count}\n` +
          (contextText ? `Source Material/Context: "${contextText.slice(0, 1500)}"\n` : '') +
          `Generate ${count} questions adhering to the schema.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
            temperature: 0.7,
          },
        });

        const jsonText = response.text?.trim();
        if (jsonText) {
          const parsed = JSON.parse(jsonText);
          if (Array.isArray(parsed) && parsed.length > 0) {
            rawQuestions = parsed.map((q) => ({
              topic,
              difficulty,
              questionText: String(q.questionText || ''),
              options:
                Array.isArray(q.options) && q.options.length === 4
                  ? q.options.map(String)
                  : ['Option A', 'Option B', 'Option C', 'Option D'],
              correctAnswer: String(q.correctAnswer || q.options?.[0] || ''),
              explanation: String(q.explanation || `The correct answer is ${q.correctAnswer}.`),
            }));
            source = 'gemini';
          }
        }
      } catch (geminiError) {
        console.warn('Gemini API call failed, using graceful fallback:', geminiError.message);
      }
    }

    // Fallback if Gemini was not configured or threw an error
    if (rawQuestions.length === 0) {
      rawQuestions = generateFallbackQuestions(topic, difficulty, count);
      source = 'mock-fallback';
    }

    // Insert into hot in-memory store so it is playable immediately
    const savedQuestions = await store.addQuestionsBatch(rawQuestions);

    // Anti-cheat: strip correctAnswer from client payload
    const clientSafeQuestions = savedQuestions.map((q) => ({
      _id: q._id,
      topic: q.topic,
      difficulty: q.difficulty,
      questionText: q.questionText,
      options: q.options,
    }));

    return res.status(200).json({
      success: true,
      topic,
      difficulty,
      count: clientSafeQuestions.length,
      questions: clientSafeQuestions,
      source,
    });
  } catch (error) {
    console.error('Error in generateAIQuiz:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate AI quiz',
      error: error.message,
    });
  }
};

module.exports = {
  generateAIQuiz,
  generateFallbackQuestions,
};
