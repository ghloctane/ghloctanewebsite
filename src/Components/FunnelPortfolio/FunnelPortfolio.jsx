import React from "react";
import { funnelPortfolio } from "../../Data/FunnelPortfolioData";
import FunnelPortfolioCard from "../Card/FunnelPortfolioCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function FunnelPortfolioSection() {
    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <div className="d-flex flex-column justify-content-center text-center gspace-2">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">    
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Portfolio</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <h2 className="title-heading heading-container heading-container-medium">
                                FUNNEL PORTFOLIO
                            </h2>
                        </AnimateOnScroll>
                    </div>
                    <div className="card-funnel-portfolio-wrapper">
                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                            {funnelPortfolio.map((item) => (
                                <div className="col" key={item.id}>
                                    <FunnelPortfolioCard 
                                        title={item.title}
                                        image={item.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunnelPortfolioSection;


