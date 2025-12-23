import React from "react";
import AnimatedButton from "../Button/AnimatedButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function PricingPlanSection(){
    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Pricing Plans</span>
                            </div>
                            <h2 className="title-heading heading-container heading-container-short">
                                FLEXIBLE PRICING PLANS
                            </h2>
                        </div>
                    </AnimateOnScroll>
                    <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="card card-pricing-title">
                                        <div className="spacer" />
                                        <div className="content">
                                            <h3 className="title-heading">Choose Your Plan</h3>
                                            <div className="link-wrapper">
                                            <a href="./contact">Book Your Free Strategy Call</a>
                                            <i className="fa-solid fa-arrow-circle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>Starter — $99</h4>
                                        <p>Basic GHL Setup</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>$99</h3>
                                            <p>/Month</p>
                                        </div>
                                        <AnimatedButton href="#">
                                            View Details
                                        </AnimatedButton>
                                        <ul className="check-list">
                                            <li><a href="./contact">Basic GHL Setup</a></li>
                                            <li><a href="./contact">Single Funnel</a></li>
                                            <li><a href="./contact">Email/SMS Automation</a></li>
                                            <li><a href="./contact">Support</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow">
                                <div className="card card-pricing pricing-highlight">
                                    <div className="spacer" />
                                    <h4>Growth — $399</h4>
                                    <p>Full CRM Setup</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>$399</h3>
                                        <p>/Month</p>
                                    </div>
                                    <a href="#" className="btn btn-accent">
                                        <div className="btn-title">
                                            <span>View Details</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </a>

                                    <div className="core-benefits">
                                        <div className="benefit">
                                            <i className="fa-solid fa-brain"></i>
                                            <a href="#">Full CRM Setup</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-brands fa-accessible-icon"></i>
                                            <a href="#">Pipelines & Automation</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-solid fa-bug"></i>
                                            <a href="#">Funnel + Website</a>
                                        </div>
                                    </div>

                                    <ul className="check-list">
                                        <li><a href="#">Full CRM Setup</a></li>
                                        <li><a href="#">Pipelines & Automation</a></li>
                                        <li><a href="#">Funnel + Website</a></li>
                                        <li><a href="#">Tracking Setup</a></li>
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="card pricing-highlight-box">
                                        <div className="d-flex flex-column gspace-2 w-100">
                                            <h5>Choose Your Plan</h5>
                                            <div className="d-flex flex-column gspace-2">
                                                <div className="pricing-highlights">
                                                    <a href="#">Agency Pro — $999</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="#">SaaS Mode Setup</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="#">White-Label System</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>Agency Pro — $999</h4>
                                        <p>SaaS Mode Setup</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>$999</h3>
                                            <p>/Month</p>
                                        </div>
                                        <AnimatedButton href="#">
                                            View Details
                                        </AnimatedButton>
                                        <ul className="check-list">
                                            <li><a href="./contact">SaaS Mode Setup</a></li>
                                            <li><a href="./contact">Client Snapshots</a></li>
                                            <li><a href="./contact">White-Label System</a></li>
                                            <li><a href="./contact">Advanced Automation</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PricingPlanSection;