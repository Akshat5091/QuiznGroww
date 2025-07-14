const QuizPerformance = require('../models/QuizPerformance');

// @desc    Save a user's quiz performance
// @route   POST /api/performance
const savePerformance = async (req, res) => {
    try {
        const { topic, difficulty, score, totalQuestions } = req.body;
        const userId = req.auth.userId; // Get userId from the authenticated session

        const newPerformance = new QuizPerformance({
            userId,
            topic,
            difficulty,
            score,
            totalQuestions,
        });

        const savedPerformance = await newPerformance.save();
        res.status(201).json(savedPerformance);
    } catch (error) {
        res.status(500).json({ message: 'Error saving performance', error: error.message });
    }
};

// @desc    Get all past performances for the logged-in user
// @route   GET /api/performance
const getPerformanceHistory = async (req, res) => {
    try {
        const userId = req.auth.userId; // Get userId from the authenticated session
        
        // Find all records for the user and sort by most recent date
        const history = await QuizPerformance.find({ userId }).sort({ date: -1 });
        
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching performance history', error: error.message });
    }
};

module.exports = { savePerformance, getPerformanceHistory };
