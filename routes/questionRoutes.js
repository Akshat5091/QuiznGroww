const express = require('express');
const router = express.Router();
const { addQuestion, getQuizQuestions, checkAnswer, getTopics, getRandomQuiz } = require('../controllers/questionController.js');
const { requireAuth } = require('@clerk/express');

// =================================================================
// PUBLIC ROUTES
// =================================================================
router.post('/', addQuestion);
router.post('/check-answer', checkAnswer);
router.get('/topics', getTopics); 

// =================================================================
// PROTECTED ROUTES (Require user to be logged in)
// =================================================================

// UPDATED: The route for the random challenge now accepts a difficulty parameter
router.get('/random/challenge/:difficulty', requireAuth(), getRandomQuiz);

// This route gets questions for a specific topic and difficulty
router.get('/:topic/:difficulty', requireAuth(), getQuizQuestions);

module.exports = router;