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
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold,
        rootMargin: '100px', // Start animation much earlier
    });

    const speedClass = {
        normal: '',
        fast: 'animate__fast',
        slow: 'animate__slow',
    }[speed];

    // Pastikan children adalah elemen React tunggal
    const child = React.Children.only(children);

    // Optimized: Only apply opacity transition when not in view
    // Once in view, remove opacity control for better performance
    return cloneElement(child, {
        ref,
        className: `${child.props.className || ''} animate__animated ${
            inView ? `animate__${animation} ${speedClass}` : ''
        }`.trim(),
        style: {
            ...child.props.style,
            // Only control opacity if not in view yet
            opacity: inView ? undefined : 0.5, // Changed from 0 to 0.5 for better initial render
            animationDelay: inView ? `${delay}ms` : undefined,
            // Remove transition once animated for better performance
            transition: inView ? undefined : 'opacity 0.2s ease-out',
        },
    });
};

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;