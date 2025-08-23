import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [missionRef, missionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [impactRef, impactInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const missionVisionLines = [
    "To empower young minds through innovative teaching and comprehensive learning experiences in Abacus & Vedic Maths.",
    "To foster critical thinking, problem-solving, and creativity among students, preparing them for future challenges.",
    "To cultivate an inclusive and nurturing environment for both students and educators.",
  ];

  const infoLines = [
    "Proud Partners with 50+ Schools across India",
    "Facilitated 500+ Abacus & Vedic Maths Workshops across 20+ Cities",
    "Empowered 15,000+ Students through Transformative Educational Programs",
  ];

  return (
    <section
      className="about-section-bg"
      id="about"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <div className="about-wrapper">
        {/* Section Title */}
        <header>
          <h2 className="section-title2 animate-fade-in" itemProp="name">
            About Shraddha Institute
          </h2>
         
        </header>

        <div className="about-row">
          {/* Mission & Vision */}
          <div
            ref={missionRef}
            className={`about-col mission-col ${
              missionInView ? 'animate-slide-in-left' : ''
            }`}
          >
            
            <ul className="mission-vision-list">
              {missionVisionLines.map((line, i) => (
                <li
                  key={i}
                  className="mission-vision-line"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <FaCheckCircle className="check-icon" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Impact */}
          <div
            ref={impactRef}
            className={`about-col impact-col ${
              impactInView ? 'animate-slide-in-right' : ''
            }`}
          >
            <h3 className="impact-title">Our Impact</h3>
            <ul className="impact-list">
              {infoLines.map((line, i) => (
                <li
                  key={i}
                  className="impact-line"
                  style={{ transitionDelay: `${i * 0.15 + 0.3}s` }}
                >
                  <FaCheckCircle className="check-icon" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schema extra (social links) */}
        <meta itemProp="url" content="https://shraddhainstitute.netlify.app/" />
        <meta
          itemProp="sameAs"
          content="https://www.facebook.com/shraddhainstitute"
        />
        <meta
          itemProp="sameAs"
          content="https://www.instagram.com/shraddhainstitute"
        />
        <meta
          itemProp="sameAs"
          content="https://www.linkedin.com/company/shraddhainstitute"
        />
      </div>
    </section>
  );
};

export default About;
