import React, { cloneElement } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimateOnScroll = ({
    children,
    animation = 'fadeInUp',
    delay = 0,
    speed = 'normal',
    threshold = 0.05, // Reduced threshold for faster trigger
}) => {
    // Check if mobile - DISABLE ALL ANIMATIONS on mobile (767px and below)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767;
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: isMobile ? 0.02 : threshold,
        rootMargin: isMobile ? '50px' : '100px',
    });

    const speedClass = {
        normal: '',
        fast: 'animate__fast',
        slow: 'animate__slow',
    }[speed];

    // Pastikan children adalah elemen React tunggal
    const child = React.Children.only(children);

    // MOBILE: NO ANIMATIONS - Just show content immediately
    if (isMobile) {
        return cloneElement(child, {
            ref,
            className: child.props.className || '',
            style: {
                ...child.props.style,
                opacity: 1, // Always visible on mobile
                animation: 'none', // Disable all animations
            },
        });
    }

    // DESKTOP: Normal animations
    return cloneElement(child, {
        ref,
        className: `${child.props.className || ''} animate__animated ${
            inView ? `animate__${animation} ${speedClass}` : ''
        }`.trim(),
        style: {
            ...child.props.style,
            opacity: inView ? undefined : 0.5,
            animationDelay: inView ? `${delay}ms` : undefined,
            transition: inView ? undefined : 'opacity 0.2s ease-out',
        },
    });
};

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;