import React, { useEffect } from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";

export default function BookACallPage() {
  useEffect(() => {
    // Load the booking embed script
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <>
      <HeadTitle title="Book a Strategy Call - GHL Octane - GoHighLevel Experts" />
      <BannerInnerSection title="Book Your Strategy Call" currentPage="Book a Call" />
      
      <div className="section section-book-call">
        <div className="hero-container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="book-call-wrapper">
                <div className="card book-call-card">
                  <div className="book-call-header">
                    <div className="sub-heading align-self-center">
                      <i className="fa-regular fa-calendar-check"></i>
                      <span>Schedule Your Free Consultation</span>
                    </div>
                    <h2 className="title-heading">Let's Discuss Your GHL Setup</h2>
                    <p>
                      Book a free 30-minute strategy call with our certified GoHighLevel experts. 
                      We'll analyze your current setup and show you how to automate, scale, and grow faster.
                    </p>
                  </div>
                  
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/PsJoFoWxfZtIss11UYkj"
                    className="book-call-iframe"
                    id="inline-booking-PsJoFoWxfZtIss11UYkj"
                    title="Book Your Strategy Call"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
