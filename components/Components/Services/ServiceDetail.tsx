import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { services, serviceDetails } from "../../Data/ServiceData";
import BannerInnerSection from "../Banner/Inner";

const ServiceDetailSection = () => {
    const router = useRouter();
    const id = router.query.id as string | undefined;
    const service = id ? services.find(s => s.id === parseInt(id, 10)) : undefined;

    if (!service) {
        return (
            <div className="section">
                <div className="hero-container">
                    <h2>Service not found</h2>
                </div>
            </div>
        );
    }

    const detail = serviceDetails[service.id] || serviceDetails[1];

    return (
        <>
            <BannerInnerSection title={service.title} currentPage="Service Details" />
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="about-img-layout">
                            <div className="image-container about-img">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={320}
                                    height={320}
                                    quality={85}
                                    className="img-fluid service-detail-image"
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
                                            {detail.features.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h5>Benefits</h5>
                                        <ul className="check-list">
                                            {detail.benefits.map((benefit) => (
                                                <li key={benefit}>{benefit}</li>
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

