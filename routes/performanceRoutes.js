const express = require('express');
const router = express.Router();
const { savePerformance, getPerformanceHistory } = require('../controllers/performanceController');
const { requireAuth } = require('@clerk/express');

// All routes in this file are protected and require authentication
router.use(requireAuth());

// Route to save a new quiz performance
router.post('/', savePerformance);

// Route to get the user's performance history
router.get('/', getPerformanceHistory);

module.exports = router;
