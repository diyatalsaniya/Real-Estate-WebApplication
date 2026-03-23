import React from 'react';
import SplitText from '../HomePage/SplitText';

/* ══════════════════════════════════════════════════════════════════════
   CONTACT HEADER — Hero Section (About page theme)
══════════════════════════════════════════════════════════════════════ */

const ContactHeader = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[55vh] pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#060d1f] via-[#0f172a] to-[#1e3a8a]">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        <SplitText
          text="Contact Us"
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white mb-5 drop-shadow-lg"
          delay={35}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          tag="h1"
        />

        <p className="text-gray-400 text-base md:text-xl max-w-2xl leading-relaxed">
          Have questions? We&rsquo;re here to help. Reach out to us and let&rsquo;s start a
          conversation.
        </p>
      </div>

    </section>
  );
};

export default ContactHeader;
