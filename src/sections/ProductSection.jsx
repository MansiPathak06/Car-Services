import React from "react";
import "./productSection.css";

const products = [
  {
    id: 1,
    name: "Engine Oil",
    description: "High-performance synthetic oil for all engines.",
    price: "₹899",
    image: "https://i.pinimg.com/1200x/70/66/e5/7066e5e273dac68838468fe04b54eaf5.jpg",
  },
  {
    id: 2,
    name: "Brake Pads",
    description: "Reliable, long-lasting brake pads.",
    price: "₹1,499",
    image: "https://i.pinimg.com/1200x/be/d2/9d/bed29d329d9ee212b7ef72ba2c48fd8a.jpg",
  },
  {
    id: 3,
    name: "Car Battery",
    description: "High-capacity battery for all weather performance.",
    price: "₹4,250",
    image: "https://i.pinimg.com/1200x/8e/4f/56/8e4f569c851aa1345510c302dae77d7a.jpg",
  },
  {
    id: 4,
    name: "Air Filter",
    description: "Premium air filter for clean engine airflow.",
    price: "₹650",
    image: "https://i.pinimg.com/736x/05/13/40/051340d455a5b182014e5cc4fabf578a.jpg",
  },
];

const ProductSection = () => {
  return (
    <section className="product-section">
      <h2 className="product-title">Popular Auto Products</h2>
      <p className="product-subtitle">
        Explore our best-selling and most trusted car parts and accessories.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
