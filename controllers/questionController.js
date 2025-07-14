const Question = require('../models/Question.js');

// @desc    Add a new question
// @route   POST /api/questions
const addQuestion = async (req, res) => {
  try {
    const { topic, difficulty, questionText, options, correctAnswer } = req.body;
    const newQuestion = new Question({ topic, difficulty, questionText, options, correctAnswer });
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error adding question', error: error.message });
  }
};

// @desc    Get 5 random questions for a specific topic and difficulty
// @route   GET /api/questions/:topic/:difficulty
const getQuizQuestions = async (req, res) => {
  try {
    const { topic, difficulty } = req.params;

    const questions = await Question.aggregate([
      { $match: { topic: topic, difficulty: difficulty } },
      { $sample: { size: 5 } }
    ]);
    
    if (!questions || questions.length < 5) {
      return res.status(404).json({ message: `Could not find 5 questions for this topic and difficulty.` });
    }
    
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error: error.message });
  }
};

// @desc    Check if an answer is correct
// @route   POST /api/questions/check-answer
const checkAnswer = async (req, res) => {
  try {
    const { questionId, userAnswer } = req.body;
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    const isCorrect = question.correctAnswer === userAnswer;
    res.status(200).json({ 
        correct: isCorrect, 
        correctAnswer: question.correctAnswer 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error checking answer', error: error.message });
  }
};

// @desc    Get a list of all unique topics
// @route   GET /api/questions/topics
const getTopics = async (req, res) => {
  try {
    const topics = await Question.distinct('topic');
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching topics', error: error.message });
  }
};

// @desc    Get 5 random questions from a specific difficulty for the Random Challenge
// @route   GET /api/questions/random/challenge/:difficulty
const getRandomQuiz = async (req, res) => {
    try {
        // Get the difficulty from the URL parameters
        const { difficulty } = req.params;

        // Find 5 random questions that match the selected difficulty
        const randomQuestions = await Question.aggregate([
            { $match: { difficulty: difficulty } }, // First, filter by difficulty
            { $sample: { size: 5 } }              // Then, get 5 random documents
        ]);
        
        // Check if we found enough questions
        if (!randomQuestions || randomQuestions.length < 5) {
            return res.status(404).json({ message: `Could not find 5 questions for the ${difficulty} level.` });
        }
        
        res.status(200).json(randomQuestions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching random questions', error: error.message });
    }
};

module.exports = { addQuestion, getQuizQuestions, checkAnswer, getTopics, getRandomQuiz };