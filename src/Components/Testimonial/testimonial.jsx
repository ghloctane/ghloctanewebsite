import React, { useState, useRef, useEffect } from "react";
import { testimonials } from "../../Data/TestimonialData";
import TestimonialCard from "../Card/TestimonialCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS loaded via CDN in index.html (non-blocking)
import { FaPlay, FaCircle } from "react-icons/fa";

const TestimonialSection = () => {
    // Original video testimonials only - Using Vimeo embeds
    const videoTestimonials = [
        {
            id: 1,
            videoId: "https://player.vimeo.com/video/1151987657?autoplay=1&title=0&byline=0&portrait=0",
            thumbnail: "/assets/testimonials/rathna.png",
            name: "Rathna Rama krishna",
            designation: "RemodelerDigital CEO",
            text: "Zeeshan Haider is an expert GoHighLevel specialist with exceptional skills in workflows, landing pages, graphic design, and integrations, making complex setups feel easy. His calm, friendly nature, availability across time zones, and genuine enthusiasm to help make him a reliable go-to tech partner and a true secret weapon.",
            isVimeo: true
        },
        {
            id: 2,
            videoId: "https://player.vimeo.com/video/1151987917?autoplay=1&title=0&byline=0&portrait=0",
            thumbnail: "/assets/testimonials/marwyn.png",
            name: "Marwyn",
            designation: "15xmybusiness CEO",
            text: "Hello everyone, this is Marwyn, the CEO of 15x Business Solutions, the 15x Business Hacker King. Would like to give a shout out to Zeeshan. If I could give Zeeshan 100 star reviews, I'll give Zeeshan 100 star reviews",
            isVimeo: true
        },
        {
            id: 3,
            videoId: "https://player.vimeo.com/video/1151988060?autoplay=1&title=0&byline=0&portrait=0",
            thumbnail: "/assets/testimonials/Michael Sean.png",
            name: "Michael Chen",
            designation: "CEO",
            text: "Michael Sean highly recommends Zeeshan Haider for anything GoHighLevel, praising his lightning-fast communication and exceptional turnaround time. From automations to graphic design and tools, Zeeshan delivers top-level results and is a go-to expert.",
            isVimeo: true
        },
        {
            id: 4,
            videoId: "https://player.vimeo.com/video/1151988217?autoplay=1&title=0&byline=0&portrait=0",
            thumbnail: "/assets/testimonials/Matt.png",
            name: "Matt",
            designation: "CEO",
            text: "Matt highly recommends Zeeshan and his team for GoHighLevel, praising their expertise in setting up accounts, workflows, and custom solutions. Zeeshan is always available, responsive, and a reliable partner for anything related to HighLevel.",
            isVimeo: true
        }
    ];

    const [selectedVideo, setSelectedVideo] = useState(videoTestimonials[0]);
    const [visibleVideos, setVisibleVideos] = useState(5); // Initially show 5 videos
    const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track if video is playing
    const videoPlayerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [hasUserInteracted, setHasUserInteracted] = useState(false); // Track if user clicked a video

    // Check if mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll to video player on mobile ONLY when user clicks a video (not on initial load)
    useEffect(() => {
        if (isMobile && videoPlayerRef.current && selectedVideo && hasUserInteracted) {
            setTimeout(() => {
                videoPlayerRef.current?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
            }, 100);
        }
    }, [selectedVideo, isMobile, hasUserInteracted]);
    return (
        <div className="section section-testimonial">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                        <div className="col col-lg-4">
                            <AnimateOnScroll animation="fadeInDown" speed="fast">
                                <div className="testimonial-header-wrapper">
                                    <div className="card card-testimonial-reviewer">
                                        <div className="testimonial-video-list-container">
                                            <div 
                                                className="testimonial-video-list"
                                                onScroll={(e) => {
                                                    const element = e.target;
                                                    const scrollBottom = element.scrollHeight - element.scrollTop - element.clientHeight;
                                                    // Load more videos when near bottom
                                                    if (scrollBottom < 50 && visibleVideos < videoTestimonials.length) {
                                                        setVisibleVideos(prev => Math.min(prev + 2, videoTestimonials.length));
                                                    }
                                                }}
                                            >
                                                <div className="testimonial-video-scroll">
                                                    {videoTestimonials.slice(0, visibleVideos).map((video) => (
                                                        <div 
                                                            key={video.id}
                                                            className={`testimonial-video-item ${selectedVideo.id === video.id ? 'active' : ''}`}
                                                            onClick={() => {
                                                                setHasUserInteracted(true); // Mark that user clicked
                                                                setSelectedVideo(video);
                                                                setIsVideoPlaying(true);
                                                            }}
                                                        >
                                                            <div className="testimonial-video-thumbnail">
                                                                <img src={video.thumbnail} alt={video.name} loading="lazy" />
                                                                <div className="play-icon">
                                                                    <FaPlay />
                                                                </div>
                                                            </div>
                                                            <div className="testimonial-video-info">
                                                                <h6 className="testimonial-video-name">{video.name}</h6>
                                                                <span className="testimonial-video-designation">{video.designation}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="testimonial-video-stats">
                                                <div className="card card-expertise">
                                                    <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between gspace-3">
                                                        <div className="testimonial-reviewer">
                                                            <div className="detail">
                                                                <h6>2.7k Positive</h6>
                                                                <h6>Reviews</h6>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-rating-container">
                                                            <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <CounterOnScroll
                                                                        target={90}
                                                                        suffix="%"
                                                                        counterClassName="counter"
                                                                        suffixClassName="counter-detail"
                                                                    />
                                                                </div>
                                                                <p>Improvement in Lead Response Time</p>
                                                            </div>
                                                            <div className="underline-vertical"></div>
                                                            <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <CounterOnScroll
                                                                        target={49}
                                                                        suffix="%"
                                                                        counterClassName="counter"
                                                                        suffixClassName="counter-detail"
                                                                    />
                                                                </div>
                                                                <p>Increase in Conversion Rate</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col col-lg-8">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="testimonial-header-wrapper-title">
                                    <div className="card-testimonial-header-title">
                                        <div className="sub-heading">
                                            <FaCircle />
                                            <span>What Our Client Says</span>
                                        </div>
                                        <h2 className="title-heading">REAL RESULTS. REAL CLIENTS.</h2>
                                        <p>90% Improvement in Lead Response Time | 49% Increase in Conversion Rate</p>
                                    </div>
                                    <div className="testimonial-video-player" ref={videoPlayerRef}>
                                        <div className="video-container">
                                            {!isVideoPlaying ? (
                                                <div 
                                                    className="testimonial-video-thumbnail-large"
                                                    onClick={() => setIsVideoPlaying(true)}
                                                >
                                                    <img src={selectedVideo.thumbnail} alt={selectedVideo.name} loading="eager" />
                                                    <div className="play-icon-large">
                                                        <FaPlay />
                                                    </div>
                                                </div>
                                            ) : (
                                                selectedVideo.isVimeo ? (
                                                    <iframe
                                                        src={selectedVideo.videoId}
                                                        width="100%"
                                                        height="100%"
                                                        frameBorder="0"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                        className="testimonial-iframe"
                                                        title={selectedVideo.name}
                                                    ></iframe>
                                                ) : (
                                                    <video
                                                        width="100%"
                                                        height="100%"
                                                        src={selectedVideo.videoId}
                                                        controls
                                                        autoPlay
                                                        playsInline
                                                        preload="none"
                                                        type="video/mp4"
                                                        className="testimonial-iframe"
                                                    >
                                                        Your browser does not support the video tag.
                                                    </video>
                                                )
                                            )}
                                        </div>
                                        <div className="testimonial-video-player-info">
                                            <h5>{selectedVideo.name}</h5>
                                            <span>{selectedVideo.designation}</span>
                                            <p>{selectedVideo.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* Text Testimonials Carousel - First 3 only */}
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column">
                            <div className="overflow-hidden">
                                <Swiper
                                className="testimonial-video-container"
                                slidesPerView={3} 
                                spaceBetween={50} 
                                speed={1000} 
                                loop={testimonials.slice(0, 3).length >= 6} // Fix: Only enable loop if we have enough slides (slidesPerView * 2)
                                autoHeight={false}
                                observer={true}
                                observeParents={true}
                                watchSlidesProgress={false}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                breakpoints={{
                                    230: { slidesPerView: 1 },
                                    767: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="swiperTestimonial">
                                    {/* Fix: Duplicate slides for smooth loop when enabled */}
                                    {testimonials.slice(0, 3).concat(testimonials.slice(0, 3)).map((item, index) => (
                                    <SwiperSlide key={`${item.id}-${index}`}>
                                        <TestimonialCard {...item} />
                                    </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;