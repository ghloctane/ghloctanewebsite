import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ServiceSection from "../components/Components/Services/service";

export default function ServicePage() {
  return (
    <>
      <HeadTitle title="Services - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Our Services" currentPage="Services" />
      <ServiceSection showAll={true} />
    </>
  );
}
