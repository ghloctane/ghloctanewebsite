import React, { Suspense, lazy } from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerHomeSection from "../components/Components/Banner";

// Critical above-the-fold components (loaded immediately)
import ExpertiseSection from "../components/Components/Expertise/expertise";
import PartnershipSection from "../components/Components/Partnership/Partnership";
import OurImpact from "../components/Components/Impact/OurImpact";
import AboutSection from "../components/Components/About/about";

// Lazy load non-critical components (below the fold)
const LeaderSection = lazy(() => import("../components/Components/Leader/Leader"));
const ChooseUsSection = lazy(() => import("../components/Components/ChooseUs/choose"));
const GuideBannerSection = lazy(() => import("../components/Components/Banner/guide"));
const ModalVideoSection = lazy(() => import("../components/Components/Video/video"));
const ServiceSection = lazy(() => import("../components/Components/Services/service"));
const FunnelPortfolioSection = lazy(() => import("../components/Components/FunnelPortfolio/FunnelPortfolio"));
const FeaturedProjectSection = lazy(() => import("../components/Components/FeaturedProject/FeaturedProject"));
const CustomizedDashboardsSection = lazy(() => import("../components/Components/CustomizedDashboards/CustomizedDashboards"));
const WebsiteShowcase = lazy(() => import("../components/Components/WebsiteShowcase/WebsiteShowcase"));
const TestimonialSection = lazy(() => import("../components/Components/Testimonial/testimonial"));
const DigitalProcessSection = lazy(() => import("../components/Components/DigitalProcess/digitalstep"));
const PricingPlanSection = lazy(() => import("../components/Components/Pricing/Pricing"));
const IndustriesSection = lazy(() => import("../components/Components/Industries/IndustriesSection"));
const NewsletterSection = lazy(() => import("../components/Components/Form/Newsletter"));
const IntegrationsSection = lazy(() => import("../components/Components/Integrations/IntegrationsSection"));
const CTASection = lazy(() => import("../components/Components/CTA/CTASection"));

// Loading fallback component
const SectionPlaceholder = () => <div className="section section-placeholder"></div>;

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
      
      {/* Lazy loaded sections with Suspense */}
      {/* <Suspense fallback={<SectionPlaceholder />}>
        <LeaderSection />
      </Suspense> */}
      <Suspense fallback={<SectionPlaceholder />}>
        <ChooseUsSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <GuideBannerSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <ModalVideoSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <ServiceSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <IndustriesSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <FunnelPortfolioSection limit={3} showViewMore={true} />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <FeaturedProjectSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <CustomizedDashboardsSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <WebsiteShowcase />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <DigitalProcessSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <PricingPlanSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <NewsletterSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <IntegrationsSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <CTASection />
      </Suspense>
    </>
  );
}