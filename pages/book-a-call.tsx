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
      <HeadTitle title="Book a Call - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Book a Call" currentPage="Book a Call" />
      
      <div className="section">
        <div className="hero-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="booking-container">
                <div 
                  className="msgsndr-form" 
                  data-form-id="YOUR_FORM_ID"
                  style={{ minHeight: '600px' }}
                >
                  {/* Booking form will be embedded here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
