const { GoogleGenerativeAI } = require('@google/generative-ai');

class ContentProcessor {
  constructor() {
    this.platforms = {
      twitter: {
        characterLimit: 280,
        name: 'Twitter',
        icon: '🐦'
      },
      linkedin: {
        characterLimit: 1300,
        name: 'LinkedIn',
        icon: '💼'
      },
      instagram: {
        characterLimit: 2200,
        name: 'Instagram',
        icon: '📸'
      }
    };

    // Initialize Gemini AI
    if (!process.env.GEMINI_API_KEY) {
      console.warn('⚠️ GEMINI_API_KEY not found in environment variables');
    }
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
  }

  // Main transformation method using Gemini AI
  async transformContent(content) {
    if (!content || content.trim().length === 0) {
      throw new Error('Content cannot be empty');
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error('Gemini API key not configured. Please set GEMINI_API_KEY in environment variables.');
    }

    try {
      const results = {};
      
      // Transform for each platform using Gemini AI
      const [twitterResult, linkedinResult, instagramResult] = await Promise.all([
        this.transformForTwitter(content),
        this.transformForLinkedIn(content),
        this.transformForInstagram(content)
      ]);

      results.twitter = twitterResult;
      results.linkedin = linkedinResult;
      results.instagram = instagramResult;

      return {
        success: true,
        results
      };
    } catch (error) {
      console.error('❌ Gemini AI transformation error:', error.message);
      throw new Error(`AI transformation failed: ${error.message}`);
    }
  }

  // Twitter transformation using Gemini AI
  async transformForTwitter(content) {
    const prompt = `
Transform the following content into an engaging Twitter post (tweet). Follow these requirements:

REQUIREMENTS:
- Maximum 280 characters (STRICT LIMIT)
- Make it engaging and attention-grabbing
- Include 2-3 relevant hashtags
- Use a conversational tone
- Add an engaging hook or question if appropriate
- Ensure it's complete and makes sense on its own

ORIGINAL CONTENT:
${content}

INSTRUCTIONS:
- Return ONLY the tweet text, nothing else
- Count characters carefully to stay under 280
- Make it shareable and engaging
- Focus on the key message or insight
`;

    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const tweetContent = response.text().trim();

    return {
      content: tweetContent,
      characterCount: tweetContent.length,
      characterLimit: this.platforms.twitter.characterLimit
    };
  }

  // LinkedIn transformation using Gemini AI
  async transformForLinkedIn(content) {
    const prompt = `
Transform the following content into a professional LinkedIn post. Follow these requirements:

REQUIREMENTS:
- Maximum 1300 characters (STRICT LIMIT)
- Professional and business-appropriate tone
- Include a call-to-action or question to encourage engagement
- Use proper formatting with line breaks for readability
- Add 3-5 relevant professional hashtags
- Make it valuable for a professional network

ORIGINAL CONTENT:
${content}

INSTRUCTIONS:
- Return ONLY the LinkedIn post text, nothing else
- Count characters carefully to stay under 1300
- Use professional language
- Include insights or takeaways
- End with an engaging question or call-to-action
- Use line breaks for better readability
`;

    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const linkedinContent = response.text().trim();

    return {
      content: linkedinContent,
      characterCount: linkedinContent.length,
      characterLimit: this.platforms.linkedin.characterLimit
    };
  }

  // Instagram transformation using Gemini AI
  async transformForInstagram(content) {
    const prompt = `
Transform the following content into an engaging Instagram caption. Follow these requirements:

REQUIREMENTS:
- Maximum 2200 characters (STRICT LIMIT)
- Visual and engaging storytelling style
- Include relevant emojis throughout the text
- Use line breaks for better readability
- Add 5-8 relevant hashtags
- Make it Instagram-friendly and shareable
- Focus on visual storytelling

ORIGINAL CONTENT:
${content}

INSTRUCTIONS:
- Return ONLY the Instagram caption text, nothing else
- Count characters carefully to stay under 2200
- Use emojis strategically to enhance the message
- Include storytelling elements
- Use line breaks to make it easy to read
- Make it engaging and shareable
- Include relevant hashtags at the end
`;

    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const instagramContent = response.text().trim();

    return {
      content: instagramContent,
      characterCount: instagramContent.length,
      characterLimit: this.platforms.instagram.characterLimit
    };
  }

  // Get platform specifications
  getPlatformSpecs() {
    return this.platforms;
  }
}

module.exports = ContentProcessor; 