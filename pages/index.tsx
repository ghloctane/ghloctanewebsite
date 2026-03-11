import dynamic from "next/dynamic";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerHomeSection from "../components/Components/Banner";

// Critical above-the-fold components (loaded immediately, SSR'd)
import ExpertiseSection from "../components/Components/Expertise/expertise";

// Below-the-fold components — next/dynamic for proper SSR + code splitting
const ChooseUsSection = dynamic(() => import("../components/Components/ChooseUs/choose"));
const GuideBannerSection = dynamic(() => import("../components/Components/Banner/guide"));
const ModalVideoSection = dynamic(() => import("../components/Components/Video/video"));
const ServiceSection = dynamic(() => import("../components/Components/Services/service"));
const FunnelPortfolioSection = dynamic(() => import("../components/Components/FunnelPortfolio/FunnelPortfolio"));
const FeaturedProjectSection = dynamic(() => import("../components/Components/FeaturedProject/FeaturedProject"));
const WebsiteShowcase = dynamic(() => import("../components/Components/WebsiteShowcase/WebsiteShowcase"));
const TestimonialSection = dynamic(() => import("../components/Components/Testimonial/testimonial"));
const DigitalProcessSection = dynamic(() => import("../components/Components/DigitalProcess/digitalstep"));
const PricingPlanSection = dynamic(() => import("../components/Components/Pricing/Pricing"));
const IntegrationsSection = dynamic(() => import("../components/Components/Integrations/IntegrationsSection"));
const PartnershipSection = dynamic(() => import("../components/Components/Partnership/PartnershipSection"));
const ContactHomeSection = dynamic(() => import("../components/Components/Contact/ContactHomeSection"));
const CTASection = dynamic(() => import("../components/Components/CTA/CTASection"));

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
      <ChooseUsSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <ServiceSection showAll={false} />
      <FunnelPortfolioSection limit={null} showViewMore={true} />
      <FeaturedProjectSection />
      <TestimonialSection />
      <WebsiteShowcase />
      <DigitalProcessSection />
      <PricingPlanSection />
      <IntegrationsSection />
      <ContactHomeSection />
      <CTASection />
    </>
  );
}