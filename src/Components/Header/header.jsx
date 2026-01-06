import React from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../Context/NavContext";
import AnimatedButton from "../Button/AnimatedButton";
import { FaBars, FaAngleDown } from "react-icons/fa6";

function Navbar() {
const { isDropdownActive } = useNav();

return (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-container">
                <div className="logo-container">
                    <NavLink className="navbar-brand" to="/">
                    <img
                        src="/assets/images/GHL Octane Final.webp"
                        className="site-logo img-fluid"
                        alt="Logo"
                        loading="eager"
                        fetchPriority="high"
                        width="200"
                        height="60"
                    />
                    </NavLink>
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
                            <NavLink to="/" className="nav-link" end>
                            Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                            About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/service" className="nav-link">
                                Services
                            </NavLink>
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
                                <NavLink to="/case_studies" className="dropdown-item">
                                    Case Studies
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/team" className="dropdown-item">
                                    Our Team
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className="dropdown-item">
                                    Pricing Plan
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/testimonial" className="dropdown-item">
                                    Testimonial
                                </NavLink>
                            </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contact Us
                            </NavLink>
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