import React from "react";
import { useParams } from "react-router-dom";
import BannerInnerSection from "../../Components/Banner/Inner";
import { allServicesData } from "../../Data/AllServicesData";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import AnimatedButton from "../../Components/Button/AnimatedButton";
import GuideBannerSection from "../../Components/Banner/guide";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import HeadTitle from "../../Components/Head/HeadTitle";

function ServiceDetailPage(){
    const { id } = useParams();
    
    // Find service by slug
    const service = allServicesData.find(s => s.slug === id);
    
    // If service not found, show first service as default
    const currentService = service || allServicesData[0];

    return(
        <>
            <HeadTitle title={`${currentService.title} - GHL Octane`} />
            <BannerInnerSection title={currentService.title} currentPage="Services" />
            
            {/* Service Detail Section */}
            <div className="section">
                <div className="hero-container">
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 align-items-center">
                        {/* Icon Column */}
                        <div className="col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="service-detail-icon-wrapper">
                                    <div className="service-detail-number">
                                        {String(currentService.id).padStart(2, '0')}
                                    </div>
                                    <div className="service-detail-icon-box">
                                        <i className={currentService.icon}></i>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Content Column */}
                        <div className="col">
                            <div className="d-flex flex-column gspace-3">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="service-detail-page-title">{currentService.title}</h2>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="slow">
                                    <p className="service-detail-card-desc">{currentService.cardDescription}</p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="slow">
                                    <p className="service-detail-full-desc">{currentService.fullDescription}</p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="slow">
                                    <div className="service-detail-includes">
                                        <h3>What's Included:</h3>
                                        <ul className="service-detail-features-list">
                                            {currentService.whatsIncluded.map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fa-solid fa-check-circle"></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="slow">
                                    <div className="service-detail-cta">
                                        <AnimatedButton href="/contact">
                                            Get Started Today
                                        </AnimatedButton>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GuideBannerSection />
            <PricingPlanSection />
        </>
    );
}

export default ServiceDetailPage;

