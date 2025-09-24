import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { FaTrophy, FaUsers, FaStar, FaHeart, FaPlayCircle, FaShare, FaCamera, FaAward, FaMedal, FaSmile, FaRocket } from "react-icons/fa";
import "./NationalLevelCompetition2022.css";

const NationalLevelCompetition2022 = () => {
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const snapshot = await getDocs(collection(db, "gallery2022NationalLevel"));
      const data = snapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => (a.order || 0) - (b.order || 0));
      setImages(data);
    };
    fetchImages();
    
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="competition-page-sophisticated">
      {/* Sophisticated Hero Section */}
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
              <span>National Event 2022</span>
            </div>

            {/* Main Title */}
            <h1 className="sophisticated-title gradient-text" style={{ marginBottom: "1.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>
              <span className="title-primary" style={{ fontWeight: 800, letterSpacing: "2px", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>National Level</span>
              <span className="title-accent" style={{ fontWeight: 800, fontSize: "3.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>Competition 2022</span>
            </h1>

            {/* Description */}
            <p className="sophisticated-description" style={{ fontSize: "1.35rem", fontWeight: 500, color: "#fff", textShadow: "0 2px 8px #fd7e14" }}>
              A prestigious gathering of young talents <br />
              <span style={{ color: "#fff", fontWeight: 700 }}>Celebrating Excellence & Creating Memories</span>
            </p>

          
            {/* CTA Buttons */}
            
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="sophisticated-gallery">
        <Container>
          <div className="gallery-header-sophisticated">
            <div className="section-tag">
              <FaStar className="tag-icon" />
              Memory Gallery
            </div>
            <h2 className="gallery-title-sophisticated">
              Moments of <span className="text-gradient">Excellence</span>
            </h2>
            <p className="gallery-subtitle-sophisticated">
              Relive the inspiring journey of talent, achievement, and celebration
            </p>
          </div>

          {/* Gallery Grid - Improved */}
          <Row className="gallery-grid-sophisticated">
            {images.map((img, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={4} className="gallery-col">
                <Card className="gallery-card-sophisticated h-100">
                  <div className="card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={img.url}
                      alt={img.caption || `Competition Memory ${idx + 1}`}
                      className="gallery-image-sophisticated"
                      style={{
                        boxShadow: "0 8px 32px rgba(139,92,246,0.10)",
                        border: "4px solid #f1f5f9",
                        transition: "transform 0.3s, box-shadow 0.3s"
                      }}
                    />
                    <div className="card-overlay-sophisticated">
                      <div className="overlay-content-sophisticated">
                        <FaHeart className="overlay-icon" />
                        <span className="overlay-text">View Memory</span>
                      </div>
                    </div>
                  
                  </div>
                  {/* Hide image caption */}
                  {/* {img.caption && (
                    <Card.Body className="card-body-sophisticated">
                      <p className="caption-text">{img.caption}</p>
                    </Card.Body>
                  )} */}
                </Card>
              </Col>
            ))}
          </Row>

          {/* Gallery CTA - Add a vibrant call-to-action */}
         
        </Container>
      </section>
    </div>
  );
};

export default NationalLevelCompetition2022;