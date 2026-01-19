import React, { memo } from "react";
import Image from "next/image";
import AnimatedButton from "../Button/AnimatedButton";

const ServiceCard = memo(({icon, title, content, link, speed = ""}) => {
    // Check if icon is a FontAwesome class or image path
    const isFontAwesome = icon && icon.startsWith('fa-');
    
    return(
        <div className="card card-service">
            <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                <div>
                    <div className="service-icon-wrapper">
                        <div className="service-icon">
                            {isFontAwesome ? (
                                <i className={icon}></i>
                            ) : (
                                <Image src={icon} alt="Service Icon" className="img-fluid" width={60} height={60} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="service-title">
                    <h4>{title}</h4>
                </div>
            </div>
            <p>{content}</p>
            <AnimatedButton href={link}>
                Learn More
            </AnimatedButton>
        </div>
    );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;