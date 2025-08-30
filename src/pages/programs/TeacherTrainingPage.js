import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Card, Badge } from "react-bootstrap";
import { ClockFill, LightningFill, AwardFill, GraphUp, StarFill, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "./TeacherTrainingPage.css";
import trainingHero from "../../assets/gallery2.jpg";

const TeacherTrainingPage = () => {
  // Continuous testimonial carousel state
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
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
    { icon: "📜", title: "Recognized Certification", text: "Globally accepted with lifetime validity" },
    { icon: "👩‍🏫", title: "Practical Training", text: "120+ hours of hands-on instruction" },
    { icon: "💼", title: "Career Support", text: "Placement and franchise opportunities" },
  ];

  const curriculum = [
    { title: "Abacus Methodology", content: "Master bead movements and visualization techniques" },
    { title: "Vedic Math", content: "Teach all 16 sutras with practical applications" },
    { title: "Classroom Management", content: "Strategies for engaging young learners" },
    { title: "Business Development", content: "Marketing and center management" },
  ];

  // Teacher Training Success Stories
  const successStories = [
    {
      id: 1,
      name: "Kavita Sharma",
      content: {
        english: "After completing the teacher training, I started my own center and now have 50+ students. The comprehensive curriculum gave me confidence to teach effectively.",
        hindi: "शिक्षक प्रशिक्षण पूरा करने के बाद, मैंने अपना केंद्र शुरू किया और अब मेरे 50+ छात्र हैं। व्यापक पाठ्यक्रम ने मुझे प्रभावी रूप से पढ़ाने का आत्मविश्वास दिया।",
        marathi: "शिक्षक प्रशिक्षण पूर्ण केल्यानंतर, मी माझे स्वतःचे केंद्र सुरू केले आणि आता माझे 50+ विद्यार्थी आहेत. सर्वसमावेशक अभ्यासक्रमाने मला प्रभावीपणे शिकवण्याचा आत्मविश्वास दिला.",
        kannada: "ಶಿಕ್ಷಕ ತರಬೇತಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ, ನಾನು ನನ್ನ ಸ್ವಂತ ಕೇಂದ್ರವನ್ನು ಪ್ರಾರಂಭಿಸಿದೆ ಮತ್ತು ಈಗ ನನಗೆ 50+ ವಿದ್ಯಾರ್ಥಿಗಳಿದ್ದಾರೆ. ಸಮಗ್ರ ಪಠ್ಯಕ್ರಮವು ನನಗೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕಲಿಸುವ ವಿಶ್ವಾಸವನ್ನು ನೀಡಿತು."
      },
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Rajesh Patil",
      content: {
        english: "The business training module was incredible! I learned how to market my classes and now earn ₹25,000+ monthly. The certification opened many doors.",
        hindi: "व्यापारिक प्रशिक्षण मॉड्यूल अविश्वसनीय था! मैंने सीखा कि अपनी कक्षाओं का विपणन कैसे करना है और अब मासिक ₹25,000+ कमाता हूं। प्रमाणन ने कई दरवाजे खोले।",
        marathi: "व्यापारिक प्रशिक्षण मॉड्यूल अविश्वसनीय होते! मी शिकलो की माझ्या वर्गांचे मार्केटिंग कसे करावे आणि आता मासिक ₹25,000+ कमावतो. प्रमाणपत्राने अनेक दरवाजे उघडले.",
        kannada: "ವ್ಯಾಪಾರ ತರಬೇತಿ ಮಾಡ್ಯೂಲ್ ಅದ್ಭುತವಾಗಿತ್ತು! ನನ್ನ ತರಗತಿಗಳನ್ನು ಹೇಗೆ ಮಾರ್ಕೆಟ್ ಮಾಡಬೇಕೆಂದು ನಾನು ಕಲಿತಿದ್ದೇನೆ ಮತ್ತು ಈಗ ತಿಂಗಳಿಗೆ ₹25,000+ ಗಳಿಸುತ್ತೇನೆ. ಪ್ರಮಾಣಪತ್ರವು ಅನೇಕ ಬಾಗಿಲುಗಳನ್ನು ತೆರೆಯಿತು."
      },
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 3,
      name: "Anjali Desai",
      content: {
        english: "From housewife to successful educator! The practical training sessions helped me understand child psychology and teaching methodologies perfectly.",
        hindi: "गृहिणी से सफल शिक्षक तक! व्यावहारिक प्रशिक्षण सत्रों ने मुझे बाल मनोविज्ञान और शिक्षण पद्धतियों को पूरी तरह से समझने में मदद की।",
        marathi: "गृहिणीपासून यशस्वी शिक्षकापर्यंत! व्यावहारिक प्रशिक्षण सत्रांनी मला बाल मानसशास्त्र आणि अध्यापन पद्धती पूर्णपणे समजून घेण्यास मदत केली.",
        kannada: "ಗೃಹಿಣಿಯಿಂದ ಯಶಸ್ವಿ ಶಿಕ್ಷಕಿಯವರೆಗೆ! ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ ಅವಧಿಗಳು ಮಕ್ಕಳ ಮನೋವಿಜ್ಞಾನ ಮತ್ತು ಬೋಧನಾ ವಿಧಾನಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಿದವು."
      },
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
      id: 4,
      name: "Suresh Kumar",
      content: {
        english: "The 120-hour certification was worth every minute! Now I train other teachers and have become a regional coordinator. Career growth is phenomenal.",
        hindi: "120 घंटे का प्रमाणन हर मिनट के लायक था! अब मैं अन्य शिक्षकों को प्रशिक्षित करता हूं और क्षेत्रीय समन्वयक बन गया हूं। करियर की वृद्धि अद्भुत है।",
        marathi: "120 तासांचे प्रमाणीकरण प्रत्येक मिनिटासाठी वाजवी होते! आता मी इतर शिक्षकांना प्रशिक्षण देतो आणि प्रादेशिक समन्वयक झालो आहे. करिअरची वाढ विलक्षण आहे.",
        kannada: "120 ಗಂಟೆಗಳ ಪ್ರಮಾಣೀಕರಣವು ಪ್ರತಿ ನಿಮಿಷಕ್ಕೆ ಯೋಗ್ಯವಾಗಿತ್ತು! ಈಗ ನಾನು ಇತರ ಶಿಕ್ಷಕರಿಗೆ ತರಬೇತಿ ನೀಡುತ್ತೇನೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಸಂಯೋಜಕನಾಗಿದ್ದೇನೆ. ವೃತ್ತಿಜೀವನದ ಬೆಳವಣಿಗೆಯು ಅಸಾಧಾರಣವಾಗಿದೆ."
      },
      image: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      id: 5,
      name: "Meera Joshi",
      content: {
        english: "Best decision ever! The franchise support helped me set up in a small town. Now serving 80+ families and creating employment for others too.",
        hindi: "अब तक का सबसे अच्छा फैसला! फ्रेंचाइज़ी सपोर्ट ने मुझे एक छोटे शहर में स्थापित होने में मदद की। अब 80+ परिवारों की सेवा कर रही हूं और दूसरों के लिए भी रोजगार बना रही हूं।",
        marathi: "आतापर्यंतचा सर्वोत्तम निर्णय! फ्रँचायझी सपोर्टने मला एका छोट्या शहरात स्थापित होण्यास मदत केली. आता 80+ कुटुंबांची सेवा करत आहे आणि इतरांसाठी देखील रोजगार निर्माण करत आहे.",
        kannada: "ಇದುವರೆಗಿನ ಅತ್ಯುತ್ತಮ ನಿರ್ಧಾರ! ಫ್ರ್ಯಾಂಚೈಸ್ ಬೆಂಬಲವು ಸಣ್ಣ ಪಟ್ಟಣದಲ್ಲಿ ಸ್ಥಾಪಿಸಲು ಸಹಾಯ ಮಾಡಿತು. ಈಗ 80+ ಕುಟುಂಬಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇನೆ ಮತ್ತು ಇತರರಿಗೂ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಸುತ್ತಿದ್ದೇನೆ."
      },
      image: "https://randomuser.me/api/portraits/women/54.jpg"
    },
    {
      id: 6,
      name: "Amit Gupta",
      content: {
        english: "The ongoing support system is amazing! Regular updates, new techniques, and business guidance have kept me ahead in the competitive market.",
        hindi: "निरंतर सहायता प्रणाली अद्भुत है! नियमित अपडेट, नई तकनीकें, और व्यापारिक मार्गदर्शन ने मुझे प्रतिस्पर्धी बाजार में आगे रखा है।",
        marathi: "सतत समर्थन प्रणाली आश्चर्यकारक आहे! नियमित अपडेट्स, नवीन तंत्रे, आणि व्यावसायिक मार्गदर्शनाने मला स्पर्धात्मक बाजारात पुढे ठेवले आहे.",
        kannada: "ನಿರಂತರ ಬೆಂಬಲ ವ್ಯವಸ್ಥೆಯು ಅದ್ಭುತವಾಗಿದೆ! ನಿಯಮಿತ ನವೀಕರಣಗಳು, ಹೊಸ ತಂತ್ರಗಳು ಮತ್ತು ವ್ಯಾಪಾರ ಮಾರ್ಗದರ್ಶನವು ಸ್ಪರ್ಧಾತ್ಮಕ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನನ್ನನ್ನು ಮುಂದಿಟ್ಟಿದೆ."
      },
      image: "https://randomuser.me/api/portraits/men/38.jpg"
    }
  ];

  // Continuous auto-rotation
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setTranslateX(prev => prev - 1);
    }, 50); // Smooth movement every 50ms
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Reset position when testimonials complete a full cycle
  useEffect(() => {
    const testimonialWidth = 350; // Approximate width of each testimonial
    const totalWidth = testimonialWidth * successStories.length;
    
    if (Math.abs(translateX) >= totalWidth) {
      setTranslateX(0);
    }
  }, [translateX, successStories.length]);

  // Pause/Resume functions
  const pauseRotation = () => setIsPaused(true);
  const resumeRotation = () => setIsPaused(false);

  // Create infinite loop of testimonials
  const getInfiniteTestimonials = () => {
    // Duplicate testimonials to create seamless loop
    return [...successStories, ...successStories, ...successStories];
  };

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
              
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button className="btn btn-primary btn-lg px-4 py-3 fw-bold">
                  <LightningFill className="me-2" />
                  Enroll Now
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  Free Demo Class
                </button>
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
                  <button className={`btn w-100 ${program.highlight ? "btn-orange" : "btn-outline-orange"}`}>Enroll Now</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= Curriculum Section ================= */}
      <Container className="curriculum-section py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img src={trainingHero} alt="Curriculum" className="img-fluid rounded-3 shadow" />
          </Col>
          <Col lg={6}>
            <h2 className="mb-4">Comprehensive Curriculum</h2>
            <Accordion flush>
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

      {/* ================= Success Stories Section ================= */}
      <section className="success-stories-section py-5 bg-light-orange">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <Badge bg="orange" className="mb-3 px-3 py-2 fs-6">
                SUCCESS STORIES
              </Badge>
              <h2 className="display-5 fw-bold mb-3 text-dark">
                Transforming <span className="text-orange">Teachers Into Entrepreneurs</span>
              </h2>
              <p className="lead text-muted">
                Real success stories from teachers who completed our training and built thriving education businesses
              </p>
            </Col>
          </Row>
          
          {/* Language Selector */}
          <Row className="justify-content-center mb-4">
            <Col lg={8} md={10} className="text-center">
              <div className="language-selector">
                <span className="me-lg-3 mb-2 mb-lg-0 text-muted">Select Language:</span>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <button 
                    className={`btn btn-sm ${selectedLanguage === 'english' ? 'btn-orange' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLanguage('english')}
                  >
                    English
                  </button>
                  <button 
                    className={`btn btn-sm ${selectedLanguage === 'hindi' ? 'btn-orange' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLanguage('hindi')}
                  >
                    हिंदी
                  </button>
                  <button 
                    className={`btn btn-sm ${selectedLanguage === 'marathi' ? 'btn-orange' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLanguage('marathi')}
                  >
                    मराठी
                  </button>
                  <button 
                    className={`btn btn-sm ${selectedLanguage === 'kannada' ? 'btn-orange' : 'btn-outline-secondary'}`}
                    onClick={() => setSelectedLanguage('kannada')}
                  >
                    ಕನ್ನಡ
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* Continuous Testimonial Carousel */}
          <div 
            className="continuous-testimonial-container"
            onMouseEnter={pauseRotation}
            onMouseLeave={resumeRotation}
          >
            {/* Desktop View: Continuous horizontal scroll */}
            <div className="d-none d-lg-block">
              <div 
                className="testimonial-track"
                style={{
                  transform: `translateX(${translateX}px)`,
                  display: 'flex',
                  gap: '2rem',
                  transition: isPaused ? 'transform 0.3s ease' : 'none'
                }}
              >
                {getInfiniteTestimonials().map((story, index) => (
                  <div key={`${story.id}-${index}`} className="testimonial-slide">
                    <div className="success-story-card bg-white p-4 rounded-4 shadow-sm">
                      <div className="d-flex align-items-start mb-3">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="rounded-circle me-3"
                          style={{width: '60px', height: '60px', objectFit: 'cover'}}
                        />
                        <div className="flex-grow-1">
                          <h4 className="h5 fw-bold mb-1 text-center">{story.name}</h4>
                        </div>
                      </div>
                      
                      <p className="mb-3 text-center" style={{fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6'}}>
                        "{story.content[selectedLanguage]}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile View: Horizontal continuous scroll */}
            <div className="d-lg-none mobile-testimonial-container">
              <div 
                className="mobile-testimonial-track"
                style={{
                  transform: `translateX(${translateX}px)`,
                  display: 'flex',
                  gap: '1rem',
                  transition: isPaused ? 'transform 0.3s ease' : 'none'
                }}
              >
                {getInfiniteTestimonials().map((story, index) => (
                  <div key={`mobile-${story.id}-${index}`} className="mobile-testimonial-slide">
                    <div className="success-story-card bg-white p-4 rounded-4 shadow-sm">
                      <div className="d-flex align-items-start mb-3">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="rounded-circle me-3"
                          style={{width: '60px', height: '60px', objectFit: 'cover'}}
                        />
                        <div className="flex-grow-1">
                          <h4 className="h5 fw-bold mb-1 text-center">{story.name}</h4>
                        </div>
                      </div>
                      
                      <p className="mb-3 text-center" style={{fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6'}}>
                        "{story.content[selectedLanguage]}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pause/Play Indicator */}
            <div className="rotation-status position-absolute top-0 end-0 p-2">
              <small className={`badge ${isPaused ? 'bg-warning' : 'bg-success'}`}>
                {isPaused ? '⏸️ Paused' : '▶️ Auto-rotating'}
              </small>
            </div>
          </div>
          
          <Row className="mt-5">
            <Col className="text-center">
              <button className="btn btn-orange btn-lg px-4 py-2 fw-bold">
                Read More Success Stories <i className="ms-2 fas fa-arrow-right"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CTA Section ================= */}
      <Container className="teacher-cta-section py-5 text-center">
        <h2 className="mb-3">Ready to Start Teaching?</h2>
        <p className="mb-4">Next batch begins January 15th</p>
        <button className="btn btn-orange px-4 fw-bold">Apply Now</button>
      </Container>

    </div>
  );
};

export default TeacherTrainingPage;
