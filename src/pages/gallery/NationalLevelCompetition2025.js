import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const NationalLevelCompetition2025 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gallery2025NationalLevel"));
        const data = snapshot.docs.map(doc => doc.data());
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error.message);
      }
    };
    fetchImages();
  }, []);

  return (
    <div style={{ background: "#fff8f0" }}>
      <Container className="py-5">
        <h2 className="mb-2 fw-bold text-orange text-center">National Level Competition 2025 Gallery</h2>
        <Row>
          {images.map((img, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-sm border-0 h-100 gallery-card fade-in" style={{ borderRadius: "18px", background: "#fff" }}>
                <Card.Img
                  variant="top"
                  src={img.url}
                  alt={`National Level Competition ${idx + 1}`}
                  style={{ borderRadius: "18px 18px 0 0", height: "200px", objectFit: "cover" }}
                  className="gallery-img"
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-outline-orange btn-lg" style={{ borderRadius: 40, fontWeight: 600 }}>
            Want to Participate? Contact Us!
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NationalLevelCompetition2025;