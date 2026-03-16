import dynamic from "next/dynamic";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import FunnelPortfolioSection from "../components/Components/FunnelPortfolio/FunnelPortfolio";

// Below-the-fold components — dynamically loaded with SSR
const ChooseUsSection = dynamic(() => import("../components/Components/ChooseUs/choose"));
const GuideBannerSection = dynamic(() => import("../components/Components/Banner/guide"));
const ModalVideoSection = dynamic(() => import("../components/Components/Video/video"));
const PartnershipSection = dynamic(() => import("../components/Components/Partnership/PartnershipSection"));
const PricingPlanSection = dynamic(() => import("../components/Components/Pricing/Pricing"));
const CustomizedDashboardsSection = dynamic(() => import("../components/Components/CustomizedDashboards/CustomizedDashboards"));
const FeaturedProjectSection = dynamic(() => import("../components/Components/FeaturedProject/FeaturedProject"));
const WebsiteShowcase = dynamic(() => import("../components/Components/WebsiteShowcase/WebsiteShowcase"));

export default function PortfolioPage() {
  return (
    <>
      <SEOHead
        title="Funnel Portfolio - GHL Octane High-Converting Funnels"
        description="View our portfolio of high-converting funnels built with GoHighLevel. E-commerce, lead gen, webinar, sales, membership & more."
        keywords="GHL Octane funnel portfolio, GoHighLevel funnels, high-converting funnels, funnel examples"
      />
      <HeadTitle title="Funnel Portfolio - GHL Octane - Our Work" />
      <BannerInnerSection title="Funnel Portfolio" currentPage="Portfolio" />
      <FunnelPortfolioSection limit={null} showViewMore={false} standalone={true} />
      <WebsiteShowcase />
      <CustomizedDashboardsSection />
      <FeaturedProjectSection />
      <ChooseUsSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <PricingPlanSection />
      <PartnershipSection />
    </>
  );
}
