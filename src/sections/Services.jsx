import React from 'react';
import './services.css';

const services = [
  {
    title: 'Engine Diagnostics',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: '/engine.jpg',
    icon: '🔧'
  },
  {
    title: 'Oil and Filters',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: '/oil.jpg',
    icon: '🛢️'
  },
  {
    title: 'Brake Repair',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: '/brake.jpg',
    icon: '🚗'
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Special Services</h2>
      <div className="services-subtitle">
        <div className="line"></div>
        <div className="dot"></div>
        <div className="line yellow"></div>
      </div>
      <p className="services-description">
        Our car rental services, in the travel industry and business industry, <br />
        stand apart for their quality and great taste.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-overlay">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
              <span className="read-more">Read More ➤</span>
              <span className="service-icon">{service.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
