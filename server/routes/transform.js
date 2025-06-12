const express = require('express');
const ContentProcessor = require('../services/contentProcessor');

const router = express.Router();
const contentProcessor = new ContentProcessor();

// POST /api/transform - Transform content for all platforms
router.post('/transform', async (req, res) => {
  try {
    const { content } = req.body;

    // Validate input
    if (!content) {
      return res.status(400).json({
        success: false,
        error: 'Content is required'
      });
    }

    if (typeof content !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Content must be a string'
      });
    }

    if (content.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Content cannot be empty'
      });
    }

    if (content.length > 50000) {
      return res.status(400).json({
        success: false,
        error: 'Content is too long. Please limit to 50,000 characters.'
      });
    }

    // Transform content using Gemini AI
    const result = await contentProcessor.transformContent(content);

    // Log successful transformation
    console.log(`✅ Content transformed successfully - ${content.length} characters processed`);

    res.json(result);

  } catch (error) {
    console.error('❌ Error transforming content:', error.message);
    
    // Handle specific Gemini API errors
    if (error.message.includes('API key')) {
      return res.status(500).json({
        success: false,
        error: 'AI service configuration error. Please contact support.'
      });
    }

    if (error.message.includes('quota') || error.message.includes('rate limit')) {
      return res.status(429).json({
        success: false,
        error: 'AI service is temporarily busy. Please try again in a moment.'
      });
    }
    
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to transform content'
    });
  }
});

// GET /api/platforms - Get supported platform specifications
router.get('/platforms', (req, res) => {
  try {
    const platforms = contentProcessor.getPlatformSpecs();
    
    res.json({
      success: true,
      platforms
    });
  } catch (error) {
    console.error('❌ Error getting platforms:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to get platform specifications'
    });
  }
});

module.exports = router; 