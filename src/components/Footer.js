import React from 'react';
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
   FaYoutube 
} from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";





const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      
      <motion.div 
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        {/* Column 1: Brand and Address */}
        <motion.div className="footer-column" variants={itemVariants}>
          <div className="footer-brand-container">
            <h2 className="footer-brand">Shraddha Institute</h2>
            <p className="footer-tagline">Boost your Brain</p>
          </div>
          
          <div className="footer-contact-item">
            <span className="footer-icon"><FaMapMarkerAlt /></span>
            <div>
              <p>Hall No. 2, Padmashree Apartment-Commercial Complex,Near Pune Naka, Avanti Nagar, Murarji Peth, Solapur</p>
              <p>Maharashtra – 413002</p>
            </div>
          </div>
          
          <div className="footer-contact-item">
            <span className="footer-icon"><FiClock /></span>
            <div>
              <p>Monday - Sunday: 10:00 AM - 7:00 PM</p>
              <p>Wednesday: Closed</p>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div className="footer-column" variants={itemVariants}>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
           <li><Link to="/programs">Our Programs</Link></li>

            <li><a href="/testimonials">Testimonials</a></li>
             <li><Link to="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Contact */}
        <motion.div className="footer-column" variants={itemVariants}>
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span className="footer-icon"><FaPhoneAlt /></span>
            <div>
              <a href="tel:+919168756060">+91 91687 56060</a>
              <a href="tel:+918446889966">+91 84468 89966</a>
             
            </div>
          </div>
          
          <div className="footer-contact-item">
            <span className="footer-icon"><FaEnvelope /></span>
            <a href="mailto:info@shraddhainstitute.com">info@shraddhainstitute.com</a>
          </div>

          {/* Place Google Map directly below Contact */}
          <div className="footer-findus" style={{ marginTop: "2rem", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.15rem", color: "#f97316", fontWeight: 700, marginBottom: "0.7rem", letterSpacing: "0.5px", borderBottom: "2px solid #f97316", display: "inline-block", paddingBottom: "2px" }}>
              Find Us
            </h4>
            <div style={{ width: "100%", maxWidth: "320px", margin: "0 auto", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 18px rgba(255, 159, 67, 0.10)", background: "#fff" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.5659835300481!2d75.89032180808225!3d17.681690120749565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d1f5118bad33%3A0xf3e09dce9cb64733!2sShraddha%20Institute!5e0!3m2!1sen!2sin!4v1758176751236!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shraddha Institute Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Column 4: Social Media */}
        <motion.div className="footer-column" variants={itemVariants}>
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <motion.a 
              href="https://www.facebook.com/share/1FXuy9uHEW/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              whileHover={{ y: -3 }}
              style={{ color: "#1877f3" }} // Facebook blue
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/shraddhainstitute?igsh=a2sxY2M3bTRqNWx5" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              whileHover={{ y: -3 }}
              style={{ color: "#E4405F" }} // Instagram pink
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://wa.me/919168756060" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              whileHover={{ y: -3 }}
              style={{ color: "#25D366" }} // WhatsApp green
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a 
              href="https://www.youtube.com/@ShraddhaInstitute" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              whileHover={{ y: -3 }}
              style={{ color: "#FF0000" }} // YouTube red
            >
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Shraddha Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;