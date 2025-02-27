import React from 'react';

function Collections() {
  return (
    <section className="collections">
      <h3>Collections</h3>
      <p>Explore curated list of top restaurants, cafes, bars, and much more.</p>
      <div className="collection-cards">
        <div className="card">
          <img src="./image/trendyCafe.jpg" alt="Trending Spots" />
          <div className="card-content">
            <h3>Trending Spots</h3>
            <p>Discover the most popular places around you.</p>
          </div>
        </div>
        <div className="card">
          <img src="./image/roofTop.jpg" alt="Best Rooftop Restaurants" />
          <div className="card-content">
            <h3>Best Rooftop Restaurants</h3>
            <p>Enjoy dining with a view at these top rooftop restaurants.</p>
          </div>
        </div>
        {/* Add more cards as required */}
      </div>
    </section>
  );
}

export default Collections;
