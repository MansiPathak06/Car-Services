import React from "react";
import "./successExperience.css";

const SuccessExperience = () => {
  return (
    <section className="service-section">
      <div className="container">
        {/* Image Section */}
        <div className="image-section">
          <div className="image-wrapper">
            <img
              src="https://i.pinimg.com/736x/ed/f3/d2/edf3d277a232e88916bfc2568b6aa4df.jpg"
              alt="Professional Service"
              className="main-image"
            />
            <img
              src="https://i.pinimg.com/736x/13/e2/33/13e233b3faa0817556d35bab4e36b74c.jpg"
              alt="Expert Team"
              className="overlap-image"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <h2 className="section-title">Our Services</h2>
          
          <div className="experience-badge">
            <span className="year">1998</span>
            <div className="experience-text">
              <p>25+ Years</p>
              <p>of Excellence</p>
            </div>
          </div>

          <p className="description">
            We deliver exceptional automotive services with a team of skilled 
            professionals. Our commitment to quality and customer satisfaction 
            sets us apart in the industry.
          </p>

          <ul className="features">
            <li>Expert Technicians</li>
            <li>Quality Guarantee</li>
            <li>Affordable Pricing</li>
            <li>Fast Service</li>
          </ul>

          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default SuccessExperience;