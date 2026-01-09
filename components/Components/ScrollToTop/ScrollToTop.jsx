import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    // Scroll to top on route change and initial page load
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
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
    }, [router.pathname]);

    // Show button when page is scrolled down - Optimized with passive listener
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        let ticking = false;
        
        const toggleVisibility = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.pageYOffset > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
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

