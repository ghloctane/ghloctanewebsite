import React, { memo } from "react";
import Image from "next/image";

export interface ChooseUsCardProps {
    icon: string;
    title: string;
    content: string;
    link: string;
    speed?: number;
}

const ChooseUsCard = memo(({ icon, title, content, link }: ChooseUsCardProps) => {
    
    return (
        <div className="card card-chooseus">
            <div className="chooseus-icon-wrapper">
                <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                        <div className="chooseus-icon">
                            <Image src={icon} alt="Why Choose Us Icon" className="img-fluid" width={80} height={80} />
                        </div>
                    </div>
                <div className="chooseus-spacer below"></div>
            </div>
            <div className="chooseus-content">
                <h3 className="chooseus-title">{title}</h3>
                <p>{content}</p>
                <div className="link-wrapper">
                    <a href={link}>Read More</a>
                    <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                </div>
            </div>
        </div>
      );
});

ChooseUsCard.displayName = 'ChooseUsCard';

export default ChooseUsCard;