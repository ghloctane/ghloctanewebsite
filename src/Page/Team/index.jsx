import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AffiliateSection from "../../Components/Affiliate/Affiliate";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import LeaderSection from "../../Components/Leader/Leader";
import GHLTeamsSection from "../../Components/GHLTeams/GHLTeams";

function TeamPage(){
    return(
        <>
            <HeadTitle title="Our Team - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Meet Our Team" currentPage="Our Team"/>
            <LeaderSection />
            <GHLTeamsSection />
            <AffiliateSection />
            <ChooseUsSection />
        </>
    );
}

export default TeamPage;