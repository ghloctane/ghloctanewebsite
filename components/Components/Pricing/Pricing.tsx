import React from "react";
import Link from "next/link";
import AnimatedButton from "../Button/AnimatedButton";

function PricingPlanSection(){
    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <div className="d-flex flex-column gspace-2">
                        <div className="sub-heading align-self-center">
                            <i className="fa-regular fa-circle-dot"></i>
                            <span>Pricing Plans</span>
                        </div>
                        <h2 className="title-heading heading-container heading-container-short">
                            FLEXIBLE PRICING PLANS
                        </h2>
                    </div>
                    <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
                        <div className="col">
                            <div className="pricing-container">
                                <div className="card card-pricing-title">
                                    <div className="spacer" />
                                    <div className="content">
                                        <h3 className="title-heading">Choose Your Plan</h3>
                                        <div className="link-wrapper">
                                        <Link href="/book-a-call">Book Your Free Strategy Call</Link>
                                        <i className="fa-solid fa-arrow-circle-right"></i>
                                        </div>
                                    </div>
                                </div>

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
                                        <li>CRM Setup</li>
                                        <li>Automation</li>
                                        <li>Conversion AI Setup</li>
                                        <li>Voice AI Setup</li>
                                        <li>Funnels</li>
                                        <li>Landing Pages Design Optimization</li>
                                        <li>Tech Support</li>
                                        <li>Weekly Reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
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
                                        <li>CRM Setup</li>
                                        <li>Automation</li>
                                        <li>Conversion AI Setup</li>
                                        <li>Voice AI Setup</li>
                                        <li>Funnels</li>
                                        <li>Landing Pages Design Optimization</li>
                                        <li>Full Campaigns Buildouts</li>
                                        <li>Complete Sales & Onboarding Automation Setup</li>
                                        <li>Ongoing Optimization</li>
                                        <li>Monthly Strategy Calls</li>
                                        <li>Weekly Reporting</li>
                                        <li>Tech Support</li>
                                        <li>Advanced Integrations</li>
                                        <li>White-Label Setup</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="pricing-container">
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

                                <div className="card card-pricing">
                                        <h4>Enterprise Elite</h4>
                                        <p>Contact Sales Team for Agency and Enterprise Prices</p>
                                        <p className="pricing-growth-note">For businesses who need pro solutions and integrations</p>
                                        <AnimatedButton href="/book-a-call">
                                            Contact Sales
                                        </AnimatedButton>
                                        <ul className="check-list">
                                            <li>All Growth Services Included</li>
                                            <li>Custom Projects</li>
                                            <li>Tailored Hours & Services</li>
                                            <li>Multiple Experts</li>
                                            <li>API Integrations</li>
                                            <li>Custom Add-Ons</li>
                                            <li>Dedicated Project Manager</li>
                                            <li>White-Label Agency Builds</li>
                                            <li>Advanced AI & Automation</li>
                                            <li>Enterprise-Level Support</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PricingPlanSection;