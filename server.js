require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/database');

// Import API route handlers
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Initialize database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// PERFORMANCE & SECURITY MIDDLEWARE
// ============================================

// Gzip/Brotli response compression for ultra-low latency
app.use(compression());

// Security headers with content security policy configured for Google Identity Services, fonts & scripts
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://cdn.jsdelivr.net',
          'https://accounts.google.com/gsi/client',
        ],
        frameSrc: ["'self'", 'https://accounts.google.com/gsi/'],
        connectSrc: ["'self'", 'https://accounts.google.com/gsi/'],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
          'https://accounts.google.com/gsi/style',
        ],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https:', 'https://*.googleusercontent.com'],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  })
);

// Cross-origin resource sharing
app.use(cors());

// Disable browser caching during active development so UI updates load immediately
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Parse incoming JSON and URL-encoded request bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static assets (no-cache for instant live development updates)
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: 0,
    etag: false,
  })
);

// ============================================
// API ROUTES
// ============================================

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: require('./config/database').getDBStatus(),
  });
});

// ============================================
// FRONTEND PAGE ROUTES
// ============================================

// Clean semantic routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/topics', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'topics.html'));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'quiz.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'contact.html'));
});

app.get('/leaderboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'leaderboard.html'));
});

app.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'feedback.html'));
});

// Legacy /html/:page route handler
app.get('/html/:page', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'html', req.params.page);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.redirect('/');
    }
  });
});

// 404 fallback handler
app.use((req, res) => {
  if (req.accepts('html')) {
    res.status(404).sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
  } else {
    res.status(404).json({ success: false, message: 'Endpoint not found' });
  }
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'An internal server error occurred.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start the server if executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 QuiznGroww Server live at http://localhost:${PORT}`);
    console.log(`⚡ Performance engine: Gzip/Brotli compression active`);
    console.log(`🛡️ Security: Native JWT Auth + Helmet protection enabled`);
  });
}

module.exports = app;
