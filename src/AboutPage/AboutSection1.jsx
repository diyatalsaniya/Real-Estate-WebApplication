import React from 'react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 1 — Our Story / Who We Are
══════════════════════════════════════════════════════════════════════ */

const AboutSection1 = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">

        {/* Blue accent line */}
        <div className="w-12 h-1 bg-blue-600 rounded-md mx-auto mb-8" />

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1128] mb-8 leading-tight">
          Our Story
        </h2>

        {/* Paragraphs */}
        <div className="space-y-5 text-gray-500 text-base md:text-lg leading-relaxed text-center">
          <p>
            NestNova was founded with one goal — to make finding a home in Ahmedabad simple, transparent, and
            trustworthy. We noticed that the real estate market was often confusing and lacked the personal touch
            that such a significant life decision deserves.
          </p>
          <p>
            Starting as a small team with a big vision, we've built a platform that puts the user first. By combining
            local expertise with cutting-edge technology, we help you find the perfect place to call home, ensuring
            every step of the journey is as smooth as possible.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection1;
