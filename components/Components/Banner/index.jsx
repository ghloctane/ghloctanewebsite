import React, { useRef, Suspense } from "react";
import VideoButton from "../Video/VideoButton";
import AnimatedButton from "../Button/AnimatedButton";
const FloatingLines = React.lazy(() => import("../CTA/FloatingLines"));

function BannerHomeSection() {

    const videoContainerRef = useRef(null);

    return (
        <div className="section-banner">
            <div
                ref={videoContainerRef}
                className="banner-video-container keep-dark"
            >
                <Suspense fallback={null}>
                    <FloatingLines enableOnMobile={true} />
                </Suspense>
                <div className="hero-container position-relative">
                    <div className="d-flex flex-column gspace-2">
                        <h1 className="title-heading-banner">
                            Your Business Growth Starts Here with GHL Octane
                        </h1>
                        <div className="banner-heading">
                            <div className="banner-video-content order-lg-1 order-2">
                                <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                                    <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                    <p>
                                        All-in-One GoHighLevel Solutions for Agencies & Businesses
                                    </p>
                                </div>
                            </div>
                            <div className="banner-content order-lg-2 order-1">
                                <p>
                                    Automate leads, manage clients, scale campaigns, and boost conversions — all powered by GoHighLevel.
                                    We help you set up, optimize, and scale GHL the right way.
                                </p>
                                <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                                    <AnimatedButton href="/book-a-call">
                                        Get Started
                                    </AnimatedButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerHomeSection;