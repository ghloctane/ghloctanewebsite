import React from "react";
import { useRouter } from "next/router";
import BannerInnerSection from "../../components/Components/Banner/Inner";
import { allServicesData } from "../../components/Data/AllServicesData";
import AnimatedButton from "../../components/Components/Button/AnimatedButton";
import GuideBannerSection from "../../components/Components/Banner/guide";
import PricingPlanSection from "../../components/Components/Pricing/Pricing";
import HeadTitle from "../../components/Components/Head/HeadTitle";
import FunnelServiceSlider from "../../components/Components/ServiceDetail/FunnelServiceSlider";

export default function ServiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find service by slug
  const service = allServicesData.find((s: { slug: string }) => s.slug === id);
  
  // If service not found, show first service as default
  const currentService = service || allServicesData[0];

  // Map services to their images
  const getServiceImage = (serviceSlug: string): string => {
    const imageMap: Record<string, string> = {
      "funnel-landing-page-design": "/assets/images/services/funnel.webp",
      "crm-pipeline-setup": "/assets/images/services/crm pipeline.webp",
      "automation-workflow": "/assets/images/services/automation.webp",
      "white-label-agency": "/assets/images/services/whitelabel.webp",
      "integrations-ai": "/assets/images/services/ai.webp",
      "chatbots-voice-agents": "/assets/images/services/chatbot.webp",
      "lead-capture-nurture": "/assets/images/services/leadcapture.webp",
      "support-maintenance-training": "/assets/images/services/support.webp",
      "api-integration": "/assets/images/services/Backend API Coding.webp",
      "compliance-a2p-registration": "/assets/images/services/a2p.webp",
      "social-media-marketing": "/assets/images/services/social.webp",
      "development": "/assets/images/services/Backend API Coding.webp",
    };
    return imageMap[serviceSlug] || "/assets/images/services/automation.webp";
  };

  const serviceImage = getServiceImage(currentService.slug);
  const isFunnelService = currentService.slug === "funnel-landing-page-design";

  return (
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
                <div className="service-detail-number-wrapper">
                  <span className="service-detail-number">
                    {String(currentService.id).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="service-detail-page-title">{currentService.title}</h2>

                <p className="service-detail-card-desc">{currentService.cardDescription}</p>

                <p className="service-detail-full-desc">{currentService.fullDescription}</p>

                <div className="service-detail-includes">
                  <h3>What&apos;s Included:</h3>
                  <ul className="service-detail-features-list">
                    {currentService.whatsIncluded.map((item: string, idx: number) => (
                      <li key={idx}>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-cta">
                  <AnimatedButton href="/contact">
                    Get Started Today
                  </AnimatedButton>
                </div>
              </div>
            </div>

            {/* Service Image Column - Right Side */}
            <div className="col">
              {isFunnelService ? (
                // Funnel Service - Special Slider
                <FunnelServiceSlider serviceTitle={currentService.title} />
              ) : (
                // Other Services - Original Images
                <div className="service-detail-image-container">
                  <img 
                    src={serviceImage} 
                    alt={currentService.title}
                    className="service-detail-image"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <GuideBannerSection />
      <PricingPlanSection />
    </>
  );
}
