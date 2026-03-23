import React from 'react';
import { Home, Search, ShieldCheck, Building2 } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 5 — OUR SERVICES
══════════════════════════════════════════════════════════════════════ */

const SERVICES = [
  {
    icon: <Home size={26} className="text-blue-600" />,
    title: 'Buy Property',
    desc: 'Explore a wide range of premium properties and find your dream home.',
  },
  {
    icon: <Building2 size={26} className="text-blue-600" />,
    title: 'Sell Property',
    desc: 'Get the best market value for your property with our expert guidance.',
  },
  {
    icon: <Search size={26} className="text-blue-600" />,
    title: 'Rent Property',
    desc: "Find high-quality rental options across Ahmedabad's top locations.",
  },
  {
    icon: <ShieldCheck size={26} className="text-blue-600" />,
    title: 'Property Verification',
    desc: 'Dedicated assistance with title clearance and legal document verification.',
  },
];

const AboutSection5 = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1128] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            A complete suite of real estate services designed to make every property journey smooth, safe, and successful.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-4 overflow-hidden shadow-[rgba(50,50,105,0.08)_0px_2px_10px_0px]"
            >

              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 relative z-10">
                <span className="group-hover:[&>svg]:text-white transition-colors duration-300">{icon}</span>
              </div>

              <div className="relative z-10">
                <h3 className="font-serif font-semibold text-[#0A1128] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection5;
