import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import AffiliateSection from "../components/Components/Affiliate/Affiliate";
import GuideBannerSection from "../components/Components/Banner/guide";
import ModalVideoSection from "../components/Components/Video/video";
import TestimonialSection from "../components/Components/Testimonial/testimonial";

export default function AffiliatePage() {
  return (
    <>
      <HeadTitle title="Affiliate Program - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Affiliate Program" currentPage="Affiliate"/>
      <AffiliateSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <TestimonialSection />
    </>
  );
}
