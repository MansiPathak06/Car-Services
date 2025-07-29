import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation, Pagination, Autoplay]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./ourWorkers.css";

const workers = [
  {
    image: "https://i.pinimg.com/1200x/69/d1/c5/69d1c5ea2961e8f7b5b7dc401a411694.jpg",
    title: "Car Diagnostic",
  },
  {
    image: "https://i.pinimg.com/736x/28/fe/75/28fe752b8a2e331b86180240b5ffc4cb.jpg",
    title: "Expert Technicians",
  },
  {
    image: "https://i.pinimg.com/736x/ee/b9/f2/eeb9f20ffcf58fb712ea07169d1de0b7.jpg",
    title: "Electrical Inspection",
  },
  {
    image: "https://i.pinimg.com/736x/e8/fa/45/e8fa4527742f9ec64f7186868715c245.jpg",
    title: "Vehicle Testing",
  },
  {
    image: "https://i.pinimg.com/736x/0a/c1/cd/0ac1cd399f5e833d8030a8ac61e93f46.jpg",
    title: "Engine Repairs",
  },
  {
    image: "https://i.pinimg.com/1200x/70/5a/24/705a24ea1df71af578a624ca575e64a0.jpg",
    title: "Tech Diagnosis",
  },
];

const OurWorkers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="workers-section">
      <h2 className="workers-title">Our Excellent Workers</h2>
      <div className="workers-divider">
        <div className="line"></div>
        <div className="dot"></div>
        <div className="line yellow"></div>
      </div>
      <p className="workers-subtext">
        Our car rental services, in the travel industry and business industry, <br />
        stand apart for their quality and great taste.
      </p>

      <div className="workers-slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {workers.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={`worker-card ${activeIndex === idx ? 'active' : ''}`}>
                <img src={item.image} alt={item.title} />
                <div className="worker-overlay">
                  <div className="worker-text">
                    <span>{item.title}</span>
                    <div className="arrow">→</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorkers;
