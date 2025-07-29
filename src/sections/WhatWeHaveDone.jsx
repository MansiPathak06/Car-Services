import React from "react";
import "./whatWeHaveDone.css";

const services = [
  {
    title: "Identify Problems",
    desc: "We offer full scope of carport administrations to vehicle proprietors in tucson.",
    icon: "🚗💥",
  },
  {
    title: "Auto Parts",
    desc: "We offer full scope of carport administrations to vehicle proprietors in tucson.",
    icon: "🚘",
  },
  {
    title: "Car Washes",
    desc: "We offer full scope of carport administrations to vehicle proprietors in tucson.",
    icon: "🧼🚙",
  },
  {
    title: "Guarantee",
    desc: "We offer full scope of carport administrations to vehicle proprietors in tucson.",
    icon: "🛠️",
  },
  {
    title: "Car Painting",
    desc: "We offer full scope of carport administrations to vehicle proprietors in tucson.",
    icon: "🎨🚗",
  },
  {
    title: "Auto Repair",
    desc: "We offer full scope of carport administrations to vehicle proprietors in tucson.",
    icon: "🔧🚗",
  },
];

const WhatWeHaveDone = () => {
  return (
    <section className="done-section">
      <h2 className="done-title">What We Have Done</h2>
      <div className="done-divider">
        <div className="line"></div>
        <div className="dot"></div>
        <div className="line yellow"></div>
      </div>
      <p className="done-subtext">
        Our car rental services, in the travel industry and business industry,{" "}
        <br />
        stand apart for their quality and great taste.
      </p>

      <div className="done-layout">
        {/* Left Block */}
        <div className="service-block left">
          {services.slice(0, 3).map((s, i) => (
            <div key={i} className="done-item">
              <h4>
                {s.title} <span className="icon">{s.icon}</span>
              </h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Car with Gear */}
        <div className="done-center">
          <div className="rotating-gear">
            <img
              src="https://motors.websitelayout.net/img/content/what-we-offer-02.png"
              alt="Rotating Gear"
              className="gear-image"
            />
          </div>
          <img
            src="https://motors.websitelayout.net/img/content/what-we-offer-03.png"
            alt="Center Car"
            className="car-image"
          />
        </div>

        {/* Right Block */}
        <div className="service-block right">
          {services.slice(3, 6).map((s, i) => (
            <div key={i} className="done-item">
              <h4>
                {s.title} <span className="icon">{s.icon}</span>
              </h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHaveDone;
