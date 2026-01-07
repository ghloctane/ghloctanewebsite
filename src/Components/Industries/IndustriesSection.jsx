import React from "react";
import { industries } from "../../Data/IndustriesData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper CSS loaded via CDN in index.html (non-blocking)

const IndustriesSection = () => {

    return (
        <div className="section-partner">
            <div className="hero-container">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                    <div className="card card-partner">
                        <div className="partner-spacer"></div>

                        <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                                    <h3 className="title-heading">INDUSTRIES WE SERVE</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column ps-lg-3 ps-0">
                                    <p>
                                        GoHighLevel works for businesses across all industries. From real estate to healthcare, we help automate operations and scale growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="swiperPartner-layout">
                            <div className="swiperPartner-overlay">
                                <div className="spacer"></div>
                            </div>

                            <div className="swiperPartner-container">
                                <Swiper
                                    style={{ height: '200px', minHeight: '200px' }}
                                    modules={[Autoplay]}
                                    slidesPerView={6}
                                    spaceBetween={20}
                                    loop={true}
                                    speed={5000}
                                    autoHeight={false}
                                    observer={true}
                                    observeParents={true}
                                    watchSlidesProgress={false}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    allowTouchMove={true}
                                    breakpoints={{
                                    230: { slidesPerView: 3, allowTouchMove: true },
                                    767: { slidesPerView: 4, allowTouchMove: true },
                                    1024: { slidesPerView: 6, allowTouchMove: false },
                                    }}
                                    className="swiperPartner"
                                >
                                    {industries.concat(industries).concat(industries).concat(industries).map((industry, index) => {
                                        const icons = {
                                            "Real Estate": "fa-home",
                                            "Healthcare": "fa-heart-pulse",
                                            "Fitness & Wellness": "fa-dumbbell",
                                            "E-commerce": "fa-shopping-cart",
                                            "Coaching & Consulting": "fa-chalkboard-user",
                                            "Legal Services": "fa-scale-balanced",
                                            "Home Services": "fa-tools",
                                            "Automotive": "fa-car",
                                            "Education": "fa-graduation-cap",
                                            "Agencies": "fa-briefcase",
                                            "SaaS": "fa-cloud",
                                            "Restaurants": "fa-utensils"
                                        };
                                        const colors = {
                                            "Real Estate": { bg: "linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%)", icon: "#FFFFFF" },
                                            "Healthcare": { bg: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)", icon: "#FFFFFF" },
                                            "Fitness & Wellness": { bg: "linear-gradient(135deg, #F7B801 0%, #F18701 100%)", icon: "#FFFFFF" },
                                            "E-commerce": { bg: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)", icon: "#FFFFFF" },
                                            "Coaching & Consulting": { bg: "linear-gradient(135deg, #F093FB 0%, #F5576C 100%)", icon: "#FFFFFF" },
                                            "Legal Services": { bg: "linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)", icon: "#FFFFFF" },
                                            "Home Services": { bg: "linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)", icon: "#FFFFFF" },
                                            "Automotive": { bg: "linear-gradient(135deg, #FA709A 0%, #FEE140 100%)", icon: "#FFFFFF" },
                                            "Education": { bg: "linear-gradient(135deg, #30CFD0 0%, #330867 100%)", icon: "#FFFFFF" },
                                            "Agencies": { bg: "linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)", icon: "#27428c" },
                                            "SaaS": { bg: "linear-gradient(135deg, #D299C2 0%, #FEF9D7 100%)", icon: "#27428c" },
                                            "Restaurants": { bg: "linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)", icon: "#FFFFFF" }
                                        };
                                        const industryColor = colors[industry.name] || { bg: "linear-gradient(135deg, #27428c 0%, #3d5ba8 100%)", icon: "#FFFFFF" };
                                        return (
                                            <SwiperSlide key={industry.id + index}>
                                                <div className="partner-slide">
                                                    <div className="d-flex flex-column align-items-center gspace-1 industry-item">
                                                        <div 
                                                            className="industry-icon-wrapper" 
                                                            style={{background: industryColor.bg}}
                                                        >
                                                            <div className="industry-icon" style={{color: industryColor.icon}}>
                                                                <i className={`fa-solid ${icons[industry.name] || "fa-building"}`}></i>
                                                            </div>
                                                        </div>
                                                        <span className="industry-name">{industry.name}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>   
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default IndustriesSection;

