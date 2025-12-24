import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import { allServicesData } from "../../Data/AllServicesData";
import ServiceCard from "../../Components/Card/ServiceCard";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import HeadTitle from "../../Components/Head/HeadTitle";

function ServicePage(){
    return(
        <>
            <HeadTitle title="Our Services - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Our Services" currentPage="Services" />
            
            {/* All Services Section */}
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">    
                                <div className="sub-heading align-self-center">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>What We Offer</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <h2 className="title-heading heading-container heading-container-medium">
                                    Complete GoHighLevel Solutions
                                </h2>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    From funnel design to AI automation, we provide everything you need to scale your agency and deliver exceptional results to your clients.
                                </p>
                            </AnimateOnScroll>
                        </div>
                        
                        <div className="card-service-wrapper">
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                                {allServicesData.map((item, index) => (
                                    <div className="col" key={item.id}>
                                        <ServiceCard 
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.cardDescription}
                                            speed={index % 3 === 0 ? "slow" : index % 3 === 1 ? "normal" : "fast"}
                                            link={`/service/${item.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="service-link-footer">
                            <p>
                                Need a custom solution? Let&apos;s create a strategy tailored for your business.
                                <a href="./contact"> Book Your Free Strategy Call</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <GuideBannerSection />
            <ModalVideoSection />
            <PricingPlanSection />
        </>
    );
}

export default ServicePage;