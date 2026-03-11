import React from "react";

const BannerInnerSection = ({ title, currentPage }) => {
    return (
        <div className="section-banner">
            <div className="banner-layout-wrapper banner-inner">
                <div className="banner-layout">
                    <div className="d-flex flex-column text-center align-items-center gspace-2">
                        <h2 className="title-heading">
                            {title}
                        </h2>
                        <nav className="breadcrumb breadcrumb-modern" aria-label="Breadcrumb">
                            <a href="/">Home</a>
                            <span className="breadcrumb-sep">›</span>
                            <span className="breadcrumb-current">{currentPage}</span>
                        </nav>
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
        </div>
    );
};

export default BannerInnerSection;