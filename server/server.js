require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const transformRoutes = require('./routes/transform');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - Allow all origins for debugging
app.use(cors({
  origin: '*',
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With']
}));

// Enhanced body parser with error handling
app.use((req, res, next) => {
  if (req.method === 'POST' && req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
    console.log(`📦 POST Request Body Size: ${req.headers['content-length']} bytes`);
  }
  next();
});

app.use(bodyParser.json({ 
  limit: '10mb',
  verify: (req, res, buf, encoding) => {
    req.rawBody = buf;
  }
}));

app.use(bodyParser.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`📝 ${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.method === 'POST') {
    console.log(`📦 Body keys: ${Object.keys(req.body || {}).join(', ')}`);
    console.log(`📦 Content-Type: ${req.headers['content-type']}`);
  }
  next();
});

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

// Enhanced error handler - Shows actual error details for debugging
app.use((err, req, res, next) => {
  console.error('❌ Global Error Handler:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
    body: req.body,
    headers: req.headers
  });
  
  // Return actual error details in both development and production for debugging
  res.status(500).json({
    success: false,
    error: err.message || 'Something went wrong! Please try again.',
    details: {
      message: err.message,
      url: req.url,
      method: req.method,
      timestamp: new Date().toISOString()
    }
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