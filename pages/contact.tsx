import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ContactSection from "../components/Components/Contact/contact";

export default function ContactPage() {
  return (
    <>
      <HeadTitle title="Contact Us - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Contact Us" currentPage="Contact Us" />
      <ContactSection />
    </>
  );
}
