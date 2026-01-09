import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import FunnelPortfolioSection from "../components/Components/FunnelPortfolio/FunnelPortfolio";
import FeaturedProjectSection from "../components/Components/FeaturedProject/FeaturedProject";
import CustomizedDashboardsSection from "../components/Components/CustomizedDashboards/CustomizedDashboards";
import WebsiteShowcase from "../components/Components/WebsiteShowcase/WebsiteShowcase";
import NewsletterSection from "../components/Components/Form/Newsletter";

export default function PortfolioPage() {
  return (
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
