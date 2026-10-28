const express = require('express');
const router = express.Router();
const {
  getTopics,
  getQuizQuestions,
  getRandomQuiz,
  checkAnswer,
  submitQuiz,
  addQuestion,
} = require('../controllers/questionController');
const { generateAIQuiz } = require('../controllers/aiController');
const { optionalAuth, protect } = require('../middleware/authMiddleware');

// Public route: list all available topics with question counts
router.get('/topics', getTopics);

// AI Quiz Generator (Mounted before parameterized routes)
router.post('/ai/generate', optionalAuth, generateAIQuiz);

// Get quiz questions (fast, accessible to all, optional token captures user identity)
router.get('/random/challenge/:difficulty', optionalAuth, getRandomQuiz);
router.get('/:topic/:difficulty', optionalAuth, getQuizQuestions);

// Answer checking
router.post('/check-answer', checkAnswer);

// Full quiz submission with instant scorecard and explanation review
router.post('/submit-quiz', optionalAuth, submitQuiz);

// Add new question (protected)
router.post('/', protect, addQuestion);

module.exports = router;
