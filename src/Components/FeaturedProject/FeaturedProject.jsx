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
                                        <p>Octendr seamlessly connects WhatsApp with GoHighLevel, enabling agencies and businesses to streamline their messaging workflows with low cost global messaging and reduce messaging costs by up to 90%. With unlimited messages, 5-minute setup, powerful triggers, enterprise-grade security, and real-time synchronization between WhatsApp and GoHighLevel, Octendr transforms how businesses communicate and engage with their customers worldwide.</p>
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
                                    <div className="card case-studies-content featured-project-card" style={{
                                        backgroundImage: 'url(/assets/images/octendr.webp)', 
                                        width: '100%',
                                        willChange: 'scroll-position',
                                        transform: 'translateZ(0)',
                                        WebkitTransform: 'translateZ(0)'
                                    }}>
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

