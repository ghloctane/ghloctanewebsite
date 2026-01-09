import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import FaqSection from "../components/Components/FAQs/faq";
import BannerInnerSection from "../components/Components/Banner/Inner";
import GuideBannerSection from "../components/Components/Banner/guide";
import ModalVideoSection from "../components/Components/Video/video";
import TestimonialSection from "../components/Components/Testimonial/testimonial";

export default function FaqPage() {
  return (
    <>  
      <HeadTitle title="FAQs - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Simple, Direct, and Friendly" currentPage="FAQ" />
      <FaqSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <TestimonialSection />
    </>
  );
}
