import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';


const services = [
  {
    title: 'Engine Diagnostics',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: 'https://i.pinimg.com/1200x/5a/ae/cb/5aaecb25403dbe63224f22495e81fd81.jpg',
    icon: '🔧'
  },
  {
    title: 'Oil and Filters',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: 'https://i.pinimg.com/736x/73/b9/c4/73b9c471a4004942a8de9d0e88c71967.jpg',
    icon: '🛢️'
  },
  {
    title: 'Brake Repair',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: 'https://i.pinimg.com/1200x/9a/32/a3/9a32a3f3560179725758fc9b40c1fb77.jpg',
    icon: '🚗'
  },
  {
    title: 'Wheel Alignment',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: 'https://i.pinimg.com/1200x/85/96/cd/8596cda1fff4e2b33ae77166b3184272.jpg',
    icon: '🔧'
  },
  {
    title: 'General Service',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image: 'https://i.pinimg.com/736x/5d/97/c8/5d97c8569577584f217b740d8c4e2656.jpg',
    icon: '🛢️'
  },
  {
    title: 'Battery Checking',
    description: 'We are the assistance that assessments genuinely the issues with the vehicle.',
    image:'https://i.pinimg.com/736x/57/88/0b/57880b13c2cfbfd4deffecf5e72cc581.jpg',
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
          <div className="service-card-s" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-overlay">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text-s">{service.description}</p>
              <Link to="/services" className="read-more-s">Read More ➤</Link>

              {/* <span className="service-icon">{service.icon}</span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
