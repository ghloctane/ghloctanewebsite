import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import AboutSection from "../components/Components/About/about";
import PartnershipSection from "../components/Components/Partnership/Partnership";
import ChooseUsAboutSection from "../components/Components/ChooseUs/chooseusabout";
import GuideBannerSection from "../components/Components/Banner/guide";
import ModalVideoSection from "../components/Components/Video/video";
import DigitalProcessSection from "../components/Components/DigitalProcess/digitalstep";
import TestimonialSection from "../components/Components/Testimonial/testimonial";

export default function AboutPage() {
  return (
    <>
      <SEOHead 
        title="About GHL Octane - GoHighLevel Experts"
        description="Learn about GHL Octane - certified GoHighLevel experts helping agencies and businesses automate operations, improve lead quality, and increase revenue."
        keywords="About GHL Octane, GoHighLevel experts, GHL certified, automation specialists"
      />
      <HeadTitle title="About - GHL Octane - GoHighLevel Solutions"/>
      <BannerInnerSection title="About GHL Octane" currentPage="About Us" />
      <AboutSection />
      <PartnershipSection />
      <ChooseUsAboutSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <DigitalProcessSection />
      <TestimonialSection />
    </>
  );
}
