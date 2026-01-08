import React, { useMemo, Suspense, lazy } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import StatsCard from "../Card/StatsCard";
import BackgroundPaths from "../BackgroundPaths/BackgroundPaths";

// ✅ Lazy load Hyperspeed for better performance
const Hyperspeed = lazy(() => import("../Hyperspeed/Hyperspeed"));

const OurImpact = () => {
  // ✅ Fixed: Single source of truth for stats data
  const stats = useMemo(() => [
    { id: 1, value: "50+", label: "Agencies Served" },
    { id: 2, value: "5000+", label: "Funnels Created" },
    { id: 3, value: "500+", label: "GHL Setups Completed" },
    { id: 4, value: "98%", label: "Client Satisfaction Rate" }
  ], []);

  return (
    <div className="section section-stats">
      <BackgroundPaths />
      <div className="hero-container">
        <div className="d-flex flex-column flex-lg-row gspace-5">
          
          {/* Left Column - Content */}
          <div className="expertise-title">
            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={0}>
              <div className="sub-heading">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Impact</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
              <h2 className="title-heading">
                NUMBERS THAT SPEAK
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={200}>
              <p>
                Real results from real businesses. See the impact we've made with GoHighLevel automation and systems that drive growth.
              </p>
            </AnimateOnScroll>

            {/* ✅ Fixed: Use stats array instead of duplicate list */}
            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={300}>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What We've Achieved</h5>
                  <ul className="check-list">
                    {stats.map((stat) => (
                      <li key={stat.id}>
                        <a href="./contact">{stat.value} {stat.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            {/* ✅ Fixed: Lazy load Hyperspeed with Suspense */}
            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
              <div className="mt-4">
                <div className="card card-expertise card-stats">
                  <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
                    <Hyperspeed />
                  </Suspense>
                  <h4>REAL RESULTS. REAL IMPACT.</h4>
                  <p>Numbers that speak for themselves.</p>
                  <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                    <a href="./contact">See Our Work</a>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Stats Cards */}
          {/* ✅ Fixed: Individual animation for each card with staggered delays */}
          <div className="expertise-img-layout">
            <div className="image-container expertise-img">
              <div className="stats-cards-container">
                <div className="stats-cards-row">
                  {stats.slice(0, 2).map((stat, index) => (
                    <AnimateOnScroll 
                      key={stat.id}
                      animation="fadeInUp" 
                      speed="normal" 
                      delay={500 + (index * 100)}
                    >
                      <StatsCard value={stat.value} label={stat.label} />
                    </AnimateOnScroll>
                  ))}
                </div>
                
                <div className="stats-cards-row">
                  {stats.slice(2, 4).map((stat, index) => (
                    <AnimateOnScroll 
                      key={stat.id}
                      animation="fadeInUp" 
                      speed="normal" 
                      delay={700 + (index * 100)}
                    >
                      <StatsCard value={stat.value} label={stat.label} />
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurImpact;

