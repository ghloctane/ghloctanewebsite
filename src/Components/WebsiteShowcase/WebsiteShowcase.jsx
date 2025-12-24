import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const WebsiteShowcase = () => {
    // Website template images
    const websites = [
        { id: 1, title: "E-commerce", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80" },
        { id: 2, title: "Landing Page", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80" },
        { id: 3, title: "Portfolio", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&q=80" },
        { id: 4, title: "Business", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80" },
        { id: 5, title: "SaaS", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&q=80" },
        { id: 6, title: "Agency", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80" },
        { id: 7, title: "Real Estate", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80" },
        { id: 8, title: "Healthcare", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&q=80" },
    ];

    return (
        <div className="section-website-showcase">
            <div className="hero-container">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                    <div className="card card-website-showcase">
                        <div className="website-spacer"></div>

                        <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                                    <h3 className="title-heading">FAST WEBSITES</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column ps-lg-3 ps-0">
                                    <p>
                                        Lightning-fast, conversion-optimized websites that integrate seamlessly with your GoHighLevel setup. Built for speed and results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scrolling Rows Container */}
                        <div className="website-showcase-container">
                            {/* Row 1 - Moving Right */}
                            <div className="website-showcase-row">
                                <div className="website-showcase-track website-showcase-right">
                                    {[...websites, ...websites].map((site, index) => (
                                        <div key={`right-${index}`} className="website-showcase-slide">
                                            <img src={site.image} alt={site.title} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 - Moving Left */}
                            <div className="website-showcase-row">
                                <div className="website-showcase-track website-showcase-left">
                                    {[...websites, ...websites].map((site, index) => (
                                        <div key={`left-${index}`} className="website-showcase-slide">
                                            <img src={site.image} alt={site.title} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default WebsiteShowcase;

