import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FORVIS MAZARS</h3>
            <p>Leading global professional services network</p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#audit">Audit & Assurance</a></li>
              <li><a href="#tax">Tax Services</a></li>
              <li><a href="#advisory">Advisory</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#youtube">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Forvis Mazars. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
