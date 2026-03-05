import React, { useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { funnelPortfolio } from "../../Data/FunnelPortfolioData";

interface FunnelPortfolioSectionProps {
    limit?: number | null;
    showViewMore?: boolean;
}

function FunnelPortfolioSection({ limit = null, showViewMore = false }: FunnelPortfolioSectionProps) {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [imageHeights, setImageHeights] = useState<Record<number, number>>({});
    const imageRefs = useRef({});

    // ✅ Image load handler - stores actual image height
    const handleImageLoad = useCallback((itemId, img) => {
        if (!img) return;
        
        requestAnimationFrame(() => {
            // Get actual rendered height of image
            const imgHeight = img.scrollHeight || img.offsetHeight;
            
            if (imgHeight > 0) {
                setImageHeights(prev => {
                    if (prev[itemId] === imgHeight) return prev;
                    return { ...prev, [itemId]: imgHeight };
                });
            }
        });
    }, []);

    // ✅ Calculate how much to scroll on hover
    const getScrollAmount = useCallback((itemId) => {
        const imgHeight = imageHeights[itemId];
        const containerHeight = 500; // Card container height
        
        // If image shorter than container, don't scroll
        if (!imgHeight || imgHeight <= containerHeight) {
            return 0;
        }
        
        // Scroll exactly to show bottom (image height - container height)
        return imgHeight - containerHeight;
    }, [imageHeights]);

    // ✅ Memoized hover handlers
    const handleMouseEnter = useCallback((itemId) => {
        setHoveredCard(itemId);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredCard(null);
    }, []);

    // ✅ Memoized portfolio items
    const displayedItems = useMemo(() => 
        limit ? funnelPortfolio.slice(0, limit) : funnelPortfolio,
        [limit]
    );

    return (
        <div className="section section-funnel">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <div className="d-flex flex-column justify-content-center text-center gspace-2">
                        <div className="sub-heading align-self-center">
                            <i className="fa-regular fa-circle-dot"></i>
                            <span>Our Portfolio</span>
                        </div>

                        <h2 className="title-heading heading-container heading-container-medium">
                            High-Converting Funnels We've Built
                        </h2>

                        <p className="heading-container-medium">
                            Hover over any funnel to see the complete design from top to bottom.
                        </p>
                    </div>

                    <div className="card-funnel-portfolio-wrapper">
                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                            {displayedItems.map((item, index) => (
                                <div className="col" key={item.id}>
                                    <div 
                                        className="card card-funnel-portfolio portfolio-card"
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="portfolio-image-wrapper">
                                            <div className="portfolio-image-scroll">
                                                <div
                                                    ref={(el) => { imageRefs.current[item.id] = el }}
                                                    className="portfolio-image-container"
                                                    style={{
                                                        transform: hoveredCard === item.id 
                                                            ? `translateY(-${getScrollAmount(item.id)}px)` 
                                                            : 'translateY(0px)',
                                                    }}
                                                >
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={800}
                                                        height={2000}
                                                        quality={100}
                                                        unoptimized
                                                        className="portfolio-image"
                                                        onLoad={(e) => handleImageLoad(item.id, e.target)}
                                                        onError={(e) => {
                                                            const img = e.target as HTMLImageElement;
                                                            img.style.display = 'none';
                                                            img.onerror = null;
                                                            if (img.parentElement) {
                                                                img.parentElement.style.backgroundColor = 'var(--accent-color-4)';
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {showViewMore && limit && (
                            <div className="d-flex justify-content-center mt-5">
                                <div className="link-wrapper">
                                    <Link href="/portfolio">View Complete Portfolio</Link>
                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunnelPortfolioSection;
