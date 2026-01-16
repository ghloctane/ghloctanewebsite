import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ContactSection from "../components/Components/Contact/contact";

export default function ContactPage() {
  return (
    <>
      <SEOHead 
        title="Contact GHL Octane - Get in Touch"
        description="Contact GHL Octane for professional GoHighLevel solutions. Get a free consultation for CRM setup, automation workflows, and funnel design."
        keywords="Contact GHL Octane, GoHighLevel consultation, GHL support, automation help"
      />
      <HeadTitle title="Contact Us - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Contact Us" currentPage="Contact Us" />
      <ContactSection />
    </>
  );
}
