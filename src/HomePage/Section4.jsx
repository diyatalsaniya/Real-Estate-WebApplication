import React from 'react';
import LogoLoop from '../components/LogoLoop';

// ── Builder logos from assets ────────────────────────────────────────
import Adani     from '../assets/BuilderLogos/Adani.png';
import Bakeri    from '../assets/BuilderLogos/Bakeri.jpg';
import Gala      from '../assets/BuilderLogos/Gala.jpg';
import Galaxy    from '../assets/BuilderLogos/Galaxy.jpg';
import Ganesh    from '../assets/BuilderLogos/Ganesh.png';
import Godrej    from '../assets/BuilderLogos/Godrej.jpg';
import HDIL      from '../assets/BuilderLogos/HDIL.jpg';
import Pacifica  from '../assets/BuilderLogos/Pacifica.jpg';
import Shaligram from '../assets/BuilderLogos/Shaligram.png';
import Goyal from '../assets/BuilderLogos/Goyal.webp';
import HN_Safal from '../assets/BuilderLogos/HN_Safal.png';
import Shafalya from '../assets/BuilderLogos/Shafalya.webp';


const BUILDERS = [
  { id: 1, src: Adani,     alt: 'Adani' },
  { id: 2, src: Bakeri,    alt: 'Bakeri' },
  { id: 3, src: Gala,      alt: 'Gala' },
  { id: 4, src: Galaxy,    alt: 'Galaxy' },
  { id: 5, src: Ganesh,    alt: 'Ganesh' },
  { id: 6, src: Godrej,    alt: 'Godrej' },
  { id: 7, src: HDIL,      alt: 'HDIL' },
  { id: 8, src: Pacifica,  alt: 'Pacifica' },
  { id: 9, src: Shaligram, alt: 'Shaligram' },
  { id: 10, src: Goyal, alt: 'Goyal' },
  { id: 11, src: HN_Safal, alt: 'HN_Safal' },
  { id: 12, src: Shafalya, alt: 'Shafalya' },
];

const Section4 = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4 overflow-hidden">
      {/* ── Heading ── */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a1f3c]">
          Our Trusted Builders
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-md"></div>
      </div>

      {/* ── Infinite Scrolling Marquee ── */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <LogoLoop
          className="overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          logos={BUILDERS}
          speed={60}
          direction="left"
          logoHeight={96} /* h-24 equivalent max height */
          gap={80}
          pauseOnHover={true}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="#f8f9fa"
          renderItem={(logo, index) => (
            <div className="flex items-center justify-center h-[96px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 md:h-20 lg:h-24 object-contain max-w-[150px] md:max-w-[200px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Section4;
