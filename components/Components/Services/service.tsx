import React from "react";
import Link from "next/link";
import { allServicesData } from "../../Data/AllServicesData";
import ServiceCard from "../Card/ServiceCard";
import AnimatedButton from "../Button/AnimatedButton";

interface ServiceSectionProps {
    showAll?: boolean;
}

/** Services page: bento grid slots — same 12-col grid feel, one tall, last row full-width */
const SERVICES_PAGE_SLOTS: Array<{
    layoutClass: string;
    theme: "theme-blue" | "theme-warm" | "theme-purple" | "theme-deep";
    pattern: string;
    serviceIndex: number;
    visual?: "tall-included" | "wide";
}> = [
    { layoutClass: "sp-1", theme: "theme-blue", pattern: "pattern-dots", serviceIndex: 0 },
    { layoutClass: "sp-2", theme: "theme-warm", pattern: "pattern-lines", serviceIndex: 1 },
    { layoutClass: "sp-3", theme: "theme-purple", pattern: "pattern-rings", serviceIndex: 2 },
    { layoutClass: "sp-4", theme: "theme-deep", pattern: "pattern-circuit", serviceIndex: 3 },
    { layoutClass: "sp-5", theme: "theme-blue", pattern: "pattern-diamond", serviceIndex: 4 },
    { layoutClass: "sp-6", theme: "theme-warm", pattern: "pattern-cross", serviceIndex: 5 },
    { layoutClass: "sp-7", theme: "theme-purple", pattern: "pattern-waves", serviceIndex: 6 },
    { layoutClass: "sp-8", theme: "theme-deep", pattern: "pattern-topo", serviceIndex: 7 },
    /* sp-9 + sp-10 merged into BentoCardMergedWideServicesPage (API + Compliance) */
    { layoutClass: "sp-11", theme: "theme-purple", pattern: "pattern-lines", serviceIndex: 10 },
    { layoutClass: "sp-12", theme: "theme-deep", pattern: "pattern-hex", serviceIndex: 11, visual: "wide" },
];

/** Bento slot config: theme, pattern, layout class, and optional visual type */
const BENTO_SLOTS: Array<{
    layoutClass: string;
    theme: "theme-blue" | "theme-warm" | "theme-purple" | "theme-deep";
    pattern: string;
    visual?: "pipeline" | "stat-bars" | "mini-icons" | "chat-bubbles" | "wave";
    serviceIndex: number;
}> = [
    { layoutClass: "r1-left", theme: "theme-blue", pattern: "pattern-dots", serviceIndex: 0 },
    { layoutClass: "r1-center-crm", theme: "theme-deep", pattern: "pattern-cross", visual: "pipeline", serviceIndex: 1 },
    { layoutClass: "r2-left", theme: "theme-warm", pattern: "pattern-circuit", visual: "stat-bars", serviceIndex: 2 },
    { layoutClass: "r3-left", theme: "theme-blue", pattern: "pattern-waves", visual: "chat-bubbles", serviceIndex: 5 },
    { layoutClass: "r3-right", theme: "theme-warm", pattern: "pattern-topo", visual: "wave", serviceIndex: 6 },
    { layoutClass: "r4-a", theme: "theme-deep", pattern: "pattern-lines", serviceIndex: 8 },
];

