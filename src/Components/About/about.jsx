import React, { Suspense, lazy } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

const BackgroundPaths = lazy(() => import("../BackgroundPaths/BackgroundPaths"));

function AboutSection({ isHomePage = false }) {

    return(
        <div className="section section-about">
            <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
                <BackgroundPaths />
            </Suspense>
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={0}>
                                <img
                                    src="/assets/images/aboutus.webp"
                                    alt={isHomePage ? "About GHL Octane" : "About Us Image"}
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </AnimateOnScroll>
                        
                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal" delay={200}>
                                            <div className="card card-about">
                                                <div className="d-flex flex-row align-items-center">
                                                    <CounterOnScroll
                                                        target={500}
                                                        suffix="+"
                                                        counterClassName="counter"
                                                        suffixClassName="counter-detail"
                                                    />
                                                </div>
                                                <h6>GHL Setups Completed Successfully</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100}>
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>About Us</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={200}>
                                <h2 className="title-heading">Who We Are & What Drives Us</h2>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={300}>
                                <p>
                                    At GHL Octane, we are certified GoHighLevel experts dedicated to helping agencies and businesses unlock the full potential of their GHL platform. We specialize in setting up, optimizing, and scaling GoHighLevel systems that drive real results.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                <p>
                                    Our team combines deep technical expertise with strategic thinking to deliver automation solutions that save time, increase revenue, and improve client satisfaction. We believe in building systems that work for you, not against you.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={500}>
                                <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                    <div className="about-list">
                                        <ul className="check-list">
                                            <li><a href="./contact">GHL CRM Setup</a></li>
                                            <li><a href="./contact">Automation Workflows</a></li>
                                            <li><a href="./contact">Funnel Design</a></li>
                                        </ul>
                                    </div>

                                    <div className="about-list">
                                        <ul className="check-list">
                                            <li><a href="./contact">Agency White-Label</a></li>
                                            <li><a href="./contact">Integration Setup</a></li>
                                            <li><a href="./contact">System Optimization</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;