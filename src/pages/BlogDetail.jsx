import React from "react";

import { useParams, Link } from 'react-router-dom';

import "./blogDetail.css"

const blogData = [
  {
    id: 1,
    date: "01Jun",
    image: "https://motors.websitelayout.net/img/blog/blog-01.jpg",
    title: "This is how motor will look like in 10 years time",
    content: `
      The automotive industry is undergoing a massive transformation. In the next decade, motors will become more compact, energy-efficient, and environmentally friendly. With the rise of electric vehicles, we’re already witnessing the shift from traditional combustion engines to electric motors powered by lithium-ion and even solid-state batteries.

      Future motors will feature advanced thermal management, AI-based diagnostics, and self-healing capabilities. Car manufacturers are focusing on smart materials that adapt to load and climate, making motors last longer and perform better.

      Moreover, integration with IoT will allow motors to be monitored and tuned remotely, ensuring real-time updates and performance optimization. These advances not only promise a greener future but also redefine what we expect from mobility.
    `,
    author: "Babita Khanna",
  },
  {
    id: 2,
    date: "30May",
    image: "https://motors.websitelayout.net/img/blog/blog-02.jpg",
    title: "Different ways innovation has improved for your vehicles",
    content: `
    Innovation has completely redefined the automotive experience in the last few years. From safety features to performance enhancements, your vehicle is now smarter and more efficient than ever before.

    One major innovation is the introduction of Advanced Driver-Assistance Systems (ADAS), which include lane-keeping assist, adaptive cruise control, and automatic emergency braking. These features drastically reduce the chances of accidents and improve road safety.

    Another game-changer is the use of hybrid and electric drivetrains, offering lower emissions and higher fuel efficiency. Vehicles now come with sophisticated onboard diagnostics, which provide real-time alerts and maintenance reminders.

    Even your car's infotainment systems have evolved, offering seamless smartphone integration, voice-controlled navigation, and over-the-air software updates. All these innovations ensure your ride is not only smoother but also smarter.
  `,
    author: "Dr Anil Sharma",
  },
  {
    id: 3,
    date: "29May",
    image: "https://motors.websitelayout.net/img/blog/blog-03.jpg",
    title: "15 facts that nobody told you about tires",
    content: `
    Tires are one of the most overlooked yet essential components of your vehicle. Here are 15 surprising facts that you probably never knew about them:

    1. The average tire loses about 1 PSI of pressure each month.
    2. Under-inflated tires can reduce fuel economy by up to 10%.
    3. Tires expire — even unused ones should be replaced after 6 years.
    4. Tread depth impacts braking distance significantly on wet roads.
    5. Some tires are made with soybean oil to reduce environmental impact.
    6. Run-flat tires can drive up to 50 miles after a puncture.
    7. Winter tires remain flexible in cold temperatures, unlike regular tires.
    8. Tire rotation extends their lifespan by balancing wear evenly.
    9. The numbers on the tire sidewall indicate size, load rating, and speed.
    10. Overloading your car puts serious strain on the tires and can lead to blowouts.
    11. Racing tires don’t last long — often just a single race.
    12. Tire pressure should be checked when the tires are “cold” — before driving.
    13. Improper wheel alignment causes uneven tire wear.
    14. Nitrogen inflation helps maintain pressure longer than regular air.
    15. Bald tires are illegal in many countries and are a major safety risk.

    Understanding your tires better can save you money, improve performance, and keep you safer on the road.
  `,
    author: "Richa Kapoor",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));

  if (!blog) return <div className="blog-detail">Blog not found</div>;

  return (
    <div className="blog-detail-page">
      {/* ✅ Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h2>Blog Detail</h2>
          <div className="contact-breadcrumb">Home {'>'} Blog {'>'} {blog.title}</div>
        </div>
      </div>

      {/* ✅ Blog Detail Content */}
      <div className="blog-detail">
        <h2>{blog.title}</h2>
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Date:</strong> {blog.date}</p>
        <img src={blog.image} alt={blog.title} />
        <p>{blog.content}</p>

        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogDetail;