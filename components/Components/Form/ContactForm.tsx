import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="form-layout-wrapper">
        <div className="card form-layout">
            <h3 className="title-heading">Let's Talk About Your Next Project</h3>
            
            <div className="contact-form-iframe-wrapper">
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
    </div>
  );
};

export default ContactForm;
