import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { FaTrophy } from "react-icons/fa";

// Import the new CSS file
import './StateLevelCompetition2023.css';

const StateLevelCompetition2023 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gallery2023StateLevel"));
        const data = snapshot.docs
          .map((doc) => doc.data())
          .sort((a, b) => (a.order || 0) - (b.order || 0));
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error.message);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="state-competition-page">
      {/* Hero Section - Styled like NationalLevelCompetition2022 */}
      <section className="sophisticated-hero">
        <div className="hero-background-gradient">
          <div className="gradient-overlay"></div>
        </div>
        <Container>
          <div className="hero-content-sophisticated">
            {/* Elegant Badge */}
            <div className="elegant-badge pulse">
              <span className="badge-accent"></span>
              <FaTrophy className="badge-icon" />
              <span>State Event 2023</span>
            </div>
            {/* Main Title */}
            <h1 className="sophisticated-title gradient-text" style={{ marginBottom: "1.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>
              <span className="title-primary" style={{ fontWeight: 800, letterSpacing: "2px", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>State Level</span>
              <span className="title-accent" style={{ fontWeight: 800, fontSize: "3.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>Competition 2023</span>
            </h1>
            {/* Description */}
            <p className="sophisticated-description" style={{ fontSize: "1.35rem", fontWeight: 500, color: "#fff", textShadow: "0 2px 8px #fd7e14" }}>
              A celebration of young minds & achievements<br />
              <span style={{ color: "#fff", fontWeight: 700 }}>Relive the excitement and joy!</span>
            </p>
            {/* CTA Button */}
            <div className="mt-4">
              <a
                href="https://wa.me/919168756060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero"
              >
                Join Next Event
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <Container className="gallery-section py-5">
        <h2 className="gallery-title">
          Photo Gallery
        </h2>
        <Row>
          {images.map((img, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="gallery-card fade-in">
                <Card.Img
                  variant="top"
                  src={img.url}
                  alt={img.caption || `State Level Competition ${idx + 1}`}
                  className="gallery-card-img"
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link
            to="/contact"
            className="btn btn-outline-orange btn-lg"
          >
            Want to Participate? Contact Us!
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default StateLevelCompetition2023;