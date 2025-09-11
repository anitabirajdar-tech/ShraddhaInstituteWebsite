import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DemoAndContact.css';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const DemoAndContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [activeField, setActiveField] = useState(null);
  const [studentImg, setStudentImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 🔹 Fetch image from Firestore
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const docRef = doc(db, "demoAssets", "studentImage");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudentImg(docSnap.data().url);
        }
      } catch (error) {
        console.error("Error fetching student image:", error);
      }
    };
    fetchImage();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Submit lead → Catalyst → Zoho CRM
// 🔹 Submit lead → Catalyst → Zoho CRM
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setIsSuccess(false);

  try {
    const response = await fetch(
      "https://reactlead-898747270.development.catalystserverless.com/server/zohoLeadHandler/execute",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    // ✅ Handle non-200 responses (like 500, 403, 404)
    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `Server error (${response.status}): ${text || response.statusText}`
      );
    }

    const result = await response.json();
    console.log("Server response:", result);

    if (result.data && result.data[0].code === "SUCCESS") {
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("⚠️ CRM Failed: " + JSON.stringify(result));
    }
  } catch (err) {
    console.error("Submit error:", err);

    // 🔹 More user-friendly error messages
    if (err.message.includes("Failed to fetch")) {
      alert("🚫 Network/CORS issue: Could not reach server. Check CORS headers.");
    } else {
      alert("⚠️ Error: " + err.message);
    }
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section className="demo-contact-section" id="contact-demo">
      {/* Contact Form (Left) */}
      <div className="contact-section">
        <div className="contact-header">
          <h2><span className="highlight">Get in Touch</span></h2>
          <p className="subtitle">Have questions? We're here to help guide your learning journey</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setActiveField('name')}
              onBlur={() => setActiveField(null)}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setActiveField('email')}
              onBlur={() => setActiveField(null)}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className={`form-group ${activeField === 'phone' ? 'active' : ''}`}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setActiveField('phone')}
              onBlur={() => setActiveField(null)}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className={`form-group ${activeField === 'message' ? 'active' : ''}`}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setActiveField('message')}
              onBlur={() => setActiveField(null)}
              disabled={isSubmitting}
              required
            ></textarea>
          </div>

          {isSuccess ? (
            <p className="success-message">✅ Thank you! We'll be in touch soon.</p>
          ) : (
            <button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          )}
        </form>
      </div>

      {/* Free Demo (Right) */}
      <div className="demo-section">
        <div className="demo-card">
          <div className="demo-content">
            <div className="demo-badge"></div>
            <h2>
              <span className="emoji">🎓</span>
              <span className="orange-text">Free Demo Class</span>
            </h2>
            <p className="demo-text">
              Experience our unique teaching methodology first-hand. Book a no-obligation demo session today!
            </p>
            <Link to="/contact" className="btn btn-primary">
              Book Your Free Session
            </Link>
          </div>
          <div className="demo-image">
            {studentImg ? (
              <img src={studentImg} alt="Happy students learning" />
            ) : (
              <p>Loading image...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAndContact;
