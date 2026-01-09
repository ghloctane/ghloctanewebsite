import React from "react";
import { Link } from "react-router-dom";
import { allServicesData } from "../../Data/AllServicesData";
import ServiceCard from "../Card/ServiceCard";
import AnimatedButton from "../Button/AnimatedButton";

function ServiceSection(){

    // Show only first 6 services on home page
    const homeServices = allServicesData.slice(0, 6);

    return(
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Services</span>
                            </div>

                            <h2 className="title-heading heading-container heading-container-medium">
                                DIGITAL SOLUTIONS THAT DRIVE REAL RESULTS
                            </h2>
                        </div>
                        <div className="card-service-wrapper">
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                                {homeServices.map((item, index) => (
                                    <div className="col" key={item.id}>
                                        <ServiceCard 
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.cardDescription}
                                            speed={index % 3 === 0 ? "slow" : index % 3 === 1 ? "normal" : "fast"}
                                            link={`/service#service-${item.id}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Our Services Button */}
                        <div className="d-flex justify-content-center service-button-container">
                            <Link to="/service" className="view-all-services-btn">
                                <span className="btn-text">View All Services</span>
                                <span className="btn-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </div>

                        <div className="service-link-footer">
                            <p>
                                Need a custom solution? Let&apos;s create a strategy tailored for your business.
                                <a href="./contact"> Book Your Free Strategy Call</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSection;