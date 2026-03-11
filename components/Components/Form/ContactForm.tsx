import React from "react";
import Script from "next/script";

const ContactForm = () => {
  return (
    <>
      <style>{`
        .form-layout-wrapper.form-layout-plain { background: none; padding: 0; align-items: stretch; }
        .form-layout-wrapper.form-layout-plain::before { display: none; }
        .form-layout-wrapper.form-layout-plain .title-heading { margin-bottom: 20px; }
      `}</style>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="beforeInteractive"
      />
      <div className="form-layout-wrapper form-layout-plain">
            <h3 className="title-heading">Let's Talk About Your Next Project</h3>
            
            <div className="contact-form-iframe-wrapper" style={{ minHeight: 588 }}>
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/ccMDJ3sn0lGFo8DB5DqJ"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-ccMDJ3sn0lGFo8DB5DqJ"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact form-Ghl Octane "
                    data-height="588"
                    data-layout-iframe-id="inline-ccMDJ3sn0lGFo8DB5DqJ"
                    data-form-id="ccMDJ3sn0lGFo8DB5DqJ"
                    title="Contact form-Ghl Octane "
                />
            </div>
      </div>
    </>
  );
};

export default ContactForm;
