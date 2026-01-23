import React from "react";
import Image from "next/image";

const WebsiteShowcase = () => {
    // Website template images
    const websites = [
        { id: 1, title: "E-commerce", image: "/assets/images/websites/web1.webp", demoUrl: "https://proservice.ghloctane.com/" },
        { id: 3, title: "Portfolio", image: "/assets/images/websites/web3.webp", demoUrl: "https://remodeling.ghloctane.com/" },
        { id: 4, title: "Business", image: "/assets/images/websites/web4.webp", demoUrl: "https://truvate.ghloctane.com/" },
        { id: 5, title: "SaaS", image: "/assets/images/websites/web5.webp", demoUrl: "https://infiniumtechltd.com/" },
        { id: 6, title: "Agency", image: "/assets/images/websites/web6.webp", demoUrl: "https://octendr.com" },
        { id: 7, title: "Real Estate", image: "/assets/images/websites/web7.webp", demoUrl: "https://syncnova.io" },
        { id: 8, title: "Healthcare", image: "/assets/images/websites/web8.webp", demoUrl: "https://fluxor.ghloctane.com/" },
    ];

    return (
        <div className="section-website-showcase">
            <div className="hero-container">
                <div className="card card-website-showcase">
                        <div className="website-spacer"></div>

                        <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                                    <h3 className="title-heading">TURBO-CHARGED WEBSITES</h3>
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
                                        <div 
                                            key={`right-${index}`} 
                                            className={`website-showcase-slide ${site.demoUrl ? 'website-showcase-demo website-showcase-demo-cursor' : ''}`}
                                            onClick={site.demoUrl ? () => window.open(site.demoUrl, '_blank') : undefined}
                                        >
                                            <Image src={site.image} alt={`${site.title} Website Template`} width={400} height={300} />
                                            {site.demoUrl && (
                                                <div className="website-showcase-overlay">
                                                    <span className="website-showcase-demo-text">Live Demo</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 - Moving Left */}
                            <div className="website-showcase-row">
                                <div className="website-showcase-track website-showcase-left">
                                    {[...websites, ...websites].map((site, index) => (
                                        <div 
                                            key={`left-${index}`} 
                                            className={`website-showcase-slide ${site.demoUrl ? 'website-showcase-demo website-showcase-demo-cursor' : ''}`}
                                            onClick={site.demoUrl ? () => window.open(site.demoUrl, '_blank') : undefined}
                                        >
                                            <Image src={site.image} alt={`${site.title} Website Template`} width={400} height={300} />
                                            {site.demoUrl && (
                                                <div className="website-showcase-overlay">
                                                    <span className="website-showcase-demo-text">Live Demo</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default WebsiteShowcase;

