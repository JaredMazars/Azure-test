import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Excellence in Audit, Tax & Advisory
          </h1>
          <p className="hero-subtitle">
            Forvis Mazars delivers integrated solutions and specialized services across 
            audit and accounting, tax, and consulting to help you thrive in a changing world.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Our Services</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
