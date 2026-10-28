const express = require('express');
const router = express.Router();
const {
  savePerformance,
  getPerformanceHistory,
  getLeaderboard,
} = require('../controllers/performanceController');
const { protect } = require('../middleware/authMiddleware');

// Public route: Global leaderboard
router.get('/leaderboard', getLeaderboard);

// Protected routes: Save and view user's quiz performance
router.post('/', protect, savePerformance);
router.get('/', protect, getPerformanceHistory);

module.exports = router;
