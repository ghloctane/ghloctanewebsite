import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
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
import CTASection from "../../Components/CTA/CTASection";

function HomePage(){
    return(
        <>
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
            <FunnelPortfolioSection />
            <FeaturedProjectSection />
            <CustomizedDashboardsSection />
            <TestimonialSection />
            <WebsiteShowcase />
            <DigitalProcessSection />
            <PricingPlanSection />
            <NewsletterSection />
            <CTASection />
        </>
    );
}

export default HomePage;