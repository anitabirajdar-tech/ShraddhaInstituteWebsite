import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheck, FaChalkboardTeacher, FaUserGraduate, FaAward, FaBookOpen, FaUsers } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import "./TeacherTraining.css";

const TeacherTraining = () => {
  const teacherTraining = {
    title: "Teacher Training & Certification Program",
    description: "Transform your career with our comprehensive Abacus & Vedic Math instructor certification",
    benefits: [
      { text: "Certification", icon: <FaCheck /> },
      { text: "Training", icon: <IoTimeOutline /> },
    
      { text: "Franchise opportunities", icon: <FaUsers /> },
      { text: "Ongoing professional development", icon: <FaBookOpen /> },
      { text: "Teaching toolkit & resources", icon: <FaChalkboardTeacher /> }
    ],
    levels: [
      {
        name: "Foundation Certification",
        duration: "2 Weeks Intensive",
        icon: <FaUserGraduate />,
        skills: ["Abacus fundamentals", "Basic Vedic Math", "Teaching methodology", "Lesson planning"],
        highlight: "Perfect for beginners"
      },
      {
        name: "Advanced Certification",
        duration: "3 Weeks Comprehensive",
        icon: <FaChalkboardTeacher />,
        skills: ["Mental math techniques", "Classroom management", "Student assessment", "Parent communication"],
        highlight: "For experienced educators"
      },
      {
        name: "Master Trainer Program",
        duration: "4 Weeks Immersive",
        icon: <FaAward />,
        skills: ["Curriculum design", "Teacher training", "Business development", "Center management"],
        highlight: "Become a training leader"
      }
    ],
    stats: [
      { value: "600+", label: "Certified Instructors" },
      { value: "85%", label: "Placement Rate" },
      { value: "4.9/5", label: "Training Satisfaction" }
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
                Professional Development
              </span>
              <h1 className="display-4 fw-bold text-gradient-orange mb-3">
                {teacherTraining.title}
              </h1>
              <p className="lead text-dark mx-auto" style={{ maxWidth: '700px' }}>
                {teacherTraining.description}
              </p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="border-top border-orange border-3 mx-auto" style={{ width: '80px' }}></div>
                <div className="mx-3">
                  <FaAward className="text-orange" size={24} />
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
              Why Choose Our <span className="text-orange">Teacher Training?</span>
            </h2>
            <p className="text-muted">
              Comprehensive program designed to make you a confident and effective instructor
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {teacherTraining.benefits.map((benefit, index) => (
            <Col key={index} xl={4} lg={6} md={6} className="mb-3">
              <Card className="h-100 border-0 shadow-xs-hover shadow-sm transition-all">
                <Card.Body className="p-4">
                  <div className="d-flex">
                    <div className="bg-orange-soft rounded-circle p-3 me-4 flex-shrink-0">
                      <span className="text-orange-dark" style={{ fontSize: '1.25rem' }}>
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="h5 fw-semibold mb-2" style={{ color: '#333' }}>
                        {benefit.text}
                      </h3>
                      <p className="text-muted small mb-0">
                        {benefit.detail || 'Proven methods that deliver results'}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Certification Levels */}
      <Container className="my-5 py-lg-5">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="h3 fw-bold text-dark mb-3">
              Our <span className="text-orange">Certification Programs</span>
            </h2>
            <p className="text-muted">
              Structured learning paths tailored to your experience level
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {teacherTraining.levels.map((level, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className={`h-100 border-0 overflow-hidden shadow-xs-hover shadow-md transition-all certification-card-gradient`}>
                <Card.Body className="p-0">
                  <div className="p-4 pb-0">
                    <div className="text-center mb-4">
                      <div className="bg-orange-soft rounded-circle d-inline-flex p-4">
                        <span className="text-orange-dark" style={{ fontSize: '2rem' }}>
                          {level.icon}
                        </span>
                      </div>
                    </div>
                    <h3 className="h4 text-center fw-bold mb-3" style={{ color: '#333' }}>
                      {level.name}
                    </h3>
                    <div className="badge bg-orange-soft text-orange-dark rounded-pill px-3 py-2 mb-3 d-inline-block">
                      {level.duration}
                    </div>
                    <p className="text-center text-muted small mb-4 fst-italic">
                      {level.highlight}
                    </p>
                    <ul className="list-unstyled">
                      {level.skills.map((skill, i) => (
                        <li key={i} className="mb-3">
                          <div className="d-flex align-items-start">
                            <span className="text-orange me-2 mt-1">•</span>
                            <span>{skill}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
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

export default TeacherTraining;