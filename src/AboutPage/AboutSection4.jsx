import React from 'react';
import {
  ShieldCheck, HeartHandshake, TrendingUp, Users, Zap, Star,
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 4 — WHY CHOOSE US
══════════════════════════════════════════════════════════════════════ */

const WHY_US = [
  {
    icon: <ShieldCheck size={28} className="text-blue-600" />,
    title: 'Verified Listings',
    desc: 'Every property on NestNova is manually verified for authenticity, legal clearance, and accuracy before going live.',
  },
  {
    icon: <HeartHandshake size={28} className="text-blue-600" />,
    title: '24/7 Support',
    desc: 'Our team is always available to answer your questions and guide your journey at every step.',
  },
  {
    icon: <TrendingUp size={28} className="text-blue-600" />,
    title: 'Best Market Prices',
    desc: 'We negotiate on your behalf to ensure you always get the most competitive and fair pricing on the market.',
  },
  {
    icon: <Users size={28} className="text-blue-600" />,
    title: 'Trusted Builders',
    desc: 'We work only with reputed and RERA-registered builders and developers across Ahmedabad.',
  },
  {
    icon: <Zap size={28} className="text-blue-600" />,
    title: 'Fast & Easy Process',
    desc: 'From search to keys — our streamlined process saves you time and effort at every stage.',
  },
  {
    icon: <Star size={28} className="text-blue-600" />,
    title: 'Premium Experience',
    desc: "We bring a luxury experience to every interaction — whether you're buying, selling, or just exploring.",
  },
];

const AboutSection4 = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">Why NestNova</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1128] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            We're not just a listing platform — we're your dedicated real estate partner from search to keys.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <span className="group-hover:[&>svg]:text-white transition-colors duration-300">{icon}</span>
              </div>
              <h3 className="font-serif font-semibold text-[#0A1128] text-lg">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection4;
