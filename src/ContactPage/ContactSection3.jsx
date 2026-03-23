import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from '@/components/animate-ui/components/base/accordion';

/* ══════════════════════════════════════════════════════════════════════
   CONTACT SECTION 3 — FAQ Accordion
══════════════════════════════════════════════════════════════════════ */

const FAQS = [
  {
    q: 'What documents do I need to buy a property?',
    a: "For property purchase, you'll need identity proof (Aadhaar/PAN), address proof, income proof, bank statements, and property documents. Our team will guide you through the complete documentation process.",
  },
  {
    q: 'What are your service charges?',
    a: 'Our consultation is completely free. Service charges vary based on the type of property and transaction. Contact us for a detailed quote tailored to your requirement.',
  },
  {
    q: 'Can I list my property on NestNova?',
    a: 'Yes, listing your property on NestNova is simple and free. Just create a seller account, fill in your property details, upload photos, and your listing goes live within 24 hours.',
  },
  {
    q: 'Do you help with property verification?',
    a: 'Absolutely! We conduct thorough verification of all properties including legal documentation, title clearance, and encumbrance certificates — so you buy with complete confidence.',
  },
  {
    q: 'How do I schedule a property visit?',
    a: 'You can schedule a property visit directly from the property listing page. Select your preferred date and time, and our team will confirm the appointment with the seller within a few hours.',
  },
  {
    q: 'What areas does NestNova cover?',
    a: 'NestNova currently covers Ahmedabad and its most popular localities including South Bopal, Sindhu Bhavan, Maninagar, CG Road, Prahlad Nagar, Satellite, Bodakdev, Thaltej, Vastrapur, Navrangpura, Chandkheda, and Gota. We are rapidly expanding to more areas across Gujarat and India.',
  },
];

const ContactSection3 = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#0A1128] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Can&rsquo;t find your answer? Reach out to us directly.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionPanel>{faq.a}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default ContactSection3;
