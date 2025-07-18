// 1. IMPORTS
require('dotenv').config(); 
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
const questionRoutes = require('./routes/questionRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const contactRoutes = require('./routes/contactRoutes');
// Note: requireAuth is not used in this file, but may be used in your routes.
// const { requireAuth } = require('@clerk/express'); 

// 2. INITIALIZATION
connectDB(); 
const app = express();
// Use the PORT from .env, with a fallback for safety
const PORT = process.env.PORT || 5000;

// 3. MIDDLEWARE
// This serves all static files (CSS, JS, images) from the 'public' folder.
// It will also correctly serve files from subdirectories, like /html/about.html
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 4. ROUTES
// API routes remain unchanged
app.use('/api/questions', questionRoutes);
app.use('/api/performance', performanceRoutes); 
app.use('/api/contact', contactRoutes);

// --- NEW ROUTE FOR THE HOMEPAGE ---
// Since index.html is no longer in the root of /public, we need a specific
// route to handle requests for the homepage ('/').
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// --- CATCH-ALL FOR OTHER HTML PAGES (Optional but Recommended) ---
// This will handle cases where a user tries to refresh a page like /html/topics.html
// It ensures that any unhandled GET request that looks like it's for an HTML page
// gets served the correct file.
// IMPORTANT: This must come AFTER your API routes.
app.get('/html/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'public', 'html', `${page}`));
});


// 5. SERVER LISTENER
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});