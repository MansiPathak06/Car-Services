import React from "react";
import "./successExperience.css";

const SuccessExperience = () => {
  return (
    <section className="success-section">
      <div className="success-container">
        {/* LEFT: Overlapping Images */}
        <div className="success-images">
          <img src="https://i.pinimg.com/736x/13/e2/33/13e233b3faa0817556d35bab4e36b74c.jpg" alt="Mechanic 1" className="img img-top" />
          <img src="https://i.pinimg.com/736x/f7/45/47/f745479527e4a3d34c58acc18de65d57.jpg" alt="Mechanic 2" className="img img-bottom" />
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
