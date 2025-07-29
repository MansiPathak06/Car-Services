import React from 'react';
import './brandsWeService.css';

const brands = [
  { name: "BMW", logo: "https://i.pinimg.com/736x/d3/59/a6/d359a669342e2d42de44db907193a837.jpg" },
  { name: "Mercedes", logo: "https://i.pinimg.com/1200x/d6/26/f8/d626f8561374ce8a366e594f1087590d.jpg" },
  { name: "Audi", logo: "https://i.pinimg.com/736x/4c/34/ee/4c34eefba221546293d1032ae967eddc.jpg" },
  { name: "Toyota", logo: "https://i.pinimg.com/1200x/5d/19/71/5d1971197bd2ae2e2ea51d98c048238a.jpg" },
  { name: "Honda", logo: "https://i.pinimg.com/736x/92/dc/37/92dc374b41322b316690350c84479573.jpg" },
  { name: "Ford", logo: "https://i.pinimg.com/1200x/5f/d7/54/5fd754ce796229170266b0a5f9ff008c.jpg" },
];

const BrandsWeService = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <h2 className="brands-heading">
          Brands We <span className="highlight">Service</span>
        </h2>
        <p className="brands-subtext">
          Expert service for all major automotive brands with specialized knowledge and genuine parts.
        </p>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-logo-wrapper">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWeService;
