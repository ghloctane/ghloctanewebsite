import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import FunnelPortfolioSection from "../components/Components/FunnelPortfolio/FunnelPortfolio";

export default function PortfolioPage() {
  return (
    <>
      <SEOHead
        title="Funnel Portfolio - GHL Octane High-Converting Funnels"
        description="View our portfolio of high-converting funnels built with GoHighLevel. E-commerce, lead gen, webinar, sales, membership & more."
        keywords="GHL Octane funnel portfolio, GoHighLevel funnels, high-converting funnels, funnel examples"
      />
      <HeadTitle title="Funnel Portfolio - GHL Octane - Our Work" />
      <FunnelPortfolioSection limit={null} showViewMore={false} standalone />
    </>
  );
}
