import React from "react";
import dynamic from "next/dynamic";
import AnimatedButton from "../Button/AnimatedButton";

const FloatingLines = dynamic(() => import("./FloatingLines"), { ssr: false });

const CTASection = () => {
    return (
        <div className="section section-cta">
            <div className="hero-container">
                <div className="cta-container">
                    <div className="cta-floating-lines-wrapper">
                        <FloatingLines
                            linesGradient={['#1e7acc', '#1e7acc', '#1e7acc', '#1e7acc', '#15a83e']}
                        />
                    </div>
                    <div className="cta-content">
                        <div className="d-flex flex-column gspace-3 text-center">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Ready to Transform Your Business?</span>
                            </div>
                            <h2 className="title-heading">LET'S BUILD SOMETHING AMAZING TOGETHER</h2>
                            <p className="cta-description">
                                Get started with GHL Octane today and unlock the power of automation.
                                Book your free strategy call and see how we can help scale your business.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <AnimatedButton href="/book-a-call">
                                    Book Free Strategy Call
                                </AnimatedButton>
                                <AnimatedButton href="/service">
                                    View Our Services
                                </AnimatedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
