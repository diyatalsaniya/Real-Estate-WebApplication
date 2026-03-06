import React from 'react';

const builders = [
  {
    id: 1,
    name: "Pacifica Companies",
    logoUrl: "/BuilderLogos/Pacifica.jpg",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    name: "Adani Realty",
    logoUrl: "/BuilderLogos/Adani.png",
    bg: "bg-green-50",
  },
  {
    id: 3,
    name: "Shaligram Group",
    logoUrl: "/BuilderLogos/Shaligram.png",
    initials: "SG",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    name: "Gala Group",
    logoUrl: "/BuilderLogos/Gala.jpg",
    initials: "SS",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    name: "HDIL",
    logoUrl: "/BuilderLogos/HDIL.jpg",
    initials: "SI",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: 6,
    name: "Bakeri Group",
    logoUrl: "/BuilderLogos/Bakeri.jpg",
    initials: "HN",
    color: "bg-rose-100 text-rose-700",
  },
  // duplicated for seamless loop
  {
    id: 7,
    name: "Adani Realty",
    logoUrl: "/BuilderLogos/Adani.png",
    bg: "bg-blue-50",
  },
  {
    id: 8,
    name: "Godrej Properties",
    logoUrl: "/BuilderLogos/Godrej.jpg",
    bg: "bg-green-50",
  },
  {
    id: 9,
    name: "Galaxy Group",
    logoUrl: "/BuilderLogos/Galaxy.jpg",
    initials: "SG",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 10,
    name: "Adani Realty",
    logoUrl: "/BuilderLogos/Adani.png",
    initials: "SS",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 11,
    name: "Shaligram Group",
    logoUrl: "/BuilderLogos/Shaligram.png",
    initials: "SI",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: 12,
    name: "Bakeri Group",
    logoUrl: "/BuilderLogos/Bakeri.jpg",
    initials: "HN",
    color: "bg-rose-100 text-rose-700",
  },
];

const LogoCircle = ({ builder }) => {
  if (builder.logoUrl) {
    return (
      <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm ${builder.bg || 'bg-white'}`}>
        <img
          src={builder.logoUrl}
          alt={builder.name}
          className="w-10 h-10 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-gray-500">${builder.name.substring(0, 2).toUpperCase()}</span>`;
          }}
        />
      </div>
    );
  }
  return (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm ${builder.color}`}>
      {builder.initials}
    </div>
  );
};

const Section4 = () => {
  return (
    <section className="py-14 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Trusted Builders</h2>
          <p className="text-gray-400 text-sm mt-2">Partnered with top real estate developers</p>
        </div>

        {/* Scrolling Row */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-marquee w-max">
            {builders.map((builder) => (
              <div key={builder.id} className="flex flex-col items-center gap-2 shrink-0">
                <LogoCircle builder={builder} />
                <p className="text-xs text-gray-500 text-center w-20 leading-tight">{builder.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Section4;