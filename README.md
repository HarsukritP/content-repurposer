# Content Repurposing Tool

**"Paste once, get content for 3 platforms instantly"**

A MERN stack application powered by **Google Gemini AI** that transforms long-form content into platform-specific versions for Twitter, LinkedIn, and Instagram. Features **manual transformation** to save AI credits - no database required! ✨

## 🚀 Features

- **🤖 AI-Powered Transformation** - Uses Google Gemini Pro for intelligent content repurposing
- **💰 Credit-Saving Design** - Manual "Transform with AI" button prevents unnecessary API calls
- **📝 Smart Content Input** - Large, user-friendly textarea with real-time character counting
- **🐦 Twitter Optimization** - Concise, engaging tweets with hashtags (280 characters)
- **💼 LinkedIn Posts** - Professional summaries with call-to-action (1,300 characters)
- **📸 Instagram Captions** - Visual storytelling with emojis and hashtags (2,200 characters)
- **📋 One-Click Copy** - Copy transformed content to clipboard instantly
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **⚡ On-Demand Processing** - Transform content only when you click the button
- **🎨 Modern UI** - Beautiful, intuitive interface with platform-specific styling

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface
- **CSS3** - Modern styling with responsive design
- **Axios** - API communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google Gemini AI** - AI-powered content transformation
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request parsing
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
project-3/
├── client/                 # React frontend
│   ├── public/
│   │   ├── src/
│   │   │   ├── components/     # React components
│   │   │   │   ├── ContentInput.js
│   │   │   │   ├── ContentInput.css
│   │   │   │   ├── PlatformCard.js
│   │   │   │   ├── PlatformCard.css
│   │   │   │   ├── ResultsGrid.js
│   │   │   │   └── ResultsGrid.css
│   │   │   ├── services/       # API services
│   │   │   │   └── api.js
│   │   │   ├── utils/          # Utility functions
│   │   │   │   └── clipboard.js
│   │   │   ├── App.js
│   │   │   ├── App.css
│   │   │   └── index.js
│   │   └── package.json
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   │   └── transform.js
│   ├── services/           # Business logic
│   │   └── contentProcessor.js
│   ├── server.js           # Main server file
│   └── package.json
├── design.md              # ASCII visual design
├── mvp.md                 # MVP specifications
├── projectscope.md        # Full project scope
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- **Google Gemini API Key** (required for AI functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd project-3
   ```

2. **Set up environment variables**
   
   **Server Environment** - Create `server/.env`:
   ```bash
   cd server
   cp .env.example .env
   # Edit server/.env and add your API key:
   # GEMINI_API_KEY=your_gemini_api_key_here
   # PORT=3001
   # NODE_ENV=development
   ```
   
   **Client Environment** - Create `client/.env`:
   ```bash
   cd ../client
   cp .env.example .env
   # Edit client/.env for API URL (default should work for local development):
   # REACT_APP_API_URL=http://localhost:3001
   # REACT_APP_API_BASE_URL=http://localhost:3001/api
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The API will be running on `http://localhost:3001`

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm start
   ```
   The React app will be running on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to use the application!

## 🎯 How to Use

1. **Paste Your Content** - Copy any long-form content (blog post, article, video script) into the large text area
2. **Click Transform** - Hit the "Transform with AI" button to send your content to Gemini AI
3. **Review AI Results** - Check the AI-generated content for Twitter, LinkedIn, and Instagram
4. **Copy & Share** - Click the copy button for any platform to copy the content to your clipboard
5. **Paste Anywhere** - Use the AI-optimized content directly on your social media platforms

**💡 Pro Tip**: The manual transformation design saves your Gemini AI credits by only making API calls when you explicitly request them!

## 🔧 API Endpoints

### POST `/api/transform`
Transform content for all platforms
```json
{
  "content": "Your long-form content here..."
}
```

**Response:**
```json
{
  "success": true,
  "results": {
    "twitter": {
      "content": "Transformed tweet content #hashtags",
      "characterCount": 245,
      "characterLimit": 280
    },
    "linkedin": {
      "content": "Professional LinkedIn post...",
      "characterCount": 890,
      "characterLimit": 1300
    },
    "instagram": {
      "content": "✨ Instagram caption with emojis...",
      "characterCount": 1156,
      "characterLimit": 2200
    }
  }
}
```

### GET `/api/platforms`
Get platform specifications
```json
{
  "success": true,
  "platforms": {
    "twitter": {
      "characterLimit": 280,
      "name": "Twitter",
      "icon": "🐦"
    },
    // ... other platforms
  }
}
```

### GET `/health`
Health check endpoint
```json
{
  "status": "OK",
  "message": "Content Repurposing Tool API is running"
}
```

## 🎨 Content Transformation Rules

### Twitter (280 characters)
- Extracts key sentences from original content
- Adds engaging hooks ("Here's the key insight:", "Quick takeaway:")
- Includes relevant hashtags
- Ensures content stays under character limit

### LinkedIn (1,300 characters)
- Creates professional opening statements
- Maintains business-appropriate tone
- Adds call-to-action questions
- Includes industry-relevant hashtags

### Instagram (2,200 characters)
- Adds visual storytelling elements
- Includes emojis for engagement
- Uses line breaks for readability
- Incorporates multiple relevant hashtags

## 🤖 AI Content Transformation

### Google Gemini Pro Integration
The application uses Google's Gemini Pro model to intelligently transform content:

- **Context-Aware**: Understands the content's meaning and context
- **Platform-Optimized**: Tailors content specifically for each platform's audience and format
- **Character Limit Compliance**: Ensures all content stays within platform limits
- **Engagement-Focused**: Creates content designed to maximize engagement

### Transformation Rules

#### Twitter (280 characters)
- Creates engaging, shareable tweets
- Includes relevant hashtags
- Uses conversational tone
- Adds hooks and questions for engagement

#### LinkedIn (1,300 characters)
- Professional and business-appropriate tone
- Includes insights and takeaways
- Adds call-to-action questions
- Uses proper formatting with line breaks

#### Instagram (2,200 characters)
- Visual storytelling approach
- Strategic emoji placement
- Engaging captions with personality
- Multiple relevant hashtags

## 🔧 Configuration

### Environment Variables

The application uses separate environment files for frontend and backend:

**Server Environment (`server/.env`):**
```bash
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
NODE_ENV=development
```

**Client Environment (`client/.env`):**
```bash
REACT_APP_API_URL=http://localhost:3001
REACT_APP_API_BASE_URL=http://localhost:3001/api
```

### Getting a Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `server/.env` file

### Server Configuration
The server runs on port 3001 by default. You can change this by setting the `PORT` environment variable in `server/.env`:
```bash
PORT=8000
```

### Client Configuration
For production deployment, update the client environment variables to point to your deployed API:
```bash
REACT_APP_API_URL=https://your-api-domain.com
REACT_APP_API_BASE_URL=https://your-api-domain.com/api
```

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop** (1200px+) - 3-column grid layout
- **Tablet** (768px-1199px) - 2-column grid layout
- **Mobile** (<768px) - Single column layout

## 🚀 Deployment

### Environment Variables for Production

**Server Environment Variables:**
- `GEMINI_API_KEY` - Your Google Gemini API key
- `PORT` - Server port (optional, defaults to 3001)
- `NODE_ENV` - Set to `production`

**Client Environment Variables:**
- `REACT_APP_API_URL` - Your deployed API base URL
- `REACT_APP_API_BASE_URL` - Your deployed API endpoints URL

### Frontend (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Set environment variables:
   ```
   REACT_APP_API_URL=https://your-api-domain.com
   REACT_APP_API_BASE_URL=https://your-api-domain.com/api
   ```

### Backend (Heroku/Railway)
1. Deploy the `server` folder
2. Set environment variables:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   NODE_ENV=production
   PORT=3001
   ```
3. Ensure all dependencies are in `package.json`

### Full-Stack Railway Deployment
For deploying both frontend and backend together on Railway:
1. Set environment variables:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   NODE_ENV=production
   ```
2. Railway will automatically build and deploy both client and server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- Add more social media platforms (Facebook, TikTok, YouTube)
- Implement advanced AI prompts for better content optimization
- Add content scheduling features
- Include analytics and performance tracking
- Support for image and video content
- Custom AI model fine-tuning for specific industries

---

**Built with ❤️ using the MERN stack and Google Gemini AI**

Transform your content once, share everywhere with AI! 🚀 