import React, { cloneElement, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimateOnScroll = ({
    children,
    animation = 'fadeInUp',
    delay = 0,
    speed = 'normal',
    threshold = 0.15,
}) => {
    // ✅ FIX: Proper mobile detection with useMemo
    const isMobile = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth <= 767;
    }, []);

    // ✅ FIX: Proper threshold & rootMargin
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: isMobile ? 0.05 : 0.15, // Mobile: 5% visible, Desktop: 15% visible
        rootMargin: isMobile ? '100px' : '50px', // Mobile: larger margin for earlier trigger
    });

    const speedClass = {
        normal: '',
        fast: 'animate__fast',
        slow: 'animate__slow',
    }[speed];

    const child = React.Children.only(children);

    // MOBILE: NO ANIMATIONS
    if (isMobile) {
        return cloneElement(child, {
            ref,
            className: child.props.className || '',
        });
    }

    // DESKTOP: Smooth animations
    return cloneElement(child, {
        ref,
        className: `${child.props.className || ''} ${
            inView ? `animate__animated animate__${animation} ${speedClass}` : ''
        }`.trim(),
        style: {
            ...child.props.style,
            animationDelay: inView ? `${delay}ms` : '0ms',
        },
    });
};

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;