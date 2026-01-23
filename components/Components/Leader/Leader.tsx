import React from "react";
import Image from "next/image";

const LeaderSection = () => {
    return (
        <>
            <div className="section section-leader">
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Leaders</span>
                            </div>
                            <h2 className="title-heading heading-container heading-container-medium">
                                MEET THE VISIONARIES BEHIND GHL OCTANE
                            </h2>
                            <p style={{maxWidth: '700px', margin: '0 auto'}}>
                                Our leadership team brings years of experience in GoHighLevel automation and digital marketing to help your business thrive.
                            </p>
                        </div>

                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-2 justify-content-center">
                            <div className="col">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="leader-image">
                                        <Image 
                                            src="/assets/images/zeeshan haider.webp" 
                                            alt="Zeeshan Haider - Founder" 
                                            className="img-fluid"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="leader-text">
                                        <h4>Zeeshan Haider</h4>
                                        <span className="leader-title">Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="leader-image">
                                        <Image 
                                            src="/assets/images/hammad raza .webp" 
                                            alt="Hammad Raza - CEO and Co-Founder" 
                                            className="img-fluid"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="leader-text">
                                        <h4>Hammad Raza</h4>
                                        <span className="leader-title">CEO and Co-Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-vision">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="chooseus-content-container">
                            <div className="d-flex flex-column gspace-2">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Vision</span>
                                </div>
                                <h2 className="title-heading">Empowering Businesses Through Smart Automation</h2>
                                <div>
                                    <p>
                                        Our vision is to become the leading GoHighLevel implementation partner, helping thousands of agencies and businesses automate their operations and scale their growth.
                                    </p>
                                    <p>
                                        We're committed to making GoHighLevel accessible, understandable, and profitable for businesses of all sizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="chooseus-card-container">
                            <div className="image-container">
                                <Image 
                                    src="/assets/images/our vision.webp" 
                                    alt="GHL Octane Vision" 
                                    className="chooseus-img"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeaderSection;

