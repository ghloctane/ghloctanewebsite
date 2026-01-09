import React from "react";
import Link from "next/link";
import { useNav } from "../Context/NavContext";
import AnimatedButton from "../Button/AnimatedButton";
import { FaBars, FaAngleDown } from "react-icons/fa";

function Navbar() {
const { isDropdownActive } = useNav();

return (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link className="navbar-brand" href="/">
                    <img
                        src="/assets/images/GHL Octane Final.webp"
                        className="site-logo img-fluid"
                        alt="Logo"
                        loading="eager"
                        fetchPriority="high"
                        width="200"
                        height="60"
                    />
                    </Link>
                </div>

                {/* Mobile Book a Call Button - Hidden, will be in sidebar */}

                <button
                    className="navbar-toggler nav-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FaBars />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                            Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/about" className="nav-link">
                            About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/service" className="nav-link">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive([
                                "/team",
                                "/pricing",
                                "/testimonial",
                                ])
                                ? "active"
                                : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Resources <FaAngleDown className="accent-color" />
                            </a>
                            <ul className="dropdown-menu">
                            {/* <li>
                                <Link href="/case-studies" className="dropdown-item">
                                    Case Studies
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/team" className="dropdown-item">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="dropdown-item">
                                    Pricing Plan
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonial" className="dropdown-item">
                                    Testimonial
                                </Link>
                            </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    
                    {/* Mobile Book a Call Button */}
                    <div className="navbar-action-container-mobile">
                        <AnimatedButton href="/book-a-call">
                            Book a Call
                        </AnimatedButton>
                    </div>
                </div>

                {/* Navbar Action */}
                <div className="navbar-action-container">
                    <AnimatedButton href="/book-a-call">
                        Book a Call
                    </AnimatedButton>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navbar;