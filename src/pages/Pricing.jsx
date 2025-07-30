import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h2>Pricing</h2>
          <div className="contact-breadcrumb">Home {'>'} Pricing</div>
        </div>
      </div>

      <div className="pricing-section">
        <div className="pricing-intro">
          <h3>Our Best Pricing Plans</h3>
          <div className="contact-divider">
            <div className="line"></div>
            <div className="dot yellow"></div>
            <div className="line"></div>
          </div>
          <p>
            Our car rental services, in the travel industry and business industry,
            stand apart for their quality and great taste.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="plan-name">Standard</div>
            <div className="plan-price">₹4,899</div>
            <ul className="plan-features">
              <li>Car Wash & Polishing</li>
              <li>Water Wash & Oil Level</li>
              <li>Wheel & Steering Checkup</li>
              <li>Break Adjustment</li>
              <li>Cambelt Replacement</li>
            </ul>
            <button className="choose-btn">Choose</button>
          </div>

          <div className="pricing-card">
            <div className="plan-name">Premium</div>
            <div className="plan-price">₹6,599</div>
            <ul className="plan-features">
              <li>Car Wash & Polishing</li>
              <li>Water Wash & Oil Level</li>
              <li>Wheel & Steering Checkup</li>
              <li>Break Adjustments</li>
              <li>Cambelt Replacement</li>
            </ul>
            <button className="choose-btn">Choose</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
