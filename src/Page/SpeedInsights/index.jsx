import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import SpeedInsightsGuide from "../../Components/SpeedInsights/SpeedInsightsGuide";

function SpeedInsightsPage() {
  return (
    <>
      <HeadTitle title="Speed Insights Guide - GHL Octane - Vercel Speed Insights Setup" />
      <BannerInnerSection title="Speed Insights Guide" currentPage="Speed Insights" />
      <SpeedInsightsGuide />
    </>
  );
}

export default SpeedInsightsPage;
