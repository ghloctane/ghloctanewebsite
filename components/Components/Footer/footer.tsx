import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialButton from "../Social/SocialButton";

const scrollToTop = () => {
    if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
};

const Footer = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.trim() || !pattern.test(email)) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2500);
            return;
        }
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
    };
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
                                            <Image src="/assets/images/GHL Octane Favicon.webp" alt="GHL Octane Logo" className="site-logo img-fluid footer-logo-img" width={300} height={300} quality={100} />
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
                                                <Image src="/assets/images/certified.webp" alt="HighLevel Certified Admin" className="certified-badge-img certified-badge-main" width={200} height={200} quality={100} />
                                                <div className="footer-integration-badges">
                                                    <Image src="https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png" alt="Zapier" className="certified-badge-img" width={70} height={70} quality={100} unoptimized />
                                                    <Image src="/assets/images/ghl.webp" alt="GoHighLevel" className="certified-badge-img" width={70} height={70} quality={100} />
                                                    <Image src="/assets/images/shopify.webp" alt="Shopify" className="certified-badge-img" width={70} height={70} quality={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Compact Newsletter */}
                            <div style={{
                                marginTop: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '16px',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                                    <span style={{
                                        width: '48px',
                                        height: '48px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundImage: 'radial-gradient(at top left, rgba(39,66,140,0.5) 0%, rgba(39,66,140,0.15) 70%)',
                                        borderRadius: '14px',
                                        flexShrink: 0,
                                        border: '1px solid rgba(39,66,140,0.4)',
                                    }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="M22 4L12 13L2 4" />
                                        </svg>
                                    </span>
                                    <div>
                                        <h6 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>Stay in the loop</h6>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', margin: '3px 0 0 0', lineHeight: 1.4 }}>Get tips, updates & GHL insights — no spam.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubscribe} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0',
                                    backgroundImage: 'radial-gradient(at top left, rgba(39,66,140,0.4) 0%, rgba(39,66,140,0.12) 70%)',
                                    border: '1px solid rgba(39,66,140,0.3)',
                                    borderRadius: '16px',
                                    padding: '5px',
                                }}>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{
                                            flex: 1,
                                            padding: '12px 18px',
                                            borderRadius: '12px',
                                            border: 'none',
                                            background: 'transparent',
                                            color: '#FFFFFF',
                                            fontSize: '0.9rem',
                                            outline: 'none',
                                            fontFamily: 'inherit',
                                        }}
                                    />
                                    <button type="submit" style={{
                                        padding: '12px 24px',
                                        borderRadius: '12px',
                                        border: 'none',
                                        background: 'rgba(39, 66, 140, 0.95)',
                                        backgroundImage: 'radial-gradient(at top left, rgba(39,66,140,0.98) 0%, rgba(20,30,60,0.95) 50%)',
                                        color: '#FFFFFF',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'inherit',
                                    }}>
                                        {status === "success" ? "✓ Subscribed!" : "Subscribe"}
                                    </button>
                                </form>
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