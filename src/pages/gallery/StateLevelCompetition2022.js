import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../../firebase"; // Uncomment if using Firestore

const StateLevelCompetition2022 = () => {
  // Example: Replace with Firebase fetch logic
  const [images, setImages] = useState([
    // Add your Firebase image URLs here
    "https://via.placeholder.com/300x200?text=Photo+1",
    "https://via.placeholder.com/300x200?text=Photo+2",
    // ... up to 25 images
  ]);

  // Example Firebase fetch (uncomment and adjust if needed)
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const snapshot = await getDocs(collection(db, "gallery2022StateLevel"));
  //     setImages(snapshot.docs.map(doc => doc.data().url));
  //   };
  //   fetchImages();
  // }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4 fw-bold text-orange text-center">
        2022 State Level Competition Memories
      </h2>
      <Row>
        {images.map((url, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <img src={url} alt={`State Level Competition ${idx + 1}`} className="img-fluid rounded shadow" />
          </Col>
        ))}
      </Row>
      {/* Add more event details or memories here */}
    </Container>
  );
};

export default StateLevelCompetition2022;
