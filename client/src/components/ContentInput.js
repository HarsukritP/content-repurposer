import React from 'react';
import './ContentInput.css';

const ContentInput = ({ content, onChange, characterCount }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="content-input-container">
      <div className="content-input-header">
        <h2>📝 Content Input</h2>
        <p>Paste your long-form content here, then click "Transform with AI" to repurpose it for 3 platforms!</p>
      </div>
      
      <div className="content-input-wrapper">
        <textarea
          className="content-input"
          placeholder="Paste your content here...

Whether it's a blog post, article, video script, or any written content - just paste it here and click the Transform button!

Your content will be intelligently transformed by AI for Twitter, LinkedIn, and Instagram."
          value={content}
          onChange={handleChange}
          rows={8}
        />
        
        <div className="content-input-footer">
          <div className="character-count">
            <span className={characterCount > 50000 ? 'error' : ''}>
              {characterCount.toLocaleString()} characters
            </span>
            {characterCount > 50000 && (
              <span className="error-message">
                Content is too long. Please limit to 50,000 characters.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInput; 