const store = require('../config/store');

// @desc    Get list of all topics with question count
// @route   GET /api/questions/topics
const getTopics = async (req, res) => {
  try {
    const topics = await store.getTopics();
    res.status(200).json(topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching topics',
      error: error.message,
    });
  }
};

// @desc    Get quiz questions for a specific topic and difficulty
// @route   GET /api/questions/:topic/:difficulty
const getQuizQuestions = async (req, res) => {
  try {
    const { topic, difficulty } = req.params;
    const limit = parseInt(req.query.limit, 10) || 5;

    const questions = await store.getQuizQuestions(topic, difficulty, limit);

    if (!questions || questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Could not find questions for topic '${topic}' and difficulty '${difficulty}'.`,
      });
    }

    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz questions',
      error: error.message,
    });
  }
};

// @desc    Get random questions across topics for a specific difficulty
// @route   GET /api/questions/random/challenge/:difficulty
const getRandomQuiz = async (req, res) => {
  try {
    const { difficulty } = req.params;
    const limit = parseInt(req.query.limit, 10) || 5;

    const questions = await store.getQuizQuestions('random', difficulty, limit);

    if (!questions || questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Could not find random questions for ${difficulty} level.`,
      });
    }

    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching random challenge:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching random challenge',
      error: error.message,
    });
  }
};

// @desc    Check a single answer
// @route   POST /api/questions/check-answer
const checkAnswer = async (req, res) => {
  try {
    const { questionId, userAnswer, difficulty } = req.body;

    if (!questionId) {
      return res.status(400).json({
        success: false,
        message: 'Question ID is required.',
      });
    }

    const result = await store.checkAnswer(questionId, userAnswer);

    if (!result.found) {
      return res.status(404).json({
        success: false,
        message: 'Question not found.',
      });
    }

    const normDiff = (difficulty || 'Medium').toLowerCase();
    let pointsDelta = 0;
    if (result.correct) {
      pointsDelta = 10;
    } else {
      if (normDiff === 'hard' || normDiff === 'difficult') pointsDelta = -10;
      else if (normDiff === 'easy' || normDiff === 'normal') pointsDelta = 0;
      else pointsDelta = -5;
    }

    res.status(200).json({
      success: true,
      correct: result.correct,
      correctAnswer: result.correctAnswer,
      explanation: result.explanation,
      pointsDelta,
      scoringRule: result.correct ? '+10 XP' : (pointsDelta === 0 ? '0 XP (No penalty)' : `${pointsDelta} XP Penalty`),
    });
  } catch (error) {
    console.error('Error checking answer:', error);
    res.status(500).json({
      success: false,
      message: 'Error checking answer',
      error: error.message,
    });
  }
};

// @desc    Submit full quiz session with instant scoring, explanation & stats sync
// @route   POST /api/questions/submit-quiz
const submitQuiz = async (req, res) => {
  try {
    const { results, topic, difficulty, timeTakenSeconds } = req.body;

    if (!results || !Array.isArray(results) || results.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid quiz results payload.',
      });
    }

    const evaluation = await store.evaluateFullQuiz(results, difficulty || 'Medium');

    let savedPerformance = null;
    let userStats = null;

    if (req.user) {
      // Save performance record with difficulty-adjusted points
      savedPerformance = await store.savePerformance({
        userId: req.user._id,
        userName: req.user.name,
        topic: topic || 'General',
        difficulty: difficulty || 'Medium',
        score: evaluation.score,
        totalQuestions: evaluation.totalQuestions,
        percentage: evaluation.percentage,
        timeTakenSeconds: timeTakenSeconds || 0,
      });

      // Update user statistics
      userStats = await store.updateUserStats(
        req.user._id,
        evaluation.score,
        evaluation.totalQuestions
      );
    }

    res.status(200).json({
      success: true,
      score: evaluation.score,
      rawPoints: evaluation.rawPoints,
      correctCount: evaluation.correctCount,
      totalQuestions: evaluation.totalQuestions,
      percentage: evaluation.percentage,
      correctPts: evaluation.correctPts,
      incorrectPts: evaluation.incorrectPts,
      evaluated: evaluation.evaluated,
      performanceId: savedPerformance ? savedPerformance._id : null,
      userStats,
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting quiz',
      error: error.message,
    });
  }
};

// @desc    Add a new question
// @route   POST /api/questions
const addQuestion = async (req, res) => {
  try {
    const { topic, difficulty, questionText, options, correctAnswer, explanation } = req.body;

    if (!topic || !difficulty || !questionText || !options || !correctAnswer) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    // Save in high-performance store
    const saved = await store.addQuestion({
      topic,
      difficulty,
      questionText,
      options,
      correctAnswer,
      explanation,
    });

    res.status(201).json({ success: true, question: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding question', error: error.message });
  }
};

module.exports = {
  getTopics,
  getQuizQuestions,
  getRandomQuiz,
  checkAnswer,
  submitQuiz,
  addQuestion,
};