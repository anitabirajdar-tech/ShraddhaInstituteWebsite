import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Hero = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  // 🔹 Fetch Firestore images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "headerimage"));
        console.log("Raw Firestore docs:", querySnapshot.docs.map(doc => doc.data()));
        if (!querySnapshot.empty) {
          const urls = querySnapshot.docs
            .map((doc) => doc.data().url)
            .filter((url) => url && typeof url === 'string' && url.trim() !== '');
          console.log("✅ Firestore images (filtered):", urls);
          setImages(urls);
        } else {
          console.log("⚠️ No header image found in Firestore.");
          setImages([]);
        }
      } catch (error) {
        console.error("🔥 Error fetching header images:", error);
      }
    };

    fetchImages();
  }, []);

  // 🔹 Preload images
  useEffect(() => {
    if (images.length === 0) return;
    const img = new window.Image();
    img.onload = () => setFirstImageLoaded(true);
    img.onerror = () => setFirstImageLoaded(true);
    img.src = images[0];
    // Optionally, preload the rest in the background
    images.slice(1).forEach((src) => {
      const preloadImg = new window.Image();
      preloadImg.src = src;
    });
  }, [images]);

  // 🔹 Auto slider
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000); // change every 4s
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <header className="hero-section" id="hero" role="banner">
      {/* Background Slider */}
      <div className="hero-slider">
        {images.map((img, idx) => (
          <div
            key={`${idx}-${img}`}
            className={`hero-bg-slide ${idx === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden="true"
          ></div>
        ))}
      </div>

      {/* Gradient Overlay: only show if first image loaded */}
      {firstImageLoaded && <div className="hero-gradient-overlay" aria-hidden="true"></div>}

      {/* Main Content */}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-lg-10 text-center"
            data-aos="fade-up"
            itemScope
            itemType="https://schema.org/EducationalOrganization"
          >
            <h1 className="hero-title mb-4" itemProp="name">
              <div className="hero-title-line">
                <span className="text-white">Elevate Your Teaching with</span>
              </div>
              <div className="hero-title-line">
                <span className="text-orange">Master Abacus and Vedic Math</span>
              </div>
              <div className="hero-title-line">
                <span className="text-orange">Certification</span>
              </div>
            </h1>

            <p className="hero-subtitle mb-5" itemProp="description">
              <strong>Transform into a sought-after mental math instructor</strong>
              <br />
              through our prestigious training program
            </p>

            <div className="hero-buttons d-flex justify-content-center gap-3 mb-5">
              <Link
                to="/contact"
                className="btn btn-orange btn-lg flex-fill"
                aria-label="Enroll in teacher training program"
              >
                Enroll Now <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/contact"
                className="btn btn-orange btn-lg flex-fill"
                aria-label="Sign up for free demo class"
              >
                Free Demo
              </Link>
            </div>

            {/* Trust badges */}
            <div
              className="trust-badges"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <meta itemProp="ratingValue" content="4.9" />
              <meta itemProp="reviewCount" content="500" />
              <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <div className="trust-icon">
                    {/* checkmark icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-light">600+ Certified Instructors</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="trust-icon">
                    {/* star icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <span className="text-light">4.9/5 Rating</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="trust-icon">
                    {/* location pin */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"></path>
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <span className="text-light">60+ Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
