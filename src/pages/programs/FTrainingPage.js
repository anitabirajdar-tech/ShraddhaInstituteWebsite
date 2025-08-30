import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import './FranchiseTrainingPage.css';

const FTrainingPage = () => {
  const franchiseBenefits = [
    {
      title: "Complete Business System",
      description: "Turnkey solution with proven operational model",
      icon: "fas fa-box-open"
    },
    {
      title: "Marketing Support",
      description: "Ready-to-use promotional materials and strategies",
      icon: "fas fa-bullhorn"
    },
    {
      title: "Ongoing Training",
      description: "Regular workshops and curriculum updates",
      icon: "fas fa-sync-alt"
    },
    {
      title: "Territorial Rights",
      description: "Exclusive operation in your designated area",
      icon: "fas fa-map-marked-alt"
    }
  ];

  const trainingModules = [
    {
      title: "Business Setup",
      items: [
        "Center location selection",
        "Space design and requirements",
        "Equipment and materials",
        "Legal and compliance"
      ]
    },
    {
      title: "Operations Training",
      items: [
        "Student enrollment process",
        "Fee structure and payments",
        "Class scheduling",
        "Staff management"
      ]
    },
    {
      title: "Teaching Certification",
      items: [
        "Abacus instructor training",
        "Vedic Math certification",
        "Teaching methodology",
        "Student assessment"
      ]
    }
  ];

  return (
    <Container fluid className="franchise-training-page p-0">
      {/* HERO SECTION */}
      <section className="franchise-hero-section position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fd7e14 0%, #ff9f43 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <Row className="align-items-center justify-content-center" style={{ minHeight: '350px' }}>
            <Col lg={8} className="text-center mx-auto">
              <div className="mb-3">
                <span className="badge bg-light text-orange fs-6 px-3 py-2 rounded-pill">
                  <i className="bi bi-trophy-fill me-2"></i>
                  #1 Franchise Opportunity 2024
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4 text-white animate__animated animate__fadeInDown">
                Start Your Own <span className="text-warning">Shraddha Institute</span> Franchise
              </h1>
              <p className="lead text-light mb-4 animate__animated animate__fadeInUp">
                Join India’s fastest growing network in Abacus & Vedic Maths education.  
                Low investment, high returns, and full support from our expert team.
              </p>
              <div className="d-flex gap-3 mb-4 justify-content-center">
                <button className="btn btn-light btn-lg px-4 py-2 fw-bold text-orange animate__animated animate__pulse animate__infinite">
                  <i className="bi bi-building me-2"></i> Apply for Franchise
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">
                  <i className="bi bi-info-circle me-2"></i> Learn More
                </button>
              </div>
              <div className="d-flex align-items-center gap-4 text-white mt-4 justify-content-center">
                <div className="d-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-2">
                  <i className="bi bi-cash-coin text-warning me-2 fs-5"></i>
                  <span className="fw-semibold">Low Investment, High Returns</span>
                </div>
                <div className="vr"></div>
                <div className="d-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-2">
                  <i className="bi bi-people-fill text-white me-2 fs-5"></i>
                  <span className="fw-semibold">10+ Active Franchisees</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Why Choose Our Franchise?</h2>
              <p className="section-subtitle">Join our network of 50+ successful centers across India</p>
            </Col>
          </Row>
          <Row>
            {franchiseBenefits.map((benefit, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="icon-circle mb-3">
                      <i className={`${benefit.icon} fs-1 text-primary`}></i>
                    </div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* INVESTMENT SECTION */}
      <section className="investment-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
              <h2 className="mb-4">Franchise Investment</h2>
              <div className="investment-card p-4 rounded shadow-sm">
                <div className="price mb-3">
                  <span className="fs-1 fw-bold">₹11000</span>
                  <span className="text-muted">+ GST</span>
                </div>
                <p className="mb-4">One-time franchise fee includes:</p>
                <ul className="check-list mb-4">
                  <li>Complete training for 2 teachers</li>
                  <li>Center branding package</li>
                  <li>Initial teaching materials</li>
                  <li>Marketing starter kit</li>
                  <li>Business operations manual</li>
                </ul>
                <p className="small text-muted">
                  * Additional ₹2-3 lakhs recommended for setup and working capital
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">Expected Returns</h2>
              <div className="returns-card p-4 rounded shadow-sm">
                <Row>
                  <Col md={6} className="mb-3">
                    <div className="metric-card p-3 rounded">
                      <div className="metric-value">40-60</div>
                      <div className="metric-label">Students in first year</div>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="metric-card p-3 rounded">
                      <div className="metric-value">₹1-3L</div>
                      <div className="metric-label">Annual net profit</div>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="metric-card p-3 rounded">
                      <div className="metric-value">95%</div>
                      <div className="metric-label">Franchise success rate</div>
                    </div>
                  </Col>
                </Row>
                <p className="small text-muted mt-3">
                  * Actual results may vary based on location and effort
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TRAINING MODULES */}
      <section className="training-section py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Franchise Training Modules</h2>
              <p className="section-subtitle">Training Program</p>
            </Col>
          </Row>
          <Row>
            {trainingModules.map((module, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card className="h-100 module-card">
                  <Card.Body className="p-4">
                    <h3 className="mb-3">{module.title}</h3>
                    <ul className="module-list">
                      {module.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SUPPORT SECTION */}
      <section className="support-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="ps-lg-5 text-center mx-auto">
              <h2 className="mb-4">Ongoing Franchise Support</h2>
              <Accordion defaultActiveKey="0" className="text-start">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Marketing Assistance</Accordion.Header>
                  <Accordion.Body>
                    Digital and print marketing templates, social media strategies, and local promotion guidance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Teacher Training</Accordion.Header>
                  <Accordion.Body>
                    Regular workshops to train new instructors and update teaching methodologies.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Curriculum Updates</Accordion.Header>
                  <Accordion.Body>
                    Quarterly updates to teaching materials and student workbooks.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Business Consultations</Accordion.Header>
                  <Accordion.Body>
                    Monthly one-on-one sessions with franchise success managers.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section py-5 text-center">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-3">Ready to Start Your Education Business?</h2>
              <p className="lead mb-4">Limited franchise territories available</p>
              <button className="btn btn-primary btn-lg me-3">Apply Now</button>
              <button className="btn btn-outline-secondary btn-lg">Download Franchise Kit</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default FTrainingPage;
