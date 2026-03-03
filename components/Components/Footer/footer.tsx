import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialButton from "../Social/SocialButton";

const scrollToTop = () => {
    if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
};

const Footer = () => {

    return (
        <div className="section-footer">
            <div className="bg-footer-wrapper">
                <div className="bg-footer">
                    <div className="hero-container position-relative z-2">
                        <div className="d-flex flex-column gspace-2">
                            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                                <div className="col col-lg-4">
                                    <div className="footer-logo-container">
                                        <div className="logo-container-footer">
                                            <Image src="/assets/images/GHL Octane Favicon.webp" alt="GHL Octane Logo" className="site-logo img-fluid footer-logo-img" width={300} height={300} />
                                        </div>
                                        <h4><span className="brand-name">GHL Octane</span> — Driving Growth Through Smart GoHighLevel Systems.</h4>
                                        <p>
                                            We help agencies and businesses automate leads, manage clients, scale campaigns, and boost conversions — all powered by GoHighLevel.
                                        </p>
                                    </div>
                                </div>

                                <div className="col col-lg-2">
                                    <div className="footer-quick-links">
                                        <h5>Quick Links</h5>
                                        <ul className="footer-list">
                                            <li><Link href="/" onClick={scrollToTop}>Home</Link></li>
                                            <li><Link href="/about" onClick={scrollToTop}>About Us</Link></li>
                                            <li><Link href="/service" onClick={scrollToTop}>Service</Link></li>
                                            <li><Link href="/portfolio" onClick={scrollToTop}>Portfolio</Link></li>
                                            <li><Link href="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col col-lg-3">
                                    <div className="footer-services-container">
                                        <h5>Services</h5>
                                        <ul className="footer-list">
                                            <li><Link href="/service/funnel-landing-page-design" onClick={scrollToTop}>Funnel & Landing Page Design</Link></li>
                                            <li><Link href="/service/crm-pipeline-setup" onClick={scrollToTop}>CRM & Pipeline Setup</Link></li>
                                            <li><Link href="/service/automation-workflow" onClick={scrollToTop}>Automation & Workflow</Link></li>
                                            <li><Link href="/service/white-label-agency" onClick={scrollToTop}>White-Label Agency Builds</Link></li>
                                            <li><Link href="/service/integrations-ai" onClick={scrollToTop}>Integrations & AI Enablement</Link></li>
                                            <li><Link href="/service/chatbots-voice-agents" onClick={scrollToTop}>Chatbots & Voice Agents</Link></li>
                                            <li><Link href="/service/lead-capture-nurture" onClick={scrollToTop}>Lead Capture & Nurture</Link></li>
                                            <li><Link href="/service/support-maintenance-training" onClick={scrollToTop}>Support & Maintenance</Link></li>
                                            <li><Link href="/service/api-integration" onClick={scrollToTop}>API Integration</Link></li>
                                            <li><Link href="/service/compliance-a2p-registration" onClick={scrollToTop}>Compliance & A2P Registration</Link></li>
                                            <li><Link href="/service/social-media-marketing" onClick={scrollToTop}>Social Media Marketing</Link></li>
                                            <li><Link href="/service/development" onClick={scrollToTop}>Development</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col col-lg-3">
                                    <div className="footer-contact-container">
                                        <h5>Contact Info</h5>
                                        <ul className="contact-list">
                                            <li>info@ghloctane.com</li>
                                            <li>+1 385 390 5354</li>
                                        </ul>
                                        <div className="d-flex flex-column gspace-1">
                                            <h5>Social Media</h5>
                                            <div className="social-container">
                                                <SocialButton href="https://www.facebook.com/ghloctane" icon="facebook" />
                                                <SocialButton href="https://www.youtube.com/@ghloctane" icon="youtube" />
                                                <SocialButton href="https://www.instagram.com/ghloctane" icon="instagram" />
                                                <SocialButton href="https://www.linkedin.com/company/ghloctane" icon="linkedin" />
                                            </div>
                                            <div className="footer-certified-badges">
                                                <Image src="/assets/images/certified.webp" alt="HighLevel Certified Admin" className="certified-badge-img certified-badge-main" width={200} height={200} />
                                                <div className="footer-integration-badges">
                                                    <Image src="https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png" alt="Zapier" className="certified-badge-img" width={70} height={70} />
                                                    <Image src="/assets/images/ghl.webp" alt="GoHighLevel" className="certified-badge-img" width={70} height={70} />
                                                    <Image src="/assets/images/shopify.webp" alt="Shopify" className="certified-badge-img" width={70} height={70} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="footer-content-spacer"></div>
                        </div>

                        {/* 3D Brand Text Banner - Before Copyright */}
                        <div className="footer-3d-text-container">
                            {/* Animated Arrows - Left Side */}
                            <div className="footer-arrows footer-arrows-left">
                                <div className="arrow-item arrow-1">↗</div>
                                <div className="arrow-item arrow-2">↗</div>
                                <div className="arrow-item arrow-3">↗</div>
                            </div>

                            <h1 className="footer-3d-text">
                                <span className="letter-g">G</span>
                                <span className="letter-h">H</span>
                                <span className="letter-l">L</span>
                                <span className="space"> </span>
                                <span className="word-octane">OCTANE</span>
                            </h1>

                            {/* Animated Arrows - Right Side */}
                            <div className="footer-arrows footer-arrows-right">
                                <div className="arrow-item arrow-1">↗</div>
                                <div className="arrow-item arrow-2">↗</div>
                                <div className="arrow-item arrow-3">↗</div>
                            </div>
                        </div>

                        <div className="copyright-container">
                            <span className="copyright">© {new Date().getFullYear()} <span className="brand-name">GHL Octane</span>. All Rights Reserved.</span>
                            <div className="d-flex flex-row gspace-2">
                                <Link href="/contact" className="legal-link">Terms of Service</Link>
                                <Link href="/contact" className="legal-link">Privacy Policy</Link>
                            </div>
                        </div>

                        <div className="footer-spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;