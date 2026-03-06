import React from "react";
import Image from "next/image";
import { partnerships } from "../../Data/PartnershipData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper CSS loaded via CDN in index.html (non-blocking)

const PartnershipSection = () => {

    return (
        <div className="section-partner">
            <div className="hero-container">
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
                                speed={5000}
                                autoHeight={false}
                                observer={true}
                                observeParents={true}
                                watchSlidesProgress={false}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
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
                                {partnerships.map((partner) => (
                                    <SwiperSlide key={`partner-${partner.id}`}>
                                        <div className="partner-slide">
                                            <Image src={partner.logo} alt={partner.name} className="partner-logo img-fluid" width={240} height={120} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipSection;
