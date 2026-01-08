import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import AnimatedButton from "../Button/AnimatedButton";

const AffiliateSection = () => {
    return (
        <div className="section section-affiliate">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <div className="d-flex flex-column justify-content-center text-center gspace-2">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Affiliate Program</span>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <h2 className="title-heading heading-container heading-container-medium">
                                EARN WITH GHL OCTANE AFFILIATE PROGRAM
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <p style={{maxWidth: '800px', margin: '0 auto'}}>
                                Join our affiliate program and earn commissions by referring clients to GHL Octane. Help businesses grow while building your own income stream.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-4">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="card affiliate-benefit-card">
                                    <div className="affiliate-icon-wrapper">
                                        <i className="fa-solid fa-dollar-sign"></i>
                                    </div>
                                    <h4>Generous Commissions</h4>
                                    <p>Earn competitive commissions on every successful referral. The more you refer, the more you earn.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow">
                                <div className="card affiliate-benefit-card">
                                    <div className="affiliate-icon-wrapper">
                                        <i className="fa-solid fa-chart-line"></i>
                                    </div>
                                    <h4>Recurring Revenue</h4>
                                    <p>Build a sustainable income stream with recurring commissions on monthly subscriptions and ongoing services.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="fast">
                                <div className="card affiliate-benefit-card">
                                    <div className="affiliate-icon-wrapper">
                                        <i className="fa-solid fa-tools"></i>
                                    </div>
                                    <h4>Marketing Resources</h4>
                                    <p>Get access to marketing materials, banners, and resources to help you promote GHL Octane effectively.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column align-items-center gspace-3" style={{marginTop: '60px'}}>
                            <h3>Ready to Start Earning?</h3>
                            <p style={{maxWidth: '600px', margin: '0 auto'}}>
                                Join our affiliate program today and start earning commissions by helping businesses succeed with GoHighLevel.
                            </p>
                            <AnimatedButton href="/contact">
                                Become an Affiliate
                            </AnimatedButton>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
};

export default AffiliateSection;

