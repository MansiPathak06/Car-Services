import React, { useEffect, useState } from 'react';
import './herosection.css';

const slides = [
  {
    image: '/banner1.jpg',
    title: 'Best Original Parts & Product Change',
    description:
      'We represent considerable authority in canny and successful Search and has faith in the force of organizations to develop business.',
  },
  {
    image: '/banner2.jpg',
    title: 'Smooth Car Service for Every Vehicle',
    description:
      'Expert mechanics and professional care ensure your vehicle gets the treatment it deserves.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const [animate, setAnimate] = useState(true); // ✅ This was missing or misplaced


   useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Reset animation
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true); // Trigger animation for new slide
      }, 300); // slight delay before fade in again
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="overlay">
        <div className={`hero-content ${animate ? 'fade-in-up' : ''}`}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="hero-btn">Get A Service</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
