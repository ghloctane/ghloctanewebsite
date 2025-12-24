import React, { useState } from "react";
import { testimonials } from "../../Data/TestimonialData";
import TestimonialCard from "../Card/TestimonialCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestimonialSection = () => {
    // Video testimonials data
    const videoTestimonials = [
        {
            id: 1,
            videoId: "dQw4w9WgXcQ",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            name: "John Smith",
            designation: "CEO, Tech Solutions",
            text: "GHL Octane transformed our entire sales system."
        },
        {
            id: 2,
            videoId: "jNQXAC9IVRw",
            thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
            name: "Sarah Johnson",
            designation: "Marketing Director",
            text: "Best GoHighLevel automation team we've worked with."
        },
        {
            id: 3,
            videoId: "9bZkp7q19f0",
            thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
            name: "Michael Chen",
            designation: "Founder, StartupXYZ",
            text: "Increased our conversion rate by 49% in just 3 months."
        },
        {
            id: 4,
            videoId: "kJQP7kiw5Fk",
            thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
            name: "Emily Davis",
            designation: "Operations Manager",
            text: "Their automation workflows saved us 20 hours per week."
        },
        {
            id: 5,
            videoId: "L_jWHffIx5E",
            thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
            name: "David Wilson",
            designation: "Agency Owner",
            text: "Professional service and exceptional results."
        },
        {
            id: 6,
            videoId: "9bZkp7q19f0",
            thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
            name: "Lisa Anderson",
            designation: "Business Consultant",
            text: "Outstanding automation solutions that saved us time and money."
        },
        {
            id: 7,
            videoId: "kJQP7kiw5Fk",
            thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
            name: "Robert Martinez",
            designation: "Sales Director",
            text: "Game-changing automation that transformed our workflow completely."
        },
        {
            id: 8,
            videoId: "dQw4w9WgXcQ",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            name: "Jennifer Lee",
            designation: "E-commerce Manager",
            text: "Perfect implementation and excellent ongoing support."
        }
    ];

    const [selectedVideo, setSelectedVideo] = useState(videoTestimonials[0]);
    const [visibleVideos, setVisibleVideos] = useState(5); // Initially show 5 videos
    const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track if video is playing
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
                                                                setSelectedVideo(video);
                                                                setIsVideoPlaying(true);
                                                            }}
                                                        >
                                                            <div className="testimonial-video-thumbnail">
                                                                <img src={video.thumbnail} alt={video.name} />
                                                                <div className="play-icon">
                                                                    <i className="fa-solid fa-play"></i>
                                                                </div>
                                                            </div>
                                                            <div className="testimonial-video-info">
                                                                <h6 className="testimonial-video-name">{video.name}</h6>
                                                                <span className="testimonial-video-designation">{video.designation}</span>
                                                                <p className="testimonial-video-text">{video.text}</p>
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
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>What Our Client Says</span>
                                        </div>
                                        <h2 className="title-heading">REAL RESULTS. REAL CLIENTS.</h2>
                                        <p>90% Improvement in Lead Response Time | 49% Increase in Conversion Rate</p>
                                    </div>
                                    <div className="testimonial-video-player">
                                        <div className="video-container">
                                            {!isVideoPlaying ? (
                                                <div 
                                                    className="testimonial-video-thumbnail-large"
                                                    onClick={() => setIsVideoPlaying(true)}
                                                >
                                                    <img src={selectedVideo.thumbnail} alt={selectedVideo.name} />
                                                    <div className="play-icon-large">
                                                        <i className="fa-solid fa-play"></i>
                                                    </div>
                                                </div>
                                            ) : (
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                                                    title={selectedVideo.name}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="testimonial-iframe"
                                                ></iframe>
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

                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column">
                            <div className="overflow-hidden">
                                <Swiper
                                slidesPerView={3} 
                                spaceBetween={50} 
                                speed={1000} 
                                loop={true}
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
                                    {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
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