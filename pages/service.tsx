import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ServiceSection from "../components/Components/Services/service";

export default function ServicePage() {
  return (
    <>
      <SEOHead 
        title="GoHighLevel Services - GHL Octane"
        description="Professional GoHighLevel services including CRM setup, automation workflows, funnel design, white-label agency builds, and AI integrations."
        keywords="GoHighLevel services, GHL setup, CRM automation, funnel design, white-label GHL"
      />
      <HeadTitle title="Services - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Our Services" currentPage="Services" />
      <ServiceSection showAll={true} />
    </>
  );
}
