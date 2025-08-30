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
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
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
             <li><Link to="/blog">Blog</Link></li>
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
              <a href="tel:+919405361630">+91 94053 61630</a>
            </div>
          </div>
          
          <div className="footer-contact-item">
            <span className="footer-icon"><FaEnvelope /></span>
            <a href="mailto:info@shraddhainstitute.com">info@shraddhainstitute.com</a>
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
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/shraddhainstitute?igsh=a2sxY2M3bTRqNWx5" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              whileHover={{ y: -3 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://wa.me/919168756060" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              whileHover={{ y: -3 }}
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a 
      href="https://www.youtube.com/@ShraddhaInstitute" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="YouTube"
      whileHover={{ y: -3 }}
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