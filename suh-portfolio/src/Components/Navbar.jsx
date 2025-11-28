import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-3d">
            <span className="logo-text">SF</span>
            <div className="logo-glow"></div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
            <li key={item} className="nav-item">
              <button
                onClick={() => scrollToSection(item)}
                className="nav-link"
              >
                <span className="link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <span className="link-underline"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="mobile-nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;