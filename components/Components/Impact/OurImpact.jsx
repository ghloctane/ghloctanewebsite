import React, { useMemo } from "react";
import StatsCard from "../Card/StatsCard";

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
      <div className="hero-container">
        <div className="d-flex flex-column flex-lg-row gspace-5">
          
          {/* Left Column - Content */}
          <div className="expertise-title">
            <div className="sub-heading">
              <i className="fa-regular fa-circle-dot"></i>
              <span>Our Impact</span>
            </div>

            <h2 className="title-heading">
              NUMBERS THAT SPEAK
            </h2>

            <p>
              Real results from real businesses. See the impact we've made with GoHighLevel automation and systems that drive growth.
            </p>

            {/* ✅ Fixed: Use stats array instead of duplicate list */}
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

            <div className="mt-4">
              <div className="card card-expertise card-stats">
                <h4>REAL RESULTS. REAL IMPACT.</h4>
                <p>Numbers that speak for themselves.</p>
                <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                  <a href="./contact">See Our Work</a>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="expertise-img-layout">
            <div className="image-container expertise-img">
              <div className="stats-cards-container">
                <div className="stats-cards-row">
                  {stats.slice(0, 2).map((stat) => (
                    <StatsCard key={stat.id} value={stat.value} label={stat.label} />
                  ))}
                </div>
                
                <div className="stats-cards-row">
                  {stats.slice(2, 4).map((stat) => (
                    <StatsCard key={stat.id} value={stat.value} label={stat.label} />
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

