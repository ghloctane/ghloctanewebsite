import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaCircle, FaArrowCircleRight } from "react-icons/fa";

const CustomizedDashboardsSection = () => {
    // Dashboard images
    const dashboardImages = [
        { id: 1, url: "/assets/images/dashboard1.webp", title: "Dashboard 1" },
        { id: 2, url: "/assets/images/dashboard2.webp", title: "Dashboard 2" },
        { id: 3, url: "/assets/images/dashboard3.webp", title: "Dashboard 3" },
        { id: 4, url: "/assets/images/dashboard1.webp", title: "Dashboard 4" },
        { id: 5, url: "/assets/images/dashboard2.webp", title: "Dashboard 5" },
        { id: 6, url: "/assets/images/dashboard3.webp", title: "Dashboard 6" },
    ];
    
    const placeholderImages = dashboardImages;

    return (
        <div className="section section-dashboards">
            <div className="hero-container">
                <div className="case-studies-layout">
                    <div className="card card-case-studies">
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                            <div className="col">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="d-flex flex-column gspace-2">
                                        <div className="sub-heading">
                                            <FaCircle />
                                            <span>Customized Dashboards</span>
                                        </div>
                                        <h2 className="title-heading">CUSTOMIZED DASHBOARDS</h2>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                            <div className="col">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="d-flex flex-column h-100 justify-content-end gspace-2">
                                        <p>Tailored dashboards designed to give you complete visibility and control over your business metrics and operations.</p>
                                        <div className="link-wrapper">
                                            <a href="./contact">View All Dashboards</a>
                                            <FaArrowCircleRight />
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>

                        {/* Dashboard Carousel */}
                        <div className="swiperDashboards-layout">
                            <div className="swiperDashboards-overlay">
                                <div className="spacer"></div>
                            </div>

                            <div className="swiperDashboards-container">
                                <Swiper
                                    style={{ height: '400px', minHeight: '400px' }}
                                    modules={[Autoplay]}
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    loop={true}
                                    speed={3000}
                                    autoHeight={false}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    allowTouchMove={false}
                                    breakpoints={{
                                        230: { slidesPerView: 2 },
                                        767: { slidesPerView: 3 },
                                        1024: { slidesPerView: 4 },
                                    }}
                                    className="swiperDashboards"
                                >
                                    {placeholderImages.concat(placeholderImages).map((image, index) => (
                                        <SwiperSlide key={image.id + index}>
                                            <div className="dashboard-slide">
                                                <img 
                                                    src={image.url} 
                                                    alt={`Dashboard ${image.id}`} 
                                                    className="dashboard-image img-fluid" 
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>   
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
        </div>
    );
};

export default CustomizedDashboardsSection;

