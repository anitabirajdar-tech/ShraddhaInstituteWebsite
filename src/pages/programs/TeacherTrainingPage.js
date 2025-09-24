import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { ClockFill, LightningFill, AwardFill, GraphUp, StarFill, ChevronRight } from "react-bootstrap-icons";
import "./TeacherTrainingPage.css";
import { Link } from "react-router-dom";


const TeacherTrainingPage = () => {
  // Testimonial carousel state (auto-scroll with pause on hover)
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Program data (NO PRICES - focus on value/profit)
  const programs = [
    {
      title: "Basic Certification",
      duration: "4 Weeks",
      features: [
        "Abacus core methodology", 
        "Classroom engagement techniques", 
        "Student retention strategies",
        "Starter kit (worksheets + tools)"
      ],
      highlight: false,
    },
    {
      title: "Basic + Advanced Certification",
      duration: "8 Weeks",
      features: [
        "Vedic Math integration", 
        "Profit planning workshop", 
        "Batch scaling strategies",
        "Marketing blueprint for local growth"
      ],
      highlight: true, // Most popular
    },
    {
      title: "Franchise Package",
      duration: "12 Weeks",
      features: [
        "Center setup guidance", 
        "Team training modules", 
        "Exclusive mentorship",
        "Revenue tracking tools"
      ],
      highlight: false,
    },
  ];

  // Profit-focused benefits
  const benefits = [
    { 
      icon: <AwardFill color="white" size={32} />, 
      title: "Certified Expert Status", 
      text: "Globally recognized certification to attract premium students" 
    },
    { 
      icon: <GraphUp color="white" size={32} />, 
      title: "Profit-Boosting Tools", 
      text: "Learn to price classes, retain 90%+ students, and scale batches" 
    },
    { 
      icon: <ClockFill color="white" size={32} />, 
      title: "Low-Effort, High-Reward", 
      text: "Ready-to-use lesson plans save 10+ hours/week on prep work" 
    },
  ];

  // Curriculum focused on profitability & teaching excellence
  const curriculum = [
    { 
      title: "Abacus & Vedic Math Mastery", 
      content: "Simplified techniques that make complex calculations fun for students (and easy for you to teach)" 
    },
    { 
      title: "Batch Management", 
      content: "How to run 2-3 batches monthly without burnout (time management + automation hacks)" 
    },
    { 
      title: "Parent Conversion Strategies", 
      content: "Proven scripts to turn inquiries into enrollments (and get referrals)" 
    },
    { 
      title: "Profit Calculation", 
      content: "Cost analysis, pricing models, and revenue targets for sustainable income" 
    },
  ];

  // Testimonials (profit-focused success stories)
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Math Teacher, Delhi",
      text: "After training, I launched 3 batches in 2 months! The student retention strategies helped me keep 95% of kids—and parents pay on time, every time.",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      role: "Home Tutor, Mumbai",
      text: "I doubled my income by adding abacus classes. The batch scaling guide showed me how to teach 20+ students at once without extra effort!",
      rating: 5,
    },
    {
      name: "Meera Krishnan",
      role: "Center Owner, Bangalore",
      text: "The profit planning workshop was a game-changer. I now earn ₹40k/month from 2 batches—all with the tools provided in training!",
      rating: 4,
    },
  ];

  // Auto-scroll testimonials (loop infinitely)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setTranslateX(prev => {
        // Reset position when carousel ends (smooth loop)
        if (Math.abs(prev) > testimonials.length * 350) return 0;
        return prev - 1;
      });
    }, 30); // Slow, smooth scroll
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <div className="teacher-training-page">

      {/* ================= Hero Section (Profit Focus) ================= */}
      <section className="teacher-hero-section" style={{ background: 'linear-gradient(135deg, #fd7e14 0%, #ff9f43 100%)', color: 'white', padding: '80px 0' }}>
        <Container>
          <Row className="align-items-center justify-content-center" style={{ minHeight: '350px' }}>
            <Col lg={8} className="text-center mx-auto">
              <h1 className="display-4 fw-bold mb-3 text-white">Turn Teaching Into Steady Profit</h1>
              <p className="lead mb-4 text-white">
                Get certified in Abacus & Vedic Math, and build a recurring income stream with high-demand, low-effort classes that parents BEG to enroll in.
              </p>
              
              {/* CTA Buttons (Focus on Action) */}
              <div className="d-flex flex-wrap gap-3 justify-content-center hero-buttons-row">
                <Link to="/contact" className="btn btn-white btn-lg px-4 py-3 fw-bold">
                  <LightningFill className="me-2" />
                  Start My Profit Journey
                </Link>
                <Link to="/contact" className="btn btn-transparent border-white text-white btn-lg px-4 py-3 fw-bold">
                  Watch Demo Class <ChevronRight size={18} className="ms-1" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= Benefits Section (Why Profit With Us) ================= */}
      <Container className="teacher-benefits-section py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-heading mb-3">Why This Training Pays Off</h2>
            <p className="text-muted">We focus on YOUR income, not just teaching skills</p>
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

      {/* ================= Programs Section (No Prices - Focus on Value) ================= */}
      <Container className="programs-section py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-heading mb-3">Choose Your Profit Path</h2>
            <p className="text-orange-dark">All programs include lifetime support & updates</p>
          </Col>
        </Row>
        <Row className="g-4">
          {programs.map((program, index) => (
            <Col lg={4} key={index}>
              <Card className={`h-100 border-0 shadow-sm ${program.highlight ? "border-top border-3 border-orange" : ""}`}>
                <Card.Body className="p-4">
                  {program.highlight && <span className="badge bg-orange text-white mb-3">Most Profitable</span>}
                  <h4 className="text-center mb-3">{program.title}</h4>
                  <ul className="list-unstyled mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start">
                        <ChevronRight size={18} className="text-orange mt-1 me-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Direct call button instead of price */}
                  <a href="tel:+919876543210" className="btn btn-orange w-100 py-2" style={{ fontSize: "1.15rem" }}>
                    <span role="img" aria-label="call" style={{ fontSize: "1.3em", verticalAlign: "middle" }}>📞</span>
                    &nbsp; <b>98765 43210</b>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= Curriculum Section (Profit Skills) ================= */}
      <Container className="curriculum-section py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} className="d-flex flex-column align-items-center">
            <h2 className="section-heading mb-4 text-center">What You’ll Learn (That Actually Makes You Money)</h2>
            <Accordion flush className="w-100">
              {curriculum.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="mb-2 border">
                  <Accordion.Header className="accordion-orange-header">{item.title}</Accordion.Header>
                  <Accordion.Body className="text-muted">{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* ================= Testimonials Carousel (Social Proof of Profit) ================= */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-heading mb-3">Teachers Who Doubled Their Income</h2>
              <p className="text-muted">Real results from our training</p>
            </Col>
          </Row>
          <div 
            className="testimonial-carousel" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="testimonial-track">
              {/* Duplicate testimonials for infinite loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-slide"
                  style={{ transform: `translateX(${translateX}px)` }}
                >
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="p-4 text-center">
                      <div className="d-flex justify-content-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <StarFill 
                            key={i} 
                            color={i < testimonial.rating ? "#fd7e14" : "#e9ecef"} 
                            size={18} 
                          />
                        ))}
                      </div>
                      <p className="italic mb-4">"{testimonial.text}"</p>
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <small className="text-muted">{testimonial.role}</small>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CTA Section (Final Profit Push) ================= */}
      <section className="cta-section py-5" style={{ background: 'linear-gradient(135deg, #2d3436 0%, #0984e3 100%)', color: 'white' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-3">Ready to Stop Trading Time for Money?</h2>
              <p className="lead mb-5">
                Our teachers earn ₹30k-₹1L/month with part-time effort. Get certified, launch your classes, and build income that grows while you sleep.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-orange btn-lg px-5 py-3 fw-bold">
                  <LightningFill className="me-2" />
                  Start Earning Now
                </Link>
                <Link to="/contact" className="btn btn-white text-dark btn-lg px-5 py-3 fw-bold">
                  Talk to an Advisor
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default TeacherTrainingPage;