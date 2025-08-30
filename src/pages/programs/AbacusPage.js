import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AbacusPage.css';
import abacusHero from '../../assets/abacus.webp';
import { FaBolt, FaBullseye, FaChartLine, FaSmileBeam } from 'react-icons/fa';


const testimonials = [
  {
    id: 1,
    name: "मनीषा सोनटके",
    nameEn: "Manisha Sontake",
    role: "पालक",
    roleEn: "Parent",
    content: "माझ्या मुलीची गणिताची कौशल्ये फक्त ३ महिन्यांत नाट्यमयरित्या सुधारली. आता ती माझ्यापेक्षा वेगाने गणना करू शकते!",
    contentEn: "My daughter's math skills improved dramatically within just 3 months. She can now do calculations faster than me!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    language: "marathi"
  },
  {
    id: 2,
    name: "पूजा जाधव",
    nameEn: "Pooja Jadhav",
    role: "शिक्षक",
    roleEn: "Teacher",
    content: "शिक्षक प्रशिक्षण कार्यक्रम सखोल आणि व्यावहारिक होता. मी या तंत्रांचा यशस्वीरित्या माझ्या शाळेत अंमलबजावणी केली आहे.",
    contentEn: "The teacher training program was comprehensive and practical. I've successfully implemented these techniques in my school.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    language: "marathi"
  },
  {
    id: 3,
    name: "अश्विनी अवतडे",
    nameEn: "Ashawini Awatade",
    role: "पालक",
    roleEn: "Parent",
    content: "अबॅकस प्रोग्राम सुरू केल्यापासून माझ्या मुलाची एकाग्रता खूप सुधारली आहे. त्याचे एकूण गुण देखील वाढले आहेत!",
    contentEn: "My son's concentration has improved so much since starting the abacus program. His overall grades have gone up too!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    language: "marathi"
  },
  {
    id: 4,
    name: "Pooja Wale",
    role: "Principal",
    content: "We implemented this program school-wide and saw a 25% improvement in math scores across all grades.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    language: "english"
  },
  {
    id: 5,
    name: "Vaibhav Khandare",
    role: "Parent",
    content: "The mental math skills my child developed are incredible. She can solve problems instantly without paper!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    language: "english"
  }
];

