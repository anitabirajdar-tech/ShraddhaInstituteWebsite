import React from "react";
import "./FranchiseTeacherParentTestimonials.css";

const testimonials = [
  {
    name: "Neha Verma",
    feedback:
      "As a homemaker, I never thought I could run my own center. Shraddha Institute gave me the skills and confidence to start — and now I earn from home!",
  },
  {
    name: "Anita Rao",
    feedback:
      "I was a school teacher looking for extra income. The training was excellent and I started my classes in just 2 weeks.",
  },
  {
    name: "Kavita Sharma",
    feedback:
      "I love working with children, and now I can do it while running my own business. The support team is always there for me.",
  },
  {
    name: "Pooja Nair",
    feedback:
      "From zero business knowledge to becoming a proud center owner — the journey has been smooth and rewarding.",
  },
];

export default function FranchiseTeacherParentTestimonials() {
  return (
    <div className="teacher-testimonial-section">
      <h2 className="testimonial-heading">
        Stories from Our Successful Partners
      </h2>

      <div className="marquee-container">
        <div className="marquee">
          {/* 3 Video testimonial cards */}
          <div className="testimonial-card video-testimonial-card">
            <video
              width="260"
              height="180"
              controls
              style={{
                borderRadius: "8px",
                marginBottom: "10px",
                background: "#000",
                display: "block",
              }}
            >
              <source src="/IMG_0082.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="feedback">
              "Shraddha Institute helped me transform my career! Watch my story
              #1."
            </p>
            <p className="name">— Video Testimonial 1</p>
          </div>
          <div className="testimonial-card video-testimonial-card">
            <video
              width="260"
              height="180"
              controls
              style={{
                borderRadius: "8px",
                marginBottom: "10px",
                background: "#000",
                display: "block",
              }}
            >
              <source src="/IMG_0082.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="feedback">
              "The support and training at Shraddha Institute is amazing!"
            </p>
            <p className="name">— Video Testimonial 2</p>
          </div>
          <div className="testimonial-card video-testimonial-card">
            <video
              width="260"
              height="180"
              controls
              style={{
                borderRadius: "8px",
                marginBottom: "10px",
                background: "#000",
                display: "block",
              }}
            >
              <source src="/IMG_0082.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="feedback">
              "I recommend Shraddha Institute to everyone!"
            </p>
            <p className="name">— Video Testimonial 3</p>
          </div>
          {/* 2 Text testimonial cards */}
          <div className="testimonial-card">
            <p className="feedback">
              "As a homemaker, I never thought I could run my own center. Shraddha
              Institute gave me the skills and confidence to start — and now I earn
              from home!"
            </p>
            <p className="name">— Neha Verma</p>
          </div>
          <div className="testimonial-card">
            <p className="feedback">
              "I was a school teacher looking for extra income. The training was
              excellent and I started my classes in just 2 weeks."
            </p>
            <p className="name">— Anita Rao</p>
          </div>
        </div>
      </div>
    </div>
  );
}
