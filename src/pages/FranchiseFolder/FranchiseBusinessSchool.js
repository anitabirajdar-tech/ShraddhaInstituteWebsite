import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSchool, FaChartLine, FaHandsHelping, FaChalkboardTeacher, FaAward, FaUsers } from 'react-icons/fa';
import { IoIosArrowForward, IoMdSchool, IoIosAlert } from 'react-icons/io';
import './FranchiseBusinessSchool.css';


const FranchiseBusinessSchool = () => {
  const benefits = [
    {
      icon: <FaSchool size={42} className="text-orange" />,
      title: 'Brand Power',
      text: 'Recognized leader in Abacus & Vedic Math with a trusted business model.',
      stat: '100+ Partner Schools'
    },
    {
      icon: <FaChartLine size={42} className="text-orange" />,
      title: 'School Integration',
      text: 'Bring our programs into your school to boost admissions and results.',
      stat: '40%+ Math Improvement'
    },
    {
      icon: <FaHandsHelping size={42} className="text-orange" />,
      title: 'Setup Support',
      text: 'From infrastructure to marketing — we guide your entire journey.',
      stat: '95% Success Rate'
    },
    {
      icon: <FaChalkboardTeacher size={42} className="text-orange" />,
      title: 'Expert Training',
      text: 'We train your teachers with structured, professional modules.',
      stat: '500+ Teachers Certified'
    }
  ];

  const steps = [
    {
      number: '1',
      icon: <FaUsers size={28} className="text-orange" />,
      title: 'Connect with Us',
      text: 'Fill out the form or call us to schedule your consultation.'
    },
    {
      number: '2',
      icon: <IoMdSchool size={28} className="text-orange" />,
      title: 'Attend Orientation',
      text: 'Understand our model, investment, and profit potential.'
    },
    {
      number: '3',
      icon: <FaAward size={28} className="text-orange" />,
      title: 'Launch Successfully',
      text: 'Open your center or school program with our full support.'
    }
  ];

  // Marquee announcement state
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
  const announcements = [
    "Limited Time Offer: 20% Off Franchise Fee",
    "Exclusive Territory Protection Available",
    "Free Teacher Training for First 10 Partners",
    "Complete Marketing Support Included"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <>
      <Helmet>
        <title>Premium School Franchise Opportunity | Shraddha Institute</title>
        <meta
          name="description"
          content="Premium partnership with Shraddha Institute to start a school franchise or expand your education business. Complete training, branding, and ongoing support."
        />
        <meta
          name="keywords"
          content="premium school franchise, education business, abacus franchise, vedic math franchise, educational partnership"
        />
        <meta property="og:image" content="https://yourdomain.com/images/school-franchise-og.jpg" />
        <link
          rel="canonical"
          href="https://yourdomain.com/franchise/business-school"
        />
      </Helmet>

      <div className="franchise-business-page">
        {/* Announcement Bar - Marquee */}
        <div className="announcement-bar bg-orange text-white py-2">
        <Container>
          <div className="announcement-scroll d-flex align-items-center">
            <span className="badge bg-white text-orange me-2 flex-shrink-0">⏳ Limited Time</span>
            <div className="announcement-marquee flex-grow-1">
              <div className="announcement-track" style={{ display: 'flex', whiteSpace: 'nowrap', overflow: 'visible', position: 'relative' }}>
                <span className="announcement-text me-5" style={{ display: 'inline-block', position: 'static', opacity: 1 }}>
                  Enroll now and get <span className="text-danger">20% OFF</span> franchise fee! Offer ends soon.
                </span>
                {/* Duplicate text for continuous scrolling */}
                <span className="announcement-text me-5" style={{ display: 'inline-block', position: 'static', opacity: 1 }}>
                  Enroll now and get <span className="text-danger">20% OFF</span> franchise fee! Offer ends soon.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

        {/* Enhanced Hero Section */}
        <section 
        className="hero-section position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #dc2626 100%)',
          color: 'white',
          minHeight: '85vh'
        }}
      >
        <div className="hero-overlay"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center justify-content-center min-vh-75 text-center">
            <Col lg={8} xl={7} className="mx-auto">
              {/* Badge */}
              <div className="mb-4">
                <span className="hero-badge">
                  {/* You can use an icon here if needed */}
                  Perfect for Business Schools
                </span>
              </div>
              {/* Main Heading */}
              <h1 className="hero-title mb-4">
                Premium School Franchise Opportunity
              </h1>
              <p className="hero-subtitle lead mb-4">
                Partner with Shraddha Institute to launch or expand your education business. Complete training, branding, and ongoing support.
              </p>
              <Link
                to="/contact"
                className="btn btn-light fw-bold text-orange px-4 py-2 mt-2"
                style={{ fontSize: '1.25rem' }}
              >
                Get Started
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

        {/* Benefits Section */}
        <section className="benefits-section py-5 bg-light">
          <Container>
            <div className="text-center mb-5">
              <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3">
                Our Advantages
              </span>
              <h2 className="display-4 fw-bold mb-3">Why Schools Choose Shraddha Institute</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Comprehensive support for educational institutions of all sizes
              </p>
            </div>
            
            <Row className="g-4">
              {benefits.map((benefit, index) => (
                <Col xl={3} lg={6} key={index}>
                  <div className="benefit-card h-100 p-4 rounded-4 shadow-sm-hover transition-all">
                    <div className="benefit-icon-wrapper mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3 responsive-heading">{benefit.title}</h3>
                    <p className="text-muted mb-4">{benefit.text}</p>
                    <div className="benefit-stat bg-orange-soft text-orange rounded-pill px-3 py-1 d-inline-block">
                      {benefit.stat}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Steps Section */}
        <section className="steps-section py-5 bg-white position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: 'linear-gradient(135deg, rgba(255,248,242,0.5) 0%, rgba(255,239,226,0.3) 100%)',
            zIndex: 0
          }}></div>
          
          <Container className="position-relative" style={{ zIndex: 1 }}>
            <div className="text-center mb-5">
              <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3">
                Simple Process
              </span>
              <h2 className="display-4 fw-bold mb-3">Start Your Franchise in 3 Steps</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Our streamlined onboarding gets you operational quickly
              </p>
            </div>
            
            <Row className="justify-content-center g-4">
              {steps.map((step, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="step-card h-100 p-4 rounded-4 bg-white shadow-sm position-relative">
                    <div className="step-number-circle bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-4">
                      {step.number}
                    </div>
                    <div className="step-icon mb-3 text-orange">
                      {step.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{step.title}</h3>
                    <p className="text-muted mb-0">{step.text}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="step-arrow d-none d-lg-block">
                        <IoIosArrowForward size={28} className="text-orange" />
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

    

        {/* Final CTA */}
        
      </div>
    </>
  );
};

export default FranchiseBusinessSchool;