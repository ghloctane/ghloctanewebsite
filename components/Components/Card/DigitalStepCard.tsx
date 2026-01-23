import React, { memo } from "react";

const DigitalStepCard = memo(({ icon, step, title, content, color, index, isOdd }) => {
    return (
        <div className={`phase-container ${isOdd ? 'phase-above' : 'phase-below'}`} style={{ '--phase-color': color }}>
            {/* Text Box - positioned above or below based on index */}
            {isOdd && (
                <div className="phase-text-box">
                    <div className="phase-icon-container">
                        <img src={icon} alt={title} className="phase-icon" loading="lazy" />
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
                            <img src={icon} alt={title} className="phase-icon" loading="lazy" />
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
