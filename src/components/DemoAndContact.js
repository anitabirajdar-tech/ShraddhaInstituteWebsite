import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./DemoAndContact.css";

const DemoAndContact = () => {
  const [studentImg, setStudentImg] = useState(null);

  // 🔹 Fetch student image from Firestore
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

  // 🔹 Zoho postMessage script
  useEffect(() => {
    const handleMessage = (evt) => {
      if (
        evt.origin === "https://crm.zoho.com" ||
        evt.origin === "https://crm.zohopublic.com"
      ) {
        const loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
        evt.source.postMessage(
          "prnt_wnd_pg_lc_rc_frm_prwindow_" + loc_obj,
          evt.origin
        );
      }
    };

    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="demo-contact-section" id="contact-demo">
      {/* Contact Form (Left) */}
      <div className="contact-section">
        <div className="contact-header">
          <h2>
            <span className="highlight">Get in Touch</span>
          </h2>
          <p className="subtitle">
            Have questions? We're here to help guide your learning journey
          </p>
        </div>

        {/* 🔹 Zoho iframe form */}
        <div className="zoho-form-container">
          <iframe
            src="https://crm.zoho.com/crm/WebFormServeServlet?rid=a9763370d7bf0f1e287b2ef5e4459369ed622c233de229febc6b1f916620dcc89fea94d9c69cafe9cf7e241096383bacgidc3e194a6899b3ad30930a3ef1f8bd17486d9128d8b3b09cef409cae8e26e8cbd"
            title="Zoho WebForm"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
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
              Experience our unique teaching methodology first-hand. Book a
              no-obligation demo session today!
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
