import React from "react";
import { allTools } from "../../Data/ToolsData";
import ToolCard from "../Card/ToolCard";

function ToolsSection() {
    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column align-items-center text-center gspace-2">
                    <div className="sub-heading">
                        <i className="fa-regular fa-circle-dot"></i>
                        <span>GHL Tools & Extensions</span>
                    </div>
                    <h2 className="title-heading heading-container heading-container-medium">
                        Premium GHL Tools & Add-Ons
                    </h2>
                    <p className="heading-container-medium">
                        Streamline your GoHighLevel workflow with our premium powerful extensions — designed to save you hours of manual work, boost your agency's productivity, and build like a pro.
                    </p>
                </div>

                <div className="row justify-content-center grid-spacer-5 g-5">
                    {allTools.map((tool) => (
                        <div key={tool.id} className="col-xl-5 col-lg-6 col-md-10 col-12">
                            <ToolCard tool={tool} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToolsSection;
