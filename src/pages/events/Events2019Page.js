import React from "react";
import "./EventsPage.css"; // common CSS

const Events2019Page = () => (
  <div className="events-page">
    {/* Hero Section */}
    <section
      className="events-hero"
      style={{
        background: "linear-gradient(135deg, #ff9f43 0%, #fd7e14 100%)",
        color: "#fff",
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
        Events 2019
      </h1>
      <p style={{ fontSize: "1.2rem", fontWeight: 400 }}>
        Highlights from Shraddha Institute's 2019 competitions and workshops
      </p>
    </section>

    {/* Content Section */}
    <section
      className="events-content"
      style={{ padding: "2rem 0", maxWidth: 1000, margin: "0 auto" }}
    >
      <h2 className="mb-3">State-Level Competitions</h2>
      <p>
        In 2019, Shraddha Institute organized its first large-scale state-level
        competitions for Abacus and Vedic Maths students. Hundreds of students
        participated, showcasing their mental math skills and competing for top
        honors.
      </p>

      <h3 className="mb-2">Workshops & Teacher Training</h3>
      <p>
        Alongside competitions, we conducted several workshops for teachers and
        parents, focusing on innovative teaching methods and student engagement
        strategies.
      </p>
      <ul>
        <li>Abacus Speed Math Workshop</li>
        <li>Vedic Math Crash Course</li>
        <li>Teacher Skill Enhancement Sessions</li>
      </ul>

      <p className="mt-4">
        <strong>
          Thank you to all participants, teachers, and parents for making 2019 a
          memorable year!
        </strong>
      </p>
    </section>

    {/* ✅ Event Gallery Section */}
    <section className="events-gallery">
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Event Memories
      </h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/images/events/2019/event1.jpg" alt="Competition 2019" />
          <p>Pune State-Level Competition</p>
        </div>
        <div className="gallery-item">
          <img src="/images/events/2019/event2.jpg" alt="Workshop 2019" />
          <p>Teacher Training Workshop</p>
        </div>
        <div className="gallery-item">
          <img src="/images/events/2019/event3.jpg" alt="Winners 2019" />
          <p>Winners Felicitation</p>
        </div>
      </div>
    </section>
  </div>
);

export default Events2019Page;
