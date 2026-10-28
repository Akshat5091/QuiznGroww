const store = require('../config/store');

// @desc    Save a quiz performance record
// @route   POST /api/performance
const savePerformance = async (req, res) => {
  try {
    const { topic, difficulty, score, totalQuestions, timeTakenSeconds } = req.body;
    const userId = req.user._id;
    const userName = req.user.name;

    if (score === undefined || totalQuestions === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Score and totalQuestions are required.',
      });
    }

    const savedRecord = await store.savePerformance({
      userId,
      userName,
      topic: topic || 'General',
      difficulty: difficulty || 'Medium',
      score: Number(score),
      totalQuestions: Number(totalQuestions),
      timeTakenSeconds: Number(timeTakenSeconds) || 0,
    });

    const updatedStats = await store.updateUserStats(userId, Number(score), Number(totalQuestions));

    res.status(201).json({
      success: true,
      performance: savedRecord,
      stats: updatedStats,
    });
  } catch (error) {
    console.error('Error saving performance:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving performance',
      error: error.message,
    });
  }
};

// @desc    Get user's performance history
// @route   GET /api/performance
const getPerformanceHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const history = await store.getPerformanceHistory(userId);
    res.status(200).json(history);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching performance history',
      error: error.message,
    });
  }
};

// @desc    Get global leaderboard with category, timeframe & difficulty filtering
// @route   GET /api/performance/leaderboard
const getLeaderboard = async (req, res) => {
  try {
    const timeframe = req.query.timeframe || 'all'; // 'today' | 'all'
    const topic = req.query.topic || 'all'; // 'all' | 'Random Challenge' | specific topic
    const difficulty = req.query.difficulty || 'all'; // 'all' | 'Easy' | 'Medium' | 'Hard'
    const limit = parseInt(req.query.limit, 10) || 25;

    const leaderboard = await store.getLeaderboard({
      timeframe,
      topic,
      difficulty,
      limit,
    });
    res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching leaderboard',
      error: error.message,
    });
  }
};

module.exports = {
  savePerformance,
  getPerformanceHistory,
  getLeaderboard,
};
