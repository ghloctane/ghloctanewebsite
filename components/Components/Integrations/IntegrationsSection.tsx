import React from "react";
import Image from "next/image";

const integrations = [
    { name: "Printfull", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a506eacd2a0b72e015.png", alt: "Printfull" },
    { name: "Zapier", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png", alt: "Zapier" },
    { name: "WhatsApp", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67af641f237ce2563df82508.png", alt: "WhatsApp" },
    { name: "Wave", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a572d42b2bbdab113b.png", alt: "Wave" },
    { name: "Facebook", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284bbe3b6a77ac.png", alt: "Facebook" },
    { name: "Stripe", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9493235043e.png", alt: "Stripe" },
    { name: "Shopify", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9500a35043d.png", alt: "Shopify" },
    { name: "TikTok", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a506eacd595072e016.png", alt: "TickTok" },
    { name: "LinkedIn", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a537d82f92fceb7e3d.png", alt: "LinkedIn" },
    { name: "Google", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a54325e150f16636dc.png", alt: "Google" },
    { name: "Slack", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a2b24ca6434.png", alt: "Slack" },
    { name: "Instagram", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9160435043f.png", alt: "Instagram" },
    { name: "WooCommerce", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a1b3eca6435.png", alt: "Woo" },
    { name: "Google Business", src: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5f3bda8b1b50e5c3e.png", alt: "Google Business" },
];

const IntegrationsSection = () => {
    return (
        <div className="section section-integrations">
            <div className="hero-container">
                <div className="card card-integrations">
                    <div className="d-flex flex-column align-items-center text-center gspace-3">
                        <div className="sub-heading">
                            <i className="fa-regular fa-circle-dot"></i>
                            <span>Integrations</span>
                        </div>
                        <h2 className="title-heading">Integrate Your Favorite Tools with GHL</h2>
                        <p className="card-integrations-description">
                            Power up your GoHighLevel with seamless integrations. Connect all your favorite tools and platforms to create the ultimate automation ecosystem.
                        </p>
                    </div>

                    <div className="integrations-scroller-wrapper">
                        <div className="scroller" data-direction="left" data-speed="slow" data-animated="true">
                            <div className="scroller__inner">
                                {integrations.map((integration) => (
                                    <Image
                                        key={integration.name}
                                        src={integration.src}
                                        alt={integration.alt}
                                        width={80}
                                        height={80}
                                        quality={85}
                                        className="integration-logo"
                                    />
                                ))}
                                {integrations.map((integration) => (
                                    <Image
                                        key={`${integration.name}-dup`}
                                        src={integration.src}
                                        alt={integration.alt}
                                        width={80}
                                        height={80}
                                        quality={85}
                                        className="integration-logo"
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="spacer"></div>
                </div>
            </div>
        </div>
    );
};

export default IntegrationsSection;

