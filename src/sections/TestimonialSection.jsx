import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Businessman",
    message:
      "Excellent service! My car was picked up and delivered on time, and it feels brand new.",
    image: "/assets/testimonial1.jpg",
  },
  {
    name: "Priya Mehta",
    role: "IT Professional",
    message:
      "Loved the professionalism and the detailing work done. Highly recommend!",
    image: "/assets/testimonial2.jpg",
  },
  {
    name: "Amit Verma",
    role: "Doctor",
    message:
      "Fast, reliable and trustworthy. My go-to car service from now on.",
    image: "/assets/testimonial3.jpg",
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
