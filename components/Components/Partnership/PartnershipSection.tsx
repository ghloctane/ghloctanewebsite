import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import PartnershipData from "../../Data/PartnershipData";

const partnerships = PartnershipData;

const PartnershipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
  .section-partnership {
    display: flex;
    flex-direction: column;
    padding: 120px 38px 60px 38px;
    margin: 0;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.95);
    opacity: 1;
    visibility: visible;
  }
  .section-partnership .hero-container {
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .partnership-header-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 32px; flex-wrap: wrap; }
  .partnership-header-row > div:first-child { flex: 0 0 auto; }
  .partnership-right { flex: 1 1 320px; min-width: 0; max-width: 480px; }
  .partnership-divider { height: 1px; margin: 24px 0 0; background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%); }
  .partnership-marquee-wrap { padding: 40px 0 44px; position: relative; overflow: hidden; width: 100%; }
  .partnership-marquee-wrap::before, .partnership-marquee-wrap::after { content: ''; position: absolute; top: 0; bottom: 0; width: 140px; z-index: 2; pointer-events: none; }
  .partnership-marquee-wrap::before { left: 0; background: linear-gradient(to right, var(--secondary,#F8F9FF) 0%, transparent 100%); }
  .partnership-marquee-wrap::after { right: 0; background: linear-gradient(to left, var(--secondary,#F8F9FF) 0%, transparent 100%); }
  .partnership-track { display: flex; width: max-content; gap: 32px; animation: ps-marquee 35s linear infinite; will-change: transform; }
  .partnership-track:hover { animation-play-state: paused; }
  @keyframes ps-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
  .partnership-pill { display: flex; align-items: center; justify-content: center; padding: 0; transition: transform 0.3s ease; }
  .partnership-pill:hover { transform: scale(1.05); }
  .partnership-pill-logo { width: auto; height: 48px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .partnership-pill-logo img { width: auto !important; height: 40px !important; max-width: 100px !important; object-fit: contain !important; }
  .partnership-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .partnership-tag { padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(39,66,140,0.2); background: rgba(39,66,140,0.05); font-size: var(--font-size-base, 16px); font-weight: 700; color: var(--text-color,#4A4A4A); cursor: default; transition: all 0.25s ease; }
  .partnership-tag:hover { border-color: var(--accent-color,#27428c); background: rgba(39,66,140,0.08); color: var(--accent-color,#27428c); }
  .partnership-card-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .section-partnership.ps-in .partnership-card-in { opacity: 1; transform: translateY(0); }
  .section-partnership .title-heading .partnership-accent { color: var(--accent-color); -webkit-text-fill-color: var(--accent-color); background: none !important; background-image: none !important; }
  @media (max-width: 768px) {
    .section-partnership { padding: 80px 24px 50px 24px; }
    .partnership-header-row { flex-direction: column; gap: 20px; }
    .partnership-right { max-width: 100%; }
    .partnership-marquee-wrap::before, .partnership-marquee-wrap::after { width: 60px; }
  }
`}</style>
      <div className={`section section-partnership ${visible ? "ps-in" : ""}`} ref={sectionRef}>
        <div className="hero-container">
          <div className="partnership-card-in">
            <div className="partnership-header-row">
              <div>
                <div className="sub-heading">
                  <FaRegDotCircle />
                  <span>Tools & Technologies</span>
                </div>
                <h2 className="title-heading">
                  OUR <span className="partnership-accent">EXPERTISE</span>
                </h2>
              </div>
              <div className="partnership-right">
                <p>
                  Our expertise spans across modern web technologies and digital tools that power today&apos;s businesses — from automation pipelines to full-stack GHL deployments.
                </p>
                <div className="partnership-tags">
                  {["Automation", "CRM", "Funnels", "Web Design", "AI Bots", "Email Marketing", "SMS Flows", "Analytics"].map((t) => (
                    <span key={t} className="partnership-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="partnership-divider" />

            <div className="partnership-marquee-wrap">
              <div className="partnership-track">
                {[...partnerships, ...partnerships, ...partnerships].map((partner, i) => (
                  <div className="partnership-pill" key={`${partner.id}-${i}`} title={partner.name}>
                    <div className="partnership-pill-logo">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={100}
                        height={48}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipSection;
