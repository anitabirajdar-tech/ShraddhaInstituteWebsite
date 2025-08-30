import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './DMITPage.css';
import dmitImg from '../../assets/dmit.jpg';
import dmitImg1 from '../../assets/programs/dmit1.jpeg';
import dmitImg2 from '../../assets/programs/dmit2.jpg';
import dmitImg3 from '../../assets/programs/dmit3.png';

const DMITPage = () => {
  return (
    <Container className="program-page dmit-page">  {/* Added dmit-page class here */}
      {/* Hero Section for DMIT Class */}
      <section className="dmit-hero-section" style={{ background: 'linear-gradient(135deg, #ff9f43 0%, #fd7e14 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="col-lg-10 text-center mx-auto">
              <h1 className="display-4 fw-bold mb-3 text-white">DMIT Brain Development</h1>
              <p className="lead mb-4 text-white">
                Discover your child’s unique strengths and learning style through a scientific fingerprint analysis. Tailored for parents, students, and educators.
              </p>
              <button className="btn btn-orange btn-lg mt-3">Book a Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
     
      {/* Curriculum / Report Overview */}
      <Row className="curriculum-section py-5 bg-light">
        <Col lg={10} className="mx-auto">
          <h2 className="text-center mb-5 dmit-heading">What’s Included in the Report</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Brain Dominance Analysis</Accordion.Header>
              <Accordion.Body>
                Get insights into left/right brain usage, and cognitive preferences.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Learning Style Identification</Accordion.Header>
              <Accordion.Body>
                Understand whether your child learns best visually, auditorily, or kinesthetically.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Career Recommendations</Accordion.Header>
              <Accordion.Body>
                Based on fingerprints and personality type, career paths are suggested.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* CTA */}
      <Row className="text-center py-5">
        <Col>
          <h3 className="mb-3 dmit-heading">Unlock Your Child’s True Potential</h3>
          <p>Our certified DMIT experts will guide you through every step of the assessment.</p>
          <button className="btn btn-primary btn-lg">Book Now</button>
        </Col>
      </Row>
    </Container>
  );
};

export default DMITPage;
