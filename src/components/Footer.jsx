import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        <div className="footer-section brand">
          <h2 className="logo-text">Motors</h2>
          <p>
            Premium automotive service center dedicated to excellence, speed, and technical expertise.
            Trusted by drivers who demand the best for their vehicles.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt className="icon-f" /> +91 5676767998</p>
          <p><FaEnvelope className="icon-f" /> support@motors.in</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section hours">
          <h3>Business Hours</h3>
          <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AutoCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
