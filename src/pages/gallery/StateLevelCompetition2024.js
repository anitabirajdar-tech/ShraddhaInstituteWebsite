import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { FaTrophy, FaStar, FaHeart } from "react-icons/fa";
import "./NationalLevelCompetition2022.css"; // Use the same CSS as 2022

const StateLevelCompetition2024 = () => {
  const [images, setImages] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const sliderInterval = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gallery2024StateLevel"));
        const data = snapshot.docs.map(doc => doc.data());
        setImages(data);

        // Select images 9, 11, 13 (indexes 8, 10, 12)
        const selected = [8, 10, 12]
          .map(idx => data[idx]?.url)
          .filter(Boolean);
        setHeroImages(selected);
      } catch (error) {
        console.error("Error fetching images:", error.message);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (heroImages.length > 1) {
      sliderInterval.current = setInterval(() => {
        setCurrentHero(prev => (prev + 1) % heroImages.length);
      }, 3500);
      return () => clearInterval(sliderInterval.current);
    }
  }, [heroImages]);


  // Desktop hero height override (optional, adjust as needed)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (min-width: 992px) {
        .sophisticated-hero,
        .hero-background-gradient {
          min-height: 540px !important;
          height: 540px !important;
          max-height: 540px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="competition-page-sophisticated">
      {/* Sophisticated Hero Section */}
      <section className="sophisticated-hero" style={{ position: "relative" }}>
        <div
          className="hero-background-gradient"
          style={{
            background: "linear-gradient(180deg,rgba(253,126,20,0.18) 0%,rgba(253,126,20,0.32) 100%)",
            transition: "background-image 0.8s cubic-bezier(.4,0,.2,1)"
          }}
        >
          {/* Removed overlay and image background */}
        </div>
        <Container>
          <div className="hero-content-sophisticated">
            {/* Elegant Badge */}
            <div className="elegant-badge pulse">
              <span className="badge-accent"></span>
              <FaTrophy className="badge-icon" />
              <span>State Event 2024</span>
            </div>
            {/* Main Title */}
            <h1 className="sophisticated-title gradient-text" style={{ marginBottom: "1.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>
              <span className="title-primary" style={{ fontWeight: 800, letterSpacing: "2px", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>State Level</span>
              <span className="title-accent" style={{ fontWeight: 800, fontSize: "3.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>Competition 2024</span>
            </h1>
            {/* Description */}
            <p className="sophisticated-description" style={{ fontSize: "1.35rem", fontWeight: 500, color: "#fff", textShadow: "0 2px 8px #fd7e14" }}>
              A celebration of young minds & achievements<br />
              <span style={{ color: "#fff", fontWeight: 700 }}>Relive the excitement and joy!</span>
            </p>
          </div>
        </Container>
        {/* Remove slider indicators */}
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
        </Container>
      </section>
    </div>
  );
};

export default StateLevelCompetition2024;