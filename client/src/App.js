import React, { useState, useEffect } from 'react';
import ContentInput from './components/ContentInput';
import ResultsGrid from './components/ResultsGrid';
import apiService from './services/api';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Manual content transformation (no more auto-debouncing)
  const transformContent = async () => {
    if (!content || content.trim().length === 0) {
      setError('Please enter some content to transform');
      return;
    }

    if (content.length > 50000) {
      setError('Content is too long. Please limit to 50,000 characters.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await apiService.transformContent(content);
      
      if (response.success) {
        setResults(response.results);
        setError('');
      } else {
        setError(response.error || 'Failed to transform content');
        setResults(null);
      }
    } catch (err) {
      console.error('Transformation error:', err);
      setError(err.error || 'Unable to connect to server. Please check your connection.');
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle content change (no auto-transformation)
  const handleContentChange = (newContent) => {
    setContent(newContent);
    // Clear previous results and errors when content changes
    if (results) {
      setResults(null);
    }
    if (error) {
      setError('');
    }
  };

  // Health check on app load
  useEffect(() => {
    const checkHealth = async () => {
      try {
        await apiService.healthCheck();
        console.log('✅ API connection established');
      } catch (err) {
        console.warn('⚠️ API health check failed:', err);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>Content Repurposing Tool</h1>
          <p className="tagline">"Paste once, get content for 3 platforms instantly"</p>
          <p className="ai-badge">🤖 Powered by Google Gemini AI</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <ContentInput
            content={content}
            onChange={handleContentChange}
            isLoading={isLoading}
            characterCount={content.length}
          />

          <div className="transform-section">
            <button
              className={`transform-button ${isLoading ? 'loading' : ''}`}
              onClick={transformContent}
              disabled={isLoading || !content.trim()}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner">🤖</span>
                  AI is transforming your content...
                </>
              ) : (
                <>
                  <span>✨</span>
                  Transform with AI
                </>
              )}
            </button>
            
            {content.trim() && !isLoading && (
              <p className="transform-hint">
                Click to transform your content for Twitter, LinkedIn, and Instagram using AI
              </p>
            )}
          </div>

          <ResultsGrid
            results={results}
            isLoading={isLoading}
            error={error}
            hasContent={content.trim().length > 0}
          />
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>Transform your content for Twitter 🐦, LinkedIn 💼, and Instagram 📸</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
