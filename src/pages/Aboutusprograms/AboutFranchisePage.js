import React from 'react';
import './AboutFranchisePage.css';
import { useState, useEffect } from 'react';

import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from "../../firebase"; // your firebase.js config


const AboutFranchisePage = () => {
  const [founderImgUrl, setFounderImgUrl] = useState(null);
useEffect(() => {
    const fetchImage = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const docRef = doc(db, "founder", "IHLJeSe1a6CEHfHKGZ4u"); // 👈 docId
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setFounderImgUrl(snapshot.data().url); // 👈 this is your field
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching founder image:", error);
      }
    };

    fetchImage();
  }, []);

  const timelineItems = [
    {
      year: 2013,
      title: 'Founded with a Vision',
      text: 'Shraddha Institute began with a single center in Solapur.',
     
    },
    {
      year: 2015,
      title: 'Franchise Model Introduced',
      text: 'We started training teachers and launched our franchise program.',
      
    },
    {
      year: 2017,
      title: 'Expanding Across Maharashtra',
      text: 'Over 100 teachers joined our network, spreading Abacus & Vedic Maths.',
     
    },
    {
      year: 2019,
      title: 'State-Level Competitions',
      text: 'First large-scale competitions for students were conducted with huge success.',
      video: 'https://www.youtube.com/embed/IY3FpB5OfZ8?mute=1'
    },
    {
      year: 2020,
      title: 'Shift to Online Learning',
      text: 'Adapted to online teaching during the pandemic and trained teachers virtually.',

    },
    {
      year: 2022,
      title: 'Growing Teacher Community',
      text: 'Reached 450+ teachers and expanded our presence into schools across India.',
 
    },
    {
      year: 2023,
      title: 'National-Level Competitions Announced',
      text: 'Almost 5000 students participated in Abacus & Vedic Maths competitions nationwide.',
     
    },
    {
      year: 2024,
      title: 'New Programs & Recognition',
      text: 'Launched Phonics Teacher Training program and expanded social media campaigns to empower teachers.',
     
    }
  ];

  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <div className="hero-content">
          <h1>Our Journey</h1>
          <p>How it all started in 2013 and scaled across India</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timelineItems.map((item, idx) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-row">
                  {idx % 2 === 0 ? (
                    <>
                      <div className="timeline-content">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                      {item.video ? (
                        <div className="timeline-video">
                          <iframe
                            src={item.video}
                            title={`Timeline Video ${item.year}`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            width="250"
                            height="140"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="timeline-video"></div>
                      )}
                    </>
                  ) : (
                    <>
                      {item.video ? (
                        <div className="timeline-video">
                          <iframe
                            src={item.video}
                            title={`Timeline Video ${item.year}`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            width="250"
                            height="140"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="timeline-video"></div>
                      )}
                      <div className="timeline-content">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="founder-profile">
        <div className="container">
          <div className="profile-card">
            <div className="profile-image">
              <div style={{position: 'relative', width: '100%', height: '100%'}}>
                <img src={founderImgUrl || ''} alt="Mrs. Swati Shah, Founder" style={{width: '100%', height: 'auto', display: 'block'}} />
                <div className="quote" style={{position: 'absolute', left: '50%', bottom: '10px', transform: 'translateX(-50%)'}}>
                  "Math should be joyful, not fearful"
                </div>
              </div>
            </div>
            <div className="profile-content">
              <h3>Message From Our Founder</h3>
              <p>
                As a educator and the founder of shraddha institute, deeply understand the challenges schools face in fostering student sucess and shaping a future-ready generation.
              </p>
              <p>
                At Shraddha Institute, our specialized programs, including Abacus, Vedic Math, Phonics and Handwriting are designed to strengthen foundational skills, enhance learning outcomes and foster critical thinking.
              </p>
              <p>
                I saw students struggling with math anxiety. Vedic techniques helped us
                bring joy back into learning. Today, with over 600 teachers and 50,000+ students,
                our mission continues.
              </p>
          
              <div className="signature">- Mrs. Swati Shah</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFranchisePage;
