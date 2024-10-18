import React, { useState, useEffect } from 'react';

export default function RedirectPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000); // Show popup after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>New Portfolio is Live. </h2>
        <p>Please check out my up to date recent Portfolio that showcases my true skills</p>
        <a href="https://cravinos.dev" className="popup-link" target="_blank" rel="noopener noreferrer">
          cravinos.dev
        </a>
        
      </div>
    </div>
  );
}