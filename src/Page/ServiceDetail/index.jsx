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

    // Map services to their images
    const getServiceImage = (serviceSlug) => {
        const imageMap = {
            "funnel-landing-page-design": "/assets/images/services/funnel.png",
            "crm-pipeline-setup": "/assets/images/services/crm pipeline.png",
            "automation-workflow": "/assets/images/services/automation.png",
            "white-label-agency": "/assets/images/services/whitelabel.png",
            "integrations-ai": "/assets/images/services/ai.png",
            "chatbots-voice-agents": "/assets/images/services/chatbot.png",
            "lead-capture-nurture": "/assets/images/services/leadcapture.png",
            "support-maintenance-training": "/assets/images/services/support.png",
            "api-integration": "/assets/images/services/Backend API Coding.png",
            "compliance-a2p-registration": "/assets/images/services/compliance.png",
            "social-media-marketing": "/assets/images/services/social.png",
            "development": "/assets/images/services/development.png",
        };
        return imageMap[serviceSlug] || "/assets/images/services/automation.png";
    };

    const serviceImage = getServiceImage(currentService.slug);

    return(
        <>
            <HeadTitle title={`${currentService.title} - GHL Octane`} />
            <BannerInnerSection title={currentService.title} currentPage="Services" />
            
            {/* Service Detail Section */}
            <div className="section">
                <div className="hero-container">
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 align-items-center justify-content-center">
                        {/* Content Column - Left Side */}
                        <div className="col">
                            <div className="d-flex flex-column gspace-3 text-start">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="service-detail-number-wrapper">
                                        <span className="service-detail-number">
                                            {String(currentService.id).padStart(2, '0')}
                                        </span>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h2 className="service-detail-page-title">{currentService.title}</h2>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="slow">
                                    <p className="service-detail-card-desc">{currentService.cardDescription}</p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="slow">
                                    <p className="service-detail-full-desc">{currentService.fullDescription}</p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="slow">
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

                                <AnimateOnScroll animation="fadeInLeft" speed="slow">
                                    <div className="service-detail-cta">
                                        <AnimatedButton href="/contact">
                                            Get Started Today
                                        </AnimatedButton>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>

                        {/* Service Image Column - Right Side */}
                        <div className="col">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="service-detail-image-container">
                                    <img 
                                        src={serviceImage} 
                                        alt={currentService.title}
                                        className="service-detail-image"
                                    />
                                </div>
                            </AnimateOnScroll>
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

