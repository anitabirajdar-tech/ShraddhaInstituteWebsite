import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

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
    <div style={{ background: "#fff8f0" }}>
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #f97316 0%, #ea580c 100%), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80') center/cover",
          color: "white",
          padding: "70px 0 50px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 className="fw-bold display-4 mb-2 text-center" style={{ textShadow: "0 2px 8px #ea580c" }}>
              State Level Competition 2023
            </h1>
            <h3 className="mb-3 text-center" style={{ fontWeight: 500, letterSpacing: 1 }}>
              <span style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "0.25em 1em" }}>
                Inspiring Young Minds & Achievements
              </span>
            </h3>
            <div className="d-flex justify-content-center mb-3">
              <span style={{ width: 80, height: 4, background: "#FFD166", borderRadius: 2 }}></span>
            </div>
            <p className="lead text-center mb-4" style={{ maxWidth: 700, margin: "0 auto", textShadow: "0 1px 6px #ea580c" }}>
              Relive the excitement, learning, and joyful moments from our State Level Competition. Explore the gallery and celebrate the achievements of Shraddha Institute students!
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a
                href="https://wa.me/919168756060"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-orange btn-lg"
                style={{
                  borderRadius: 40,
                  fontWeight: 600,
                  boxShadow: "0 4px 16px rgba(234,88,12,0.18)",
                }}
              >
                Join Next Event
              </a>
            </div>
          </div>
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(234,88,12,0.25)",
              zIndex: 1,
            }}
          />
        </Container>
      </div>
      {/* Gallery Section */}
      <Container className="py-5">
        <h2 className="mb-2 fw-bold text-orange text-center" style={{ fontSize: "2.2rem" }}>
          State Level Competition 2023 Gallery
        </h2>
        <Row>
          {images.map((img, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card
                className="shadow-sm border-0 h-100 gallery-card fade-in"
                style={{
                  transition: "transform 0.3s",
                  borderRadius: "18px",
                  background: "#fff",
                }}
              >
                <Card.Img
                  variant="top"
                  src={img.url}
                  alt={img.caption || `State Level Competition ${idx + 1}`}
                  style={{
                    borderRadius: "18px 18px 0 0",
                    height: "200px",
                    objectFit: "cover",
                  }}
                  className="gallery-img"
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link
            to="/contact"
            className="btn btn-outline-orange btn-lg"
            style={{ borderRadius: 40, fontWeight: 600 }}
          >
            Want to Participate? Contact Us!
          </Link>
        </div>
      </Container>
      {/* Custom CSS for hover and animation */}
      <style>
        {`
          .gallery-card {
            animation: fadeInUp 0.7s ease;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .gallery-card:hover {
            transform: translateY(-8px) scale(1.04);
            box-shadow: 0 16px 40px rgba(234,88,12,0.18);
            border: 2px solid #FFD166;
          }
          .gallery-img {
            transition: filter 0.3s;
          }
          .gallery-card:hover .gallery-img {
            filter: brightness(1.08) saturate(1.2);
          }
        `}
      </style>
    </div>
  );
};

export default StateLevelCompetition2023;
