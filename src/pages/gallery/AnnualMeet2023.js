import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const AnnualMeet2023 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const snapshot = await getDocs(collection(db, "gallery2023AnnualMeet"));
      const data = snapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => (a.order || 0) - (b.order || 0));
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div style={{ background: "#fff8f0" }}>
      {/* ...hero section similar to 2022... */}
      <Container className="py-5">
        <h2 className="mb-2 fw-bold text-orange text-center" style={{ fontSize: "2.2rem" }}>
          Annual Meet 2023 Gallery
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
                  alt={img.caption || `Annual Meet ${idx + 1}`}
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
      {/* ...custom CSS for hover and animation... */}
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

export default AnnualMeet2023;
