import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import NewsletterSection from "../components/Components/Form/Newsletter";
import TestimonialSection from "../components/Components/Testimonial/testimonial";
import ModalVideoSection from "../components/Components/Video/video";

export default function TestimonialPage() {
  return (
    <>
      <HeadTitle title="Testimonials - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Testimonials" currentPage="Testimonials" />
      <TestimonialSection />
      <NewsletterSection />
      <ModalVideoSection />
    </>
  );
}
