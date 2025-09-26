import React, { useEffect, useState } from 'react';
import './Training.css';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Training = () => {
  const [svgCode, setSvgCode] = useState(null);

  useEffect(() => {
    // ✅ Fetch SVG from Firestore
    const fetchSvg = async () => {
      try {
        const docRef = doc(db, "trainingAssets", "illustration"); // collection & document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSvgCode(docSnap.data().svgCode);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    fetchSvg();

    // ✅ Animations
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
                  { 
  icon: '🎯', 
  title: 'Zero to Abacus Expert', 
  desc: 'Master 8 levels from basic beads to lightning-fast mental math',
  tagline: 'From Beginner to Pro in 6 Weeks'
},
{ 
  icon: '⚡', 
  title: 'Vedic Math Secrets', 
  desc: 'Unlock 16 ancient sutras that make math magical & effortless',
  tagline: 'Calculate 10x Faster'
},
{ 
  icon: '🌟', 
  title: 'Super Teacher Formula', 
  desc: 'Proven methods to make learning fun & create star students',
  tagline: 'Transform How You Teach'
},
{ 
  icon: '🚀', 
  title: 'Launch Your Center', 
  desc: 'Complete blueprint to start & scale your successful learning business',
  tagline: 'Be Your Own Boss'
}
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
              {svgCode ? (
                <div 
                  className="illustration-img"
                  dangerouslySetInnerHTML={{ __html: svgCode }}
                />
              ) : (
                <p>Loading illustration...</p>
              )}
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
