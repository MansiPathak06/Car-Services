import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>
          Contact <span className="contact-highlight">TurboCare</span>
        </h1>
        <p>
          Get in touch with our expert team. We're here to answer your questions and help you
          with all your automotive service needs.
        </p>
      </div>

      {/* Form + Sidebar */}
      <div className="contact-main">
        <div className="contact-form-section">
          <h2>
            <i className="fa-solid fa-paper-plane"></i> Send Us a Message
          </h2>
          <form>
            <div className="contact-row">
              <input type="text" placeholder="Enter your full name" required />
              <input type="email" placeholder="your.email@example.com" required />
            </div>
            <div className="contact-row">
              <input type="text" placeholder="+1 (555) 123-4567" />
              <input type="text" placeholder="How can we help you?" />
            </div>
            <textarea placeholder="Tell us about your automotive needs or questions..." required />
            <button type="submit" className="contact-submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-sidebar">
          <div className="contact-quick">
            <h3>Quick Contact</h3>
            <p><i className="fa-solid fa-phone"></i> +1 (555) 123-4567</p>
            <span>Call for immediate assistance</span>
            <p><i className="fa-solid fa-envelope"></i> info@turbocare.com</p>
            <span>Email us your questions</span>
          </div>
          <div className="contact-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="contact-info-grid">
        <div className="info-item">
          <i className="fa-solid fa-location-dot icon-orange"></i>
          <h4>Our Location</h4>
          <p>123 Auto Service Drive<br />Automotive District, AD 12345<br />United States</p>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-phone icon-orange"></i>
          <h4>Phone Numbers</h4>
          <p>
            Main: +1 (555) 123-4567<br />
            Emergency: +1 (555) 123-4568<br />
            Parts Dept: +1 (555) 123-4569
          </p>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-envelope icon-orange"></i>
          <h4>Email Addresses</h4>
          <p>
            General: info@turbocare.com<br />
            Service: service@turbocare.com<br />
            Parts: parts@turbocare.com
          </p>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-clock icon-orange"></i>
          <h4>Business Hours</h4>
          <p>
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <h3><i className="fa-solid fa-location-dot icon-orange"></i> Find Us Here</h3>
        <iframe
          title="TurboCare Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9621718034276!2d-74.00776802355784!3d40.709507037215746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b7a7d69d%3A0x5d6e48f7dbf30bc6!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
