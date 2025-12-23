import React from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function GuideBannerSection(){
    return(
        <>
            <div className="section-guide">
                <div className="guide-banner">
                    <div className="hero-container">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="guide-content">
                                <div className="guide-video-container">
                                    <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                    <p>See How We Help Brands Grow</p>
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">TRANSFORM YOUR BUSINESS WITH MARKETING AUTOMATION</h3>
                                    <p>Automate follow-ups, appointments, pipelines, and client communication — all inside GoHighLevel.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuideBannerSection;