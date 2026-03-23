import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 2 — OUR STORY / WHO WE ARE
══════════════════════════════════════════════════════════════════════ */

const AboutSection2 = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto w-full">

      {/* Text */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">Our Story</span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1128] mb-6 leading-tight">
          Built to Make Real Estate Simple &amp; Transparent
        </h2>
        <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
          <p>
            NestNova was founded with one clear goal — to make finding a home in Ahmedabad simple,
            transparent, and trustworthy. We saw how stressful and confusing property searches could
            be, and we decided to fix that. From day one, we focused on verified listings, zero
            brokerage, and a platform that puts buyers and sellers first. Today, NestNova is
            Ahmedabad's growing real estate community — connecting thousands of families with their
            dream homes.
          </p>
        </div>
        <Link
          to="/property"
          className="mt-8 inline-flex items-center gap-2 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-all"
        >
          Explore Properties <ArrowRight size={16} />
        </Link>
      </div>

    </section>
  );
};

export default AboutSection2;
