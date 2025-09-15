import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './DMITPage.css';

const reportItems = [
  {
    title: "Brain Dominance Analysis",
    desc: "Get insights into left/right brain usage and cognitive preferences. Understand how your child processes information for more effective learning."
  },
  {
    title: "Learning Style Identification",
    desc: "Discover whether your child learns best visually, auditorily, or kinesthetically. Tailor study methods for maximum retention."
  },
  {
    title: "Multiple Intelligence Mapping",
    desc: "Identify strengths across 8 intelligence areas (logical, linguistic, spatial, musical, etc.) to nurture your child's unique talents."
  },
  {
    title: "Personality & Behavior Insights",
    desc: "Understand personality traits, communication style, and behavioral tendencies to support emotional and social growth."
  },
  {
    title: "Career Recommendations",
    desc: "Receive career path suggestions based on fingerprints and personality type, helping guide future academic and career choices."
  }
];

const DMITPage = () => {
  return (
    <div className="program-page dmit-page" style={{ fontFamily: "sans-serif" }}>
      {/* Hero Section for DMIT Class */}
      <section
        className="hero-section abacus-hero-section"
        style={{
          background: 'linear-gradient(135deg, #ff9f43 0%, #fd7e14 100%)',
          color: 'white',
          padding: '80px 0'
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="col-lg-8 text-center mx-auto">
              <h1 className="display-4 fw-bold mb-3 text-white">
                DMIT Brain Development
              </h1>
              <p className="lead mb-4 text-white">
                Discover your child’s unique strengths and learning style through a scientific fingerprint analysis. Tailored for parents, students, and educators.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in the Report */}
      <section className="report-included-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs={12} className="text-center">
              <h2 className="section-title mb-4 dmit-heading">What’s Included in the Report</h2>
              <p className="section-subtitle text-muted mb-0" style={{ maxWidth: 600, margin: "0 auto" }}>
                Our comprehensive DMIT report provides actionable insights to unlock your child's full potential.
                <br />
                
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {reportItems.map((item, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <div className="report-card h-100 p-4 rounded-4 shadow-sm bg-white">
                  <h3 className="h5 fw-bold mb-3 text-orange">{item.title}</h3>
                  <p className="mb-0 text-muted">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Curriculum / Report Overview (Accordion for mobile) */}
      <section className="d-block d-md-none py-4 bg-white">
        <Container>
          <Accordion defaultActiveKey="0" flush>
            {reportItems.map((item, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.desc}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </div>
  );
};

export default DMITPage;
