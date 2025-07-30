import React, { useState } from "react";

import {
  FaCarCrash,
  FaOilCan,
  FaTools,
  FaAlignCenter,
  FaCogs,
  FaBatteryThreeQuarters,
} from "react-icons/fa";
import "./servicesPage.css";

const services = [
  {
    title: "Engine Diagnostics",
    icon: <FaCarCrash className="service-icon-m" />,
    image:
      "https://i.pinimg.com/originals/fd/7f/9f/fd7f9f5db0c1d0d76c3f6c1b7a84791c.jpg",
    description:
      "Complete computerized engine check-up and performance diagnostics to ensure peak performance.",
    price: "₹799",
    duration: "Approx. 45 mins",
  },
  {
    title: "Oil and Filters",
    icon: <FaOilCan className="service-icon-m" />,
    image:
      "https://i.pinimg.com/originals/89/11/e6/8911e617308515dc6a91ce8e9c3e6ad0.jpg",
    description:
      "High-quality oil and filter replacement to maintain your engine’s health.",
    price: "₹1,199",
    duration: "Approx. 30 mins",
  },
  {
    title: "Brake Repair",
    icon: <FaTools className="service-icon-m" />,
    image:
      "https://i.pinimg.com/originals/6c/f8/6b/6cf86bbf2b5eb94b62e0f1fd86f8f8a0.jpg",
    description:
      "Thorough brake check, pad replacement, and repairs for complete safety.",
    price: "₹1,499",
    duration: "Approx. 60 mins",
  },
  {
    title: "Wheel Alignment",
    icon: <FaAlignCenter className="service-icon-m" />,
    image:
      "https://i.pinimg.com/originals/54/1a/5f/541a5f65e7f22b3dc58f6f6f5e62a4b6.jpg",
    description:
      "Precision alignment using laser tech to ensure perfect tire angle & balance.",
    price: "₹999",
    duration: "Approx. 40 mins",
  },
  {
    title: "General Service",
    icon: <FaCogs className="service-icon-m" />,
    image:
      "https://i.pinimg.com/originals/76/6a/13/766a13ad8eeae54d8ff626ea234d331b.jpg",
    description:
      "Full vehicle health check-up, washing, oiling, filter check, and fluid top-up.",
    price: "₹1,899",
    duration: "Approx. 1.5 hrs",
  },
  {
    title: "Battery Checking",
    icon: <FaBatteryThreeQuarters className="service-icon-m" />,
    image:
      "https://i.pinimg.com/originals/f2/e0/35/f2e03580c36edaa20fcf4b4a0f758c53.jpg",
    description:
      "Battery voltage test, terminal cleanup, and replacement suggestions.",
    price: "₹499",
    duration: "Approx. 20 mins",
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-page">
      <div className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h2>Our Premium Services</h2>
          <div className="services-breadcrumb">Car Maintenance & Repairs</div>
        </div>
      </div>

      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {/* Top Icon */}
            {service.icon}

            <h3>{service.title}</h3>
            <div className="service-price">
              Starting at <span>💰 {service.price}</span>
            </div>
            <div className="service-duration">
              <span>⏱ {service.duration}</span>
            </div>
            <p>{service.description}</p>
            <button
  className="learn-more-btn"
  onClick={() => setSelectedService(service)}
>
  Learn More
</button>


            {/* Bottom Decorative Icon */}
            <div className="service-icon-bottom">{service.icon}</div>
          </div>
        ))}
      </div>
      {selectedService && (
  <div className="modal-overlay" onClick={() => setSelectedService(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedService(null)}>×</button>

      <div className="modal-header">
        {selectedService.icon}
        <h2>{selectedService.title}</h2>
      </div>
      <p>{selectedService.description}</p>

      <div className="modal-details">
        <p><strong>Price:</strong> {selectedService.price}</p>
        <p><strong>Duration:</strong> {selectedService.duration}</p>
        {/* Optional Extras */}
        <p><strong>Note:</strong> Complete diagnostic report with recommendations and cost estimate.</p>
      </div>

      <button className="modal-book-btn">Book Now</button>
    </div>
  </div>
)}

    </section>
  );
};

export default ServicesPage;
