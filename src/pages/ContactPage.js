import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
