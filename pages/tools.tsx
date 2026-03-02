import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import ToolsSection from "../components/Components/Tools/tools";
import FeaturedProjectSection from "../components/Components/FeaturedProject/FeaturedProject";
import ServiceSection from "../components/Components/Services/service";

export default function ToolsPage() {
    return (
        <>
            <SEOHead
                title="GHL Tools & Extensions - GHL Octane"
                description="Premium GoHighLevel tools and extensions to streamline your workflow. Bulk delete templates, manage workflows, and more — built for GHL power users."
                keywords="GoHighLevel tools, GHL extensions, bulk delete workflows, GHL templates, workflow management, GHL automation tools"
            />
            <HeadTitle title="Tools - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Our Tools" currentPage="Tools" />
            <ToolsSection />
            <FeaturedProjectSection />
            <ServiceSection showAll={false} />
        </>
    );
}
