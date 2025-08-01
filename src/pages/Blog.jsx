import React from 'react';
import './blog.css';
import { FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

const blogs = [
  {
    id: 1,
    date: '01Jun',
    image: 'https://motors.websitelayout.net/img/blog/blog-01.jpg',
    title: 'This is how motor will look like in 10 years time',
    excerpt: 'A ton of auto fix clients questions the significance of wheel arrangement.',
    author: 'Babita Khanna',
    comments: 6
  },
  {
    id: 2,
    date: '30May',
    image: 'https://motors.websitelayout.net/img/blog/blog-02.jpg',
    title: 'Different ways innovation has improved for your vehicles',
    excerpt: 'A ton of auto fix clients questions the significance of wheel arrangement.',
    author: 'Dr Anil Sharma',
    comments: 10
  },
  {
    id: 3,
    date: '29May',
    image: 'https://motors.websitelayout.net/img/blog/blog-03.jpg',
    title: '15 facts that nobody told you about tires',
    excerpt: 'A ton of auto fix clients questions the significance of wheel arrangement.',
    author: 'Richa Kapoor',
    comments: 12
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h2>Our Latest Blog</h2>
          <div className="contact-breadcrumb">Home {'>'} Blog</div>
        </div>
      </div>

      <p className="blog-subheading">
        Our car rental services, in the travel industry and business industry, stand apart for their quality and great taste.
      </p>

      <div className="blog-cards">
        {blogs.map(blog => (
          <Link to={`/blog/${blog.id}`} className="blog-card" key={blog.id}>
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-date">{blog.date}</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-author">{blog.author}</span>
                <span className="blog-comments"><FaRegComments /> {blog.comments}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
