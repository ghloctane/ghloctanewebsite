import React, { useState, useEffect } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const DigitalStepCard = ({ icon, step, title, content, isFirst, color, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, index * 200); // Stagger animation: 200ms delay per card

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            <div className="digital-process-card" style={{ animationDelay: `${index * 0.2}s` }}>
                {!isFirst && (
                    <div 
                        className="step-arrow-container" 
                        style={{ 
                            '--arrow-delay': index * 0.2,
                            '--step-color': color
                        }}
                    >
                        <div className="step-arrow-line" style={{ '--step-color': color }}></div>
                        <div className="step-arrow-icon" style={{ '--step-color': color }}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                )}
                <div 
                    className={`digital-process-step ${isVisible ? 'step-visible' : ''}`}
                    style={{ 
                        '--step-color': color,
                        animationDelay: `${index * 0.2}s`
                    }}
                >
                    <div className="d-flex justify-content-between align-items-start">
                        <div className="process-icon-wrapper">
                            <img src={icon} alt="Digital Process Icon" className="process-icon" />
                        </div>
                        <span className="step-number">{step}</span>
                    </div>
                    <div className="d-flex flex-column gspace-2">
                        <h5>{title}</h5>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    );
  };

export default DigitalStepCard;
