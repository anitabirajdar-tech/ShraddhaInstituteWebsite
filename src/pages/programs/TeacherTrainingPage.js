import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Accordion, Card, Badge } from "react-bootstrap";
import { ClockFill, LightningFill, AwardFill, GraphUp, StarFill, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "./TeacherTrainingPage.css";

import { Link } from "react-router-dom";


const TeacherTrainingPage = () => {
  // Continuous testimonial carousel state
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const programs = [
    {
      title: "Basic Certification",
      price: "₹5210",
      duration: "4 Weeks",
      features: ["Abacus methodology", "Classroom techniques", "Starter kit"],
      highlight: false,
    },
    {
      title: "Basic + Advanced Certification",
      price: "₹10210",
      duration: "8 Weeks",
      features: ["Vedic Math included", "Lesson planning", "Business training"],
      highlight: true,
    },
    {
      title: "Franchise Package",
      price: "₹50,000",
      duration: "12 Weeks",
      features: ["Center setup", "Marketing support", "Mentorship"],
      highlight: false,
    },
  ];

  const benefits = [
    { icon: <AwardFill color="white" size={32} />, title: "Recognized Certification", text: "Globally accepted with lifetime validity" },
      { icon: <ClockFill color="white" size={32} />, title: "Practical Training", text: "120+ hours of hands-on instruction" },
      { icon: <GraphUp color="white" size={32} />, title: "Career Support", text: "Placement and franchise opportunities" },
  ];

  const curriculum = [
    { title: "Abacus Methodology", content: "Master bead movements and visualization techniques" },
    { title: "Vedic Math", content: "Teach all 16 sutras with practical applications" },
    { title: "Classroom Management", content: "Strategies for engaging young learners" },
    { title: "Business Development", content: "Marketing and center management" },
  ];

  

  // Continuous auto-rotation
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setTranslateX(prev => prev - 1);
    }, 50); // Smooth movement every 50ms
    
    return () => clearInterval(interval);
  }, [isPaused]);

  

  // No contact form state or scroll logic needed

  return (
    <div className="teacher-training-page">

      {/* ================= Hero Section ================= */}
      <section className="teacher-hero-section" style={{ background: 'linear-gradient(135deg, #fd7e14 0%, #ff9f43 100%)', color: 'white', padding: '80px 0' }}>
        <Container>
          <Row className="align-items-center justify-content-center" style={{ minHeight: '350px' }}>
            <Col lg={8} className="text-center mx-auto">
              <h1 className="display-4 fw-bold mb-3 text-white">Become a Certified Teacher</h1>
              <p className="lead mb-4 text-white">
                Unlock your potential with our hands-on Abacus & Vedic Math training. Get certified, start your own classes, and join a community of passionate educators!
              </p>
              
              {/* Replace the button container div below */}
              <div className="d-flex flex-wrap gap-3 justify-content-center hero-buttons-row">
                <Link to="/contact" className="btn btn-orange btn-lg px-4 py-3 fw-bold">
                  <LightningFill className="me-2" />
                  Enroll Now
                </Link>
                <Link to="/contact" className="btn btn-orange btn-lg px-4 py-3 fw-bold">
                  Free Demo Class 
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= Benefits Section ================= */}
      <Container className="teacher-benefits-section py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-heading mb-3">Why Train With Us?</h2>
            <p className="text-muted">Proven training methodology since 2010</p>
          </Col>
        </Row>
        <Row>
          {benefits.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm p-3 hover-orange">
                <div className="icon-circle mb-3 bg-orange-light">{item.icon}</div>
                <h5 className="text-center">{item.title}</h5>
                <p className="text-muted text-center mb-0">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= Programs Section ================= */}
      <Container className="programs-section py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-heading mb-3">Training Programs</h2>
            <p className="text-orange-dark">Choose your path to certification</p>
          </Col>
        </Row>
        <Row className="g-4">
          {programs.map((program, index) => (
            <Col lg={4} key={index}>
              <Card className={`h-100 border-0 shadow-sm ${program.highlight ? "border-top border-3 border-orange" : ""}`}>
                <Card.Body className="p-4">
                  {program.highlight && <span className="badge bg-orange text-white mb-3">Most Popular</span>}
                  <h4 className="text-center mb-3">{program.title}</h4>
                  <div className="text-center mb-4">
                    <h3 className="text-orange">{program.price}</h3>
                    <small className="text-muted">{program.duration}</small>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="mb-2">✓ {feature}</li>
                    ))}
                  </ul>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= Curriculum Section ================= */}
      <Container className="curriculum-section py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} className="d-flex flex-column align-items-center">
            <h2 className="section-heading mb-4 text-center">Comprehensive Curriculum</h2>
            <Accordion flush className="w-100">
              {curriculum.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="mb-2 border">
                  <Accordion.Header className="accordion-orange-header">{item.title}</Accordion.Header>
                  <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      
      {/* ================= CTA Section ================= */}
      
      {/* ================= Demo/Contact Form ================= */}
  {/* Contact form is not shown on this page */}
    </div>
  );
};

export default TeacherTrainingPage;
