import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import './DemoAndContact.css';
import studentImg from '../assets/student.png';

const DemoAndContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [activeField, setActiveField] = useState(null);

  // Replace "xldlawgo" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xldlawgo");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              disabled={state.submitting}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
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
              disabled={state.submitting}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
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
              disabled={state.submitting}
              required
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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
              disabled={state.submitting}
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {state.succeeded ? (
            <p className="success-message">✅ Thank you! We'll be in touch soon.</p>
          ) : (
            <button
              type="submit"
              className={`submit-btn ${state.submitting ? 'submitting' : ''}`}
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
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
            {/* Book Your Free Session button connects to contact form */}
<Link to="/contact" className="btn btn-primary">
  Book Your Free Session
</Link>
          </div>
          <div className="demo-image">
            <img src={studentImg} alt="Happy students learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAndContact;
