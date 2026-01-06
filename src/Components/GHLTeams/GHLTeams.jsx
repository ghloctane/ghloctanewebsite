import React from "react";
import { ghlTeamsData } from "../../Data/GHLTeamsData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import BackgroundPaths from "../BackgroundPaths/BackgroundPaths";

const GHLTeamsSection = () => {
    return (
        <div className="section section-ghl-teams">
            <BackgroundPaths />
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="d-flex flex-column justify-content-center text-center gspace-2">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Teams</span>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <h2 className="title-heading heading-container heading-container-medium">
                                OUR GHL EXPERTISE TEAMS
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <p style={{maxWidth: '700px', margin: '0 auto'}}>
                                Meet the specialized teams behind GHL Octane, each focused on delivering excellence in their domain.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="d-flex flex-column gspace-4">
                        {ghlTeamsData.map((team, index) => (
                            <div key={team.id} className="ghl-team-item">
                                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 align-items-center">
                                    {/* Left Side - Text Content */}
                                    <div className={`col ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                                        <AnimateOnScroll 
                                            animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} 
                                            speed="normal"
                                        >
                                            <div className="d-flex flex-column gspace-3 text-start">
                                                <div className="ghl-team-number">
                                                    {team.number}
                                                </div>
                                                <h3 className="ghl-team-title">{team.title}</h3>
                                                <p className="ghl-team-description">{team.description}</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

                                    {/* Right Side - Representation/Visual */}
                                    <div className={`col ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                                        <AnimateOnScroll 
                                            animation={index % 2 === 0 ? "fadeInRight" : "fadeInLeft"} 
                                            speed="normal"
                                        >
                                            <div className="ghl-team-representation">
                                                <img 
                                                    src={team.representation || "/assets/images/services/automation.webp"} 
                                                    alt={team.title}
                                                    className="ghl-team-image"
                                                />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GHLTeamsSection;

