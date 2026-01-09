import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../Data/ServiceData";
import BannerInnerSection from "../Banner/Inner";

const ServiceDetailSection = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === parseInt(id));

    if (!service) {
        return (
            <div className="section">
                <div className="hero-container">
                    <h2>Service not found</h2>
                </div>
            </div>
        );
    }

    const serviceDetails = {
        1: {
            title: "Social Media Automation",
            description: "Transform your social media presence into a powerful lead generation machine with our comprehensive automation solutions.",
            features: [
                "Automated lead capture from Facebook, Instagram, and LinkedIn ads",
                "Smart DM follow-up sequences",
                "Lead qualification and routing",
                "Integration with GoHighLevel CRM",
                "Real-time notifications and alerts",
                "Performance tracking and analytics"
            ],
            benefits: [
                "Never miss a lead again",
                "24/7 automated follow-up",
                "Improved response times",
                "Higher conversion rates",
                "Reduced manual work"
            ]
        },
        2: {
            title: "Funnel & Website Design",
            description: "Create high-converting funnels and websites directly inside GoHighLevel that turn visitors into customers.",
            features: [
                "Custom funnel design and development",
                "Mobile-responsive layouts",
                "A/B testing capabilities",
                "Payment integration",
                "Email and SMS automation triggers",
                "Analytics and conversion tracking"
            ],
            benefits: [
                "All-in-one platform solution",
                "Faster page load times",
                "Better user experience",
                "Higher conversion rates",
                "Easy to manage and update"
            ]
        },
        3: {
            title: "PPC & Tracking Setup",
            description: "Set up pixel-perfect tracking for Facebook, Google, and TikTok ads to maximize your ROI and optimize campaigns.",
            features: [
                "Facebook Pixel installation and configuration",
                "Google Analytics 4 setup",
                "TikTok Pixel integration",
                "Conversion tracking setup",
                "Event tracking configuration",
                "Custom audience creation"
            ],
            benefits: [
                "Accurate campaign tracking",
                "Better ad optimization",
                "Improved ROI measurement",
                "Data-driven decisions",
                "Reduced ad spend waste"
            ]
        },
        4: {
            title: "Email & SMS Marketing",
            description: "Build automated email and SMS sequences that nurture leads and convert them into loyal customers.",
            features: [
                "Email sequence design and setup",
                "SMS automation workflows",
                "Segmentation and personalization",
                "A/B testing for subject lines",
                "Automated drip campaigns",
                "Performance analytics"
            ],
            benefits: [
                "Increased engagement rates",
                "Better customer retention",
                "Automated nurturing",
                "Higher open and click rates",
                "Scalable communication"
            ]
        },
        5: {
            title: "Branding & Workflow Design",
            description: "Professional branding and workflow design that streamlines your operations and enhances your brand identity.",
            features: [
                "Custom branding and design",
                "Workflow automation setup",
                "Client portal customization",
                "Document templates",
                "Email signature design",
                "Brand guideline implementation"
            ],
            benefits: [
                "Consistent brand experience",
                "Streamlined operations",
                "Professional appearance",
                "Improved client satisfaction",
                "Time-saving automation"
            ]
        },
        6: {
            title: "Web Development",
            description: "Fast, conversion-focused websites integrated seamlessly with GoHighLevel for maximum performance.",
            features: [
                "Custom website development",
                "GoHighLevel integration",
                "Fast loading times",
                "SEO optimization",
                "Mobile-responsive design",
                "Conversion-focused layouts"
            ],
            benefits: [
                "Better search rankings",
                "Faster page speeds",
                "Higher conversions",
                "Seamless GHL integration",
                "Professional web presence"
            ]
        }
    };

    const detail = serviceDetails[service.id] || serviceDetails[1];

    return (
        <>
            <BannerInnerSection title={service.title} currentPage="Service Details" />
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="about-img-layout">
                            <div className="image-container about-img">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="img-fluid service-detail-image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="about-title">
                            <div className="d-flex flex-column gspace-2">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Service Details</span>
                                </div>

                                <h2 className="title-heading">{detail.title}</h2>

                                <p>{detail.description}</p>

                                <div className="d-flex flex-column gspace-3">
                                    <div>
                                        <h5>Key Features</h5>
                                        <ul className="check-list">
                                            {detail.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h5>Benefits</h5>
                                        <ul className="check-list">
                                            {detail.benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="link-wrapper service-detail-link-wrapper">
                                        <a href="./contact">
                                            Get Started
                                            <i className="fa-solid fa-circle-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailSection;

