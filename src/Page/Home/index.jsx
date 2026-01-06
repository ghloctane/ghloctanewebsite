import React, { Suspense, lazy } from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import SEOHead from "../../Components/Head/SEOHead";
import BannerHomeSection from "../../Components/Banner";

// Critical above-the-fold components (loaded immediately)
import ExpertiseSection from "../../Components/Expertise/expertise";
import PartnershipSection from "../../Components/Partnership/Partnership";
import StatsSection from "../../Components/Stats/StatsSection";
import AboutHomeSection from "../../Components/About/AboutHome";

// Lazy load non-critical components (below the fold)
const LeaderSection = lazy(() => import("../../Components/Leader/Leader"));
const ChooseUsSection = lazy(() => import("../../Components/ChooseUs/choose"));
const GuideBannerSection = lazy(() => import("../../Components/Banner/guide"));
const ModalVideoSection = lazy(() => import("../../Components/Video/video"));
const ServiceSection = lazy(() => import("../../Components/Services/service"));
const FunnelPortfolioSection = lazy(() => import("../../Components/FunnelPortfolio/FunnelPortfolio"));
const FeaturedProjectSection = lazy(() => import("../../Components/FeaturedProject/FeaturedProject"));
const CustomizedDashboardsSection = lazy(() => import("../../Components/CustomizedDashboards/CustomizedDashboards"));
const WebsiteShowcase = lazy(() => import("../../Components/WebsiteShowcase/WebsiteShowcase"));
const TestimonialSection = lazy(() => import("../../Components/Testimonial/testimonial"));
const DigitalProcessSection = lazy(() => import("../../Components/DigitalProcess/digitalstep"));
const PricingPlanSection = lazy(() => import("../../Components/Pricing/Pricing"));
const IndustriesSection = lazy(() => import("../../Components/Industries/IndustriesSection"));
const NewsletterSection = lazy(() => import("../../Components/Form/Newsletter"));
const IntegrationsSection = lazy(() => import("../../Components/Integrations/IntegrationsSection"));
const CTASection = lazy(() => import("../../Components/CTA/CTASection"));

// Loading fallback component
const SectionPlaceholder = () => <div className="section" style={{ minHeight: '400px' }}></div>;

function HomePage(){
    return(
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
            <StatsSection />
            <AboutHomeSection />
            
            {/* Lazy loaded sections with Suspense */}
            <Suspense fallback={<SectionPlaceholder />}>
                <LeaderSection />
            </Suspense>
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

export default HomePage;