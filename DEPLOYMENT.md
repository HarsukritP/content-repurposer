# Deployment Guide

## 🚀 Railway Deployment

### Prerequisites
- Railway account ([railway.app](https://railway.app))
- Google Gemini API Key

### Steps

1. **Connect Repository**
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your `content-repurposer` repository

2. **Set Environment Variables**
   - In Railway project settings, go to "Variables"
   - Add: `GEMINI_API_KEY=your_gemini_api_key_here`
   - Add: `NODE_ENV=production`
   - Add: `PORT=3001` (optional, Railway auto-assigns)

3. **Deploy**
   - Railway will automatically build and deploy
   - Build process: `npm run railway-build`
   - Start command: `npm start`

4. **Access Your App**
   - Railway will provide a public URL
   - Your app will be live at: `https://your-app-name.railway.app`

### Build Process
```bash
# Railway automatically runs:
npm run install-server  # Install backend dependencies
npm run install-client  # Install frontend dependencies  
npm run build           # Build React app
npm start              # Start production server
```

## 🌐 Other Deployment Options

### Heroku
```bash
# Add environment variables
heroku config:set GEMINI_API_KEY=your_key_here
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Vercel (Frontend) + Railway (Backend)
- Deploy client to Vercel
- Deploy server to Railway
- Update client's API URL to Railway backend URL

### Render
- Similar to Railway
- Set build command: `npm run railway-build`
- Set start command: `npm start`
- Add environment variables in dashboard

## 🔧 Environment Variables Required

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API Key | ✅ Yes |
| `NODE_ENV` | Set to `production` | ✅ Yes |
| `PORT` | Server port (auto-assigned by most platforms) | ❌ Optional |

## 🐛 Troubleshooting

### Build Fails
- Check if all dependencies are in package.json
- Ensure Node.js version compatibility (>=14.0.0)

### API Errors
- Verify GEMINI_API_KEY is set correctly
- Check API key has proper permissions

### Frontend Not Loading
- Ensure build process completed successfully
- Check if static files are being served correctly

## 📝 Notes

- The app serves both frontend and backend from a single Railway service
- React build files are served statically in production
- API routes are available at `/api/*`
- Health check available at `/health` 