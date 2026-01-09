import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ChooseUsSection from "../components/Components/ChooseUs/choose";
import LeaderSection from "../components/Components/Leader/Leader";
import GHLTeamsSection from "../components/Components/GHLTeams/GHLTeams";

export default function TeamPage() {
  return (
    <>
      <HeadTitle title="Our Team - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Meet Our Team" currentPage="Our Team"/>
      <LeaderSection />
      <GHLTeamsSection />
      <ChooseUsSection />
    </>
  );
}
