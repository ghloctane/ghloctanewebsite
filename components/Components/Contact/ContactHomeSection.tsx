import React from "react";
import Script from "next/script";

const ContactHomeSection = () => {
  return (
    <>
      <style>{`
        .contact-home-section { position:relative; overflow:hidden; padding:100px 0 0; background:var(--secondary); font-family:var(--global-font); }
        .contact-home-section * { font-family:inherit; }
        .contact-home-section i[class*="fa-"] { font-family:"Font Awesome 6 Free","Font Awesome 6 Brands" !important; }
        .contact-home-section::before { content:''; position:absolute; bottom:0; left:0; right:0; height:55%; background:linear-gradient(135deg, #1a1f3a 0%, #252b4a 50%, #1e2440 100%); clip-path:polygon(0 18%, 100% 0%, 100% 100%, 0% 100%); z-index:0; }
        .contact-home-section::after { content:''; position:absolute; bottom:0; left:0; right:0; height:55%; background-image:radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size:28px 28px; clip-path:polygon(0 18%, 100% 0%, 100% 100%, 0% 100%); z-index:1; pointer-events:none; }
        .contact-home-inner { position:relative; z-index:10; max-width:1200px; margin:0 auto; padding:0 48px 80px; }
        .contact-home-top-row { display:flex; align-items:flex-end; justify-content:space-between; gap:40px; margin-bottom:64px; flex-wrap:wrap; }
        .contact-home-sub { margin-bottom: 14px; }
        .contact-home-section .title-heading { font-size:clamp(2.5rem, 5vw, 4rem); font-weight:var(--font-weight-bold); line-height:1.1; letter-spacing:-0.02em; }
        .contact-home-section .title-heading em { font-style:italic; color:var(--accent-color); -webkit-text-fill-color:var(--accent-color); }
        .contact-home-top-right { max-width:320px; }
        .contact-home-desc { font-size:var(--font-size-base, 16px); line-height:1.7; color:var(--text-color); font-weight:var(--font-weight-normal); margin-bottom:28px; }
        .contact-home-badges { display:flex; gap:10px; flex-wrap:wrap; }
        .contact-home-badge { display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border:1px solid rgba(0,0,0,0.08); border-radius:99px; font-size:11px; letter-spacing:0.06em; color:var(--primary); background:#fff; font-family:var(--global-font); }
        .contact-home-badge-dot { width:6px; height:6px; border-radius:50%; background:#22C55E; }
        .contact-home-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:20px; align-items:stretch; }
        .contact-home-info-card { background:#fff; border-radius:20px; padding:32px; border:1px solid rgba(0,0,0,0.05); box-shadow:0 4px 32px rgba(0,0,0,0.06); display:flex; flex-direction:column; gap:0; height:100%; min-height:0; }
        .contact-home-info-top { padding-bottom:20px; margin-bottom:20px; border-bottom:1px solid rgba(0,0,0,0.05); }
        .contact-home-info-desc { font-size:14px; line-height:1.65; color:var(--text-color); font-weight:var(--font-weight-normal); margin-bottom:0; opacity:0.9; }
        .contact-home-info-label { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:var(--text-color); margin-bottom:10px; opacity:0.7; font-family:var(--global-font); }
        .contact-home-info-name { font-size:28px; font-weight:600; color:var(--primary); margin-bottom:4px; font-family:var(--global-font); }
        .contact-home-info-title { font-size:13px; color:var(--text-color); font-weight:var(--font-weight-normal); opacity:0.8; font-family:var(--global-font); }
        .contact-home-items { display:flex; flex-direction:column; gap:16px; flex:1; margin-top:auto; padding-top:20px; min-height:0; }
        .contact-home-item { display:flex; align-items:flex-start; gap:14px; }
        .contact-home-ci-icon { width:38px; height:38px; border-radius:10px; background:var(--secondary); border:1px solid rgba(0,0,0,0.08); display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
        .contact-home-ci-label { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:var(--text-color); margin-bottom:3px; opacity:0.7; font-family:var(--global-font); }
        .contact-home-ci-value { font-size:14px; font-weight:500; color:var(--primary); font-family:var(--global-font); }
        .contact-home-stats { display:grid; grid-template-columns:repeat(3, 1fr); gap:1px; background:rgba(0,0,0,0.05); border-radius:14px; overflow:hidden; margin-top:24px; border:1px solid rgba(0,0,0,0.05); }
        .contact-home-stat { background:var(--secondary); padding:18px 16px; text-align:center; }
        .contact-home-stat-num { font-size:28px; font-weight:400; color:var(--accent-color); letter-spacing:-0.02em; line-height:1; margin-bottom:4px; font-family:var(--global-font); }
        .contact-home-stat-lbl { font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-color); opacity:0.7; font-family:var(--global-font); }
        .contact-home-cal-card { background:#fff; border-radius:20px; border:1px solid rgba(0,0,0,0.05); box-shadow:0 4px 32px rgba(0,0,0,0.06); overflow:hidden; display:flex; flex-direction:column; height:100%; }
        .contact-home-cal-header { padding:20px 24px 18px; border-bottom:1px solid rgba(0,0,0,0.05); display:flex; align-items:center; justify-content:space-between; }
        .contact-home-cal-title { font-size:22px; font-weight:400; color:var(--primary); margin-bottom:4px; font-family:var(--global-font); }
        .contact-home-cal-sub { font-size:12px; color:var(--text-color); font-weight:300; display:flex; align-items:center; gap:6px; opacity:0.8; font-family:var(--global-font); }
        .contact-home-cal-sub::before { content:''; width:6px; height:6px; border-radius:50%; background:#22C55E; display:block; animation:ch-glow 2s ease-in-out infinite; }
        @keyframes ch-glow { 0%,100%{ box-shadow:0 0 0 0 rgba(34,197,94,0.4); } 50%{ box-shadow:0 0 0 4px rgba(34,197,94,0); } }
        .contact-home-cal-body { position:relative; background:#FAFAF8; width:100%; overflow:hidden; flex:1; display:flex; flex-direction:column; }
        .contact-home-cal-body iframe { width:100%; border:none; display:block; overflow:hidden; }
        .contact-home-bottom-strip { margin-top:20px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:28px 36px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; }
        .contact-home-bs-left { font-size:20px; font-weight:300; color:rgba(255,255,255,0.9); letter-spacing:-0.01em; font-family:var(--global-font); }
        .contact-home-bs-left em { font-style:italic; color:rgba(200,150,60,0.95); }
        .contact-home-bs-right { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
        .contact-home-bs-item { display:flex; align-items:center; gap:8px; font-size:12px; color:rgba(255,255,255,0.45); letter-spacing:0.04em; font-family:var(--global-font); }
        .contact-home-bs-item::before { content:'✓'; width:20px; height:20px; border-radius:50%; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-size:10px; color:rgba(200,150,60,0.9); }
        @media(max-width:900px){ .contact-home-grid { grid-template-columns:1fr; } .contact-home-inner { padding:0 24px 60px; } .contact-home-top-row { margin-bottom:40px; } .contact-home-section { padding:64px 0 0; } .contact-home-bottom-strip { flex-direction:column; align-items:flex-start; } .contact-home-cal-body iframe { min-height:550px; } }
        @media(max-width:560px){ .contact-home-stats { grid-template-columns:repeat(3,1fr); } .contact-home-section .title-heading { font-size:40px; } .contact-home-bs-right { gap:12px; } .contact-home-cal-body iframe { min-height:500px; } }
      `}</style>
      <Script src="https://links.ghloctane.com/js/form_embed.js" strategy="beforeInteractive" />
      <section className="contact-home-section">
        <div className="contact-home-inner">
          <div className="contact-home-top-row">
            <div>
              <div className="sub-heading contact-home-sub">
                <i className="fa-regular fa-circle-dot" />
                <span>Get In Touch</span>
              </div>
              <h2 className="title-heading">Let&apos;s Build<br /><em>Together</em></h2>
            </div>
            <div className="contact-home-top-right">
              <p className="contact-home-desc">Ready to launch a funnel that actually converts? Book a free 30-min strategy call and let&apos;s map out your growth plan.</p>
              <div className="contact-home-badges">
                <div className="contact-home-badge"><div className="contact-home-badge-dot" /> Available This Week</div>
                <div className="contact-home-badge">⚡ 24hr Response</div>
              </div>
            </div>
          </div>
          <div className="contact-home-grid">
            <div className="contact-home-info-card">
              <div className="contact-home-info-top">
                <div className="contact-home-info-label">Your Strategist</div>
                <div className="contact-home-info-name">GHL Octane</div>
                <div className="contact-home-info-title">GoHighLevel Specialist &amp; Growth Consultant</div>
                <p className="contact-home-info-desc">We help businesses scale with GoHighLevel funnels, automations, and CRM. Get in touch for a free strategy session.</p>
              </div>
              <div className="contact-home-items">
                <div className="contact-home-item">
                  <div className="contact-home-ci-icon">📧</div>
                  <div>
                    <div className="contact-home-ci-label">Email</div>
                    <div className="contact-home-ci-value">info@ghloctane.com</div>
                  </div>
                </div>
                <div className="contact-home-item">
                  <div className="contact-home-ci-icon">💬</div>
                  <div>
                    <div className="contact-home-ci-label">Phone</div>
                    <div className="contact-home-ci-value">+1 385 390 5354</div>
                  </div>
                </div>
                <div className="contact-home-item">
                  <div className="contact-home-ci-icon">🕐</div>
                  <div>
                    <div className="contact-home-ci-label">Working Hours</div>
                    <div className="contact-home-ci-value">24/7</div>
                  </div>
                </div>
              </div>
              <div className="contact-home-stats">
                <div className="contact-home-stat">
                  <div className="contact-home-stat-num">500+</div>
                  <div className="contact-home-stat-lbl">Funnels</div>
                </div>
                <div className="contact-home-stat">
                  <div className="contact-home-stat-num">100%</div>
                  <div className="contact-home-stat-lbl">Satisfaction</div>
                </div>
                <div className="contact-home-stat">
                  <div className="contact-home-stat-num">2x</div>
                  <div className="contact-home-stat-lbl">Avg ROI</div>
                </div>
              </div>
            </div>
            <div className="contact-home-cal-card">
              <div className="contact-home-cal-header">
                <div>
                  <div className="contact-home-cal-title">Book a Demo Call</div>
                  <div className="contact-home-cal-sub">Free 30-min Strategy Session</div>
                </div>
              </div>
              <div className="contact-home-cal-body">
                <iframe
                  src="https://links.ghloctane.com/widget/booking/5iUL3c3dfyzPqja7CkeS"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="5iUL3c3dfyzPqja7CkeS_1773251934690"
                  title="Book a Call - GHL Octane"
                />
              </div>
            </div>
          </div>
          <div className="contact-home-bottom-strip">
            <div className="contact-home-bs-left">Ready to <em>10x</em> your conversions?</div>
            <div className="contact-home-bs-right">
              <div className="contact-home-bs-item">No upfront payment</div>
              <div className="contact-home-bs-item">Strategy call is free</div>
              <div className="contact-home-bs-item">Results guaranteed</div>
              <div className="contact-home-bs-item">Fast turnaround</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHomeSection;
