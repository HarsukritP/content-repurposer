import React from 'react';
import PlatformCard from './PlatformCard';
import './ResultsGrid.css';

const ResultsGrid = ({ results, isLoading, error, hasContent }) => {
  const platforms = ['twitter', 'linkedin', 'instagram'];

  const renderEmptyState = () => {
    if (!hasContent) {
      return (
        <div className="empty-state">
          <div className="empty-state-content">
            <h3>🤖 Ready to transform your content with AI?</h3>
            <p>
              Paste any long-form content above, then click "Transform with AI" to see it 
              intelligently repurposed for Twitter, LinkedIn, and Instagram!
            </p>
            <div className="empty-state-features">
              <div className="feature">
                <span>🐦</span>
                <span>AI-crafted engaging tweets with hashtags</span>
              </div>
              <div className="feature">
                <span>💼</span>
                <span>Professional LinkedIn posts with insights</span>
              </div>
              <div className="feature">
                <span>📸</span>
                <span>Visual Instagram captions with emojis</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Has content but no results yet
    return (
      <div className="empty-state">
        <div className="empty-state-content">
          <h3>✨ Content ready for AI transformation!</h3>
          <p>
            Click the "Transform with AI" button above to repurpose your content 
            for all 3 social media platforms.
          </p>
          <div className="ready-indicator">
            <span>🤖</span>
            <span>AI is ready to transform your content</span>
          </div>
        </div>
      </div>
    );
  };

  const renderErrorState = () => {
    if (error && !isLoading) {
      return (
        <div className="error-state">
          <div className="error-state-content">
            <h3>⚠️ Oops! Something went wrong</h3>
            <p>{error}</p>
            <p>Please try again in a moment.</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderResults = () => {
    if (!results && !isLoading) {
      return renderEmptyState();
    }

    if (error && !isLoading) {
      return renderErrorState();
    }

    return (
      <div className="results-grid">
        {platforms.map(platform => (
          <PlatformCard
            key={platform}
            platform={platform}
            content={results?.[platform]?.content}
            characterCount={results?.[platform]?.characterCount}
            characterLimit={results?.[platform]?.characterLimit}
            isLoading={isLoading}
            error={error}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>📤 AI-Transformed Content</h2>
        {results && !error && (
          <p>Your content has been intelligently optimized by AI for each platform:</p>
        )}
        {isLoading && (
          <p>🤖 AI is analyzing and transforming your content...</p>
        )}
      </div>
      
      {renderResults()}
    </div>
  );
};

export default ResultsGrid; 