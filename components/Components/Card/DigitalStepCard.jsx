import React, { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";

const DigitalStepCard = memo(({ icon, step, title, content, color, index, isOdd }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, index * 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    return (
        <div 
            ref={cardRef}
            className={`phase-container ${isOdd ? 'phase-above' : 'phase-below'} ${isVisible ? 'phase-visible' : 'phase-hidden'}`} 
            style={{ '--phase-color': color }}
        >
            {/* Text Box - positioned above or below based on index */}
            {isOdd && (
                <div className="phase-text-box">
                    <div className="phase-icon-container">
                        <Image src={icon} alt={title} className="phase-icon" width={35} height={35} loading="lazy" />
                    </div>
                    <h3 className="phase-title" style={{ color: color }}>
                        <i className="fa-solid fa-diagram-project"></i> {title.toUpperCase()}
                    </h3>
                    <p className="phase-description">{content}</p>
                </div>
            )}
            
            {/* Connecting line (vertical) */}
            <div className="phase-connector-line"></div>
            
            {/* Numbered Circle */}
            <div className="phase-circle">
                <span className="phase-number">{step}</span>
            </div>
            
            {/* Connecting line to next circle (diagonal) */}
            {index < 4 && <div className="phase-diagonal-line"></div>}
            
            {/* Text Box below for even indices */}
            {!isOdd && (
                <>
                    <div className="phase-connector-line"></div>
                    <div className="phase-text-box">
                        <div className="phase-icon-container">
                            <Image src={icon} alt={title} className="phase-icon" width={35} height={35} loading="lazy" />
                        </div>
                        <h3 className="phase-title" style={{ color: color }}>
                            <i className="fa-solid fa-diagram-project"></i> {title.toUpperCase()}
                        </h3>
                        <p className="phase-description">{content}</p>
                    </div>
                </>
            )}
        </div>
    );
});

DigitalStepCard.displayName = 'DigitalStepCard';

export default DigitalStepCard;
