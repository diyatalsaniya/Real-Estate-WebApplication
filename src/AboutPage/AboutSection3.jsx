import React from 'react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 3 — MISSION & VISION
══════════════════════════════════════════════════════════════════════ */

const AboutSection3 = () => {
  return (
    <section className="py-20 bg-[#0A1128] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[70%] bg-blue-600/10 blur-[120px] rounded-md pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[70%] bg-blue-800/10 blur-[120px] rounded-md pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <Target size={28} className="text-blue-400" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">Our Mission</span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
              Simplifying Real Estate for Everyone
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to make real estate accessible, transparent, and stress-free for every
              Indian family. We leverage technology and local expertise to eliminate the complexity
              of property transactions — so you can focus on what truly matters: finding a place to
              call home.
            </p>
          </div>
          <ul className="flex flex-col gap-2 mt-2">
            {[
              '100% verified property listings',
              'Free consultation & advisory',
              'Transparent pricing, zero hidden costs',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-5">
          <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
            <Eye size={28} className="text-purple-400" />
          </div>
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">Our Vision</span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
              Ahmedabad's Most Trusted Property Platform
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We envision a future where every resident of Ahmedabad — regardless of their background or budget — can navigate the property market with complete confidence. NestNova aims to be Ahmedabad's most trusted real estate platform, covering every locality from South Bopal to Navrangpura with the same commitment to quality, transparency, and customer delight.
            </p>
          </div>
          <ul className="flex flex-col gap-2 mt-2">
            {[
              'Covering 25+ localities across Ahmedabad',
              'Empowering 10,000+ Ahmedabad home buyers',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutSection3;
