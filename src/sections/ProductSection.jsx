import React from "react";
import "./productSection.css";

const products = [
  {
    id: 1,
    name: "Engine Oil",
    description: "High-performance synthetic oil for all engines.",
    price: "₹899",
    image: "/assets/products/engine-oil.jpg",
  },
  {
    id: 2,
    name: "Brake Pads",
    description: "Reliable, long-lasting brake pads.",
    price: "₹1,499",
    image: "/assets/products/brake-pads.jpg",
  },
  {
    id: 3,
    name: "Car Battery",
    description: "High-capacity battery for all weather performance.",
    price: "₹4,250",
    image: "/assets/products/car-battery.jpg",
  },
  {
    id: 4,
    name: "Air Filter",
    description: "Premium air filter for clean engine airflow.",
    price: "₹650",
    image: "/assets/products/air-filter.jpg",
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
