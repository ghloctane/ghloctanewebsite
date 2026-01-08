import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const VisionSection = () => {
    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5 align-items-center">
                    <div className="chooseus-content-container vision-content-container">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Vision</span>
                                </div>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">Empowering Businesses Through Smart Automation</h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div>
                                    <p>
                                        Our vision is to become the leading GoHighLevel implementation partner, helping thousands of agencies and businesses automate their operations and scale their growth. We envision a world where every business can leverage powerful automation tools without the complexity.
                                    </p>
                                    <p>
                                        We're committed to making GoHighLevel accessible, understandable, and profitable for businesses of all sizes. Through education, implementation, and ongoing support, we help our clients build systems that work 24/7 to grow their revenue and improve their operations.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                    <div className="chooseus-card-container vision-card-container">
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="image-container">
                                <img 
                                    src="/assets/images/our vision.webp" 
                                    alt="Our Vision" 
                                    className="chooseus-img" 
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionSection;

