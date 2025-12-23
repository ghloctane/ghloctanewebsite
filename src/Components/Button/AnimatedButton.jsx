import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ children, href, onClick, type = 'button', className = '' }) => {
  const buttonContent = (
    <button 
      className={`animated-button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} className="animated-button-link">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default AnimatedButton;

