import React, { useState } from 'react';
import './whyWeAreBest.css';

const features = [
  {
    id: 1,
    title: 'Expert Mechanic',
    image: '/image1.jpg',
  },
  {
    id: 2,
    title: 'Engine Upgrades',
    image:'/image2.jpg',
  },
  {
    id: 3,
    title: 'Quick Service',
    image: '/image3.jpg',
  },
];

const WhyWeAreBest = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="why-section">
      <div className="why-heading">
        <h2>Why We Are Best</h2>
        <div className="divider">
          <span></span>
          <span className="dot"></span>
          <span></span>
        </div>
        <p>
          Our car rental services, in the travel industry and business industry,
          stand apart for their quality and great taste.
        </p>
      </div>

      <div className="features-m">
        {features.map((item) => (
          <div
            key={item.id}
            className="feature-card-m"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img src={item.image} alt={item.title} />
            {hoveredId === item.id ? (
              <div className="overlay-text">
                <h3>{item.title}</h3>
                <p>We will help return your car to a functioning condition</p>
                <a href="#">Read More →</a>
              </div>
            ) : (
              <div className="badge">
                <span>{item.id}</span>
                <strong>{item.title}</strong>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWeAreBest;
