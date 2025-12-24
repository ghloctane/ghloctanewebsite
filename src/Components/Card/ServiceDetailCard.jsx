import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import AnimatedButton from "../Button/AnimatedButton";

const ServiceDetailCard = ({ service, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`service-detail-card ${isEven ? 'service-even' : 'service-odd'}`}>
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-4 align-items-center">
                {/* Icon/Number Column */}
                <div className={`col ${!isEven ? 'order-lg-2' : ''}`}>
                    <AnimateOnScroll animation={isEven ? "fadeInLeft" : "fadeInRight"} speed="normal">
                        <div className="service-icon-wrapper">
                            <div className="service-number">
                                {String(service.id).padStart(2, '0')}
                            </div>
                            <div className="service-icon-box">
                                <i className={service.icon}></i>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Content Column */}
                <div className={`col ${!isEven ? 'order-lg-1' : ''}`}>
                    <div className="d-flex flex-column gspace-3">
                        <AnimateOnScroll animation={isEven ? "fadeInRight" : "fadeInLeft"} speed="normal">
                            <h3 className="service-detail-title">{service.title}</h3>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation={isEven ? "fadeInRight" : "fadeInLeft"} speed="slow">
                            <p className="service-card-desc">{service.cardDescription}</p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation={isEven ? "fadeInRight" : "fadeInLeft"} speed="slow">
                            <p className="service-full-desc">{service.fullDescription}</p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation={isEven ? "fadeInRight" : "fadeInLeft"} speed="slow">
                            <div className="service-includes">
                                <h4>What's Included:</h4>
                                <ul className="service-features-list">
                                    {service.whatsIncluded.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fa-solid fa-check"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation={isEven ? "fadeInRight" : "fadeInLeft"} speed="slow">
                            <div className="service-cta">
                                <AnimatedButton href="/contact">
                                    Get Started
                                </AnimatedButton>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailCard;

