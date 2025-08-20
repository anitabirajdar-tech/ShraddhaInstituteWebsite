import React, { useEffect } from 'react';
import './Training.css';
import trainingIllustration from '../assets/training-illustration.svg';

const Training = () => {
  useEffect(() => {
    const animateElements = [
      { selector: '.title-section', animation: 'fadeInDown' },
      { selector: '.section-label', animation: 'fadeInLeft' },
      { selector: 'h2', animation: 'fadeInLeft' },
      { selector: '.lead-text', animation: 'fadeIn' },
      { selector: '.benefit-card', animation: 'fadeInUp' },
      { selector: '.illustration-img', animation: 'fadeInRight' }
    ];

    animateElements.forEach((el, index) => {
      const element = document.querySelector(el.selector);
      if (element) {
        element.style.animation = `${el.animation} 0.8s ease-out ${index * 0.1 + 0.3}s forwards`;
        element.style.opacity = '0';
      }
    });
  }, []);

  return (
    <div className="training-page">
      <section className="training-section" id="training">
        <div className="container">
          {/* Title Section */}
          <div className="title-section">
            <div className="title-content">
              <h1>Shraddha Institute Teacher Training</h1>
              <p className="subtitle">Become a Certified Abacus & Vedic Math Instructor</p>
              <div className="title-decoration">
                <div className="orange-line"></div>
              </div>
            </div>
          </div>

          {/* Content Wrapper */}
          <div className="training-content-wrapper">
            {/* Training Text */}
            <div className="training-text">
              <div className="section-label">Professional Development</div>
              <h2>
                <span className="orange-text">Abacus & Vedic Math</span>
                <br />
                Teacher Certification Program
              </h2>
              <p className="lead-text">
                Elevate your teaching skills with our{" "}
                <strong>Comprehensive Abacus & Vedic Math Certification</strong>{" "}
                program designed specifically for educators.
              </p>
              
              {/* Benefits - 2x2 Grid */}
              <div className="benefits-grid">
                {[
                  
                  { icon: '🧮', title: 'Abacus Training', desc: 'Master all 8 levels of abacus techniques' },
                  { icon: '🔢', title: 'Vedic Math', desc: 'Learn 16 core sutras & applications' },
                  { icon: '👩‍🏫', title: 'Teaching Methods', desc: 'Proven pedagogical approaches' },
                  { icon: '🏫', title: 'Center Setup', desc: 'Guidance for starting your own center' }
                ].map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Illustration */}
            <div className="training-illustration">
              <img 
                src={trainingIllustration} 
                alt="Abacus and Vedic Math Training Illustration"
                className="illustration-img"
              />
              <div className="floating-badge">
                <span className="badge-number">600+</span>
                <span className="badge-text">Certified Instructors</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;