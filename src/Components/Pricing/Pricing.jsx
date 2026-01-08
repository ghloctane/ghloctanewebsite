import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import AnimatedButton from "../Button/AnimatedButton";
import { allServicesData } from "../../Data/AllServicesData";

function PricingPlanSection(){
    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={0}>
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
                                <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                    <div className="card card-pricing-title">
                                        <div className="spacer" />
                                        <div className="content">
                                            <h3 className="title-heading">Choose Your Plan</h3>
                                            <div className="link-wrapper">
                                            <a href="/book-a-call" onClick={(e) => { e.preventDefault(); window.location.href = '/book-a-call'; window.scrollTo({ top: 0, behavior: 'instant' }); }}>Book Your Free Strategy Call</a>
                                            <i className="fa-solid fa-arrow-circle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>Starter</h4>
                                        <p>20 hours/week of a dedicated GHL expert</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>$800</h3>
                                            <p>/Month</p>
                                        </div>
                                        <p className="pricing-starter-note">Perfect for startups</p>
                                        <AnimatedButton href="/book-a-call">
                                            Get Started
                                        </AnimatedButton>
                                        <ul className="check-list">
                                            <li><a href="./contact">CRM Setup</a></li>
                                            <li><a href="./contact">Automation</a></li>
                                            <li><a href="./contact">Conversion AI Setup</a></li>
                                            <li><a href="./contact">Voice AI Setup</a></li>
                                            <li><a href="./contact">Funnels</a></li>
                                            <li><a href="./contact">Landing Pages Design Optimization</a></li>
                                            <li><a href="./contact">Tech Support</a></li>
                                            <li><a href="./contact">Weekly Reporting</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow" delay={300}>
                                <div className="card card-pricing pricing-highlight">
                                    <div className="spacer" />
                                    <h4>Growth</h4>
                                    <p>40 hours/week of a dedicated GHL expert</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>$1,500</h3>
                                        <p>/Month</p>
                                    </div>
                                    <AnimatedButton href="./contact">
                                        Get Started
                                    </AnimatedButton>

                                    <div className="core-benefits">
                                        <div className="benefit">
                                            <i className="fa-solid fa-brain"></i>
                                            <a href="./contact">All Starter Services</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-brands fa-accessible-icon"></i>
                                            <a href="./contact">Priority Support</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-solid fa-bug"></i>
                                            <a href="./contact">Advanced Troubleshooting</a>
                                        </div>
                                    </div>

                                    <ul className="check-list">
                                        <li><a href="./contact">CRM Setup</a></li>
                                        <li><a href="./contact">Automation</a></li>
                                        <li><a href="./contact">Conversion AI Setup</a></li>
                                        <li><a href="./contact">Voice AI Setup</a></li>
                                        <li><a href="./contact">Funnels</a></li>
                                        <li><a href="./contact">Landing Pages Design Optimization</a></li>
                                        <li><a href="./contact">Full Campaigns Buildouts</a></li>
                                        <li><a href="./contact">Complete Sales & Onboarding Automation Setup</a></li>
                                        <li><a href="./contact">Ongoing Optimization</a></li>
                                        <li><a href="./contact">Monthly Strategy Calls</a></li>
                                        <li><a href="./contact">Weekly Reporting</a></li>
                                        <li><a href="./contact">Tech Support</a></li>
                                        <li><a href="./contact">Advanced Integrations</a></li>
                                        <li><a href="./contact">White-Label Setup</a></li>
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
                                                    <a href="./contact">Enterprise Elite</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="./contact">Custom Projects</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="./contact">API Integration</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                    <div className="card card-pricing">
                                        <h4>Enterprise Elite</h4>
                                        <p>Contact Sales Team for Agency and Enterprise Prices</p>
                                        <p className="pricing-growth-note">For businesses who need pro solutions and integrations</p>
                                        <AnimatedButton href="/book-a-call">
                                            Contact Sales
                                        </AnimatedButton>
                                        <ul className="check-list">
                                            <li><a href="./contact">All Growth Services Included</a></li>
                                            <li><a href="./contact">Custom Projects</a></li>
                                            <li><a href="./contact">Tailored Hours & Services</a></li>
                                            <li><a href="./contact">Multiple Experts</a></li>
                                            <li><a href="./contact">API Integrations</a></li>
                                            <li><a href="./contact">Custom Add-Ons</a></li>
                                            <li><a href="./contact">Dedicated Project Manager</a></li>
                                            <li><a href="./contact">White-Label Agency Builds</a></li>
                                            <li><a href="./contact">Advanced AI & Automation</a></li>
                                            <li><a href="./contact">Enterprise-Level Support</a></li>
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