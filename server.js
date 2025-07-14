// 1. IMPORTS
require('dotenv').config(); 
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
const questionRoutes = require('./routes/questionRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { requireAuth } = require('@clerk/express');

// 2. INITIALIZATION
connectDB(); 
const app = express();
// Use the PORT from .env, with a fallback for safety
const PORT = process.env.PORT || 5000;

// 3. MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 4. ROUTES
app.use('/api/questions', questionRoutes);
app.use('/api/performance', performanceRoutes); 
app.use('/api/contact', contactRoutes);

// 5. SERVER LISTENER
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
