import React, { useRef, Suspense, lazy } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import AnimatedButton from "../Button/AnimatedButton";
const FloatingLines = lazy(() => import("../CTA/FloatingLines"));

function BannerHomeSection() {

    const videoContainerRef = useRef(null);

    return (
        <div className="section-banner">
            <AnimateOnScroll animation="fadeInUp">
                <div
                    ref={videoContainerRef}
                    className="banner-video-container keep-dark"
                >
                    {/* FloatingLines Background - Lazy loaded, disabled on mobile */}
                    <div className="banner-visual-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        <Suspense fallback={null}>
                            <FloatingLines
                                linesGradient={['#27428C', '#2F5AA8', '#1A2F5C']}
                                enabledWaves={['top', 'middle', 'bottom']}
                                lineCount={[6, 8, 6]}
                                lineDistance={[5, 6, 5]}
                                animationSpeed={1}
                                interactive={true}
                                bendRadius={5.0}
                                bendStrength={-0.5}
                                mouseDamping={0.05}
                                parallax={true}
                                parallaxStrength={0.2}
                                mixBlendMode="screen"
                            />
                        </Suspense>
                    </div>
                    <div className="hero-container position-relative">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <h1 className="title-heading-banner">
                                    Your Business Growth Starts Here with GHL Octane
                                </h1>
                            </AnimateOnScroll>
                            <div className="banner-heading">

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="banner-video-content order-lg-1 order-2">
                                        <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                                            <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                            <p>
                                                All-in-One GoHighLevel Solutions for Agencies & Businesses
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
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
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>  
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;