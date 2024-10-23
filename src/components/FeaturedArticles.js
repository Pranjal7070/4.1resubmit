import React from 'react';
import { faker } from '@faker-js/faker';
import './styles.css';


function FeaturedArticles() {
  const articles = Array.from({ length: 3 }, () => ({
    title: faker.lorem.sentence(),
    image: faker.image.url(640, 480, 'business', true),  // Make sure this is the correct API call for your faker version
    description: faker.lorem.paragraph(),
    author: faker.person.fullName(),  // Updated to use the correct Faker API
    rating: 5,  // Static 5-star rating for now
  }));

  return (
    <div className="featured-section">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt="Article" />
            <h3>{article.title}</h3>
            <p>⭐ {article.rating} Author's name: {article.author}</p>
          </div>
        ))}
      </div>
      <button className="btn view-all">See all articles</button>
    </div>
  );
}

export default FeaturedArticles;
