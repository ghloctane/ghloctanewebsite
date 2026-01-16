import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ChooseUsSection from "../components/Components/ChooseUs/choose";
import LeaderSection from "../components/Components/Leader/Leader";
import GHLTeamsSection from "../components/Components/GHLTeams/GHLTeams";

export default function TeamPage() {
  return (
    <>
      <SEOHead 
        title="Our Team - GHL Octane Leadership"
        description="Meet the GHL Octane team - certified GoHighLevel experts with years of experience in automation and digital marketing."
        keywords="GHL Octane team, GoHighLevel experts, Zeeshan Haider, Hammad Raza"
      />
      <HeadTitle title="Our Team - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Meet Our Team" currentPage="Our Team"/>
      {/* <LeaderSection /> */}
      <GHLTeamsSection />
      <ChooseUsSection />
    </>
  );
}
