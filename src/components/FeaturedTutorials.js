import React from 'react';
import { faker } from '@faker-js/faker';
import './styles.css';


function FeaturedTutorials() {
  const tutorials = Array.from({ length: 3 }, () => ({
    title: faker.lorem.sentence(),
    image: faker.image.url(640, 480, 'technology', true),  // Make sure this is the correct API call for your faker version
    description: faker.lorem.paragraph(),
    username: faker.internet.userName(),
    rating: 4,  // Example rating
  }));

  return (
    <div className="featured-section">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <img src={tutorial.image} alt="Tutorial" />
            <h3>{tutorial.title}</h3>
            <p>⭐ {tutorial.rating} @{tutorial.username}</p>
          </div>
        ))}
      </div>
      <button className="btn view-all">See all tutorials</button>
    </div>
  );
}

export default FeaturedTutorials;
