import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';
import { FaArrowUp } from 'react-icons/fa6';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Scroll to top on route change and initial page load
    useEffect(() => {
        // Immediate scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
        
        // Also ensure scroll position is at top after a brief delay (for mobile)
        const timer = setTimeout(() => {
            if (window.scrollY > 0) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant'
                });
            }
        }, 50);
        
        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button 
                    className="scroll-to-top" 
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    );
}

export default ScrollToTop;

