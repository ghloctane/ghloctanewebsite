import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import PricingPlanSection from "../components/Components/Pricing/Pricing";
import DigitalProcessSection from "../components/Components/DigitalProcess/digitalstep";
import ChooseUsSection from "../components/Components/ChooseUs/choose";

export default function PricingPage() {
  return (
    <>
      <SEOHead 
        title="Pricing Plans - GHL Octane GoHighLevel Services"
        description="Affordable GoHighLevel pricing plans for agencies and businesses. CRM setup, automation workflows, funnel design, and white-label solutions."
        keywords="GHL Octane pricing, GoHighLevel packages, GHL services cost, automation pricing"
      />
      <HeadTitle title="Pricing Plan - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Pricing Plan" currentPage="Pricing Plan" />
      <PricingPlanSection />
      <DigitalProcessSection />
      <ChooseUsSection />
    </>
  );
}
