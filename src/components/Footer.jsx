import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        <div className="footer-section brand">
          <h2 className="logo-text">Motors</h2>
          <p>Your trusted partner for original auto parts and car services.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt className="icon" /> +91 5676767998</p>
          <p><FaEnvelope className="icon" /> support@motors.in</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AutoCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