const AbacusPage = () => {
  const [showMarathi, setShowMarathi] = React.useState(true);

  return (
    <div className="abacus-page">
      {/* Hero Section for Abacus Class */}
      <section className="abacus-hero-section" style={{ background: 'linear-gradient(135deg, #ff9f43 0%, #fd7e14 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="col-lg-8 text-center mx-auto">
              <h1 className="display-4 fw-bold mb-3 text-white">Master Abacus – Mental Math for Life!</h1>
              <p className="lead mb-4 text-white">
                Unlock your child’s full potential with our proven Abacus training. Boost calculation speed, concentration, and confidence in a fun, interactive way!
              </p>
              {/* Optional CTA Button */}
              {/* <a href="#enroll" className="btn btn-light btn-lg px-4 py-2 fw-bold text-orange mt-2">Book Free Demo</a> */}
              
              {/* Enroll Now and Book Demo buttons in AbacusPage hero section */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/contact" className="btn btn-primary btn-lg px-4">
                  Enroll Now
                </Link>
                <Link to="/book-demo" className="btn btn-outline-primary btn-lg px-4">
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5 bg-white">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold display-5 mb-3 text-orange">
              Benefits of Abacus Learning
            </h2>
            <p className="section-subtitle text-muted fs-5">
              Our program delivers measurable improvements in multiple cognitive areas
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-4 h-100 shadow-sm bg-white hover-shadow transition">
                <div
                  className="icon-wrapper bg-orange-light d-flex justify-content-center align-items-center rounded-circle mb-4 mx-auto"
                  style={{ width: "80px", height: "80px" }}
                >
                    <FaBolt size={40} className="text-orange" />
                </div>
                <div className="card-content text-center">
                  <h3 className="h5 fw-bold mb-3 text-dark">
                    Lightning Fast Calculations
                  </h3>
                  <p className="text-secondary mb-0">
                    Students perform complex arithmetic mentally with speed and
                    accuracy, reducing calculator dependency.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-4 h-100 shadow-sm bg-white hover-shadow transition">
                <div
                  className="icon-wrapper bg-orange-light d-flex justify-content-center align-items-center rounded-circle mb-4 mx-auto"
                  style={{ width: "80px", height: "80px" }}
                >
                    <FaBullseye size={40} className="text-orange" />
                </div>
                <div className="card-content text-center">
                  <h3 className="h5 fw-bold mb-3 text-dark">Enhanced Concentration</h3>
                  <p className="text-secondary mb-0">
                    Regular abacus practice significantly improves attention span,
                    focus, and visual memory retention.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-4 h-100 shadow-sm bg-white hover-shadow transition">
                <div
                  className="icon-wrapper bg-orange-light d-flex justify-content-center align-items-center rounded-circle mb-4 mx-auto"
                  style={{ width: "80px", height: "80px" }}
                >
                    <FaChartLine size={40} className="text-orange" />
                </div>
                <div className="card-content text-center">
                  <h3 className="h5 fw-bold mb-3 text-dark">Academic Excellence</h3>
                  <p className="text-secondary mb-0">
                    Abacus learners typically show 20–30% improvement in overall
                    academic performance, especially in mathematics.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-4 h-100 shadow-sm bg-white hover-shadow transition">
                <div
                  className="icon-wrapper bg-orange-light d-flex justify-content-center align-items-center rounded-circle mb-4 mx-auto"
                  style={{ width: "80px", height: "80px" }}
                >
                    <FaSmileBeam size={40} className="text-orange" />
                </div>
                <div className="card-content text-center">
                  <h3 className="h5 fw-bold mb-3 text-dark">Boosted Confidence</h3>
                  <p className="text-secondary mb-0">
                    Children gain tremendous self-confidence as they master skills
                    their peers find challenging.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Marquee Section */}
      <section className="testimonial-marquee py-5 bg-light-orange">
        <Container className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">What Our Community Says</h2>
          <p className="text-muted fs-5">
            Trusted by parents, teachers, and schools across India
          </p>
          
          {/* Language Toggle Button */}
          <div className="language-toggle mb-4">
            <div className="btn-group" role="group">
              <button 
                type="button" 
                className={`btn ${showMarathi ? 'btn-orange' : 'btn-outline-orange'}`}
                onClick={() => setShowMarathi(true)}
              >
                मराठी
              </button>
              <button 
                type="button" 
                className={`btn ${!showMarathi ? 'btn-orange' : 'btn-outline-orange'}`}
                onClick={() => setShowMarathi(false)}
              >
                English
              </button>
            </div>
          </div>
        </Container>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="marquee-slide">
                <div className="testimonial-card bg-white p-4 rounded-3 shadow-sm h-100 text-center mx-2">
                  <div className="mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={showMarathi ? testimonial.name : testimonial.nameEn || testimonial.name}
                      className="rounded-circle img-fluid"
                      style={{width: '80px', height: '80px', objectFit: 'cover'}}
                    />
                  </div>
                  
                  <h4 className="h5 fw-bold mb-2">
                    {showMarathi ? testimonial.name : testimonial.nameEn || testimonial.name}
                  </h4>
                  <p className="text-muted small mb-3">
                    {showMarathi ? (testimonial.roleEn ? testimonial.role : testimonial.roleEn) : testimonial.roleEn || testimonial.role}
                  </p>
                  
                  <p className="mb-3">
                    "{showMarathi ? (testimonial.contentEn ? testimonial.content : testimonial.contentEn) : testimonial.contentEn || testimonial.content}"
                  </p>
                  
                  <div className="text-orange fs-5">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-orange text-white">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Child's Math Skills?</h2>
          <p className="cta-subtitle fs-5 mb-5">
            Limited seats available for our next batch starting soon
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light btn-lg px-4 py-2 fw-bold text-orange">
              Enroll Now
            </button>
            <button className="btn btn-outline-light btn-lg px-4 py-2 fw-bold">
              Book Demo
            </button>
          </div>
          <div className="mt-4">
            <p className="small mb-0">
              <i className="bi bi-shield-check me-2"></i> 7-day money back guarantee
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AbacusPage;