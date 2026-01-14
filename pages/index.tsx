import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerHomeSection from "../components/Components/Banner";

// ALL COMPONENTS LOADED IMMEDIATELY - No lazy loading for smooth scroll
import ExpertiseSection from "../components/Components/Expertise/expertise";
import PartnershipSection from "../components/Components/Partnership/Partnership";
import OurImpact from "../components/Components/Impact/OurImpact";
import AboutSection from "../components/Components/About/about";
import LeaderSection from "../components/Components/Leader/Leader";
import ChooseUsSection from "../components/Components/ChooseUs/choose";
import GuideBannerSection from "../components/Components/Banner/guide";
import ModalVideoSection from "../components/Components/Video/video";
import ServiceSection from "../components/Components/Services/service";
import FunnelPortfolioSection from "../components/Components/FunnelPortfolio/FunnelPortfolio";
import FeaturedProjectSection from "../components/Components/FeaturedProject/FeaturedProject";
import CustomizedDashboardsSection from "../components/Components/CustomizedDashboards/CustomizedDashboards";
import WebsiteShowcase from "../components/Components/WebsiteShowcase/WebsiteShowcase";
import TestimonialSection from "../components/Components/Testimonial/testimonial";
import DigitalProcessSection from "../components/Components/DigitalProcess/digitalstep";
import PricingPlanSection from "../components/Components/Pricing/Pricing";
import IndustriesSection from "../components/Components/Industries/IndustriesSection";
import NewsletterSection from "../components/Components/Form/Newsletter";
import IntegrationsSection from "../components/Components/Integrations/IntegrationsSection";
import CTASection from "../components/Components/CTA/CTASection";

export default function HomePage() {
  return (
    <>
      <SEOHead 
        title="GHL Octane - Professional GoHighLevel Solutions for Agencies & Businesses"
        description="Transform your business with expert GoHighLevel implementation. CRM setup, automation workflows, funnel design, white-label agency builds, and marketing automation solutions."
        keywords="GoHighLevel, GHL, CRM setup, automation workflow, funnel design, marketing automation, white label agency, GHL integration, lead generation"
      />
      <HeadTitle title="Home - GHL Octane - GoHighLevel Solutions" />
      <BannerHomeSection />
      <ExpertiseSection />
      <PartnershipSection />
      <OurImpact />
      <AboutSection isHomePage={true} />
      
      {/* All sections loaded immediately - no lazy loading */}
      <LeaderSection />
      <ChooseUsSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <ServiceSection />
      <IndustriesSection />
      <FunnelPortfolioSection limit={3} showViewMore={true} />
      <FeaturedProjectSection />
      <CustomizedDashboardsSection />
      <TestimonialSection />
      <WebsiteShowcase />
      <DigitalProcessSection />
      <PricingPlanSection />
      <NewsletterSection />
      <IntegrationsSection />
      <CTASection />
    </>
  );
}
