import React, { useState } from "react";
import { speedInsightsContent } from "../../Data/SpeedInsightsGuideData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "./SpeedInsightsGuide.css";

function SpeedInsightsGuide() {
  const [activeTab, setActiveTab] = useState("pnpm");
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="speed-insights-guide">
      {/* Introduction Section */}
      <section className="section guide-introduction">
        <div className="hero-container">
          <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column gspace-2">
              <h1 className="title-heading">{speedInsightsContent.title}</h1>
              <p className="guide-intro-text">{speedInsightsContent.introduction}</p>
              <p className="guide-note">
                To view instructions on using the Vercel Speed Insights in your project for your framework, use the <strong>Choose a framework</strong> dropdown on the right.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="section guide-prerequisites">
        <div className="hero-container">
          <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column gspace-4">
              <div>
                <h2 className="sub-title-heading">Prerequisites</h2>
                <p>Before getting started, make sure you have the following:</p>
              </div>

              <div className="prerequisites-list">
                {speedInsightsContent.prerequisites.map((prereq, index) => (
                  <div key={index} className="prerequisite-item">
                    <div className="prereq-header">
                      <h3>{prereq.title}</h3>
                      <p>{prereq.description}</p>
                    </div>
                    {prereq.commands && (
                      <div className="code-block-wrapper">
                        <div className="code-block-tabs">
                          {Object.keys(prereq.commands).map((pkg) => (
                            <button
                              key={pkg}
                              className={`tab-button ${activeTab === pkg ? "active" : ""}`}
                              onClick={() => setActiveTab(pkg)}
                            >
                              {pkg}
                            </button>
                          ))}
                        </div>
                        <div className="code-block">
                          <pre>
                            <code>bash
{prereq.commands[activeTab]}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section guide-steps">
        <div className="hero-container">
          <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column gspace-5">
              <h2 className="sub-title-heading">Getting Started Steps</h2>

              <div className="steps-container">
                {speedInsightsContent.steps.map((step) => (
                  <div key={step.id} className="step-item">
                    <div
                      className="step-header"
                      onClick={() => toggleStep(step.id)}
                    >
                      <div className="step-number">{step.id}</div>
                      <div className="step-title-section">
                        <h3>{step.title}</h3>
                        <i className={`fa-solid fa-chevron-down ${expandedStep === step.id ? "expanded" : ""}`}></i>
                      </div>
                    </div>

                    {expandedStep === step.id && (
                      <div className="step-content">
                        <p>{step.description}</p>

                        {step.commands && (
                          <div className="code-block-wrapper">
                            <div className="code-block-tabs">
                              {Object.keys(step.commands).map((pkg) => (
                                <button
                                  key={pkg}
                                  className={`tab-button ${activeTab === pkg ? "active" : ""}`}
                                  onClick={() => setActiveTab(pkg)}
                                >
                                  {pkg}
                                </button>
                              ))}
                            </div>
                            <div className="code-block">
                              <pre>
                                <code>bash
{step.commands[activeTab]}</code>
                              </pre>
                            </div>
                          </div>
                        )}

                        {step.command && (
                          <div className="code-block">
                            <pre>
                              <code>bash
{step.command}</code>
                            </pre>
                          </div>
                        )}

                        {step.frameworks && typeof step.frameworks === "object" && !Array.isArray(step.frameworks) && (
                          <div className="frameworks-section">
                            {Object.keys(step.frameworks).map((framework) => (
                              <div key={framework} className="framework-item">
                                <h4>{framework.replace("-", " ").toUpperCase()}</h4>
                                <p>{step.frameworks[framework].description}</p>

                                {step.frameworks[framework].files &&
                                  step.frameworks[framework].files.map((file, idx) => (
                                    <div key={idx} className="code-block">
                                      <div className="code-header">
                                        <span>{file.name}</span>
                                        <span className="language">{file.language}</span>
                                      </div>
                                      <pre>
                                        <code>{file.code}</code>
                                      </pre>
                                    </div>
                                  ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {step.note && (
                          <div className="step-note">
                            <i className="fa-solid fa-lightbulb"></i>
                            <p>{step.note}</p>
                          </div>
                        )}

                        {step.alternativeMethod && (
                          <div className="alternative-method">
                            <p>{step.alternativeMethod}</p>
                          </div>
                        )}

                        {step.steps && (
                          <div className="step-list">
                            {step.steps.map((substep, idx) => (
                              <div key={idx} className="substep">
                                <span className="substep-number">{idx + 1}</span>
                                <span>{substep}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="section guide-next-steps">
        <div className="hero-container">
          <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column gspace-4">
              <h2 className="sub-title-heading">Next Steps</h2>
              <p>Now that you have Vercel Speed Insights set up, explore the following topics to learn more:</p>

              <div className="next-steps-grid">
                {speedInsightsContent.nextSteps.map((nextStep, index) => (
                  <div key={index} className="next-step-card">
                    <a href={nextStep.link} className="next-step-link">
                      <h3>{nextStep.title}</h3>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </a>
                  </div>
                ))}
              </div>

              <div className="privacy-note">
                <p>
                  Learn more about how Vercel supports{" "}
                  <a href="/docs/speed-insights/privacy-policy">
                    privacy and data compliance standards
                  </a>{" "}
                  with Vercel Speed Insights.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

export default SpeedInsightsGuide;
