import React from "react";
import "./testimonialSection.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Businessman",
    message:
      "Excellent service! My car was picked up and delivered on time, and it feels brand new.",
    image: "https://i.pinimg.com/736x/eb/7c/4d/eb7c4da90b7f0e202ba6f83ef19e2c8b.jpg",
  },
  {
    name: "Priya Mehta",
    role: "IT Professional",
    message:
      "Loved the professionalism and the detailing work done. Highly recommend!",
    image: "https://i.pinimg.com/1200x/5f/1d/a1/5f1da12036a8355ae279cff384090852.jpg",
  },
  {
    name: "Amit Verma",
    role: "Doctor",
    message:
      "Fast, reliable and trustworthy. My go-to car service from now on.",
    image: "https://i.pinimg.com/736x/3d/63/67/3d63672e274e46bbb832e2c328a82217.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <p className="testimonial-message">“{t.message}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
