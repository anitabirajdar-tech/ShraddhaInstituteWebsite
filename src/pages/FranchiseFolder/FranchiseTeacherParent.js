import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaClipboardCheck, 
  FaUserGraduate, 
  FaMoneyBillWave, 
  FaShieldAlt,
  FaHome,
  FaGraduationCap,
  FaDollarSign,
  FaBookOpen,
  FaLaptopHouse,
  FaHandsHelping,
  FaChartLine
} from 'react-icons/fa';
import { IoIosArrowForward, IoMdTime } from 'react-icons/io';
import './FranchiseTeacherParent.css';

import FranchiseTeacherParentTestimonials from "./FranchiseTeacherParentTestimonials";

const FranchiseTeacherParent = () => {
  const benefits = [
    { 
      title: "Work From Home", 
      desc: "Run your center from home, online, or a small rented space with complete flexibility.",
      icon: <FaLaptopHouse size={48} className="text-orange" />,
      bgColor: "rgba(234, 88, 12, 0.1)"
    },
    { 
      title: "No Experience Needed", 
      desc: "Complete training provided even if you're new to teaching or business.",
      icon: <FaGraduationCap size={48} className="text-orange" />,
      bgColor: "rgba(34, 197, 94, 0.1)"
    },
    { 
      title: "Low Investment", 
      desc: "Start with minimal capital and grow with our proven business system.",
      icon: <FaDollarSign size={48} className="text-orange" />,
      bgColor: "rgba(59, 130, 246, 0.1)"
    },
    { 
      title: "Complete Materials", 
      desc: "Ready-to-use lesson plans, books, worksheets and certification material.",
      icon: <FaBookOpen size={48} className="text-orange" />,
      bgColor: "rgba(168, 85, 247, 0.1)"
    }
  ];

  const steps = [
    { 
      number: 1, 
      icon: <FaClipboardCheck size={28} className="text-orange" />, 
      title: "Apply Online", 
      desc: "Submit our simple interest form to get started." 
    },
    { 
      number: 2, 
      icon: <FaUserGraduate size={28} className="text-orange" />, 
      title: "Get Trained", 
      desc: "Complete our teacher & business training program." 
    },
    { 
      number: 3, 
      icon: <FaMoneyBillWave size={28} className="text-orange" />, 
      title: "Start Earning", 
      desc: "Launch your center with our ongoing support." 
    }
  ];

  return (
    <>
      <Helmet>
        <title>Abacus & Vedic Math Franchise Opportunity for Teachers & Parents</title>
        <meta name="description" content="Start your own Abacus & Vedic Math learning center with Shraddha Institute's proven franchise model. Low investment, complete training, and earning potential of ₹25,000-₹50,000/month." />
        <meta name="keywords" content="abacus franchise, vedic math business, teacher franchise, home tuition center, education franchise, low investment business" />
        <meta property="og:title" content="Abacus & Vedic Math Franchise Opportunity | Shraddha Institute" />
        <meta property="og:description" content="Start your education business with our proven franchise model. Complete training and support provided." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shraddhainstitute.com/franchise/teacher-parent" />
        <link rel="canonical" href="https://shraddhainstitute.com/franchise/teacher-parent" />
      </Helmet>

      <div className="franchise-teacher-parent-page">
        {/* Announcement Bar - Marquee */}
        <div className="announcement-bar bg-orange text-white py-2">
        <Container>
          <div className="announcement-scroll d-flex align-items-center">
            <span className="badge bg-white text-orange me-2 flex-shrink-0">⏳ Limited Time</span>
            <div className="announcement-marquee flex-grow-1">
              <div className="announcement-track">
                <span className="announcement-text me-5">
                  Enroll now and get <span className="text-danger">20% OFF</span> franchise fee! Offer ends soon.
                </span>
                {/* Duplicate text for continuous scrolling */}
                <span className="announcement-text me-5">
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
                    <FaShieldAlt className="me-2" />
                    Perfect for Teachers & Parents
                  </span>
                </div>
                
                {/* Main Heading */}
                <h1 className="hero-title mb-4">
                  Build a Rewarding <span className="text-highlight">Education Business</span> from Home
                </h1>
                
                {/* Description */}
                <p className="hero-description mb-5">
                  Turn your passion for teaching into a profitable venture with our proven Abacus & Vedic Math franchise model. 
                  <span className="fw-bold text-warning"> Start earning ₹15,000-₹20,000/month</span> with minimal investment.
                </p>
                
                {/* CTA Buttons */}
                <div className="hero-buttons d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
                  <Button 
                    className="btn btn-primary"
                  >
                    <FaClipboardCheck className="me-2" />
                    <span className="d-none d-sm-inline">Book Free Consultation</span>
                    <span className="d-inline d-sm-none">Book Free<br />Consultation</span>
                  </Button>
                  <Button 
                    className="btn btn-primary"
                  >
                    <FaBookOpen className="me-2" />
                    <span className="d-none d-sm-inline">Download Brochure</span>
                    <span className="d-inline d-sm-none">Download<br />Brochure</span>
                  </Button>
                </div>
                
              </Col>
            </Row>
          </Container>
        </section>
        {/* Benefits Section */}
        {/* Benefits Section */}
{/* Benefits Section */}
<section className="benefits-section py-5 bg-light">
  <Container>
    <div className="text-center mb-5">
      <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3 d-inline-block">
        Why Choose Us
      </span>
      <h2 className="h3 h-md-2 fw-bold mb-3">Educator-Focused Franchise Benefits</h2>
      <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
        Everything you need to succeed as an education entrepreneur
      </p>
    </div>

    <Row className="g-3 g-md-4">
      {benefits.map((benefit, index) => (
        <Col xs={12} sm={6} lg={3} key={index}>
          <div className="benefit-card-vertical h-100 text-center">
            
            {/* Icon Container */}
            <div 
              className="benefit-icon-wrapper mx-auto mb-3"
              style={{ 
                backgroundColor: benefit.bgColor,
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
            >
              {benefit.icon}
            </div>
            
            {/* Content */}
            <div className="benefit-content">
              <h3 className="h5 fw-bold mb-3 text-dark">{benefit.title}</h3>
              <p className="mb-0 text-muted">{benefit.desc}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>



        {/* Steps Section */}
        <section className="steps-section py-5 bg-white">
          <Container>
            <div className="text-center mb-5">
              <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3 d-inline-block">
                Getting Started
              </span>
              <h2 className="display-5 fw-bold mb-3">Start Your Center in 3 Simple Steps</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                We guide you through every step of the process
              </p>
            </div>
            <Row className="justify-content-center g-4">
              {steps.map((step, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="step-card h-100 p-4 position-relative border-0 shadow-xs-hover transition-all">
                    <div className="step-number bg-orange text-white rounded-circle d-flex align-items-center justify-content-center">
                      {step.number}
                    </div>
                    <div className="step-icon mb-3 text-orange">
                      {step.icon}
                    </div>
                    <h3 className="h4 mb-3">{step.title}</h3>
                    <p className="mb-0 text-muted">{step.desc}</p>
                    {index < steps.length - 1 && (
                      <div className="step-arrow d-none d-lg-block">
                        <IoIosArrowForward size={24} className="text-orange" />
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Investment Section */}
        <section className="investment-section py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} className="mb-5 mb-lg-0">
                <div className="pricing-card bg-white rounded-4 shadow-sm p-4 text-center">
                  <div className="badge bg-orange text-white rounded-pill px-3 py-2 mb-3 d-inline-block">
                    Special Introductory Offer
                  </div>
                  <div className="pricing-amount mb-2">
                    <span className="currency h5">₹</span>
                    <span className="amount display-4 fw-bold">10,000</span>
                    <span className="period h5">+ GST</span>
                  </div>
                  <div className="pricing-note text-muted mb-4">
                    Flexible payment options available
                  </div>
                  <div className="value-highlights">
                    {[
                      "Lowest entry point",
                      "No hidden costs",
                      "Complete starter kit",
                      "Digital marketing support"
                    ].map((item, i) => (
                      <div key={i} className="value-item d-flex align-items-start mb-3">
                        <div className="me-2 text-orange">✓</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              
              <Col lg={7}>
                <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3 d-inline-block">
                  Affordable Investment
                </span>
                <h2 className="display-5 fw-bold mb-4">
                  Start for Just <span className="text-orange">₹10,000</span> - Grow at Your Pace
                </h2>
                <p className="lead text-muted mb-4">
                  We've made it easier than ever to begin your education business journey with our 
                  affordable starter package. Upgrade as your center grows.
                </p>
                
                <ul className="investment-features list-unstyled mb-4">
                  {[
                    "Complete teaching materials & curriculum",
                    "Business operation manual & marketing kit",
                    "Basic teacher training & certification",
                    "Ongoing support & guidance",
                    "Brand recognition benefits",
                    "Student certification materials"
                  ].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-2">
                      <span className="me-2 text-orange">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="d-flex flex-wrap gap-3">
                  <Button 
                    variant="orange" 
                    size="lg" 
                    className="rounded-pill px-4 fw-semibold d-flex align-items-center"
                  >
                    View Payment Plans <IoIosArrowForward className="ms-2" />
                  </Button>
                  <Button 
                    variant="outline-orange" 
                    size="lg" 
                    className="rounded-pill px-4 fw-semibold"
                  >
                    Compare Packages
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonials */}
        <FranchiseTeacherParentTestimonials />

       
      </div>
    </>
  );
};

export default FranchiseTeacherParent;