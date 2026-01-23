import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "../../Data/TestimonialData";
import TestimonialCard from "../Card/TestimonialCard";
import CounterOnScroll from "../Hooks/CounterOnScroll";
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
                                                                <Image src={video.thumbnail} alt={video.name} width={150} height={150} />
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
                        </div>
                        <div className="col col-lg-8">
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
                                                    <Image src={selectedVideo.thumbnail} alt={selectedVideo.name} width={800} height={450} priority />
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
                        </div>
                    </div>

                    {/* Text Testimonials - Fixed 3 Cards (No Carousel) */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {testimonials.slice(0, 3).map((item, index) => (
                            <div key={`testimonial-${index}`} className="col">
                                <TestimonialCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;