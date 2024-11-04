import React, { useState } from 'react';

export const ResponsiveToggle = ({ onToggle }) => {
    const [isMobile, setIsMobile] = useState(true);

    const handleToggle = () => {
      setIsMobile(!isMobile);
      onToggle(!isMobile);
    };
  
    return (
      <div className="flex justify-center mb-4">
        <button
          onClick={handleToggle}
          className={`toggle-button ${isMobile ? 'mobile' : 'desktop'}`} 
        >
          {isMobile ? (
            <span role="img" aria-label="mobile">📱</span>
          ) : (
            <span role="img" aria-label="computer">💻</span>
          )}
        </button>
      </div>
    );
};

