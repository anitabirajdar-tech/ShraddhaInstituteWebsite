import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./DemoAndContact.css";

const GetInTouch = () => {
  const [studentImg, setStudentImg] = useState(null);
  const formRef = useRef(null);

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

  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowIframe(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showIframe) return;
    const iframe = formRef.current;
    if (!iframe) return;
    const handleIframeLoad = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 100);
    };
    iframe.addEventListener("load", handleIframeLoad);
    return () => {
      iframe.removeEventListener("load", handleIframeLoad);
    };
  }, [showIframe]);

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

        {/* Add button to go to DemoAndContact.js page */}
        <div style={{ margin: "1.5rem 0" }}>
          <Link to="/contact" className="btn btn-primary">
            Go to Contact Page
          </Link>
        </div>

        {/* Zoho iframe form (delayed render) */}
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

export default GetInTouch;
