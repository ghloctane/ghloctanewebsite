import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import ModalVideoSection from "../../Components/Video/video";

function TestimonialPage(){
    return(
        <>
            <HeadTitle title="Testimonials - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Testimonials" currentPage="Testimonials" />
            <TestimonialSection />
            <NewsletterSection />
            <BlogSection />
            <ModalVideoSection />
        </>
    );
}

export default TestimonialPage;