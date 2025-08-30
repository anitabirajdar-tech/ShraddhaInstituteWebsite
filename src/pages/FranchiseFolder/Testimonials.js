import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Button } from 'react-bootstrap';
import { Play, Pause, Star, Quote, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './Testimonials.css';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef(null);

  // Text Testimonials Data
  const textTestimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Student",
      location: "Mumbai",
      rating: 5,
      content: "I went from struggling with basic multiplication to winning district math competitions in just 6 months! Vedic Math techniques made numbers fun instead of frightening.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      program: "Vedic Math"
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Parent",
      location: "Delhi",
      rating: 5,
      content: "My daughter's math anxiety disappeared completely. She now enjoys solving problems mentally and her confidence has soared in all subjects, not just math!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      program: "Abacus Training"
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      role: "Student",
      location: "Bangalore",
      rating: 5,
      content: "Cut my calculation time by 70% in SAT math section. Scored 780/800 thanks to Vedic techniques! The mental math skills are invaluable for timed tests.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      program: "Vedic Math"
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Teacher",
      location: "Pune",
      rating: 5,
      content: "After completing the teacher training program, I've become the most sought-after math tutor in my area. The certification opened so many doors!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      program: "Teacher Training"
    },
    {
      id: 5,
      name: "Amit Singh",
      role: "Franchise Owner",
      location: "Jaipur",
      rating: 5,
      content: "Started my Shraddha Institute franchise 2 years ago. Now I have 150+ students and expanding to a second center. The business model really works!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      program: "Franchise"
    },
    {
      id: 6,
      name: "Kavya Reddy",
      role: "Student",
      location: "Hyderabad",
      rating: 5,
      content: "DMIT helped me understand my learning style better. Now I study more effectively and my parents understand my strengths and interests.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      program: "DMIT"
    }
  ];

  // Video Testimonials Data
  const videoTestimonials = [
    {
      id: 1,
      name: "Ravi Kumar",
      role: "Parent",
      location: "Chennai",
      program: "Abacus Training",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "2:30",
      description: "See how Abacus training transformed my son's mathematical abilities and confidence"
    },
    {
      id: 2,
      name: "Meera Joshi",
      role: "Franchise Owner",
      location: "Kolkata",
      program: "Franchise Success",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "3:15",
      description: "From teacher to successful business owner - my franchise journey"
    },
    {
      id: 3,
      name: "Aditya Gupta",
      role: "Student",
      location: "Ahmedabad",
      program: "Vedic Math",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "1:45",
      description: "How Vedic Math helped me crack competitive exams with ease"
    },
    {
      id: 4,
      name: "Sunita Sharma",
      role: "Teacher",
      location: "Lucknow",
      program: "Teacher Training",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "2:50",
      description: "Professional growth after Shraddha Institute certification"
    }
  ];

  // Auto-rotate text testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === textTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [textTestimonials.length]);

  const handleVideoPlay = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const handleVideoClose = () => {
    setIsPlaying(false);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videoTestimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        fill={index < rating ? "#ffc107" : "none"} 
        color="#ffc107" 
        size={16} 
      />
    ));
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title">
                Success Stories That <span className="text-primary">Inspire</span>
              </h1>
              <p className="hero-subtitle">
                Hear from our students, parents, teachers, and franchise partners about their 
                transformative journey with Shraddha Institute
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Content */}
      <section className="testimonials-content py-5">
        <Container>
          {/* Tab Navigation */}
          <Row className="justify-content-center mb-5">
            <Col lg={6}>
              <Nav variant="pills" className="testimonial-tabs justify-content-center">
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'text'} 
                    onClick={() => setActiveTab('text')}
                    className="tab-link"
                  >
                    <Quote size={20} className="me-2" />
                    Written Reviews
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'video'} 
                    onClick={() => setActiveTab('video')}
                    className="tab-link"
                  >
                    <Play size={20} className="me-2" />
                    Video Stories
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          {/* Text Testimonials */}
          {activeTab === 'text' && (
            <div className="text-testimonials">
              {/* Featured Testimonial */}
              <Row className="justify-content-center mb-5">
                <Col lg={8}>
                  <Card className="featured-testimonial">
                    <Card.Body className="text-center p-5">
                      <img 
                        src={textTestimonials[currentTextIndex].image} 
                        alt={textTestimonials[currentTextIndex].name}
                        className="testimonial-avatar mb-4"
                      />
                      <Quote size={40} className="text-primary mb-3" />
                      <blockquote className="testimonial-quote">
                        "{textTestimonials[currentTextIndex].content}"
                      </blockquote>
                      <div className="testimonial-rating mb-3">
                        {renderStars(textTestimonials[currentTextIndex].rating)}
                      </div>
                      <div className="testimonial-author">
                        <h5 className="mb-1">{textTestimonials[currentTextIndex].name}</h5>
                        <p className="text-muted mb-1">{textTestimonials[currentTextIndex].role}</p>
                        <p className="text-muted small">
                          {textTestimonials[currentTextIndex].location} • {textTestimonials[currentTextIndex].program}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* All Testimonials Grid */}
              <Row>
                {textTestimonials.map((testimonial, index) => (
                  <Col lg={4} md={6} key={testimonial.id} className="mb-4">
                    <Card className="testimonial-card h-100">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="testimonial-small-avatar me-3"
                          />
                          <div>
                            <h6 className="mb-1">{testimonial.name}</h6>
                            <small className="text-muted">{testimonial.role}</small>
                          </div>
                        </div>
                        <div className="testimonial-rating mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="testimonial-text">"{testimonial.content}"</p>
                        <div className="testimonial-meta">
                          <small className="text-primary">{testimonial.program}</small>
                          <small className="text-muted ms-2">• {testimonial.location}</small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* Video Testimonials */}
          {activeTab === 'video' && (
            <div className="video-testimonials">
              <Row>
                {videoTestimonials.map((video, index) => (
                  <Col lg={6} md={6} key={video.id} className="mb-4">
                    <Card className="video-testimonial-card">
                      <div className="video-thumbnail-container">
                        <img 
                          src={video.thumbnail} 
                          alt={video.name}
                          className="video-thumbnail"
                        />
                        <div className="video-overlay">
                          <Button 
                            variant="light" 
                            className="play-button"
                            onClick={() => handleVideoPlay(index)}
                          >
                            <Play size={30} />
                          </Button>
                        </div>
                        <div className="video-duration">{video.duration}</div>
                      </div>
                      <Card.Body>
                        <h5 className="video-title">{video.name}</h5>
                        <p className="text-muted mb-2">{video.role} • {video.location}</p>
                        <p className="video-description">{video.description}</p>
                        <span className="badge bg-primary">{video.program}</span>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </section>

      {/* Video Modal */}
      {isPlaying && (
        <div className="video-modal-overlay" onClick={handleVideoClose}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h5>{videoTestimonials[currentVideoIndex].name}</h5>
              <Button 
                variant="outline-light" 
                size="sm" 
                onClick={handleVideoClose}
                className="close-button"
              >
                ×
              </Button>
            </div>
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${videoTestimonials[currentVideoIndex].videoId}?autoplay=1`}
                title={videoTestimonials[currentVideoIndex].name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-controls">
              <Button variant="outline-light" onClick={prevVideo}>
                <ChevronLeft size={20} /> Previous
              </Button>
              <Button variant="outline-light" onClick={nextVideo}>
                Next <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="testimonial-cta py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h3 className="mb-3">Ready to Create Your Own Success Story?</h3>
              <p className="mb-4">
                Join thousands of students, parents, and educators who have transformed 
                their relationship with mathematics through our programs.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button variant="primary" size="lg">Start Your Journey</Button>
                <Button variant="outline-primary" size="lg">Book Free Demo</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;