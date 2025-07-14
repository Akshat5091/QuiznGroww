const mongoose = require('mongoose'); // <-- This line was missing

const quizPerformanceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true // Add an index for faster querying by userId
    },
    topic: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    totalQuestions: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('QuizPerformance', quizPerformanceSchema);