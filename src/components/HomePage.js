import React from 'react';
import { Link } from 'react-router-dom';
import UserInputSection from './UserInputSection';
import '../styles/components/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Unlock the Emotional Dynamics Between You and Your Partner with MBTI</h1>
          <p>Discover how your personalities interact and enhance your relationship</p>
          <Link to="/mbti-analysis" className="cta-button">Start Your MBTI Analysis</Link>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>Explore Your Relationship Dynamics</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-brain"></i>
              <h3>Cognitive Function Analysis</h3>
              <p>Understand how your mental processes interact and complement each other. Discover the unique ways you and your partner perceive and make decisions.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-heart"></i>
              <h3>Compatibility Insights</h3>
              <p>Gain valuable insights into your relationship strengths and potential areas for growth. Learn how your MBTI types can create a harmonious partnership.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-comments"></i>
              <h3>Communication Tips</h3>
              <p>Learn effective strategies to better connect with your partner based on your MBTI types. Improve understanding and reduce conflicts in your relationship.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-lightbulb"></i>
              <h3>Personal Growth</h3>
              <p>Identify areas for personal development that can strengthen your relationship. Discover how to leverage your MBTI type for individual and couple growth.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-balance-scale"></i>
              <h3>Conflict Resolution</h3>
              <p>Understand the root causes of conflicts based on your MBTI types. Learn tailored strategies to resolve disagreements and build a stronger bond.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-hands-helping"></i>
              <h3>Mutual Support</h3>
              <p>Discover how to best support each other's needs and aspirations. Learn to create a nurturing environment that fosters both individual and relationship growth.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="user-input">
        <div className="container">
          <UserInputSection />
        </div>
      </section>
    </div>
  );
};

export default HomePage;