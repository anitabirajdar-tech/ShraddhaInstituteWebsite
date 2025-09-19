import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const NationalLevelCompetition2022 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const snapshot = await getDocs(collection(db, "gallery2022NationalLevel"));
      const data = snapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => (a.order || 0) - (b.order || 0));
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div style={{ background: "#fff8f0" }}>
      {/* Animated Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #f97316 0%, #ea580c 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover",
          color: "white",
          padding: "70px 0 50px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated circles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <div className="animated-bg-circles"></div>
        </div>
        <Container>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1
              className="fw-bold display-4 mb-2 text-center"
              style={{ textShadow: "0 2px 8px #ea580c" }}
            >
              National Level Competition 2022
            </h1>
            <h3
              className="mb-3 text-center"
              style={{ fontWeight: 500, letterSpacing: 1 }}
            >
              <span
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  padding: "0.25em 1em",
                }}
              >
                Celebrating Achievements & Joyful Moments
              </span>
            </h3>
            <div className="d-flex justify-content-center mb-3">
              <span
                style={{
                  width: 80,
                  height: 4,
                  background: "#FFD166",
                  borderRadius: 2,
                }}
              ></span>
            </div>
            <p
              className="lead text-center mb-4"
              style={{
                maxWidth: 700,
                margin: "0 auto",
                textShadow: "0 1px 6px #ea580c",
              }}
            >
              Relive the excitement, achievements, and unforgettable memories from
              our National Level Competition. Explore the gallery and celebrate
              the spirit of Shraddha Institute!
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
        <h2
          className="mb-2 fw-bold text-orange text-center"
          style={{ fontSize: "2.2rem" }}
        >
          Memories Gallery
        </h2>
        <div className="d-flex justify-content-center mb-4">
          <span
            style={{
              width: 60,
              height: 3,
              background: "#ea580c",
              borderRadius: 2,
            }}
          ></span>
        </div>
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
                  alt={img.caption || `National Level Competition ${idx + 1}`}
                  style={{
                    borderRadius: "18px 18px 0 0",
                    height: "200px",
                    objectFit: "cover",
                  }}
                  className="gallery-img"
                />
                {/* Hide caption: Remove or comment out Card.Text */}
                {/* <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Text
                    className="text-muted small"
                    style={{ fontWeight: 500 }}
                  >
                    {img.caption || `Photo ${idx + 1}`}
                  </Card.Text>
                </Card.Body> */}
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
          <div className="mt-3">
            <a
              href="mailto:shraddhainstitute@gmail.com?subject=My%20Competition%20Memory"
              className="btn btn-orange btn-sm"
              style={{ borderRadius: 30, fontWeight: 500 }}
            >
              Share Your Memory
            </a>
          </div>
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
          .animated-bg-circles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }
          .animated-bg-circles:before, .animated-bg-circles:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            opacity: 0.18;
            animation: circleMove 8s infinite alternate;
          }
          .animated-bg-circles:before {
            width: 180px; height: 180px; left: 10%; top: 20%; background: #FFD166;
          }
          .animated-bg-circles:after {
            width: 120px; height: 120px; right: 12%; bottom: 18%; background: #fff;
            animation-delay: 2s;
          }
          @keyframes circleMove {
            0% { transform: scale(1) translateY(0);}
            100% { transform: scale(1.15) translateY(20px);}
          }
        `}
      </style>
    </div>
  );
};

export default NationalLevelCompetition2022;
