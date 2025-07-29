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
          Our car rental services, in the travel industry and business industry,<br />
          stand apart for their quality and great taste.
        </p>

        {/* Cards */}
        <div className="contact-cards">
          <div
            className="contact-card"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/f6/19/d3/f619d3bababbd21641ffc4c9236e202e.jpg')" }}
          >
            <div className="contact-card-content">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <h4>174 Guild Street, Town MT.</h4>
              <p>London, UK</p>
            </div>
          </div>

          <div
            className="contact-card"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/87/04/0c/87040cb8c51cb7b1f236c816189d2002.jpg')"} }
          >
            <div className="contact-card-content">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
              <h4>(+44) 123 456 789</h4>
              <p>Mon-Sat 9:00am - 5:00pm</p>
            </div>
          </div>

          <div
            className="contact-card"
            style={{ backgroundImage: "url('https://i.pinimg.com/1200x/37/24/f7/3724f774ad7cbcb469d0e52432ab743f.jpg')" }}
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
      <div className="form-map-container">
        {/* FORM */}
        <div className="contact-form-box">
          <h2>Get In Touch !</h2>
          <p className="subtext">
            If you’re searching out advice, please fill out this form. We will discover you and get in touch.
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
            <input type="text" placeholder="Type the below word" className="captcha-input" />
            <div className="captcha">catch</div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* MAP */}
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19808.639996031536!2d-0.1417495251852613!3d51.509865000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c276a1ea9b%3A0x48e4c2a353f4e07f!2sLondon!5e0!3m2!1sen!2sin!4v1692186040244!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
 
  );

export default ContactForm;
    </div>
  );
};

export default Contact;
