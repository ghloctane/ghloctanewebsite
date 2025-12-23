
import React from "react";
import { digitalSteps } from "../../Data/DigitalProcessData";
import DigitalStepCard from "../Card/DigitalStepCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const DigitalProcessSection = () => {

    return (
        <div className="section-wrapper-digital-process">
            <div className="digital-process-layout">
                <div className="section digital-process-banner">
                    <div className="hero-container">
                        <div className="digital-process-content">
                            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                                <div className="col">
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>How it Work</span>
                                            </div>
                                            <h2 className="title-heading">SIMPLE STEPS TO DIGITAL SUCCESS</h2>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            <div className="col">
                                <AnimateOnScroll animation="fadeInDown" speed="normal">
                                    <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                                        <p>
                                            Our streamlined process ensures your GHL setup and automation is seamless and effective. From discovery to scaling, we guide you every step of the way.
                                        </p>
                                        <div className="link-wrapper">
                                            <a href="./contact">Choose Your Plan</a>
                                            <i className="fa-solid fa-arrow-circle-right"></i>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                            </div>

                            <div className="digital-process-steps-wrapper">
                                <div className="digital-process-steps">
                                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                                    {digitalSteps.map((item, index) => (
                                        <DigitalStepCard
                                            key={index}
                                            icon={item.icon}
                                            step={item.step}
                                            title={item.title}
                                            content={item.content}
                                            isFirst={index === 0}
                                        />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>  
            </div>
        </div>
    );
};

export default DigitalProcessSection;
