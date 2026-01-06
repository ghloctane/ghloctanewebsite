import React from "react";
import { partnerships } from "../../Data/PartnershipData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnershipSection = () => {

    return (
        <div className="section-partner">
            <div className="hero-container">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                    <div className="card card-partner">
                        <div className="partner-spacer"></div>

                        <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                                    <h3 className="title-heading">EXPERTISE</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column ps-lg-3 ps-0">
                                    <p>
                                        Our expertise spans across modern web technologies and digital tools that power today's businesses.
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
                                    modules={[Autoplay]}
                                    slidesPerView={6}
                                    spaceBetween={10}
                                    loop={true}
                                    speed={3000}
                                    autoHeight={false}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    allowTouchMove={true}
                                    touchEventsTarget="container"
                                    breakpoints={{
                                    230: { 
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                        allowTouchMove: true,
                                    },
                                    767: { 
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                        allowTouchMove: true,
                                    },
                                    1024: { 
                                        slidesPerView: 6,
                                        spaceBetween: 10,
                                        allowTouchMove: false,
                                    },
                                    }}
                                    className="swiperPartner"
                                >
                                    {partnerships.concat(partnerships).concat(partnerships).concat(partnerships).map((partner, index) => (
                                    <SwiperSlide key={partner.id + index}>
                                        <div className="partner-slide">
                                            <img src={partner.logo} alt="Client" className="partner-logo img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>   
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default PartnershipSection;
