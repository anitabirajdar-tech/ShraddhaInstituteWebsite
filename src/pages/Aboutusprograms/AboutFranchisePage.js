import React from 'react';
import './AboutFranchisePage.css';
import founderImg from '../../assets/founder1.JPG';

const AboutFranchisePage = () => {
  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        {/* YouTube Video Background */}
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/IY3FpB5OfZ8?autoplay=1&loop=1&mute=1&playlist=IY3FpB5OfZ8&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            title="Shraddha Institute - Our Journey Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hero-video"
          ></iframe>
          <div className="video-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1>Our Journey</h1>
          <p>How it all started in 2013 and scaled across India</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3>Founded with a Vision</h3>
                <p>Shraddha Institute began with a single center in Solapur.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Franchise Model Introduced</h3>
                <p>We started training teachers and launched our franchise program.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Expanding Across Maharashtra</h3>
                <p>Over 100 teachers joined our network, spreading Abacus & Vedic Maths.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>State-Level Competitions</h3>
                <p>First large-scale competitions for students were conducted with huge success.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Shift to Online Learning</h3>
                <p>Adapted to online teaching during the pandemic and trained teachers virtually.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Growing Teacher Community</h3>
                <p>Reached 450+ teachers and expanded our presence into schools across India.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>National-Level Competitions Announced</h3>
                <p>Almost 5000 students participated in Abacus & Vedic Maths competitions nationwide.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>New Programs & Recognition</h3>
                <p>Launched Phonics Teacher Training program and expanded social media campaigns to empower teachers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="founder-profile">
        <div className="container">
          <div className="profile-card">
            <div className="profile-image">
              <img src={founderImg} alt="Mrs. Swati Shah, Founder" />
              <div className="quote">"Math should be joyful, not fearful"</div>
            </div>
            <div className="profile-content">
              <h3>Message From Our Founder</h3>
              <p>
                I saw students struggling with math anxiety. Vedic techniques helped us
                bring joy back into learning. Today, with over 600 teachers and 50,000+ students,
                our mission continues.
              </p>
              <div className="signature">- Mrs. Swati Shah</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFranchisePage;
