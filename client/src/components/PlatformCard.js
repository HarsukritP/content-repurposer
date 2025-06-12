import React, { useState } from 'react';
import { copyToClipboard, formatCopyMessage } from '../utils/clipboard';
import './PlatformCard.css';

const PlatformCard = ({ 
  platform, 
  content, 
  characterCount, 
  characterLimit, 
  isLoading, 
  error 
}) => {
  const [copyStatus, setCopyStatus] = useState('');
  const [isCopying, setIsCopying] = useState(false);

  const platformConfig = {
    twitter: {
      name: 'Twitter',
      icon: '🐦',
      buttonText: 'Copy Tweet'
    },
    linkedin: {
      name: 'LinkedIn',
      icon: '💼',
      buttonText: 'Copy Post'
    },
    instagram: {
      name: 'Instagram',
      icon: '📸',
      buttonText: 'Copy Post'
    }
  };

  const config = platformConfig[platform] || {
    name: platform,
    icon: '📝',
    buttonText: 'Copy Content'
  };

  const getCharacterLimitStatus = () => {
    if (!characterCount || !characterLimit) return 'unknown';
    
    const percentage = (characterCount / characterLimit) * 100;
    
    if (percentage > 100) return 'over';
    if (percentage > 90) return 'near';
    return 'under';
  };

  const getStatusIcon = () => {
    const status = getCharacterLimitStatus();
    switch (status) {
      case 'over': return '❌';
      case 'near': return '⚠️';
      case 'under': return '✅';
      default: return '';
    }
  };

  const handleCopy = async () => {
    if (!content || isCopying) return;

    setIsCopying(true);
    const result = await copyToClipboard(content);
    
    if (result.success) {
      const message = formatCopyMessage(platform, characterCount);
      setCopyStatus(message);
      
      // Clear success message after 2 seconds
      setTimeout(() => {
        setCopyStatus('');
      }, 2000);
    } else {
      setCopyStatus(result.error);
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        setCopyStatus('');
      }, 3000);
    }
    
    setIsCopying(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="platform-loading">
          <span className="loading-spinner">⚡</span>
          <span>Processing...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="platform-error">
          <span>⚠️ Error processing content</span>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="platform-empty">
          <span>Ready to transform your content!</span>
        </div>
      );
    }

    return (
      <div className="platform-content">
        {content}
      </div>
    );
  };

  return (
    <div className={`platform-card ${platform}`}>
      <div className="platform-header">
        <span className="platform-icon">{config.icon}</span>
        <span className="platform-name">{config.name}</span>
      </div>

      <div className="platform-body">
        {renderContent()}
      </div>

      <div className="platform-footer">
        {characterCount !== undefined && characterLimit && (
          <div className="character-info">
            <span className={`character-count ${getCharacterLimitStatus()}`}>
              {characterCount}/{characterLimit}
            </span>
            <span className="status-icon">{getStatusIcon()}</span>
            <span className="status-text">
              {getCharacterLimitStatus() === 'over' ? 'Over limit' :
               getCharacterLimitStatus() === 'near' ? 'Near limit' : 'Under limit'}
            </span>
          </div>
        )}

        <button
          className={`copy-button ${copyStatus ? 'copied' : ''}`}
          onClick={handleCopy}
          disabled={!content || isCopying || isLoading}
        >
          {isCopying ? (
            <>
              <span className="loading-spinner">⚡</span>
              Copying...
            </>
          ) : copyStatus && copyStatus.includes('copied') ? (
            <>
              <span>✅</span>
              Copied!
            </>
          ) : (
            <>
              <span>📋</span>
              {config.buttonText}
            </>
          )}
        </button>

        {copyStatus && !copyStatus.includes('copied') && (
          <div className="copy-error">
            {copyStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformCard; 