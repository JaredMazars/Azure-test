import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Forvis Mazars</h2>
            <p>
              Forvis Mazars is a leading global professional services network, providing audit, 
              tax, and advisory services to clients across the world. Our integrated approach 
              combines deep industry expertise with innovative thinking to help businesses 
              navigate complexity and seize opportunities.
            </p>
            <p>
              With a presence in over 100 countries and territories, we serve clients of all 
              sizes—from small businesses to multinational corporations. Our commitment to 
              quality, independence, and integrity sets us apart in the industry.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>100+</h3>
                <p>Countries</p>
              </div>
              <div className="stat-item">
                <h3>40,000+</h3>
                <p>Professionals</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
