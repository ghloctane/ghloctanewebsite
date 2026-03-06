import React, { memo } from "react";
import Image from "next/image";

export interface DigitalStepCardProps {
    icon: string;
    step: number | string;
    title: string;
    content: string;
    color: string;
    index: number;
    isOdd: boolean;
}

const DigitalStepCard = memo(({ icon, step, title, content, color, index, isOdd }: DigitalStepCardProps) => {
    return (
        <div className={`phase-container ${isOdd ? 'phase-above' : 'phase-below'}`} style={{ '--phase-color': color } as React.CSSProperties}>
            {/* Text Box - positioned above or below based on index */}
            {isOdd && (
                <div className="phase-text-box">
                    <div className="phase-icon-container">
                        <Image src={icon} alt={title} width={48} height={48} quality={85} className="phase-icon" />
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
                            <Image src={icon} alt={title} width={48} height={48} quality={85} className="phase-icon" />
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
