import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import PartnershipListSection from "../components/Components/Partnership/PartnershipList";
import GuideBannerSection from "../components/Components/Banner/guide";
import ModalVideoSection from "../components/Components/Video/video";
import TestimonialSection from "../components/Components/Testimonial/testimonial";

export default function PartnershipPage() {
  return (
    <>
      <HeadTitle title="Partnership - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Partnership" currentPage="Partnership"/>
      <PartnershipListSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <TestimonialSection />
    </>
  );
}
