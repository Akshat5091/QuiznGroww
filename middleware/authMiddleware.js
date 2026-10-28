const jwt = require('jsonwebtoken');
const store = require('../config/store');

const JWT_SECRET = process.env.JWT_SECRET || 'quizngroww_jwt_secret_token_key_2025_btech_cse_akshat_secure';

const protect = async (req, res, next) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized: Access token is missing. Please sign in with Google.',
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await store.findUserById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'The user belonging to this token no longer exists.',
      });
    }

    req.user = {
      id: String(user.id || user._id),
      _id: String(user.id || user._id),
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      stats: user.stats,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized: Invalid or expired token.',
    });
  }
};

const optionalAuth = async (req, res, next) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await store.findUserById(decoded.id);
    if (user) {
      req.user = {
        id: String(user.id || user._id),
        _id: String(user.id || user._id),
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        stats: user.stats,
      };
    }
  } catch (e) {
    // Ignore invalid optional tokens
  }

  next();
};

module.exports = { protect, optionalAuth, JWT_SECRET };
