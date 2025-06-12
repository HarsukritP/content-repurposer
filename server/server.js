require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const transformRoutes = require('./routes/transform');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Debug middleware to log environment
app.use((req, res, next) => {
  if (req.path.includes('/api/')) {
    console.log(`🔍 API Request: ${req.method} ${req.path}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
    console.log(`🔑 API Key Present: ${!!process.env.GEMINI_API_KEY}`);
  }
  next();
});

// Routes
app.use('/api', transformRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Content Repurposing Tool API is running',
    environment: process.env.NODE_ENV,
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

// Serve React app for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Error handling middleware - Enhanced for debugging
app.use((err, req, res, next) => {
  console.error('❌ Global Error Handler:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
  
  res.status(500).json({
    success: false,
    error: 'Something went wrong! Please try again.',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});

// 404 handler - Fixed route pattern
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Content Repurposing Tool API running on port ${PORT}`);
  console.log(`📝 Ready to transform content for Twitter, LinkedIn, and Instagram!`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔑 Gemini API Key: ${process.env.GEMINI_API_KEY ? 'Present' : 'Missing'}`);
}); 