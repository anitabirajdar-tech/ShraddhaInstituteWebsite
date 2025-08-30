import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import { LightningFill, ClockFill, AwardFill, GraphUp, StarFill, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './vedicMathPage.css';

import { CheckCircleFill } from 'react-bootstrap-icons';

const VedicMathPage = () => {
  // Continuous testimonial carousel state
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const benefits = [
    {
  // ...existing code...
      title: "Trick-Based Learning",
      description: "Master 16 Vedic sutras that dramatically reduce calculation time for complex problems.",
      icon: <LightningFill className="text-warning" size={24} />
    },
    {
  // ...existing code...
      title: "Improved Accuracy",
      description: "Reduce errors by 70% in school exams and competitive tests with systematic approaches.",
      icon: <AwardFill className="text-primary" size={24} />
    },
    {
  // ...existing code...
      title: "Mental Agility",
      description: "Develop lightning-fast mental math skills that last a lifetime.",
      icon: <ClockFill className="text-success" size={24} />
    }
  ];

  const curriculum = [
    {
      level: "Level 1: Base Vedic Techniques",
      content: "Master the foundational 16 sutras, Nikhilam multiplication, and digit-sum verification methods.",
      duration: "8 weeks",
      skills: ["Basic Sutras", "Nikhilam Multiplication", "Digit-Sum Verification"]
    },
    {
      level: "Level 2: Intermediate Applications",
      content: "Advanced techniques for square roots, cube roots, algebraic equations, and percentage calculations.",
      duration: "10 weeks",
      skills: ["Square Roots", "Cube Roots", "Algebraic Equations", "Percentages"]
    },
    {
      level: "Level 3: Competitive Exam Prep",
      content: "Application in real-world scenarios including Olympiads, SAT, and entrance examinations.",
      duration: "12 weeks",
      skills: ["Exam Strategies", "Speed Techniques", "Problem Patterns"]
    }
  ];

  const stats = [
    { value: "10x", label: "Faster Calculations", icon: <GraphUp size={32} /> },
    { value: "94%", label: "Accuracy Improvement", icon: <AwardFill size={32} /> },
    { value: "500+", label: "Happy Students", icon: <LightningFill size={32} /> }
  ];

  // Success Stories Testimonials
  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      content: {
        english: "I went from struggling with basic multiplication to winning district math competitions in just 6 months! Vedic Math techniques made numbers fun instead of frightening.",
        hindi: "मैं मूलभूत गुणा से संघर्ष करने से लेकर केवल 6 महीने में जिला गणित प्रतियोगिताओं में जीतने तक पहुंच गया! वैदिक गणित की तकनीकों ने संख्याओं को डरावनी के बजाय मजेदार बना दिया।",
        marathi: "मी मूलभूत गुणाकाराशी संघर्ष करण्यापासून फक्त ६ महिन्यांत जिल्हा गणित स्पर्धा जिंकण्यापर्यंत पोहोचलो! वैदिक गणिताच्या तंत्रांनी संख्यांना भयावह न ठेवता मजेशीर बनवले.",
        kannada: "ನಾನು ಮೂಲಭೂತ ಗುಣಾಕಾರದೊಂದಿಗೆ ಹೋರಾಡುವುದರಿಂದ ಕೇವಲ 6 ತಿಂಗಳುಗಳಲ್ಲಿ ಜಿಲ್ಲಾ ಗಣಿತ ಸ್ಪರ್ಧೆಗಳನ್ನು ಗೆಲ್ಲುವವರೆಗೆ ಬಂದೆ! ವೈದಿಕ ಗಣಿತ ತಂತ್ರಗಳು ಸಂಖ್ಯೆಗಳನ್ನು ಭಯಾನಕದ ಬದಲು ಮೋಜಿನ್ಮಯವಾಗಿಸಿದೆ."
      },
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Mehta",
      content: {
        english: "My daughter's math anxiety disappeared completely. She now enjoys solving problems mentally and her confidence has soared in all subjects, not just math!",
        hindi: "मेरी बेटी की गणित की चिंता पूरी तरह से गायब हो गई। अब वह मानसिक रूप से समस्याओं को हल करने का आनंद लेती है और उसका आत्मविश्वास न केवल गणित में बल्कि सभी विषयों में बढ़ा है!",
        marathi: "माझ्या मुलीची गणिताची चिंता पूर्णपणे नाहीशी झाली. आता ती मानसिकरित्या समस्या सोडवण्याचा आनंद घेते आणि तिचा आत्मविश्वास केवळ गणितातच नाही तर सर्व विषयांमध्ये वाढला आहे!",
        kannada: "ನನ್ನ ಮಗಳ ಗಣಿತದ ಆತಂಕವು ಸಂಪೂರ್ಣವಾಗಿ ಮಾಯವಾಯಿತು. ಈಗ ಅವಳು ಮಾನಸಿಕವಾಗಿ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುವುದನ್ನು ಆನಂದಿಸುತ್ತಾಳೆ ಮತ್ತು ಅವಳ ಆತ್ಮವಿಶ್ವಾಸವು ಗಣಿತದಲ್ಲಿ ಮಾತ್ರವಲ್ಲದೆ ಎಲ್ಲಾ ವಿಷಯಗಳಲ್ಲಿ ಹೆಚ್ಚಿದೆ!"
      },
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      content: {
        english: "Cut my calculation time by 70% in SAT math section. Scored 780/800 thanks to Vedic techniques! The mental math skills are invaluable for timed tests.",
        hindi: "SAT गणित सेक्शन में मेरा कैल्कुलेशन समय 70% कम हो गया। वैदिक तकनीकों की बदौलत 780/800 स्कोर किया! समयबद्ध परीक्षाओं के लिए मानसिक गणित कौशल अमूल्य हैं।",
        marathi: "SAT गणित विभागात माझा गणना वेळ 70% कमी झाला. वैदिक तंत्रांमुळे 780/800 गुण मिळवले! वेळेच्या दबावातील परीक्षांसाठी मानसिक गणित कौशल्ये अमूल्य आहेत.",
        kannada: "SAT ಗಣಿತ ವಿಭಾಗದಲ್ಲಿ ನನ್ನ ಲೆಕ್ಕಾಚಾರದ ಸಮಯವನ್ನು 70% ಕಡಿಮೆಗೊಳಿಸಿದೆ. ವೈದಿಕ ತಂತ್ರಗಳಿಗೆ ಧನ್ಯವಾದಗಳು 780/800 ಅಂಕಗಳನ್ನು ಗಳಿಸಿದೆ! ಸಮಯದ ಒತ್ತಡದ ಪರೀಕ್ಷೆಗಳಿಗೆ ಮಾನಸಿಕ ಗಣಿತ ಕೌಶಲ್ಯಗಳು ಅಮೂಲ್ಯವಾಗಿವೆ."
      },
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      name: "Sneha Patel",
      content: {
        english: "After implementing Vedic Math in my classroom, I've seen remarkable improvement. Students who hated math are now my most enthusiastic participants!",
        hindi: "अपनी कक्षा में वैदिक गणित लागू करने के बाद, मैंने उल्लेखनीय सुधार देखा है। जो छात्र गणित से नफरत करते थे वे अब मेरे सबसे उत्साही प्रतिभागी हैं!",
        marathi: "माझ्या वर्गात वैदिक गणित राबवल्यानंतर, मला उल्लेखनीय सुधारणा दिसली आहे. ज्या विद्यार्थ्यांना गणिताचा तिरस्कार होता ते आता माझे सर्वात उत्साही सहभागी आहेत!",
        kannada: "ನನ್ನ ತರಗತಿಯಲ್ಲಿ ವೈದಿಕ ಗಣಿತವನ್ನು ಅಳವಡಿಸಿದ ನಂತರ, ನಾನು ಗಮನಾರ್ಹ ಸುಧಾರಣೆಯನ್ನು ಕಂಡಿದ್ದೇನೆ. ಗಣಿತವನ್ನು ದ್ವेषಿಸುತ್ತಿದ್ದ ವಿದ್ಯಾರ್ಥಿಗಳು ಈಗ ನನ್ನ ಅತ್ಯಂತ ಉತ್ಸಾಹಭರಿತ ಭಾಗವಹಿಸುವವರಾಗಿದ್ದಾರೆ!"
      },
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      id: 5,
      name: "Vikram Desai",
      content: {
        english: "Vedic Math helped me solve JEE problems 3x faster. The shortcut techniques are exactly what you need in time-pressured competitive exams.",
        hindi: "वैदिक गणित ने मुझे JEE की समस्याओं को 3 गुना तेजी से हल करने में मदद की। शॉर्टकट तकनीकें वही हैं जिनकी आपको समयबद्ध प्रतिस्पर्धी परीक्षाओं में जरूरत होती है।",
        marathi: "वैदिक गणिताने मला JEE च्या समस्या ३ पट वेगाने सोडवण्यास मदत केली. शॉर्टकट तंत्रे हीच आहेत ज्याची तुम्हाला वेळेच्या दबावातील स्पर्धा परीक्षांमध्ये गरज असते.",
        kannada: "ವೈದಿಕ ಗಣಿತವು JEE ಸಮಸ್ಯೆಗಳನ್ನು 3 ಪಟ್ಟು ವೇಗವಾಗಿ ಪರಿಹರಿಸಲು ನನಗೆ ಸಹಾಯ ಮಾಡಿತು. ಶಾರ್ಟ್‌ಕಟ್ ತಂತ್ರಗಳು ಸಮಯದ ಒತ್ತಡದ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ನಿಮಗೆ ಬೇಕಾದುದು."
      },
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      id: 6,
      name: "Ananya Singh",
      content: {
        english: "From barely passing to 95% in board exams! Vedic Math didn't just improve my scores—it changed my entire attitude toward learning.",
        hindi: "मुश्किल से पास होने से लेकर बोर्ड परीक्षा में 95% तक! वैदिक गणित ने न केवल मेरे अंक सुधारे—इसने सीखने के प्रति मेरे पूरे दृष्टिकोण को बदल दिया।",
        marathi: "मुश्किलीने उत्तीर्ण होण्यापासून बोर्ड परीक्षेत 95% पर्यंत! वैदिक गणिताने केवळ माझे गुण सुधारले नाहीत—त्याने शिकण्याकडे माझा संपूर्ण दृष्टिकोन बदलला.",
        kannada: "ಕೇವಲ ಪಾಸ್ ಆಗುವುದರಿಂದ ಬೋರ್ಡ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ 95% ವರೆಗೆ! ವೈದಿಕ ಗಣಿತವು ನನ್ನ ಅಂಕಗಳನ್ನು ಸುಧಾರಿಸಲಿಲ್ಲ—ಇದು ಕಲಿಕೆಯ ಕಡೆಗೆ ನನ್ನ ಸಂಪೂರ್ಣ ವರ್ತನೆಯನ್ನು ಬದಲಾಯಿಸಿತು."
      },
      image: "https://randomuser.me/api/portraits/women/72.jpg"
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
    <div className="vedic-math-page">
      {/* Hero Section for Vedic Math Class */}
      <section className="vedic-hero-section" style={{ background: 'linear-gradient(135deg, #ff9f43 0%, #fd7e14 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="col-lg-8 text-center mx-auto">
              <h1 className="display-4 fw-bold mb-3 text-white">Vedic Math – Ancient Speed, Modern Success!</h1>
              <p className="lead mb-4 text-white">Empower your child with Vedic Math techniques for lightning-fast calculations, improved accuracy, and a lifelong love for numbers!</p>
              {/* Optional CTA Button */}
              {/* <a href="#enroll" className="btn btn-light btn-lg px-4 py-2 fw-bold text-orange mt-2">Book Free Demo</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <Container>
          <Row className="g-4 justify-content-center">
            {stats.map((stat, index) => (
              <Col md={4} key={index} className="text-center">
                <div className="stat-card p-4 rounded-3 bg-white shadow-sm h-100">
                  <div className="stat-icon mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="display-5 fw-bold text-orange">{stat.value}</h3>
                  <p className="mb-0 text-muted">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-3">
                Why <span className="text-orange">Vedic Math</span> Works
              </h2>
              <p className="section-subtitle lead text-muted">
                Scientifically-proven techniques that make math enjoyable and effortless
              </p>
            </Col>
          </Row>
          <Row className="g-4">
              {benefits.map((benefit, index) => (
                <Col lg={4} key={index}>
                  <div className="benefit-card h-100 d-flex flex-column align-items-center justify-content-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="icon-container mb-4 d-flex align-items-center justify-content-center rounded-circle bg-orange-light" style={{ width: '80px', height: '80px' }}>
                      {benefit.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3 text-center">{benefit.title}</h3>
                    <p className="text-muted mb-0 text-center">{benefit.description}</p>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-3">
                Our <span className="text-orange">Structured</span> Curriculum
              </h2>
              <p className="section-subtitle lead text-muted">
                Progressive learning path designed for maximum results
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              <Accordion flush className="curriculum-accordion">
                {curriculum.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-0">
                    <Accordion.Header className="accordion-header p-4">
                      <div className="d-flex w-100 justify-content-between align-items-center">
                        <div>
                          <h3 className="h5 mb-1 fw-bold">{item.level}</h3>
                          <Badge bg="orange" className="me-2">
                            {item.duration}
                          </Badge>
                        </div>
                        <div className="d-none d-md-block">
                          {item.skills.map((skill, i) => (
                            <Badge key={i} bg="light" text="dark" className="me-2">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 bg-white">
                      <p>{item.content}</p>
                      <div className="mt-3">
                        <h4 className="h6 fw-bold mb-2">You'll Learn:</h4>
                        <ul className="list-unstyled">
                          {item.skills.map((skill, i) => (
                            <li key={i} className="mb-2">
                              <CheckCircleFill className="text-success me-2" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Success Stories Testimonial Section */}
      <section className="success-stories-section py-5 bg-light-orange">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <Badge bg="orange" className="mb-3 px-3 py-2 fs-6">
                SUCCESS STORIES
              </Badge>
              <h2 className="display-5 fw-bold mb-3 text-dark">
                Transforming <span className="text-orange">Lives Through Math</span>
              </h2>
              <p className="lead text-muted">
                Real results from students, parents, and teachers who have experienced the Vedic Math difference
              </p>
            </Col>
          </Row>
          
          {/* Language Selector */}
          <Row className="justify-content-center mb-4">
            <Col lg={6} className="text-center">
              <div className="language-selector">
                <span className="me-3 text-muted small">Select Language:</span>
                <button 
                  className={`btn btn-sm me-2 ${selectedLanguage === 'english' ? 'btn-orange' : 'btn-outline-secondary'}`}
                  onClick={() => setSelectedLanguage('english')}
                >
                  English
                </button>
                <button 
                  className={`btn btn-sm me-2 ${selectedLanguage === 'hindi' ? 'btn-orange' : 'btn-outline-secondary'}`}
                  onClick={() => setSelectedLanguage('hindi')}
                >
                  हिंदी
                </button>
                <button 
                  className={`btn btn-sm me-2 ${selectedLanguage === 'marathi' ? 'btn-orange' : 'btn-outline-secondary'}`}
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
            
            {/* Mobile View: Vertical continuous scroll */}
            <div className="d-lg-none mobile-testimonial-container">
              <div 
                className="mobile-testimonial-track"
                style={{
                  transform: `translateY(${translateX}px)`,
                  transition: isPaused ? 'transform 0.3s ease' : 'none'
                }}
              >
                {getInfiniteTestimonials().map((story, index) => (
                  <div key={`mobile-${story.id}-${index}`} className="mobile-testimonial-slide mb-4">
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

      {/* Final CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="cta-card p-5 rounded-4 bg-gradient-primary text-white">
                <Badge bg="orange" text="white" className="mb-3">
                  Limited Time Offer
                </Badge>
                <h2 className="mb-4">Ready to Transform Your Math Skills?</h2>
                <p className="lead mb-4">
                  Enroll before January 10th and get <span className="fw-bold">20% OFF</span> + Free Abacus Starter Kit
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <button className="btn btn-light btn-lg px-4 py-3 fw-bold">
                    Claim Discount <LightningFill className="ms-2" />
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3">
                    Download Syllabus
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default VedicMathPage;