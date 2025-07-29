import React from "react";
import "./successExperience.css";

const SuccessExperience = () => {
  return (
    <section className="success-section">
      <div className="success-container">
        {/* LEFT: Overlapping Images */}
        <div className="success-images">
          <img src="/image4.jpg" alt="Mechanic 1" className="img img-top" />
          <img src="/image5.jpg" alt="Mechanic 2" className="img img-bottom" />
        </div>

        {/* RIGHT: Text */}
        <div className="success-text">
          <h2>Success Experiences</h2>
          <div className="year-highlight">
            <h1>1998</h1>
            <p>
              <span>20+ Years of experience</span>
              <br />
              in auto services.
            </p>
          </div>
          <p className="description">
            We are a group of expert and gifted specialists in every homegrown
            circle. We offer a wide scope of administrations and simultaneously.
          </p>

          <ul className="features-list">
            <li>➤ Competitive prices</li>
            <li>➤ Full safety analysis</li>
            <li>➤ We are a qualified team</li>
          </ul>

          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default SuccessExperience;
