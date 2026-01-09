import React from 'react';
import Link from 'next/link';

/**
 * @param {{ children: React.ReactNode; href?: string; onClick?: () => void; type?: string; className?: string }} props
 */
const AnimatedButton = ({ children, href, onClick, type = 'button', className = '' }) => {
  // Check if href is internal (starts with /) or external
  const isInternalLink = href && href.startsWith('/');
  const isExternalLink = href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'));

  const buttonContent = (
    <button 
      className={`animated-button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  // Internal link - use Next.js Link
  if (isInternalLink) {
    return (
      <Link 
        href={href} 
        className="animated-button-link"
        onClick={() => {
          // Scroll to top on navigation
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }}
      >
        {buttonContent}
      </Link>
    );
  }

  // External link - use regular anchor
  if (isExternalLink) {
    return (
      <a 
        href={href} 
        className="animated-button-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }

  // No href - just button
  return buttonContent;
};

export default AnimatedButton;

