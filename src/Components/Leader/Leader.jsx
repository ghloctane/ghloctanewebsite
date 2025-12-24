import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import BackgroundPaths from "../BackgroundPaths/BackgroundPaths";

const LeaderSection = () => {
    return (
        <>
            <div className="section section-leader">
                <BackgroundPaths />
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="sub-heading align-self-center">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Leaders</span>
                                </div>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <h2 className="title-heading heading-container heading-container-medium">
                                    MEET THE VISIONARIES BEHIND GHL OCTANE
                                </h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <p style={{maxWidth: '700px', margin: '0 auto'}}>
                                    Our leadership team brings years of experience in GoHighLevel automation and digital marketing to help your business thrive.
                                </p>
                            </AnimateOnScroll>
                        </div>

                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-4 justify-content-center">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="leader-image">
                                            <img 
                                                src="/assets/images/zeeshan haider.png" 
                                                alt="Zeeshan Haider" 
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="leader-text">
                                            <h4>Zeeshan Haider</h4>
                                            <span className="leader-title">Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="leader-image">
                                            <img 
                                                src="/assets/images/hammad raza .png" 
                                                alt="Hammad Raza" 
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="leader-text">
                                            <h4>Hammad Raza</h4>
                                            <span className="leader-title">CEO and Co-Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-vision">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="chooseus-content-container">
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
                                            Our vision is to become the leading GoHighLevel implementation partner, helping thousands of agencies and businesses automate their operations and scale their growth.
                                        </p>
                                        <p>
                                            We're committed to making GoHighLevel accessible, understandable, and profitable for businesses of all sizes.
                                        </p>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="chooseus-card-container">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="image-container">
                                    <img 
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=2400&h=1600&fit=crop&q=80" 
                                        alt="Our Vision" 
                                        className="chooseus-img" 
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeaderSection;

