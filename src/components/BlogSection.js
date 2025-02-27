import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogs = [
    {
      title: "Swiggy's Milestones in 2025",
      date: "January 2025",
      description: "Swiggy achieved major growth milestones in 2025, including new funding rounds and international expansion.",
      image: "https://example.com/milestones.jpg",
      link: "/blogs/swiggys-milestones-2025",
    },
    {
      title: "Food Delivery Innovations by Swiggy",
      date: "December 2024",
      description: "Swiggy introduced innovations in food delivery to enhance user experience, from AI-powered ordering to faster delivery times.",
      image: "https://example.com/food-delivery.jpg",
      link: "/blogs/food-delivery-innovations",
    },
    {
      title: "Social Events and Community Engagement",
      date: "November 2024",
      description: "Swiggy's community engagement efforts are having a profound impact, from sponsoring local events to charity work.",
      image: "https://example.com/social-events.jpg",
      link: "/blogs/social-events-engagement",
    }
  ];

  return (
    <section className="blog-section">
      <h2>Swiggy Blogs</h2>
      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p>{blog.description}</p>
              <a href={blog.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
