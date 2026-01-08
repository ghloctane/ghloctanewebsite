import React, { useState, useEffect, Suspense, lazy } from "react";
const FloatingLines = lazy(() => import("./FloatingLines"));
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import AnimatedButton from "../Button/AnimatedButton";

const CTASection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="section section-cta">
            <div className="hero-container">
                <div className="cta-container">
                    {!isMobile && (
                        <div className="cta-floating-lines-wrapper">
                            <Suspense fallback={null}>
                                <FloatingLines
                                    linesGradient={['#27428c', '#a8b8e0']}
                                    enabledWaves={['top', 'middle', 'bottom']}
                                    lineCount={[8, 6, 8]}
                                    lineDistance={[5, 5, 5]}
                                    animationSpeed={0.8}
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
                    )}
                    <div className="cta-content">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="d-flex flex-column gspace-3 text-center">
                                <div className="sub-heading align-self-center">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Ready to Transform Your Business?</span>
                                </div>
                                <h2 className="title-heading">LET'S BUILD SOMETHING AMAZING TOGETHER</h2>
                                <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                                    Get started with GHL Octane today and unlock the power of automation. 
                                    Book your free strategy call and see how we can help scale your business.
                                </p>
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <AnimatedButton href="/book-a-call">
                                        Book Free Strategy Call
                                    </AnimatedButton>
                                    <AnimatedButton href="/service">
                                        View Our Services
                                    </AnimatedButton>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;

