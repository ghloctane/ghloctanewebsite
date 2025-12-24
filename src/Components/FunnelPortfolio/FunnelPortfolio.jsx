import React, { useState, useRef, useEffect } from "react";
import { funnelPortfolio } from "../../Data/FunnelPortfolioData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function FunnelPortfolioSection() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const imageRefs = useRef({});
    const [imageHeights, setImageHeights] = useState({});
    const containerHeight = 500;

    const handleImageLoad = (itemId, img) => {
        // Calculate after image loads
        setTimeout(() => {
            if (!img) return;
            
            // Get the actual rendered height of the image
            const rect = img.getBoundingClientRect();
            const imgHeight = img.offsetHeight || rect.height || 0;
            
            console.log(`[${itemId}] Image loaded - Height: ${imgHeight}px, Container: ${containerHeight}px`);
            
            if (imgHeight > 0) {
                setImageHeights(prev => ({
                    ...prev,
                    [itemId]: imgHeight
                }));
            }
        }, 200);
    };

    // Calculate scroll amount when hovering
    const getScrollAmount = (itemId) => {
        const imgHeight = imageHeights[itemId];
        if (!imgHeight || imgHeight <= containerHeight) {
            return 0;
        }
        
        // Maximum scroll = image height - container height
        // This will show the bottom of the image when fully scrolled
        const maxScroll = imgHeight - containerHeight;
        console.log(`[${itemId}] Scroll Amount: ${maxScroll}px (${imgHeight}px - ${containerHeight}px)`);
        return maxScroll;
    };

    return (
        <div className="section section-funnel">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <div className="d-flex flex-column justify-content-center text-center gspace-2">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">    
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Portfolio</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <h2 className="title-heading heading-container heading-container-medium">
                                FUNNEL PORTFOLIO
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ marginTop: '14px', opacity: 0.8, fontSize: '14px', lineHeight: '1.65' }}>
                                Hover over any funnel to explore the complete design
                            </p>
                        </AnimateOnScroll>
                    </div>
                    <div className="card-funnel-portfolio-wrapper">
                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                            {funnelPortfolio.map((item, index) => (
                                <div className="col" key={item.id}>
                                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={index * 0.1}>
                                        <div 
                                            className="card card-funnel-portfolio portfolio-card"
                                            onMouseEnter={() => setHoveredCard(item.id)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            style={{ touchAction: 'pan-y', willChange: 'auto' }}
                                        >
                                            <div 
                                                className="portfolio-image-wrapper"
                                                style={{
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '500px',
                                                    overflow: 'hidden',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <div
                                                    className="portfolio-image-scroll"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    <div
                                                        ref={(el) => { imageRefs.current[item.id] = el }}
                                                        style={{
                                                            width: '100%',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            transform: hoveredCard === item.id 
                                                                ? `translateY(-${getScrollAmount(item.id)}px)` 
                                                                : 'translateY(0)',
                                                            transition: hoveredCard === item.id 
                                                                ? 'transform 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                                                                : 'transform 0.5s ease-out',
                                                            pointerEvents: 'none'
                                                        }}
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="img-fluid"
                                                            style={{
                                                                width: '100%',
                                                                height: 'auto',
                                                                objectFit: 'contain',
                                                                objectPosition: 'top center',
                                                                display: 'block',
                                                                maxHeight: 'none'
                                                            }}
                                                            onLoad={(e) => {
                                                                handleImageLoad(item.id, e.target);
                                                            }}
                                                            onError={(e) => {
                                                                e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=2000&fit=crop&q=80";
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunnelPortfolioSection;
