import React, { useEffect } from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";

function BookACallPage(){
    useEffect(() => {
        // Load the booking embed script
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
    }, []);

    return(
        <>
            <HeadTitle title="Book a Call - GHL Octane - GoHighLevel Solutions" />
            <BannerInnerSection title="Book a Call" currentPage="Book a Call" />
            
            <div className="section section-book-call">
                <div className="hero-container">
                    <div className="row row-cols-lg-1 row-cols-1 justify-content-center">
                        <div className="col col-lg-10">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="book-call-wrapper">
                                    <div className="card book-call-card">
                                        <div className="book-call-header">
                                            <div className="sub-heading align-self-center">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>Schedule Your Free Strategy Call</span>
                                            </div>
                                            <h2 className="title-heading text-center">Let's Discuss Your Project</h2>
                                            <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                                                Book a free consultation call with our team. We'll discuss your business goals and how GoHighLevel can help you scale.
                                            </p>
                                        </div>
                                        
                                        <div className="book-call-iframe-wrapper">
                                            <iframe 
                                                src="https://api.leadconnectorhq.com/widget/booking/PsJoFoWxfZtIss11UYkj" 
                                                style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
                                                scrolling="no" 
                                                id="PsJoFoWxfZtIss11UYkj_1767654729909"
                                                title="Book a Call - GHL Octane"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookACallPage;

