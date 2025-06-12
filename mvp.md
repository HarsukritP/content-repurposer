# Content Repurposing Tool - MVP Specification

## MVP Overview

**Goal:** Build a minimal viable product that demonstrates the core value proposition - transforming one piece of content into platform-specific versions.

**MVP Tagline:** "Paste once, get content for 3 platforms instantly."

**Technology Stack:** 
- Frontend: React.js (Create React App)
- Backend: Node.js + Express.js
- No database, no authentication

## MVP Scope - What We're Building

### Core MVP Features (Must-Have)
1. **Single Input Field** - Large text area for content input
2. **Three Platform Outputs** - Twitter, LinkedIn, Instagram only
3. **Instant Transformation** - Real-time processing without page refresh
4. **Copy to Clipboard** - One-click copy for each platform
5. **Character Count Display** - Show limits for each platform

### MVP User Flow
1. User pastes/types content into input field
2. Content is automatically processed for 3 platforms
3. Results appear instantly below input
4. User clicks copy button for desired platform content
5. Done!

## MVP Technical Architecture

### Frontend (React.js - Simple)
```
src/
├── App.js                 # Main application component
├── components/
│   ├── ContentInput.js    # Input textarea component
│   ├── PlatformCard.js    # Individual platform result card
│   └── ResultsGrid.js     # Grid of platform cards
├── services/
│   └── api.js            # API calls to backend
├── utils/
│   └── clipboard.js      # Copy to clipboard utility
└── App.css              # Simple styling
```

### Backend (Node.js + Express.js - Minimal)
```
server/
├── server.js             # Main server file
├── routes/
│   └── transform.js      # Content transformation endpoint
├── services/
│   └── contentProcessor.js # Core transformation logic
└── package.json
```

## MVP Platform Specifications

### 1. Twitter
- **Character Limit:** 280 characters
- **Transformation Logic:**
  - Extract key points (2-3 main ideas)
  - Add 2-3 relevant hashtags
  - Create engaging hook/question
  - Ensure under 280 characters

### 2. LinkedIn
- **Character Limit:** 1300 characters (recommended)
- **Transformation Logic:**
  - Professional tone
  - Add industry context
  - Include call-to-action
  - Structure with line breaks

### 3. Instagram
- **Character Limit:** 2200 characters
- **Transformation Logic:**
  - Add 3-5 relevant emojis
  - Include 5-8 hashtags
  - Visual storytelling approach
  - Engaging caption style

## MVP API Design

### Single Endpoint
```
POST /api/transform
```

**Request Body:**
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
      "content": "Transformed Twitter content...",
      "characterCount": 245,
      "characterLimit": 280
    },
    "linkedin": {
      "content": "Transformed LinkedIn content...",
      "characterCount": 890,
      "characterLimit": 1300
    },
    "instagram": {
      "content": "Transformed Instagram content...",
      "characterCount": 1200,
      "characterLimit": 2200
    }
  }
}
```

## MVP Content Transformation Logic

### Simple Rule-Based Approach (No AI Initially)
1. **Content Analysis:**
   - Split content into sentences
   - Identify key phrases
   - Extract main topics

2. **Platform-Specific Rules:**
   - **Twitter:** First 2 sentences + hashtags
   - **LinkedIn:** Professional summary + call-to-action
   - **Instagram:** Engaging opening + emojis + hashtags

3. **Character Management:**
   - Truncate if over limit
   - Add "..." if content is cut
   - Preserve hashtags and mentions

## MVP User Interface

### Layout
```
┌─────────────────────────────────────┐
│           Content Input             │
│  ┌─────────────────────────────────┐│
│  │                                 ││
│  │  Paste your content here...     ││
│  │                                 ││
│  │                                 ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   Twitter   │ │  LinkedIn   │ │ Instagram   │
│ ┌─────────┐ │ │ ┌─────────┐ │ │ ┌─────────┐ │
│ │Content  │ │ │ │Content  │ │ │ │Content  │ │
│ │here...  │ │ │ │here...  │ │ │ │here...  │ │
│ └─────────┘ │ │ └─────────┘ │ │ └─────────┘ │
│ 245/280     │ │ 890/1300    │ │ 1200/2200   │
│ [Copy]      │ │ [Copy]      │ │ [Copy]      │
└─────────────┘ └─────────────┘ └─────────────┘
```

## MVP Development Plan

### Phase 1: Basic Setup (Week 1)
- [ ] Initialize React app with Create React App
- [ ] Set up Express.js server
- [ ] Create basic UI layout
- [ ] Implement content input component

### Phase 2: Core Logic (Week 1-2)
- [ ] Build content transformation service
- [ ] Implement platform-specific rules
- [ ] Create API endpoint
- [ ] Connect frontend to backend

### Phase 3: Polish (Week 2)
- [ ] Add copy-to-clipboard functionality
- [ ] Implement character counting
- [ ] Add basic styling
- [ ] Error handling and validation

## MVP Success Criteria

### Functional Requirements
- ✅ User can input content and get 3 platform versions
- ✅ Character counts are accurate
- ✅ Copy-to-clipboard works
- ✅ Responsive design works on desktop and mobile

### Performance Requirements
- ✅ Transformation happens in < 1 second
- ✅ UI is responsive and intuitive
- ✅ No crashes or errors with normal use

## MVP Limitations (Acceptable for V1)

### What We're NOT Building in MVP
- ❌ File upload functionality
- ❌ Advanced AI/NLP processing
- ❌ Content quality scoring
- ❌ Hashtag trend analysis
- ❌ Multiple content type support
- ❌ Export functionality
- ❌ User accounts or saving content
- ❌ Email newsletter transformation
- ❌ Blog summary generation

### Technical Debt We'll Accept
- Simple rule-based transformation (not AI)
- Basic styling (not polished design)
- No advanced error handling
- No performance optimization
- No testing suite initially

## MVP File Structure

```
content-repurposing-mvp/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContentInput.js
│   │   │   ├── PlatformCard.js
│   │   │   └── ResultsGrid.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   └── clipboard.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/
│   ├── routes/
│   │   └── transform.js
│   ├── services/
│   │   └── contentProcessor.js
│   ├── server.js
│   └── package.json
└── README.md
```

## MVP Dependencies

### Frontend Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "axios": "^1.0.0"
}
```

### Backend Dependencies
```json
{
  "express": "^4.18.0",
  "cors": "^2.8.5",
  "body-parser": "^1.20.0"
}
```

## Next Steps After MVP

### Version 1.1 Improvements
1. Add Email newsletter transformation
2. Implement blog summary generation
3. Improve transformation quality
4. Add file upload support

### Version 1.2 Enhancements
1. Integrate AI/NLP for better content processing
2. Add hashtag trend analysis
3. Implement content quality scoring
4. Enhanced UI/UX design

## MVP Success Metrics

### User Engagement
- User completes full flow (input → copy content)
- Time from input to copy < 30 seconds
- User returns to use tool again

### Technical Performance
- API response time < 1 second
- Zero crashes during normal use
- Works on mobile and desktop browsers

This MVP focuses on proving the core concept with minimal complexity while providing immediate value to users. Once validated, we can iterate and add the advanced features outlined in the full project scope. 