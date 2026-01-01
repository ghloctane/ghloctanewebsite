import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AffiliateSection from "../../Components/Affiliate/Affiliate";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function AffiliatePage(){
    return(
        <>
            <HeadTitle title="Affiliate Program - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Affiliate Program" currentPage="Affiliate"/>
            <AffiliateSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
        </>
    );
}

export default AffiliatePage;

