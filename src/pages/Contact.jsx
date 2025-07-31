import React from "react";
import "./contact.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h2>Contact Us</h2>
          <p className="contact-breadcrumb">
            Home &gt; <span className="highlight">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="contact-main">
        <h2>Need Any Services For Cars?</h2>
        <div className="contact-divider">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="line yellow"></div>
        </div>
        <p className="contact-description">
          Our car rental services, in the travel industry and business industry,
          <br />
          stand apart for their quality and great taste.
        </p>

        {/* Cards */}
        <div className="contact-cards">
          <div
            className="contact-card"
            // style={{ backgroundImage: "url('https://i.pinimg.com/736x/f6/19/d3/f619d3bababbd21641ffc4c9236e202e.jpg')" }}
          >
            <div className="contact-card-content">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <h4>174 Guild Street, Town MT.</h4>
              <p>London, UK</p>
            </div>
          </div>

          <div
            className="contact-card"
            // style={{ backgroundImage: "url('https://i.pinimg.com/736x/21/80/9a/21809ab1eb190d6b4f35f8a2eca968aa.jpg')"} }
          >
            <div className="contact-card-content">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
              <h4>(+44) 123 456 789</h4>
              <p>Mon-Sat 9:00am - 5:00pm</p>
            </div>
          </div>

          <div
            className="contact-card"
            // style={{ backgroundImage: "url('https://i.pinimg.com/1200x/37/24/f7/3724f774ad7cbcb469d0e52432ab743f.jpg')" }}
          >
            <div className="contact-card-content">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <h4>example@youremail.com</h4>
              <p>24 x 7 online support</p>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-form-section">
        <div className="contact-layout-wrapper">
          {/* FORM + MAP */}
          <div className="form-map-container">
            {/* FORM */}
            <div className="contact-form-box">
              <h2>Get In Touch !</h2>
              <p className="subtext">
                If you’re searching out advice, please fill out this form. We
                will discover you and get in touch.
              </p>

              <form>
                <div className="form-row">
                  <input type="text" placeholder="Your Name *" required />
                  <input type="email" placeholder="Your Email *" required />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="Your Subject *" required />
                  <input type="tel" placeholder="Contact Number" />
                </div>
                <textarea placeholder="Message *" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

            {/* MAP */}
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* NEW: QUICK CONTACT BOX */}
          <div className="quick-contact-box">
            <h3>Quick Contact</h3>
            <p>
              <strong>📞 +1 (555) 123-4567</strong>
              <br />
              Call for immediate assistance
            </p>
            <p>
              <strong>📧 info@motors.com</strong>
              <br />
              Email us your questions
            </p>

            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>

            <div className="emergency-box">
              <h4>🚨 Emergency Service</h4>
              <p>Need roadside assistance or emergency repairs?</p>
              <button className="emergency-btn">Call Emergency Line</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
