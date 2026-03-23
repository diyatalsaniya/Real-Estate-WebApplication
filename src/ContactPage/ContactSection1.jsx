import React from 'react';
import { Phone, Mail } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   CONTACT SECTION 1 — Contact Info Cards
══════════════════════════════════════════════════════════════════════ */

const CONTACT_INFO = [
  {
    icon: <Phone size={26} className="text-blue-600" />,
    title: 'Call Us',
    lines: ['+91 87358 43736'],
  },
  {
    icon: <Mail size={26} className="text-blue-600" />,
    title: 'Email Us',
    lines: ['nestnova26@gmail.com'],
  },
];

const ContactSection1 = () => {
  return (
    <section className="relative z-10 -mt-10 px-4 md:px-8 max-w-3xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {CONTACT_INFO.map(({ icon, title, lines }) => (
          <div
            key={title}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-gray-100 shadow-[rgba(50,50,105,0.12)_0px_2px_10px_0px]"
          >
            <div className="w-14 h-14 rounded-md bg-blue-50 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="font-serif font-semibold text-[#0A1128] text-lg">{title}</h3>
            <div className="text-gray-500 text-sm leading-relaxed">
              {lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection1;
