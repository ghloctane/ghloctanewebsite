import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import SEOHead from "../../Components/Head/SEOHead";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSection from "../../Components/Services/service";
import FunnelPortfolioSection from "../../Components/FunnelPortfolio/FunnelPortfolio";
import FeaturedProjectSection from "../../Components/FeaturedProject/FeaturedProject";
import CustomizedDashboardsSection from "../../Components/CustomizedDashboards/CustomizedDashboards";
import WebsiteShowcase from "../../Components/WebsiteShowcase/WebsiteShowcase";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import PartnershipSection from "../../Components/Partnership/Partnership";
import IndustriesSection from "../../Components/Industries/IndustriesSection";
import StatsSection from "../../Components/Stats/StatsSection";
import AboutHomeSection from "../../Components/About/AboutHome";
import LeaderSection from "../../Components/Leader/Leader";
import NewsletterSection from "../../Components/Form/Newsletter";
import IntegrationsSection from "../../Components/Integrations/IntegrationsSection";
import CTASection from "../../Components/CTA/CTASection";

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

export default HomePage;