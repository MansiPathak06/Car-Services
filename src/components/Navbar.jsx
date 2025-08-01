import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-icon">⚙️</span>
          <span className="logo-text">MOTORS</span>
          <span className="logo-tagline">EASY CARE & LIFE</span>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
  <a href="/">HOME</a>
  <a href="/services">SERVICES</a>
  <a href="/products">PRODUCTS</a>
  <a href="/pricing">PRICING</a>
  <a href="/blog">BLOG</a>
  <a href="/gallery">GALLERY</a>
  <a href="/contact">CONTACT</a>

  {/* ✅ This is the correct and working version */}
  <Link to="/bookservice" className="mobile-book-btn" onClick={() => setMenuOpen(false)}>
    <button className="quote-btn">Book Service</button>
  </Link>
</nav>


        <Link to="/bookservice">
          <button className="quote-btn">Book Service</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
