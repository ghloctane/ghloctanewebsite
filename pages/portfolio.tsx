import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import FunnelPortfolioSection from "../components/Components/FunnelPortfolio/FunnelPortfolio";
import FeaturedProjectSection from "../components/Components/FeaturedProject/FeaturedProject";
import CustomizedDashboardsSection from "../components/Components/CustomizedDashboards/CustomizedDashboards";
import WebsiteShowcase from "../components/Components/WebsiteShowcase/WebsiteShowcase";
import NewsletterSection from "../components/Components/Form/Newsletter";

export default function PortfolioPage() {
  return (
    <>
      <SEOHead 
        title="Portfolio - GHL Octane Projects & Work"
        description="View our portfolio of high-converting funnels, custom dashboards, and GoHighLevel implementations. See real results from our GHL projects."
        keywords="GHL Octane portfolio, GoHighLevel projects, funnel examples, GHL work samples"
      />
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
