import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 
import "./Gallery.css";
import Confetti from "react-confetti";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      
      if (querySnapshot.empty) {
        console.warn("No documents found in gallery collection");
      }

      const urls = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log("Doc data:", data); // 🔍 log what each document looks like
        return data.url;
      });

      setImages(urls.filter((url) => url)); // remove undefined
    } catch (err) {
      console.error("Error fetching images:", err); // real error here
      setError("Failed to fetch images: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchImages();
}, []);

  useEffect(() => {
    if (!isLoading && images.length > 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500); // Show confetti for 2.5s
    }
  }, [isLoading, images]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="gallery-container">
      {showConfetti && <Confetti numberOfPieces={120} recycle={false} />}
      <h2 className="gallery-title">Our Gallery</h2>
      {/* If you have buttons, add className="gallery-btn" to them for mobile CSS targeting */}
      {/* Example:
      <button className="gallery-btn">Awards Gallery</button>
      <button className="gallery-btn">Celebrations</button>
      <button className="gallery-btn">Competitions</button>
      */}
      {images.length === 0 ? (
        <p>No images available 📷</p>
      ) : (
        <div className="marquee-container">
          <div className="marquee">
            {[...images, ...images].map((url, index) => (
              <div className="marquee-item" key={index}>
                <img src={url} alt={`Gallery ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;





/*import React from "react";
import "./Gallery.css";

import gallery1 from "../assets/galleryfolder/gallery1.jpg";
import gallery2 from "../assets/galleryfolder/gallery2.jpg";
import gallery3 from "../assets/galleryfolder/gallery3.jpg";
import gallery4 from "../assets/galleryfolder/gallery4.jpg";
import gallery5 from "../assets/galleryfolder/gallery5.jpg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="marquee-container">
        <div className="marquee">
          {[...images, ...images].map((image, index) => (
            <div className="marquee-item" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; */
