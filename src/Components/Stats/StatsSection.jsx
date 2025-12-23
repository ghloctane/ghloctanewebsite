import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import StatsCard from "../Card/StatsCard";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "50+",
      label: "Agencies"
    },
    {
      id: 2,
      value: "5000+",
      label: "Funnels"
    },
    {
      id: 3,
      value: "500+",
      label: "GHL Setups"
    },
    {
      id: 4,
      value: "98%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <div className="section">
      <div className="hero-container">
        <div className="d-flex flex-column flex-lg-row gspace-5">
          <div className="expertise-title">
            <AnimateOnScroll animation="fadeInLeft" speed="normal">
              <div className="sub-heading">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Impact</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInLeft" speed="normal">
              <h2 className="title-heading">
                NUMBERS THAT SPEAK
              </h2>
            </AnimateOnScroll>
            <p>
              Real results from real businesses. See the impact we've made with GoHighLevel automation and systems that drive growth.
            </p>
            <div className="d-flex flex-column flex-md-row gspace-2">
              <div className="expertise-list">
                <h5>What We've Achieved</h5>
                <ul className="check-list">
                  <li><a href="./contact">50+ Agencies Served</a></li>
                  <li><a href="./contact">5000+ Funnels Created</a></li>
                  <li><a href="./contact">500+ GHL Setups</a></li>
                  <li><a href="./contact">98% Client Satisfaction</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <AnimateOnScroll animation="fadeInUp" speed="normal">
                <div className="card card-expertise" style={{width: '100%', maxWidth: '500px'}}>
                  <h4>REAL RESULTS. REAL IMPACT.</h4>
                  <p>Numbers that speak for themselves.</p>
                  <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                    <a href="./contact">See Our Work</a>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
          <div className="expertise-img-layout">
            <div className="image-container expertise-img">
              <AnimateOnScroll animation="fadeInUp" speed="normal">
                <div className="d-flex flex-column gap-3" style={{minHeight: '400px', justifyContent: 'center', alignItems: 'center'}}>
                  <div className="d-flex flex-row gap-3">
                    {stats.slice(0, 2).map((stat) => (
                      <StatsCard key={stat.id} value={stat.value} label={stat.label} />
                    ))}
                  </div>
                  <div className="d-flex flex-row gap-3">
                    {stats.slice(2, 4).map((stat) => (
                      <StatsCard key={stat.id} value={stat.value} label={stat.label} />
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

