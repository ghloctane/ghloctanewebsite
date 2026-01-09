import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import PricingPlanSection from "../components/Components/Pricing/Pricing";
import DigitalProcessSection from "../components/Components/DigitalProcess/digitalstep";
import ChooseUsSection from "../components/Components/ChooseUs/choose";

export default function PricingPage() {
  return (
    <>
      <HeadTitle title="Pricing Plan - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Pricing Plan" currentPage="Pricing Plan" />
      <PricingPlanSection />
      <DigitalProcessSection />
      <ChooseUsSection />
    </>
  );
}