/** Wide card: Compliance (index 9) + Social Media (index 10) — each block has its own See More */
function BentoCardWide() {
    const s1 = allServicesData[9];
    const s2 = allServicesData[10];
    if (!s1 || !s2) return null;
    return (
        <div className="card theme-warm pattern-triangles r4-wide">
            <div className="glow-orb" style={{ width: 140, height: 140, background: "#d97706", top: -40, right: -30, opacity: 0.12 }} />
            <div className="merged-wide-content">
                <div className="merged-wide-row">
                    <div className="merged-wide-block">
                        <div className="icon"><i className={s1.icon} /></div>
                        <h3>{s1.title}</h3>
                        <p>{s1.cardDescription}</p>
                        <Link href={`/service/${s1.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                    </div>
                    <div className="merged-wide-block">
                        <div className="icon"><i className={s2.icon} /></div>
                        <h3>{s2.title}</h3>
                        <p>{s2.cardDescription}</p>
                        <Link href={`/service/${s2.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Services page: sp-3 + sp-6 + sp-8 merged — Automation (2), Chatbots (5), Support (7), right column tall */
function BentoCardSp368Merged() {
    const s1 = allServicesData[2];  // Automation
    const s2 = allServicesData[5];  // Chatbots
    const s3 = allServicesData[7];  // Support
    if (!s1 || !s2 || !s3) return null;
    return (
        <div className="card theme-deep pattern-topo sp-3-6-8-merged">
            <div className="glow-orb" style={{ width: 140, height: 140, background: "#4a6cf7", top: -40, right: -30, opacity: 0.12 }} />
            <div className="merged-tall-content">
                <div className="merged-tall-block">
                    <div className="icon"><i className={s1.icon} /></div>
                    <h3>{s1.title}</h3>
                    <p>{s1.cardDescription}</p>
                    <Link href={`/service/${s1.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
                <div className="merged-tall-block">
                    <div className="icon"><i className={s2.icon} /></div>
                    <h3>{s2.title}</h3>
                    <p>{s2.cardDescription}</p>
                    <Link href={`/service/${s2.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
                <div className="merged-tall-block">
                    <div className="icon"><i className={s3.icon} /></div>
                    <h3>{s3.title}</h3>
                    <p>{s3.cardDescription}</p>
                    <Link href={`/service/${s3.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
            </div>
        </div>
    );
}

/** Services page: sp-4 tall card — API (8) + Development (11), dono blocks simple, har ka See More */
function BentoCardSp4Merged() {
    const s1 = allServicesData[8];  // API Integration
    const s2 = allServicesData[11]; // Development
    if (!s1 || !s2) return null;
    return (
        <div className="card theme-deep pattern-circuit sp-4 sp-4-merged">
            <div className="glow-orb" style={{ width: 140, height: 140, background: "#4a6cf7", top: -40, right: -30, opacity: 0.12 }} />
            <div className="merged-tall-content">
                <div className="merged-tall-block">
                    <div className="icon"><i className={s1.icon} /></div>
                    <h3>{s1.title}</h3>
                    <p>{s1.cardDescription}</p>
                    <Link href={`/service/${s1.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
                <div className="merged-tall-block">
                    <div className="icon"><i className={s2.icon} /></div>
                    <h3>{s2.title}</h3>
                    <p>{s2.cardDescription}</p>
                    <Link href={`/service/${s2.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
            </div>
        </div>
    );
}

/** Services page: merged wide card — White-Label (3) + Compliance (9), each block has its own See More */
function BentoCardMergedWideServicesPage() {
    const s1 = allServicesData[8];
    const s2 = allServicesData[9];
    if (!s1 || !s2) return null;
    return (
        <div className="card theme-warm pattern-triangles sp-9-10-merged">
            <div className="glow-orb" style={{ width: 140, height: 140, background: "#d97706", top: -40, right: -30, opacity: 0.12 }} />
            <div className="merged-wide-content">
                <div className="merged-wide-row">
                    <div className="merged-wide-block">
                        <div className="icon"><i className={s1.icon} /></div>
                        <h3>{s1.title}</h3>
                        <p>{s1.cardDescription}</p>
                        <Link href={`/service/${s1.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                    </div>
                    <div className="merged-wide-block">
                        <div className="icon"><i className={s2.icon} /></div>
                        <h3>{s2.title}</h3>
                        <p>{s2.cardDescription}</p>
                        <Link href={`/service/${s2.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Merged tall card: White-Label (index 3) + Integrations (index 4) — each block has its own See More */
function BentoCardMerged() {
    const s1 = allServicesData[3];
    const s2 = allServicesData[4];
    if (!s1 || !s2) return null;
    return (
        <div className="card theme-purple pattern-rings r-right-tall">
            <div className="glow-orb" style={{ width: 140, height: 140, background: "#8b5cf6", top: -40, right: -30, opacity: 0.12 }} />
            <div className="merged-tall-content">
                <div className="merged-tall-block">
                    <div className="icon"><i className={s1.icon} /></div>
                    <h3>{s1.title}</h3>
                    <p>{s1.cardDescription}</p>
                    <Link href={`/service/${s1.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
                <div className="merged-tall-block">
                    <div className="icon"><i className={s2.icon} /></div>
                    <h3>{s2.title}</h3>
                    <p>{s2.cardDescription}</p>
                    <Link href={`/service/${s2.slug}`} className="link card-link-bottom">See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></Link>
                </div>
            </div>
        </div>
    );
}

function BentoCard({
    service,
    theme,
    pattern,
    layoutClass,
    visual,
}: {
    service: (typeof allServicesData)[0];
    theme: string;
    pattern: string;
    layoutClass: string;
    visual?: "pipeline" | "stat-bars" | "mini-icons" | "chat-bubbles" | "wave" | "tall-included" | "wide";
}) {
    const link = `/service/${service.slug}`;
    return (
        <div className={`card ${theme} ${pattern} ${layoutClass}`}>
            <div
                className="glow-orb"
                style={{
                    width: 140,
                    height: 140,
                    background: theme === "theme-warm" ? "#d97706" : theme === "theme-purple" ? "#8b5cf6" : "#4a6cf7",
                    top: -40,
                    right: -30,
                    opacity: 0.12,
                }}
            />
            <div className="icon">
                <i className={service.icon} />
            </div>
            {visual === "wide" ? (
                <div className="card-wide-body">
                    <h3>{service.title}</h3>
                    <div className="card-wide-content">
                        <p className="card-wide-desc">{service.cardDescription}</p>
                        <Link href={link} className="link card-link-bottom">
                            See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <h3>{service.title}</h3>
                    {visual !== "tall-included" && <p>{service.cardDescription}</p>}
                </>
            )}
            {visual === "pipeline" && (
                <>
                    <div className="pipeline-visual">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="pipe-stage" />
                        ))}
                    </div>
                    <Link href={link} className="link card-link-bottom">
                        See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                    </Link>
                </>
            )}
            {visual === "stat-bars" && (
                <div className="tall-card-visual">
                    <div className="stat-bars-group">
                        <div className="stat-bar">
                            <span>Emails</span>
                            <div className="stat-bar-fill orange" style={{ ["--w" as string]: "85%" }} />
                        </div>
                        <div className="stat-bar">
                            <span>SMS</span>
                            <div className="stat-bar-fill blue" style={{ ["--w" as string]: "72%" }} />
                        </div>
                        <div className="stat-bar">
                            <span>Webhooks</span>
                            <div className="stat-bar-fill purple" style={{ ["--w" as string]: "60%" }} />
                        </div>
                        <div className="stat-bar">
                            <span>Triggers</span>
                            <div className="stat-bar-fill orange" style={{ ["--w" as string]: "90%" }} />
                        </div>
                        <div className="stat-bar">
                            <span>Bookings</span>
                            <div className="stat-bar-fill blue" style={{ ["--w" as string]: "78%" }} />
                        </div>
                    </div>
                    {service.whatsIncluded && service.whatsIncluded.length > 0 && (
                        <div className="tall-card-included">
                            <span className="tall-card-included-label">What&apos;s included</span>
                            <ul className="tall-card-included-list">
                                {service.whatsIncluded.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Link href={link} className="link card-link-bottom">
                        See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                    </Link>
                </div>
            )}
            {visual === "mini-icons" && (
                <div className="mini-icons">
                    <div className="mini-icon"><i className="fa-solid fa-bolt" /></div>
                    <div className="mini-icon"><i className="fa-solid fa-robot" /></div>
                    <div className="mini-icon"><i className="fa-brands fa-whatsapp" /></div>
                    <div className="mini-icon"><i className="fa-solid fa-credit-card" /></div>
                    <div className="mini-icon"><i className="fa-solid fa-table-cells" /></div>
                </div>
            )}
            {visual === "chat-bubbles" && (
                <>
                    <div className="chat-bubbles">
                        <div className="bubble bot">👋 Hi! How can I help?</div>
                        <div className="bubble user">Book a consultation</div>
                        <div className="bubble bot">Finding next slot...</div>
                    </div>
                </>
            )}
            {visual === "wave" && (
                <div className="wave-visual">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className={`wave-bar ${i % 2 === 0 ? "warm" : "blue"}`} />
                    ))}
                </div>
            )}
            {visual === "tall-included" && (
                <div className="tall-card-visual">
                    {service.whatsIncluded && service.whatsIncluded.length > 0 && (
                        <div className="tall-card-included">
                            <span className="tall-card-included-label">What&apos;s included</span>
                            <ul className="tall-card-included-list">
                                {service.whatsIncluded.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Link href={link} className="link card-link-bottom">
                        See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                    </Link>
                </div>
            )}
            {visual !== "stat-bars" && visual !== "pipeline" && visual !== "tall-included" && visual !== "wide" && (
                <Link href={link} className="link card-link-bottom">
                    See More <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                </Link>
            )}
        </div>
    );
}

function ServiceSection({ showAll = false }: ServiceSectionProps) {
    // Services page: same header + bento grid (12 cards, same varied layout as homepage).
    if (showAll === true) {
        return (
            <div className="section section-services-bento section-services-page">
                <div className="services-bento-wrap services-page-wrap">
                    <div className="section-header">
                        <div className="sub-heading align-self-center">
                            <i className="fa-regular fa-circle-dot" />
                            <span>Our Services</span>
                        </div>
                        <h2 className="title-heading heading-container heading-container-medium">
                            Digital Solutions That Drive Real Results
                        </h2>
                        <p className="heading-container-medium">
                            From CRM and pipeline setup to automation, funnels, and white-label builds — we help agencies and businesses set up, optimize, and scale GoHighLevel so you can automate leads, manage clients, and boost conversions.
                        </p>
                    </div>

                    <div className="bento services-page-grid">
                        {SERVICES_PAGE_SLOTS.slice(0, 8).map((slot) => {
                            if (slot.layoutClass === "sp-3") {
                                return <BentoCardSp368Merged key="sp-3-6-8-merged" />;
                            }
                            if (slot.layoutClass === "sp-4") {
                                return <BentoCardSp4Merged key="sp-4" />;
                            }
                            if (slot.layoutClass === "sp-6" || slot.layoutClass === "sp-8") {
                                return null;
                            }
                            const service = allServicesData[slot.serviceIndex];
                            if (!service) return null;
                            return (
                                <BentoCard
                                    key={slot.layoutClass}
                                    service={service}
                                    theme={slot.theme}
                                    pattern={slot.pattern}
                                    layoutClass={slot.layoutClass}
                                    visual={slot.visual}
                                />
                            );
                        })}
                        <BentoCardMergedWideServicesPage key="sp-9-10-merged" />
                        {SERVICES_PAGE_SLOTS.slice(8, 9).map((slot) => {
                            const service = allServicesData[slot.serviceIndex];
                            if (!service) return null;
                            return (
                                <BentoCard
                                    key={slot.layoutClass}
                                    service={service}
                                    theme={slot.theme}
                                    pattern={slot.pattern}
                                    layoutClass={slot.layoutClass}
                                    visual={slot.visual}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Home page: exact bento design (same structure as provided HTML)
    return (
        <div className="section section-services-bento">
            <div className="services-bento-wrap">
                <div className="section-header">
                    <div className="sub-heading align-self-center">
                        <i className="fa-regular fa-circle-dot" />
                        <span>Our Services</span>
                    </div>
                    <h2 className="title-heading heading-container heading-container-medium">
                        Digital Solutions That Drive Real Results
                    </h2>
                    <p className="heading-container-medium">
                        From CRM and pipeline setup to automation, funnels, and white-label builds — we help agencies and businesses set up, optimize, and scale GoHighLevel so you can automate leads, manage clients, and boost conversions.
                    </p>
                </div>

                <div className="bento">
                    {/* ROW 1 — left card */}
                    {BENTO_SLOTS.slice(0, 1).map((slot) => {
                        const service = allServicesData[slot.serviceIndex];
                        if (!service) return null;
                        return (
                            <BentoCard
                                key={slot.layoutClass}
                                service={service}
                                theme={slot.theme}
                                pattern={slot.pattern}
                                layoutClass={slot.layoutClass}
                                visual={slot.visual}
                            />
                        );
                    })}

                    {/* Center top — CRM (row 1) */}
                    {BENTO_SLOTS.slice(1, 2).map((slot) => {
                        const service = allServicesData[slot.serviceIndex];
                        if (!service) return null;
                        return (
                            <BentoCard
                                key={slot.layoutClass}
                                service={service}
                                theme={slot.theme}
                                pattern={slot.pattern}
                                layoutClass={slot.layoutClass}
                                visual={slot.visual}
                            />
                        );
                    })}

                    {/* Right — merged tall card (White-Label + Integrations) */}
                    <BentoCardMerged />

                    {/* ROW 2 — tall left */}
                    {BENTO_SLOTS.slice(2, 3).map((slot) => {
                        const service = allServicesData[slot.serviceIndex];
                        if (!service) return null;
                        return (
                            <BentoCard
                                key={slot.layoutClass}
                                service={service}
                                theme={slot.theme}
                                pattern={slot.pattern}
                                layoutClass={slot.layoutClass}
                                visual={slot.visual}
                            />
                        );
                    })}

                    {/* Center bottom — Everything in One Place (row 2) */}
                    <div className="card card-center pattern-hex r2-center-bottom">
                        <div className="glow-ring ring1" />
                        <div className="glow-ring ring2" />
                        <div className="glow-ring ring3" />
                        <div className="logo-glow" />
                        <h2 className="card-center-title title-heading">Everything<br />in One Place</h2>
                    </div>

                    {/* ROW 3 */}
                    {BENTO_SLOTS.slice(3, 5).map((slot) => {
                        const service = allServicesData[slot.serviceIndex];
                        if (!service) return null;
                        return (
                            <BentoCard
                                key={slot.layoutClass}
                                service={service}
                                theme={slot.theme}
                                pattern={slot.pattern}
                                layoutClass={slot.layoutClass}
                                visual={slot.visual}
                            />
                        );
                    })}

                    {/* ROW 4 — r4-a exactly under r2-left (same 4 col width), then wide merged card */}
                    {BENTO_SLOTS.slice(5, 6).map((slot) => {
                        const service = allServicesData[slot.serviceIndex];
                        if (!service) return null;
                        return (
                            <BentoCard
                                key={slot.layoutClass}
                                service={service}
                                theme={slot.theme}
                                pattern={slot.pattern}
                                layoutClass={slot.layoutClass}
                                visual={slot.visual}
                            />
                        );
                    })}
                    <BentoCardWide />

                    {/* ROW 5 — Banner */}
                    <div className="card theme-warm pattern-hex r5-banner card-banner">
                        <div
                            className="glow-orb"
                            style={{ width: 200, height: 200, background: "#d97706", top: -60, left: -60, opacity: 0.12 }}
                        />
                        <div
                            className="glow-orb"
                            style={{ width: 180, height: 180, background: "#4a6cf7", bottom: -50, right: -50, opacity: 0.1 }}
                        />
                        <div className="card-banner-content">
                            <h3>Need a custom solution?</h3>
                            <p>Let&apos;s create a strategy tailored for your business.</p>
                        </div>
                        <div className="card-banner-cta">
                            <AnimatedButton href="/contact" className="services-banner-cta">
                                Book Your Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ marginLeft: 8, fontSize: 12 }} />
                            </AnimatedButton>
                        </div>
                    </div>
                </div>

                <div className="cta-row">
                    <AnimatedButton href="/contact">Work With Us</AnimatedButton>
                    <AnimatedButton href="/service" className="cta-explore-inline">
                        Explore our services <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                    </AnimatedButton>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
