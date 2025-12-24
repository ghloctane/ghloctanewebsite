import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const FeaturedProjectSection = () => {
    return (
        <div className="section section-featured">
            <div className="hero-container">
                <div className="case-studies-layout">
                    <div className="card card-case-studies">
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                            <div className="col">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="d-flex flex-column gspace-2">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>Featured Project</span>
                                        </div>
                                        <h2 className="title-heading">OCTENDR</h2>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                            <div className="col">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="d-flex flex-column h-100 justify-content-end gspace-2">
                                        <p>A complete GoHighLevel implementation showcasing our expertise in automation, CRM setup, and scalable business systems.</p>
                                        <div className="link-wrapper">
                                            <a href="https://octendr.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
                                            <i className="fa-solid fa-circle-arrow-right"></i>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>

                        <div className="d-flex flex-column gspace-2">
                            <div className="d-flex flex-column flex-lg-row gspace-2">
                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card case-studies-content featured-project-card" style={{backgroundImage: 'url(/assets/images/octendr.png)', width: '100%'}}>
                                        <div className="case-studies-component large align-self-end justify-content-end align-items-end">
                                            <div className="cs-component">
                                                <a href="./contact">GHL Setup</a>
                                            </div>
                                            <div className="cs-component">
                                                <a href="./contact">Automation</a>
                                            </div>
                                            <div className="cs-component">
                                                <a href="./contact">CRM</a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gspace-2">
                                            <a href="https://octendr.com" target="_blank" rel="noopener noreferrer" className="case-studies-title">
                                                <h4>Complete GoHighLevel Implementation</h4>
                                            </a>
                                            <p>Enterprise-level automation, CRM setup, and scalable business systems that drive real results.</p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjectSection;

