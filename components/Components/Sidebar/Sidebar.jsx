import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AnimatedButton from "../Button/AnimatedButton";

function Sidebar() {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const menuBtn = document.querySelector(".nav-btn");
        const closeBtn = sidebarRef.current?.querySelector(".close-btn");
        const sidebar = sidebarRef.current;

        function openSidebar() {
        // Overlay removed - sidebar opens directly
        sidebar.classList.add("active");
        }

        function closeSidebar() {
        sidebar.classList.remove("active");
        }

        menuBtn?.addEventListener("click", openSidebar);
        closeBtn?.addEventListener("click", closeSidebar);

        return () => {
        menuBtn?.removeEventListener("click", openSidebar);
        closeBtn?.removeEventListener("click", closeSidebar);
        };
    }, []);

    useEffect(() => {
        const dropdownBtns = sidebarRef.current?.querySelectorAll(".sidebar-dropdown-btn");

        function handleDropdownClick(e) {
        const btn = e.currentTarget;
        const dropdownMenu = btn.parentElement.nextElementSibling;
        const isOpen = dropdownMenu.classList.contains("active");

        sidebarRef.current
            .querySelectorAll(".sidebar-dropdown-menu")
            .forEach(menu => {
            menu.classList.remove("active");
            });

        if (!isOpen) dropdownMenu.classList.add("active");
        }

        dropdownBtns?.forEach(btn => {
        btn.addEventListener("click", handleDropdownClick);
        });

        return () => {
        dropdownBtns?.forEach(btn => {
            btn.removeEventListener("click", handleDropdownClick);
        });
        };
    }, []);

    return (
        <div>
        {/* Overlay removed */}
        <div ref={sidebarRef} className="sidebar">
            <div className="sidebar-header">
                <button className="close-btn"><span>X</span></button>
            </div>
            {/* Book a Call Button at Top */}
            <div className="sidebar-book-call">
                <AnimatedButton href="/book-a-call">
                    Book a Call
                </AnimatedButton>
            </div>
            <ul className="menu">
                <li><Link href="/" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>Home</Link></li>
                <li><Link href="/about" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>About</Link></li>
                <li><Link href="/service" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>Services</Link></li>
                <li className="sidebar-dropdown">
                    <div className="dropdown-header">
                        <a href="#">Resources</a>
                    <button className="sidebar-dropdown-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    </div>
                    <ul className="sidebar-dropdown-menu">
                        <li><Link href="/team" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>Our Team</Link></li>
                        <li><Link href="/pricing" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>Pricing Plan</Link></li>
                        <li><Link href="/testimonial" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>Testimonial</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact" onClick={() => { typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'instant' }); }}>Contact Us</Link></li>
            </ul>
        </div>
        </div>
    );
    }

export default Sidebar;
