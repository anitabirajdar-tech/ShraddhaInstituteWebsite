import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { FaTrophy, FaStar, FaHeart } from "react-icons/fa";
import "./NationalLevelCompetition2022.css"; // Use the same CSS as 2022

const AnnualMeet2024 = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gallery2024AnnualMeet"));
        const data = snapshot.docs.map(doc => doc.data());
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error.message);
      }
    };
    fetchImages();
  }, []);

  const handleImageClick = (img) => {
    setModalImg(img);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalImg(null);
  };

  return (
    <div className="competition-page-sophisticated">
      {/* Sophisticated Hero Section */}
      <section className="sophisticated-hero" style={{ position: "relative", padding: "32px 0 20px 0", minHeight: "unset" }}>
        <div className="hero-background-gradient">
          <div className="gradient-overlay"></div>
        </div>
        <Container>
          <div className="hero-content-sophisticated" style={{ padding: "0", margin: "0" }}>
            {/* Elegant Badge */}
            <div className="elegant-badge pulse">
              <span className="badge-accent"></span>
              <FaTrophy className="badge-icon" />
              <span>Annual Meet 2024</span>
            </div>
            {/* Main Title */}
            <h1 className="sophisticated-title gradient-text" style={{ marginBottom: "1.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>
              <span className="title-primary" style={{ fontWeight: 800, letterSpacing: "2px", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>Annual</span>
              <span className="title-accent" style={{ fontWeight: 800, fontSize: "3.2rem", color: "#fff", WebkitTextFillColor: "#fff", background: "none" }}>Meet 2024</span>
            </h1>
            {/* Description */}
            <p className="sophisticated-description" style={{ fontSize: "1.35rem", fontWeight: 500, color: "#fff", textShadow: "0 2px 8px #fd7e14" }}>
              A celebration of togetherness & achievement<br />
              <span style={{ color: "#fff", fontWeight: 700 }}>Relive the excitement and joy!</span>
            </p>
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
          <Row className="gallery-grid-sophisticated">
            {images.map((img, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={4} className="gallery-col">
                <Card className="gallery-card-sophisticated h-100">
                  <div
                    className="card-image-wrapper"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(img)}
                  >
                    <Card.Img
                      variant="top"
                      src={img.url}
                      alt={img.caption || `Annual Meet Memory ${idx + 1}`}
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
      {/* Modal for big image */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body style={{ padding: 0, background: "#222" }}>
          {modalImg && (
            <img
              src={modalImg.url}
              alt={modalImg.caption || "Gallery"}
              style={{ width: "100%", height: "auto", display: "block", maxHeight: "80vh", objectFit: "contain", background: "#222" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center", background: "#222" }}>
          <button className="btn btn-outline-light" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AnnualMeet2024;