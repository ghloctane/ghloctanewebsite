import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import ServiceDetailSection from "../../Components/Services/ServiceDetail";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function ServiceDetailPage(){
    return(
        <>
            <HeadTitle title="Service Details - GHL Octane - GoHighLevel Solutions" />
            <ServiceDetailSection />
            <TestimonialSection />
            <NewsletterSection />
        </>
    );
}

export default ServiceDetailPage;

