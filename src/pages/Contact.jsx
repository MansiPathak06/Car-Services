import React from "react";
import "./contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero-section">
        <div className="contact-overlay">
          <h1 className="contact-title">
            Contact <span className="highlight">Us</span>
          </h1>
          <p className="contact-subtitle">
            Get in touch with our expert team. We're here to answer your
            questions and help you with all your automotive service needs.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-left-c">
          <h2>
            <FaMapMarkerAlt /> Send Us a Message
          </h2>
          <form className="contact-form">
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <input type="tel" placeholder="Phone Number *" required />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Message *" required></textarea>
            <button type="submit" className="contact-btn-c">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-right-c">
          <div className="contact-info">
            <h3>Quick Contact</h3>
            <p>
              <FaPhoneAlt /> +1 (555) 123-4567
            </p>
            <span className="contact-note">Call for immediate assistance</span>
            <p>
              <FaEnvelope /> info@turbocare.com
            </p>
            <span className="contact-note">Email us your questions</span>
              <hr className="hr" />
            <p>Follow us!</p>

            <div className="contact-socials">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>

          

            <div className="emergency-box-c">
              <h4>Emergency Service</h4>
              <p>Need roadside assistance or emergency repairs?</p>
              <button className="contact-btn-c">Call Emergency Line</button>
            </div>
            </div>
            </div>
          </div>
        
      <section className="contact-info-grid">
        <div className="contact-info-box">
          <i className="fas fa-map-marker-alt"></i>
          <h4>Our Location</h4>
          <p>123 Auto Service Drive</p>
          <p>Automotive District, AD 12345</p>
          <p>United States</p>
        </div>

        <div className="contact-info-box">
          <i className="fas fa-phone-alt"></i>
          <h4>Phone Numbers</h4>
          <p>Main: +1 (555) 123-4567</p>
          <p>Emergency: +1 (555) 123-4568</p>
          <p>Parts: +1 (555) 123-4569</p>
        </div>

        <div className="contact-info-box">
          <i className="fas fa-envelope"></i>
          <h4>Email Addresses</h4>
          <p>General: info@turbocare.com</p>
          <p>Service: service@turbocare.com</p>
          <p>Parts: parts@turbocare.com</p>
        </div>

        <div className="contact-info-box">
          <i className="fas fa-clock"></i>
          <h4>Business Hours</h4>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      <section className="contact-map">
        <h3>📍 Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.893829593324!2d-74.00895368459355!3d40.71006217933101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17810cbfcf%3A0x4a3f6e5042a32c73!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1633245616105!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
