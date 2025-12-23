import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const FunnelPortfolioCard = ({ title, image }) => {
    return (
        <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="card card-funnel-portfolio">
                <div className="funnel-portfolio-image">
                    <img 
                        src={image} 
                        alt={title}
                        className="img-fluid"
                    />
                </div>
                <div className="funnel-portfolio-content">
                    <h4>{title}</h4>
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default FunnelPortfolioCard;

