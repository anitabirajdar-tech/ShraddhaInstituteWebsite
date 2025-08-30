import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import './BookDemoPage.css';

const BookDemoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="book-demo-page">
      <section className="demo-hero py-5 text-center bg-orange-gradient text-white">
        <h1 className="display-4 fw-bold mb-3">Book Your Free Abacus Demo</h1>
        <p className="lead mb-4">Experience our teaching method and see the difference for yourself. Fill out the form below to reserve your spot!</p>
      </section>
      <div className="container py-4">
        <div className="demo-info mb-4">
          <h2>Why Book a Free Demo?</h2>
          <ul>
            <li>Meet our expert instructors and see our teaching style in action</li>
            <li>Get a hands-on experience with Abacus and Vedic Math techniques</li>
            <li>Ask questions and get personalized guidance for your child</li>
            <li>No obligation—just discover the benefits for yourself!</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default BookDemoPage;
