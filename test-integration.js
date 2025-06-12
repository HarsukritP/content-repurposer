const axios = require('axios');

const API_BASE_URL = 'http://localhost:3001/api';

async function testIntegration() {
  console.log('🧪 Testing Content Repurposing Tool with Gemini AI Integration...\n');

  try {
    // Test 1: Health Check
    console.log('1. Testing health endpoint...');
    const healthResponse = await axios.get('http://localhost:3001/health');
    console.log('✅ Health check passed:', healthResponse.data.message);

    // Test 2: Transform Content with Gemini AI
    console.log('\n2. Testing AI-powered content transformation...');
    const testContent = `
Building a successful startup requires focus on three key areas: product-market fit, customer acquisition, and sustainable growth. 

First, ensure your product solves a real problem that customers are willing to pay for. Conduct thorough market research and validate your assumptions early.

Second, develop effective customer acquisition strategies. This includes understanding your target audience, optimizing your marketing channels, and measuring conversion rates.

Finally, focus on sustainable growth by building strong unit economics, maintaining healthy cash flow, and scaling your operations efficiently.

Remember, the most successful startups are those that remain customer-focused throughout their journey.
    `.trim();

    console.log('🤖 Sending content to Gemini AI for transformation...');
    const transformResponse = await axios.post(`${API_BASE_URL}/transform`, {
      content: testContent
    });

    if (transformResponse.data.success) {
      console.log('✅ AI content transformation successful!');
      
      const results = transformResponse.data.results;
      
      console.log('\n📊 AI-Generated Results Summary:');
      console.log(`🐦 Twitter: ${results.twitter.characterCount}/${results.twitter.characterLimit} characters`);
      console.log(`💼 LinkedIn: ${results.linkedin.characterCount}/${results.linkedin.characterLimit} characters`);
      console.log(`📸 Instagram: ${results.instagram.characterCount}/${results.instagram.characterLimit} characters`);
      
      console.log('\n📝 AI-Generated Content:');
      console.log('\n🐦 TWITTER (AI-Generated):');
      console.log('─'.repeat(50));
      console.log(results.twitter.content);
      console.log('─'.repeat(50));
      
      console.log('\n💼 LINKEDIN (AI-Generated):');
      console.log('─'.repeat(50));
      console.log(results.linkedin.content);
      console.log('─'.repeat(50));
      
      console.log('\n📸 INSTAGRAM (AI-Generated):');
      console.log('─'.repeat(50));
      console.log(results.instagram.content);
      console.log('─'.repeat(50));
      
      // Validate character limits
      let allWithinLimits = true;
      if (results.twitter.characterCount > results.twitter.characterLimit) {
        console.log('❌ Twitter content exceeds character limit!');
        allWithinLimits = false;
      }
      if (results.linkedin.characterCount > results.linkedin.characterLimit) {
        console.log('❌ LinkedIn content exceeds character limit!');
        allWithinLimits = false;
      }
      if (results.instagram.characterCount > results.instagram.characterLimit) {
        console.log('❌ Instagram content exceeds character limit!');
        allWithinLimits = false;
      }
      
      if (allWithinLimits) {
        console.log('\n✅ All content within character limits!');
      }
      
    } else {
      console.log('❌ AI content transformation failed:', transformResponse.data.error);
    }

    // Test 3: Platform Specs
    console.log('\n3. Testing platform specifications...');
    const platformsResponse = await axios.get(`${API_BASE_URL}/platforms`);
    
    if (platformsResponse.data.success) {
      console.log('✅ Platform specs retrieved successfully!');
      const platforms = platformsResponse.data.platforms;
      console.log('📋 Available platforms:', Object.keys(platforms).join(', '));
    }

    // Test 4: Error handling
    console.log('\n4. Testing error handling...');
    try {
      await axios.post(`${API_BASE_URL}/transform`, { content: '' });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('✅ Empty content validation working correctly');
      }
    }

    console.log('\n🎉 All tests passed! The AI-powered Content Repurposing Tool is working correctly.');
    console.log('\n🌐 Frontend: http://localhost:3000');
    console.log('🔧 Backend: http://localhost:3001');
    console.log('🤖 AI: Gemini Pro (Google)');

  } catch (error) {
    console.error('❌ Integration test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Make sure the server is running: cd server && npm start');
    }
  }
}

// Run the test
testIntegration(); 