
import React, { useState } from 'react';
import './gallery.css';

const images = [
  {
    id: 1,
    src: 'https://i.pinimg.com/736x/a1/e0/9a/a1e09aee5a65a180a246f46f8a09ab8c.jpg',
    alt: 'Before and After',
    category: 'Before & After',
    tagline: 'Complete transformation – before and after service.',
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/1200x/80/1a/13/801a13f97fc27e3aba77146145c89c35.jpg',
    alt: 'Diagnostics Tech',
    category: 'Technology',
    tagline: 'State-of-the-art diagnostic equipment in action.',
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/736x/18/39/1b/18391bb5174c65a4d12e793651ce74bd.jpg',
    alt: 'Brake Repair',
    category: 'Repair Work',
    tagline: 'Precision brake repair by our experts.',
  },
  {
    id: 4,
    src: 'https://i.pinimg.com/1200x/af/d4/53/afd453dab9b4f7a01c8c33e34303371e.jpg',
    alt: 'Our Technicians',
    category: 'Our Team',
    tagline: 'Meet our skilled and certified technicians.',
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/736x/ab/b0/19/abb019089d86e5b5efae4e5538525a44.jpg',
    alt: 'Workshop Facility',
    category: 'Facility',
    tagline: 'Clean, modern, and well-equipped workshop.',
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  const categories = ['All', 'Before & After', 'Technology', 'Repair Work', 'Our Team', 'Facility'];

  return (
    <div className="gallery-page">
      
      {/* Hero Heading */}
      <div className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h2>Our Work <span style={{ color: '#f79c2e' }}>Gallery</span></h2>
          <div className="gallery-breadcrumb">Home {'>'} Gallery</div>
        </div>
      </div>

      {/* Main Section */}
      <main className="contact-main">
        <div className="gallery-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-button ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(({ id, src, alt, tagline }) => (
            <div className="gallery-item" key={id}>
              <img src={src} alt={alt} className="gallery-image" />
              <div className="gallery-overlay">
                <p>{tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;