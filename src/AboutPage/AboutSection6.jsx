import React from 'react';
import { MapPin } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   ABOUT SECTION 6 — COVERAGE AREAS
══════════════════════════════════════════════════════════════════════ */

const AREAS = [
  'South Bopal', 'Sindhu Bhavan', 'Maninagar', 'CG Road', 'Prahlad Nagar',
  'Satellite', 'Bodakdev', 'Thaltej', 'Vastrapur', 'Navrangpura',
  'Chandkheda', 'Gota',
];

const AboutSection6 = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">

        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">Where We Operate</span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1128] mb-14">
          Our Coverage Areas
        </h2>

        {/* Area tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {AREAS.map((area) => (
            <span
              key={area}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 cursor-default shadow-sm"
            >
              <MapPin size={14} className="text-blue-500 shrink-0" />
              {area}
            </span>
          ))}
        </div>

        <p className="mt-10 text-gray-400 text-sm">
          Rapidly expanding to more areas across Gujarat and India.
        </p>
      </div>
    </section>
  );
};

export default AboutSection6;
