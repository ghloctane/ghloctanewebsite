import React from "react";
import Image from "next/image";
import { whychooseus } from "../../Data/ChooseUsData";
import ChooseUsCard from "../Card/ChoooseUsCard";

function ChooseUsAboutSection(){

    return(
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="chooseus-card-container">
                            <div className="d-flex flex-column gspace-2">
                                {whychooseus.slice(0, 3).map((item) => (
                                    <ChooseUsCard 
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        content={item.content}
                                        link={item.link}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="chooseus-content-container">
                            <div className="d-flex flex-column gspace-5">
                                <div className="d-flex flex-column gspace-2">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>Why Choose Us</span>
                                    </div>
                                    <h2 className="title-heading">YOUR SUCCESS IS OUR MISSION</h2>
                                    <p className="mb-0">We believe growth comes from systems, not shortcuts. Our mission is to help businesses fully leverage GoHighLevel to automate operations, improve lead quality, and increase revenue.</p>
                                </div>
                                <div className="image-container">
                                    <Image src="/assets/images/team.webp" alt="GHL Octane Team" className="chooseus-img" width={600} height={400} />
                                    <div className="card-chooseus-cta-layout">
                                        <div className="chooseus-cta-spacer"></div>
                                        <div className="d-flex flex-column align-items-end">
                                            <div className="chooseus-cta-spacer"></div>
                                            <div className="card-chooseus-cta-wrapper">
                                                <div className="card card-chooseus-cta">
                                                    <h5>Transform your business with smart GoHighLevel automation.</h5>
                                                    <div className="link-wrapper">
                                                        <a href="./contact">Start Automating Today</a>
                                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        </>
    );
}

export default ChooseUsAboutSection;