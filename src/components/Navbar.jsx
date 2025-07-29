import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo"> 
          <span className="logo-icon"></span>
          <span className="logo-text">MOTORS</span>
          <span className="logo-tagline">EASY CARE & LIFE</span>
        </div>
        <nav className="nav-links">
          <a href="#">HOME</a>
          <div className="dropdown">
            <a href="#">PAGES ▾</a>
            <div className="dropdown-content">
              <a href="#">About</a>
              <a href="#">Team</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">SERVICES ▾</a>
            <div className="dropdown-content">
              <a href="#">Car Repair</a>
              <a href="#">Oil Change</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">PRODUCTS ▾</a>
            <div className="dropdown-content">
              <a href="#">Product 1</a>
              <a href="#">Product 2</a>
            </div>
          </div>
         
          <div className="dropdown">
            <a href="#">BLOG ▾</a>
            <div className="dropdown-content">
              <a href="#">Latest Posts</a>
            </div>
          </div>
         
          <a href="#">CONTACT</a>
        </nav>
        <button className="quote-btn">Free Quote</button>
      </div>
    </header>
  );
};

export default Navbar;
