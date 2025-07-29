import React from "react";
import "./workProcess.css";

const steps = [
  { step: "01", title: "Choose Services", desc: "We help you discover any protection inclusions that are ideal for you." },
  { step: "02", title: "Make Appointment", desc: "We help you discover any protection inclusions that are ideal for you." },
  { step: "03", title: "Confirm Request", desc: "We help you discover any protection inclusions that are ideal for you." },
  { step: "04", title: "Pick Your Car", desc: "We help you discover any protection inclusions that are ideal for you." },
];

const WorkProcess = () => {
  return (
    <section className="work-process">
      <h2 className="work-title">Our Work Process</h2>
      <div className="work-divider">
        <div className="work-line"></div>
        <div className="work-dot"></div>
        <div className="work-line yellow"></div>
      </div>
      <p className="work-subtext">
        Our car rental services, in the travel industry and business industry, <br />
        stand apart for their quality and great taste.
      </p>

      <div className="work-steps-container">
        
        <div className="work-steps">
          {steps.map((item, idx) => (
            <div key={idx} className="work-step">
              <div className="work-circle">{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
