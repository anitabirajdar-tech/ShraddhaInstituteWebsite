import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const StateLevelCompetition2022 = () => {
  const [images] = useState([
    "https://via.placeholder.com/300x200?text=Photo+1",
    "https://via.placeholder.com/300x200?text=Photo+2",
  ]);

  return (
    <Container className="py-5">
      <h2 className="mb-4 fw-bold text-orange text-center">
        2022 State Level Competition Memories
      </h2>
      <Row>
        {images.map((url, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <img
              src={url}
              alt={`State Level Competition ${idx + 1}`}
              className="img-fluid rounded shadow"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StateLevelCompetition2022;
         