import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import BannerInnerSection from "../../components/Components/Banner/Inner";
import { allServicesData } from "../../components/Data/AllServicesData";
import AnimatedButton from "../../components/Components/Button/AnimatedButton";
import GuideBannerSection from "../../components/Components/Banner/guide";
import PricingPlanSection from "../../components/Components/Pricing/Pricing";
import HeadTitle from "../../components/Components/Head/HeadTitle";
import SEOHead from "../../components/Components/Head/SEOHead";
import FunnelServiceSlider from "../../components/Components/ServiceDetail/FunnelServiceSlider";

interface ServiceType {
  id: number;
  slug: string;
  title: string;
  icon: string;
  cardDescription: string;
  fullDescription: string;
  whatsIncluded: string[];
}

interface ServiceDetailPageProps {
  service: ServiceType;
  serviceImage: string;
}

const imageMap: Record<string, string> = {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allServicesData.map((service: ServiceType) => ({
    params: { id: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ServiceDetailPageProps> = async ({ params }) => {
  const slug = params?.id as string;
  const service = allServicesData.find((s: ServiceType) => s.slug === slug);

  if (!service) {
    return { notFound: true };
  }

  const serviceImage = imageMap[service.slug] || "/assets/images/services/automation.webp";

  return {
    props: {
      service,
      serviceImage,
    },
  };
};

export default function ServiceDetailPage({ service, serviceImage }: ServiceDetailPageProps) {
  const isFunnelService = service.slug === "funnel-landing-page-design";

  return (
    <>
      <SEOHead
        title={`${service.title} - GHL Octane`}
        description={service.fullDescription}
        keywords={`GoHighLevel, GHL, ${service.title}, automation, CRM`}
      />
      <HeadTitle title={`${service.title} - GHL Octane`} />
      <BannerInnerSection title={service.title} currentPage="Services" />

      {/* Service Detail Section */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 align-items-center justify-content-center">
            {/* Content Column - Left Side */}
            <div className="col">
              <div className="d-flex flex-column gspace-3 text-start">
                <div className="service-detail-number-wrapper">
                  <span className="service-detail-number">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="service-detail-page-title">{service.title}</h2>

                <p className="service-detail-card-desc">{service.cardDescription}</p>

                <p className="service-detail-full-desc">{service.fullDescription}</p>

                <div className="service-detail-includes">
                  <h3>What&apos;s Included:</h3>
                  <ul className="service-detail-features-list">
                    {service.whatsIncluded.map((item: string, idx: number) => (
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
                <FunnelServiceSlider serviceTitle={service.title} />
              ) : (
                // Other Services - Original Images
                <div className="service-detail-image-container">
                  <Image
                    src={serviceImage}
                    alt={service.title}
                    width={800}
                    height={500}
                    quality={85}
                    className="service-detail-image"
                    sizes="(max-width: 768px) 100vw, 800px"
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
