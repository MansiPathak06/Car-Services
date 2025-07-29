import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    title: "This is how motor will look like in 10 years time",
    description:
      "A ton of auto fix clients questions the significance of wheel arrangement.",
    date: "01",
    month: "Jun",
    image: "/assets/blog1.jpg",
    author: "Shanna Yanez",
    authorImage: "/assets/author1.jpg",
    comments: 6,
  },
  {
    id: 2,
    title: "Different ways innovation has improved for your vehicles",
    description:
      "A ton of auto fix clients questions the significance of wheel arrangement.",
    date: "30",
    month: "May",
    image: "/assets/blog2.jpg",
    author: "Philip Lewis",
    authorImage: "/assets/author2.jpg",
    comments: 10,
  },
  {
    id: 3,
    title: "15 facts that nobody told you about tires",
    description:
      "A ton of auto fix clients questions the significance of wheel arrangement.",
    date: "29",
    month: "May",
    image: "/assets/blog3.jpg",
    author: "Katrina Isakson",
    authorImage: "/assets/author3.jpg",
    comments: 12,
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Our Latest Blog</h2>
      <p className="section-subtitle">
        Our car rental services, in the travel industry and business industry,
        stand apart for their quality and great taste.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-img-wrapper">
              <img src={post.image} alt={post.title} className="blog-img" />
              <div className="date-badge">
                <span>{post.date}</span>
                <small>{post.month}</small>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href="#" className="read-more">
                Read more <span>➔</span>
              </a>
              <div className="blog-footer">
                <div className="author-info">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="author-img"
                  />
                  <span>{post.author}</span>
                </div>
                <div className="comments-count">💬 {post.comments}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
