import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 7 — CTA BANNER
══════════════════════════════════════════════════════════════════════ */

const AboutSection7 = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0A1128]">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-5">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10">
          Join thousands of happy families who found their perfect property with NestNova.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/property"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
          >
            Browse Properties <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutSection7;
