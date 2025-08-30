import React from 'react';


import founderImg from '../assets/founder.JPG';

import franchiseImg from '../assets/gallery1.jpg'; // Add your franchise image
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* YouTube Video Background */}
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&loop=1&mute=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            title="Shraddha Institute Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hero-video"
          ></iframe>
          <div className="video-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">Our Story & Business Opportunity</h1>
          <p className="hero-subtitle">
            A decade of educational excellence and entrepreneurial success
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <div className="about-container">
        {/* Left Column - Founder & Journey */}
        <section className="founder-column">
          <h2 className="section-title">Our Educational Journey</h2>
          
          {/* Founder's Message */}
          <div className="founder-card">
            <img src={founderImg} alt="Mrs. Shraddha Sharma, Founder" />
            <div className="founder-message">
              <h3>From Vision to Movement</h3>
              <p>
                "What began as a single center in 2013 has grown into a national movement 
                transforming math education. Our unique blend of Vedic techniques and 
                modern pedagogy has helped thousands of students overcome math anxiety."
              </p>
              <p className="signature">- Mrs. Swati Shah, Founder</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <h3>Our Milestones</h3>
            <div className="timeline">
              {/* Timeline items same as before */}
              <div className="timeline-item">
                <div className="timeline-year">2013</div>
                <div className="timeline-content">
                  <h4>Founded with a Vision</h4>
                  <p>First center opened in Gurgaon</p>
                </div>
              </div>
              {/* Add other timeline items */}
            </div>
          </div>
        </section>

        {/* Right Column - Franchise Business */}
        <section className="franchise-column">
          <h2 className="section-title">The Shraddha Franchise Opportunity</h2>
          
          {/* Franchise Overview */}
          <div className="franchise-card">
            <img src={franchiseImg} alt="Shraddha Franchise Opportunity" />
            <div className="franchise-content">
              <h3>Join Our Growing Network</h3>
              <p>
                Since launching our franchise model in 2018, we've successfully partnered with 
                50+ entrepreneurs across India to deliver quality math education.
              </p>
              
              <div className="franchise-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Franchise Centers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Profit Margins</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12-18</div>
                  <div className="stat-label">Months ROI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Model */}
          <div className="business-model">
            <h3>Our Proven Business Model</h3>
            <div className="model-features">
              <div className="feature">
                <h4>Comprehensive Training</h4>
                <p>2-week intensive training program for franchise owners</p>
              </div>
              <div className="feature">
                <h4>Turnkey Operation</h4>
                <p>Includes curriculum, marketing materials, and management systems</p>
              </div>
              <div className="feature">
                <h4>Ongoing Support</h4>
                <p>Regular teacher training and business coaching</p>
              </div>
            </div>
          </div>

          {/* Franchise CTA */}
          <div className="franchise-cta">
            <h3>Ready to Start Your Educational Business?</h3>
            <p>Download our franchise brochure to learn more:</p>
            <button className="cta-button">Download Franchise Kit</button>
            <button className="cta-button secondary">Schedule Discovery Call</button>
          </div>
        </section>
      </div>

      {/* Methodology Section (same as before) */}
      <section className="methodology-section">
        {/* ... existing methodology content ... */}
      </section>

      {/* Unified CTA */}
      <section className="unified-cta">
        <div className="container">
          <h2>Become Part of Our Story</h2>
          <div className="cta-options">
            <div className="cta-option">
              <h3>For Educators</h3>
              <p>Join our teacher training program</p>
              <button className="cta-button">Teacher Training</button>
            </div>
            <div className="cta-option">
              <h3>For Entrepreneurs</h3>
              <p>Start your Shraddha franchise</p>
              <button className="cta-button">Franchise Info</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;