import React from "react";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection(){

    return(
        <>
           <div className="section-expertise">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="expertise-img-layout">
                            <div className="image-container expertise-img">
                                <img
                                    src="/assets/images/expertise.webp"
                                    alt="Expertise Image"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                                <div className="expertise-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-expertise-wrapper">
                                            <div className="card card-expertise">
                                    <h4>READY TO ELEVATE YOUR DIGITAL GROWTH?</h4>
                                    <p>Data-Driven Strategies. Measurable Results.</p>
                                    <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                        <a href="./contact">Book Your Free Strategy Call</a>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                            </div>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="expertise-title">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Core Expertise</span>
                            </div>

                            <h2 className="title-heading">
                                Building Systems That Convert
                            </h2>
                            <p>
                                At GHL Octane, we don't guess — we build systems that convert.
                                From CRM setup to automation and ads, everything is optimized for growth.
                            </p>
                            <div className="d-flex flex-column flex-md-row gspace-2">
                                <div className="expertise-list">
                                    <h5>What We Do Best</h5>
                                    <ul className="check-list">
                                        <li><a href="./contact">Data-Driven Approach</a></li>
                                        <li><a href="./contact">Creative & Innovative</a></li>
                                        <li><a href="./contact">Scalable Systems</a></li>
                                        <li><a href="./contact">Transparent Reporting</a></li>
                                    </ul>
                                </div>

                                <div className="card card-expertise card-expertise-counter">
                                    <div className="d-flex flex-row gspace-2 align-items-center">
                                        <div className="d-flex flex-row align-items-center">
                                        <CounterOnScroll
                                            target={20}
                                            suffix="+"
                                            counterClassName="counter"
                                            suffixClassName="counter-detail"
                                        />
                                        </div>
                                        <h6>Certified GHL Experts</h6>
                                    </div>
                                    <p>
                                        We help you set up, optimize, and scale GHL the right way with proven systems and automation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ExpertiseSection;