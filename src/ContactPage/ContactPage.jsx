import React from 'react';
import Navbar          from '../components/Navbar';
import ContactHeader   from './ContactHeader';
import ContactSection1 from './ContactSection1';
import ContactSection2 from './ContactSection2';
import ContactSection3 from './ContactSection3';
import Footer          from '../HomePage/Footer';

/* ══════════════════════════════════════════════════════════════════════
   CONTACT PAGE — Assembles all sections
══════════════════════════════════════════════════════════════════════ */

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar — fixed at top */}
      <Navbar />

      {/* Hero / Header section */}
      <ContactHeader />

      {/* Contact Info Cards section */}
      <ContactSection1 />

      {/* Contact Form + Quick CTA section */}
      <ContactSection2 />

      {/* FAQ Accordion section */}
      <ContactSection3 />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default ContactPage;
