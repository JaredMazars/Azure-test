import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services that provide confidence and insights to stakeholders while enhancing business performance.',
      icon: '📊'
    },
    {
      title: 'Tax Services',
      description: 'Strategic tax planning and compliance services to optimize your tax position and ensure regulatory compliance.',
      icon: '📋'
    },
    {
      title: 'Advisory Services',
      description: 'Expert consulting to help you navigate complex business challenges and capitalize on opportunities.',
      icon: '💼'
    },
    {
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate risks to protect your organization and enhance decision-making.',
      icon: '🛡️'
    },
    {
      title: 'Transaction Services',
      description: 'Support for mergers, acquisitions, and other transactions to maximize value and minimize risk.',
      icon: '🤝'
    },
    {
      title: 'Digital Solutions',
      description: 'Leverage technology and data analytics to drive innovation and operational efficiency.',
      icon: '💡'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
