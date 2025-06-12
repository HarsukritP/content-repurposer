// Clipboard utility for copying content to clipboard
export const copyToClipboard = async (text) => {
  try {
    // Modern browsers with Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return { success: true };
    } 
    
    // Fallback for older browsers
    else {
      // Create a temporary textarea element
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      // Select and copy the text
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        return { success: true };
      } else {
        throw new Error('Copy command failed');
      }
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return { 
      success: false, 
      error: 'Failed to copy to clipboard. Please try selecting and copying manually.' 
    };
  }
};

// Check if clipboard API is available
export const isClipboardSupported = () => {
  return !!(navigator.clipboard || document.execCommand);
};

// Format content for display in copy success message
export const formatCopyMessage = (platform, characterCount) => {
  const platformNames = {
    twitter: 'Tweet',
    linkedin: 'LinkedIn post',
    instagram: 'Instagram post'
  };
  
  const platformName = platformNames[platform] || 'content';
  return `${platformName} copied! (${characterCount} characters)`;
}; 