import React, { useState } from "react";
import AnimatedButton from "../Button/AnimatedButton";

function NewsletterSection() {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            setErrorMessage("This field is required");
            setError(true);
            setSuccess(false);
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email format");
            setError(true);
            setSuccess(false);
            return;
        }

        setSuccess(true);
        setError(false);
        setEmail("");

        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="section">
            <div className="hero-container">
                <div className="newsletter-wrapper">
                    <div className="newsletter-layout">
                        <div className="spacer"></div>
                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <div className="d-flex flex-column gspace-2">
                                <h3 className="title-heading">STAY AHEAD IN DIGITAL MARKETING</h3>
                                <p>
                                    Future-ready systems, smart automation, and scalable growth — powered by GHL Octane.
                                </p>
                            </div>

                            {success && (
                                <div className="alert success">
                                    <span className="check-icon">
                                        <i className="fa-solid fa-2xl fa-check"></i>
                                    </span>
                                    <p className="text-center">Thank you! Form submitted successfully.</p>
                                </div>
                            )}

                            {error && (
                                <div className="alert error">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p className="text-center">{errorMessage}</p>
                                </div>
                            )}

                            <form
                                id="newsletterForm"
                                onSubmit={handleSubmit}
                                className="needs-validation"
                                noValidate
                            >
                                <div className="input-container">
                                    <input
                                        type="email"
                                        name="newsletter-email"
                                        id="newsletter-email"
                                        placeholder="Give your best email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={error ? "error-border" : ""}
                                        required
                                    />
                                    {error && (
                                        <div className="error-text">{errorMessage}</div>
                                    )}
                                </div>
                                <AnimatedButton type="submit">
                                    Subscribe
                                </AnimatedButton>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSection;