

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import "./GalleryPage.css";

// ...existing code...
import bannerImage from "../assets/gallery10.JPG";

const categories = [
  { id: "Awards", label: " Awards Gallery", icon: "🏆" },
  { id: "celebrations", label: " Celebrations", icon: "🎉" },
  { id: "competitions", label: " Competitions", icon: "🥇" },
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("Awards");
  const [images, setImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
   const [heroImage, setHeroImage] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      let data = {};
      for (let cat of categories) {
        try {
          const docRef = doc(db, "gallery1", cat.id);

          // Try fetching subcollection first
          const imagesRef = collection(docRef, "images");
          const snapshot = await getDocs(imagesRef);

          if (!snapshot.empty) {
            data[cat.id] = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
          } else {
            // Check if images array exists in document
            const docSnap = await getDoc(docRef);
            if (docSnap.exists() && docSnap.data().images) {
              data[cat.id] = docSnap.data().images.map((img, index) => ({
                id: index,
                ...img,
              }));
            } else {
              data[cat.id] = [];
            }
          }
        } catch (error) {
          console.error("Error fetching images for", cat.id, error);
          data[cat.id] = [];
        }
      }
      setImages(data);
      setLoading(false);
    };

    fetchData();
  }, []);

// ✅ Fetch Hero Image
  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const heroRef = doc(db, "gallery1", "hero"); // 👈 document name must be "hero"
        const heroSnap = await getDoc(heroRef);
        if (heroSnap.exists()) {
          setHeroImage(heroSnap.data().url);
        }
      } catch (error) {
        console.error("Error fetching hero image:", error);
      }
    };

    fetchHeroImage();
  }, []);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  return (
    <div className="gallery-page">
      {/* HERO SECTION WITH TABS OVERLAY */}
      <div
        className="gallery-hero"
        style={{
          backgroundImage: `url(${heroImage || ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
  <h1 className="hero-text legacy-orange">Our Legacy of Excellence</h1>
  <div className="hero-tabs-overlay" style={{ display: 'flex', justifyContent: 'center', marginTop: '0' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn orange-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
              style={{ background: '#fd7e14', color: '#fff', borderRadius: '24px', fontWeight: 700, fontSize: '1.1rem', padding: '0.7rem 1.5rem', border: 'none', margin: '0 0.5rem' }}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading precious memories...</p>
        </div>
      ) : (
        <div className="gallery-container">
          <div className="container">
            <div className="gallery-grid">
              {images[activeTab]?.length > 0 ? (
                images[activeTab].map((img, index) => (
                  <div
                    key={img.id}
                    className="gallery-item"
                    onClick={() => setSelectedImage(img.url)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="image-container">
                      <img
                        src={img.url}
                        alt={img.title || "Gallery Image"}
                        onLoad={handleImageLoad}
                      />
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <span className="view-btn">View</span>
                          {img.title && <p className="image-title">{img.title}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-images-container">
                  <div className="no-images-icon">📷</div>
                  <p className="no-images-text">No images available in this gallery yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            &times;
          </button>
          <div className="lightbox-content">
            <img src={selectedImage} alt="enlarged" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;