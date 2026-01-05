import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ContactSection from "../../Components/Contact/contact";

function ContactPage(){
    return(
        <>
            <HeadTitle title="Contact Us - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Contact Us" currentPage="Contact Us" />
            <ContactSection />
        </>
    );
}

export default ContactPage;