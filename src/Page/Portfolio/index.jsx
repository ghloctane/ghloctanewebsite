import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import FunnelPortfolioSection from "../../Components/FunnelPortfolio/FunnelPortfolio";
import FeaturedProjectSection from "../../Components/FeaturedProject/FeaturedProject";
import CustomizedDashboardsSection from "../../Components/CustomizedDashboards/CustomizedDashboards";
import WebsiteShowcase from "../../Components/WebsiteShowcase/WebsiteShowcase";
import NewsletterSection from "../../Components/Form/Newsletter";

function PortfolioPage(){
    return(
        <>
            <HeadTitle title="Portfolio - GHL Octane - Our Work" />
            <BannerInnerSection title="Our Portfolio" currentPage="Portfolio" />
            <FunnelPortfolioSection />
            <FeaturedProjectSection />
            <CustomizedDashboardsSection />
            <WebsiteShowcase />
            <NewsletterSection />
        </>
    );
}

export default PortfolioPage;
