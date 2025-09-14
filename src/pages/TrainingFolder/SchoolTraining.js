import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheck, FaSchool, FaChalkboardTeacher, FaBookOpen, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SchoolTraining = () => {
  const schoolTraining = {
    title: "School Partnership Program",
    description: "Transform your institution's math education with our proven Abacus & Vedic Math curriculum",
    benefits: [
      { text: "Teacher certification for your staff", icon: <FaChalkboardTeacher /> },
      { text: "Ready-to-use curriculum materials", icon: <FaBookOpen /> },
      { text: "Quality assurance & training", icon: <FaCheck /> },
      { text: "Student certification programs", icon: <FaUsers /> },
      { text: "Marketing & enrollment support", icon: <FaChartLine /> },
      { text: "Ongoing partnership benefits", icon: <FaHandshake /> }
    ],
    programs: [
      {
        name: "Teacher Certification",
        details: "Train your existing math faculty with our comprehensive program",
        icon: <FaChalkboardTeacher />,
        features: ["60-hour training", "Certification exam", "Teaching resources"]
      },
      {
        name: "After-School Program",
        details: "We provide certified instructors to run classes at your school",
        icon: <FaSchool />,
        features: ["Twice weekly classes", "Progress reporting", "Parent workshops"]
      },
      {
        name: "Curriculum Licensing",
        details: "License our materials with your school branding",
        icon: <FaBookOpen />,
        features: ["Full curriculum access", "Customizable materials", "Teacher support"]
      }
    ],
    stats: [
      { value: "10+", label: "School Partners" },
      { value: "100%",label: "satisfaction Rate"},
     
    ]
  };

  return (
    <Container fluid className="py-5 px-0" style={{ backgroundColor: 'white', overflow: 'hidden' }}>
      {/* Hero Section with Decorative Elements */}
      <div className="position-relative">
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, rgba(253,126,20,0.05) 0%, rgba(255,255,255,0) 50%)',
            zIndex: 0
          }}
        ></div>
        
        <Container className="position-relative" style={{ zIndex: 1 }}>
          {/* Header Section */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto text-center">
              <span className="badge bg-orange-soft text-orange-dark rounded-pill px-3 py-2 mb-3 fw-semibold">
                Institutional Partnerships
              </span>
              <h1 className="display-4 fw-bold text-gradient-orange mb-3">
                {schoolTraining.title}
              </h1>
              <p className="lead text-dark mx-auto" style={{ maxWidth: '700px' }}>
                {schoolTraining.description}
              </p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="border-top border-orange border-3 mx-auto" style={{ width: '80px' }}></div>
                <div className="mx-3">
                  <FaSchool className="text-orange" size={24} />
                </div>
                <div className="border-top border-orange border-3 mx-auto" style={{ width: '80px' }}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Benefits Section */}
      <Container className="my-5">
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h2 className="h3 fw-bold text-dark mb-3">
              Partner <span className="text-orange">Benefits</span>
            </h2>
            <p className="text-muted">
              Comprehensive support to implement our program successfully in your institution
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {schoolTraining.benefits.map((benefit, index) => (
            <Col key={index} xl={4} lg={6} md={6} className="mb-3">
              <Card className="h-100 border-0 shadow-xs-hover shadow-sm transition-all">
                <Card.Body className="p-4">
                  <div className="d-flex">
                    <div className="bg-orange-soft rounded-circle p-3 me-4 flex-shrink-0" style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="text-orange-dark" style={{ fontSize: '1.25rem' }}>
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-2" style={{ color: '#333' }}>
                        {benefit.text}
                      </h3>
                      <p className="text-muted small mb-0">
                        {benefit.detail || 'Proven to enhance math learning outcomes'}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Programs Section */}
      <Container className="my-5 py-lg-5">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="h3 fw-bold text-dark mb-3">
              Partnership <span className="text-orange">Programs</span>
            </h2>
            <p className="text-muted">
              Flexible options to suit your institution's needs
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {schoolTraining.programs.map((program, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className={`h-100 border-0 overflow-hidden shadow-xs-hover shadow-md transition-all ${index === 1 ? 'border-orange border-2' : ''}`}>
                <Card.Body className="p-0">
                  <div className="p-4 pb-0">
                    <div className="text-center mb-4">
                      <div className="bg-orange-soft rounded-circle d-inline-flex p-4">
                        <span className="text-orange-dark" style={{ fontSize: '2rem' }}>
                          {program.icon}
                        </span>
                      </div>
                    </div>
                    <h3 className="h4 text-center fw-bold mb-3" style={{ color: '#333' }}>
                      {program.name}
                    </h3>
                    <p className="text-center text-muted mb-4">
                      {program.details}
                    </p>
                    <ul className="list-unstyled">
                      {program.features.map((feature, i) => (
                        <li key={i} className="mb-3">
                          <div className="d-flex align-items-start">
                            <span className="text-orange me-2 mt-1">•</span>
                            <span>{feature}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-soft px-4 py-3 text-center border-top">
                    <Button 
                      as={Link}
                      to="/contact"
                      variant="orange" 
                      size="sm" 
                      className="rounded-pill px-4 fw-semibold"
                    >
                      Request Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Stats & CTA Section */}
      
    </Container>
  );
};

export default SchoolTraining;