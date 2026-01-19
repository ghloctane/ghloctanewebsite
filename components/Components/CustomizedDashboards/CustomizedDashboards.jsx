import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper CSS loaded via CDN in index.html (non-blocking)
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
                                <div className="d-flex flex-column gspace-2">
                                    <div className="sub-heading">
                                        <FaCircle />
                                        <span>Customized Dashboards</span>
                                    </div>
                                    <h2 className="title-heading">CUSTOMIZED DASHBOARDS</h2>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column h-100 justify-content-end gspace-2">
                                    <p>Tailored dashboards designed to give you complete visibility and control over your business metrics and operations.</p>
                                    <div className="link-wrapper">
                                        <a href="./contact">View All Dashboards</a>
                                        <FaArrowCircleRight />
                                    </div>
                                </div>
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
                                    slidesPerView={'auto'}
                                    spaceBetween={20}
                                    loop={true}
                                    speed={3000}
                                    autoHeight={false}
                                    observer={false}
                                    observeParents={false}
                                    watchSlidesProgress={false}
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                        waitForTransition: false,
                                    }}
                                    allowTouchMove={true}
                                    updateOnWindowResize={false}
                                    className="swiperDashboards"
                                >
                                    {placeholderImages.concat(placeholderImages).map((image, index) => (
                                        <SwiperSlide key={`dashboard-${index}`}>
                                            <div className="dashboard-slide">
                                                <Image 
                                                    src={image.url} 
                                                    alt={image.title} 
                                                    className="dashboard-image"
                                                    width={600}
                                                    height={400}
                                                    loading="lazy"
                                                    style={{ width: '100%', height: 'auto' }}
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

