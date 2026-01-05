import React from "react";
import { Link } from "react-router-dom";
import SocialButton from "../Social/SocialButton";

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
                                    <img src="/assets/images/GHL Octane Favicon.png" alt="Logo" className="site-logo img-fluid footer-logo-img" />
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
                                        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Home</Link></li>
                                        <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>About Us</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Service</Link></li>
                                        {/* <li><Link to="/case_studies">Case Studies</Link></li> */}
                                        <li><Link to="/portfolio" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Portfolio</Link></li>
                                        <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h5>Services</h5>
                                    <ul className="footer-list">
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Funnel & Landing Page Design</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>CRM & Pipeline Setup</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Automation & Workflow</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>White-Label Agency Builds</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Integrations & AI Enablement</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Chatbots & Voice Agents</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Lead Capture & Nurture</Link></li>
                                        <li><Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Support & Maintenance</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>Contact Info</h5>
                                    <ul className="contact-list">
                                        <li>info@ghloctane.com</li>
                                        <li>+1 234 567 890</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>Social Media</h5>
                                        <div className="social-container">
                                            <SocialButton href="https://facebook.com" icon="facebook" />
                                            <SocialButton href="https://youtube.com" icon="youtube" />
                                            <SocialButton href="https://instagram.com" icon="instagram" />
                                            <SocialButton href="https://linkedin.com" icon="linkedin" />
                                        </div>
                                        <div className="footer-certified-badges">
                                            <img src="/assets/images/certified.png" alt="HighLevel Certified Admin" className="certified-badge-img certified-badge-main" />
                                            <div className="footer-integration-badges">
                                                <img src="https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png" alt="Zapier" className="certified-badge-img" />
                                                <img src="/assets/images/ghl.webp" alt="GoHighLevel" className="certified-badge-img" />
                                                <img src="/assets/images/shopify.webp" alt="Shopify" className="certified-badge-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content-spacer"></div>
                    </div>

                    <div className="copyright-container">
                        <span className="copyright">© 2025 <span className="brand-name">GHL Octane</span>. All Rights Reserved.</span>
                        <div className="d-flex flex-row gspace-2">
                            <a href="#" className="legal-link">Terms of Service</a>
                            <a href="#" className="legal-link">Privacy Policy</a>
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