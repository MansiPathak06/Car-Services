// Products.jsx
import React from "react";
import "./products.css";

const products = [
  {
    id: 1,
    name: "Engine Oil",
    description: "High-performance synthetic oil for all engines.",
    price: "₹899",
    image:
      "https://i.pinimg.com/1200x/70/66/e5/7066e5e273dac68838468fe04b54eaf5.jpg",
  },
  {
    id: 2,
    name: "Brake Pads",
    description: "Less wear, more safety — the upgrade your brakes deserve.",
    price: "₹1,499",
    image:
      "https://i.pinimg.com/1200x/be/d2/9d/bed29d329d9ee212b7ef72ba2c48fd8a.jpg",
  },
  {
    id: 3,
    name: "Car Battery",
    description: "High-capacity battery for all weather performance.",
    price: "₹4,250",
    image:
      "https://i.pinimg.com/736x/60/bf/6f/60bf6f32da3e506eeab913cd3c6d2c82.jpg",
  },
  {
    id: 4,
    name: "Air Filter",
    description: "Premium air filter for clean engine airflow.",
    price: "₹650",
    image:
      "https://i.pinimg.com/736x/05/13/40/051340d455a5b182014e5cc4fabf578a.jpg",
  },
  {
    id: 5,
    name: "Coolant",
    description: "Protects engine from overheating and freezing.",
    price: "₹550",
    image:
      "https://i.pinimg.com/1200x/44/24/76/4424768d817c914047aa2b01f46add62.jpg",
  },
  {
    id: 6,
    name: "Wiper Blades",
    description:
      "Say goodbye to streaks and squeaks — drive with smooth, silent, and spotless precision.",
    price: "₹350",
    image:
      "https://i.pinimg.com/736x/ae/d8/4a/aed84acf789af50536545a7f4f53dce6.jpg",
  },
  {
    id: 7,
    name: "Spark Plugs",
    description: "Ensure smooth ignition and fuel efficiency.",
    price: "₹275",
    image:
      "https://i.pinimg.com/1200x/f9/05/f2/f905f2b26dd85267ae6cf310c77dccd2.jpg",
  },
  {
    id: 8,
    name: "Tyre Polish",
    description: "Gives your tires a long-lasting, shiny finish.",
    price: "₹320",
    image:
      "https://i.pinimg.com/736x/a0/53/fb/a053fb00fc96be8f05b2e02e616dfbd8.jpg",
  },
];

const Products = () => {
  return (
    <section className="products-page">
      <div className="products-hero">
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <h2>Products</h2>
          <div className="products-breadcrumb">Our Bestselling Accessories</div>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="products-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="products-image"
            />
            <div className="products-details">
              <h3 className="products-name">{product.name}</h3>
              <p className="products-desc">{product.description}</p>
              <p className="products-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
