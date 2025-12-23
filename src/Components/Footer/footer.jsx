import React from "react";
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
                                    <img src="/assets/images/GHL Octane Final.png" alt="Logo" className="site-logo img-fluid" />
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
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/service">Service</a></li>
                                        <li><a href="/case_studies">Case Studies</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h5>Services</h5>
                                    <ul className="footer-list">
                                        <li><a href="/contact">Social Media Marketing</a></li>
                                        <li><a href="/contact">SEO Optimization</a></li>
                                        <li><a href="/contact">PPC Advertising</a></li>
                                        <li><a href="/contact">Content Marketing</a></li>
                                        <li><a href="/contact">Branding Strategy</a></li>
                                        <li><a href="/contact">Email Marketing</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>Contact Info</h5>
                                    <ul className="contact-list">
                                        <li>hello@markoagency.com</li>
                                        <li>+1 234 567 890</li>
                                        <li>123 Digital Street, New York, USA</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>Social Media</h5>
                                        <div className="social-container">
                                            <SocialButton href="https://facebook.com" icon="facebook" />
                                            <SocialButton href="https://youtube.com" icon="youtube" />
                                            <SocialButton href="https://instagram.com" icon="instagram" />
                                            <SocialButton href="https://linkedin.com" icon="linkedin" />
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