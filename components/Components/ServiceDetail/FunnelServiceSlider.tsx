import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper CSS loaded via CDN in index.html (non-blocking)

interface FunnelServiceSliderProps {
    serviceTitle: string;
}

function FunnelServiceSlider({ serviceTitle }: FunnelServiceSliderProps) {
    const [hoveredSlide, setHoveredSlide] = useState(null);
    const [imageHeights, setImageHeights] = useState({});
    const [imagesLoaded, setImagesLoaded] = useState({});
    const containerHeight = 600;

    // Funnel images array
    const funnelImages = [
        "/assets/images/funnel1.webp",
        "/assets/images/funnel2.webp",
        "/assets/images/funnel3.webp",
        "/assets/images/funnel4.webp"
    ];

    const handleImageLoad = (img, slideIndex) => {
        if (!img) return;
        
        setTimeout(() => {
            const rect = img.getBoundingClientRect();
            const imgHeight = img.offsetHeight || img.naturalHeight || rect.height || 0;
            
            if (imgHeight > 0) {
                setImageHeights(prev => ({
                    ...prev,
                    [slideIndex]: imgHeight
                }));
                setImagesLoaded(prev => ({
                    ...prev,
                    [slideIndex]: true
                }));
            }
        }, 200);
    };

    const getFunnelScrollAmount = (slideIndex) => {
        const imgHeight = imageHeights[slideIndex];
        if (!imgHeight || imgHeight <= containerHeight) {
            return 0;
        }
        return imgHeight - containerHeight;
    };

    return (
        <div className="service-detail-image-container service-funnel-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoHeight={false}
                observer={true}
                observeParents={true}
                watchSlidesProgress={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="service-funnel-swiper"
                style={{
                    width: '100%',
                    height: `${containerHeight}px`,
                    minHeight: '600px',
                }}
            >
                {funnelImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="service-funnel-slide-wrapper"
                            onMouseEnter={() => setHoveredSlide(index)}
                            onMouseLeave={() => setHoveredSlide(null)}
                            style={{ touchAction: 'pan-y', width: '100%', height: '100%' }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: `${containerHeight}px`,
                                    overflow: 'hidden',
                                    backgroundColor: '#f5f5f5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {/* Placeholder/Loading State */}
                                {!imagesLoaded[index] && (
                                    <div className="service-funnel-placeholder" style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#999',
                                        fontSize: '16px',
                                        zIndex: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            border: '3px solid #f3f3f3',
                                            borderTop: '3px solid #27428c',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite'
                                        }}></div>
                                        <span>Loading funnel {index + 1}...</span>
                                    </div>
                                )}
                                
                                {/* Image Container */}
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            opacity: imagesLoaded[index] ? 1 : 0,
                                            transform: hoveredSlide === index 
                                                ? `translate3d(0, -${getFunnelScrollAmount(index)}px, 0)` 
                                                : 'translate3d(0, 0, 0)',
                                            transition: hoveredSlide === index 
                                                ? 'transform 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease' 
                                                : 'transform 0.5s ease-out, opacity 0.3s ease',
                                            pointerEvents: 'none',
                                            willChange: hoveredSlide === index ? 'transform' : 'auto',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                            zIndex: 1
                                        }}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${serviceTitle || 'Funnel'} - ${index + 1}`}
                                            width={1200}
                                            height={600}
                                            quality={85}
                                            className="service-detail-image service-funnel-image"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                minHeight: `${containerHeight}px`,
                                                objectFit: 'contain',
                                                objectPosition: 'top center',
                                                display: 'block',
                                                maxHeight: 'none'
                                            }}
                                            onLoad={(e) => {
                                                handleImageLoad(e.target as HTMLImageElement, index);
                                            }}
                                            onError={() => {
                                                setImagesLoaded(prev => ({
                                                    ...prev,
                                                    [index]: true
                                                }));
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FunnelServiceSlider;

