import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col,  Card, Badge } from 'react-bootstrap';

import { 
  FaChartLine, FaChalkboardTeacher, 
  FaAward, FaUsers, FaRocket, FaShieldAlt, FaGraduationCap, 
   FaStar, 
  FaCheckCircle, 
} from 'react-icons/fa';
import {  IoIosTrendingUp } from 'react-icons/io';
import { GiAchievement } from 'react-icons/gi';
import './FranchiseBusinessSchool.css';

const FranchiseBusinessSchool = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  // Enhanced benefits with stronger emotional appeal
  const transformationalBenefits = [
    {
      icon: <FaGraduationCap size={48} className="text-orange" />,
      title: 'Abacus & Vedic Math: Transform Student Performance',
      text: 'Empower your students with world-class calculation skills, improved concentration, and confidence in mathematics.',
      stat: '2x Faster Calculations',
      features: [
        'Boosts mental math & accuracy',
        'Enhances memory & focus',
        'Loved by parents & students'
      ]
    },
    {
      icon: <FaStar size={48} className="text-orange" />,
      title: 'Stand Out as a Premium School',
      text: 'Become the preferred choice for parents by offering India’s most trusted Abacus & Vedic Math curriculum.',
      stat: 'Preferred by 200+ Schools',
      features: [
        'Unique program in your area',
        'Builds strong school reputation',
        'Attracts new admissions'
      ]
    },
    {
      icon: <FaAward size={48} className="text-orange" />,
      title: 'Certified Franchise & Teacher Training',
      text: 'Get full certification for your school and teachers, plus ongoing support and curriculum updates.',
      stat: '100% Certified Teachers',
      features: [
        'Free teacher training',
        'Official franchise certificate',
        'Continuous support'
      ]
    },
    {
      icon: <FaChalkboardTeacher size={48} className="text-orange" />,
      title: 'Zero Extra Infrastructure Needed',
      text: 'Run Abacus & Vedic Math classes using your existing classrooms and staff—no additional investment required.',
      stat: 'Zero Setup Cost',
      features: [
        'Utilize current resources',
        'No extra classrooms needed',
        'Quick launch & easy management'
      ]
    }
  ];


  // Replace valuePropositions with more targeted messaging
  const valuePropositions = [
    {
      problem: "Want to boost student results in Math?",
      solution: "Introduce Abacus & Vedic Math for faster, smarter calculations",
      icon: <FaGraduationCap size={42} className="text-orange" />
    },
    {
      problem: "Looking for a unique program to attract parents?",
      solution: "Offer India’s most trusted Abacus & Vedic Math curriculum",
      icon: <FaStar size={42} className="text-orange" />
    },
    {
      problem: "Need to improve your school’s reputation?",
      solution: "Become a certified Abacus & Vedic Math center",
      icon: <FaAward size={42} className="text-orange" />
    },
    {
      problem: "Want to empower your teachers with new skills?",
      solution: "Get free teacher training & certification in Abacus & Vedic Math",
      icon: <FaChalkboardTeacher size={42} className="text-orange" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transform Your School | Premium Education Franchise Partnership</title>
        <meta
          name="description"
          content="Partner with Shraddha Institute to transform your school into a center of excellence. Multiple revenue streams, teacher development, and premium branding."
        />
        <meta
          name="keywords"
          content="school transformation, education franchise, premium partnership, teacher development, multiple revenue streams, school branding"
        />
      </Helmet>

      <div className={`franchise-business-page ${isVisible ? 'page-visible' : ''}`}>
        
        {/* Enhanced Hero Section with Emotional Hook */}
        <section 
          className="hero-section position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #dc2626 100%)',
            color: 'white',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="hero-overlay" style={{
            background: 'rgba(0,0,0,0.3)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}></div>
          
          <Container className="position-relative" style={{ zIndex: 2 }}>
            <Row className="align-items-center justify-content-center text-center">
              <Col lg={10} xl={8} className="mx-auto">
                {/* Trust Badges */}
                <div className="mb-4">
                  <span className="hero-badge me-3">
                    <FaStar className="me-2" />
                    Trusted by 200+ Schools
                  </span>
                  <span className="hero-badge">
                    <IoIosTrendingUp className="me-2" />
                    Since 2013
                  </span>
                </div>

                {/* Main Headline with Emotional Hook */}
                <h1 className="hero-title mb-4 display-3 fw-bold">
                  Transform Your School Into The{' '}
                  <span className="text-warning">Most Sought-After</span>{' '}
                  Educational Institution in Your Area
                </h1>
                

                {/* Value Proposition Highlights */}
                <Row className="g-4 mb-5">
                  <Col md={4}>
                    <div className="text-center">
                      <FaChartLine size={32} className="text-warning mb-2" />
                      <h5 className="text-white">40%+ Revenue Growth</h5>
                      <small className="text-white-80">Average partner increase</small>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <FaUsers size={32} className="text-warning mb-2" />
                      <h5 className="text-white">300% Enrollment Boost</h5>
                      <small className="text-white-80">Documented case studies</small>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <FaAward size={32} className="text-warning mb-2" />
                      <h5 className="text-white">Zero Risk Model</h5>
                      <small className="text-white-80">Proven success system</small>
                    </div>
                  </Col>
                </Row>

                

                {/* Social Proof */}
                <div className="mt-5">
                  <p className="text-white-80 mb-2">
                    <strong>Recently transformed schools:</strong>
                  </p>
                  <div className="d-flex justify-content-center flex-wrap gap-3">
                    <span className="text-white">St. Mary's Convent (+300 students)</span>
                    <span className="text-white">Bright Future Academy (+₹50L revenue)</span>
                    <span className="text-white">Global Kids (National recognition)</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Problem-Solution Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="text-center mb-5">
              <Col lg={8} className="mx-auto">
                <h1 className="fw-bold mb-3   text-orange">
                  Why Choose Abacus & Vedic Math Franchise for Your School?
                </h1>

              </Col>
            </Row>

            <Row className="g-4">
              {valuePropositions.map((item, index) => (
                <Col lg={6} key={index}>
                  <Card className="h-100 border-0 shadow-sm-hover transition-all">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-orange">{item.problem}</h5>
                          <p className="text-dark fw-bold mb-0">{item.solution}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Transformational Benefits Section */}
        <section className="benefits-section py-5">
          <Container>
            <div className="text-center mb-5">
              <Badge bg="orange" className="px-3 py-2 mb-3 fs-6">
                The Shraddha Advantage
              </Badge>
              <h1 className="fw-bold mb-3 text-orange">
                How Abacus & Vedic Math Franchise Transforms Your School
              </h1>

            </div>
            
            <Row className="g-5">
              {transformationalBenefits.map((benefit, index) => (
                <Col lg={6} key={index}>
                  <Card className="benefit-card h-100 border-0 shadow-lg-hover">
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        {benefit.icon}
                      </div>
                      <h4 className="fw-bold mb-3 text-center text-orange">{benefit.title}</h4>
                      <p className="text-muted mb-4 fs-5">{benefit.text}</p>
                      
                      <div className="bg-orange-soft rounded p-3 mb-4">
                        <div className="text-center">
                          <strong className="text-orange fs-4">{benefit.stat}</strong>
                        </div>
                      </div>

                      <div className="features-list">
                        {benefit.features.map((feature, idx) => (
                          <div key={idx} className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="text-orange me-2" />
                            <span className="fw-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

       
       

        
      </div>
    </>
  );
};

export default FranchiseBusinessSchool;