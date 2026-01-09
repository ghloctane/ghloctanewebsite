import React, { memo } from "react";

const ChooseUsCard = memo(({icon, title, content, link, speed}) => {
    
    return (
        <div className="card card-chooseus">
            <div className="chooseus-icon-wrapper">
                <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                        <div className="chooseus-icon">
                            <img src={icon} alt="Why Choose Us Icon" className="img-fluid" loading="lazy" />
                        </div>
                    </div>
                <div className="chooseus-spacer below"></div>
            </div>
            <div className="chooseus-content">
                <h4 className="chooseus-title">{title}</h4>
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