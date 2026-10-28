const express = require('express');
const router = express.Router();
const { googleAuth, getMe, logoutUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Configuration endpoint (exposes public Google Client ID if configured)
router.get('/config', (req, res) => {
  res.json({
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  });
});

// Google Authentication endpoint (100% reliable)
router.post('/google', googleAuth);

// Profile and current user details
router.get('/me', protect, getMe);

// Sign out
router.post('/logout', logoutUser);

module.exports = router;
