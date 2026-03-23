import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, IndianRupee } from 'lucide-react';
import SplitText from './SplitText';

// ── Local hero images from assets ──────────────────────────────────────
import HomeImage1 from '../assets/HomePageImage/HomeImage1.jpg';
import HomeImage2 from '../assets/HomePageImage/HomeImage2.jpg';
import HomeImage3 from '../assets/HomePageImage/HomeImage3.jpg';
import HomeImage4 from '../assets/HomePageImage/HomeImage4.jpg';
import HomeImage5 from '../assets/HomePageImage/HomeImage5.jpg';

const IMAGES = [HomeImage1, HomeImage2, HomeImage3, HomeImage4, HomeImage5];

// Auto-scroll interval in milliseconds
const AUTO_SCROLL_INTERVAL = 4000;

const Header = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');


  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // ── Start / restart auto-scroll ────────────────────────────────────
  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, AUTO_SCROLL_INTERVAL);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  // ── Manual navigation (restarts timer) ────────────────────────────
  const goTo = (index) => {
    setCurrent(index);
    startAutoScroll(); // reset timer so it doesn't jump immediately
  };

  const goPrev = () => goTo((current - 1 + IMAGES.length) % IMAGES.length);
  const goNext = () => goTo((current + 1) % IMAGES.length);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (priceRange) params.append('price', priceRange);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    /* ── Full-screen hero wrapper ── */
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">

      {/* ════════════════════════════════════════════
          BACKGROUND IMAGE CAROUSEL
      ════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* ════════════════════════════════════════════
          HERO CONTENT (centered)
      ════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full pt-32">

        {/* Main heading */}
        <SplitText
          text="Your Home, Our Priority"
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-white mb-4 drop-shadow-md"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h1"
        />

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white font-serif mb-10 drop-shadow-md">
          Step into the home you’ve always imagined with <span className="font-semibold text-white">NestNova</span>.
        </p>

        {/* ── Search bar (Card version) ── */}
        <div className="w-full max-w-5xl mb-12">
          <div className="w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-4 sm:p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 text-left">
            
            {/* Location Input */}
            <div className="w-full md:w-[60%] relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <MapPin className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search by Area, Property Type and Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all hover:border-gray-300"
              />
            </div>

            {/* Desktop Divider */}
            <div className="hidden md:block w-px h-10 bg-gray-200 shrink-0"></div>

            {/* Filters Grid */}
            <div className="w-full md:w-[20%] grid grid-cols-1 gap-3 md:gap-4">
              


              {/* Price Range Dropdown */}
              <div className="relative w-full group">
                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                   <IndianRupee className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                 </div>
                 <select 
                   value={priceRange}
                   onChange={(e) => setPriceRange(e.target.value)}
                   className="appearance-none w-full pl-10 pr-8 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:border-gray-300"
                 >
                   <option value="" disabled>Price Range</option>
                   <option value="under25">Under 25L</option>
                   <option value="25to50">25L - 50L</option>
                   <option value="50to1cr">50L - 1Cr</option>
                   <option value="above1cr">1Cr+</option>
                 </select>
                 <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                 </div>
              </div>



            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto shrink-0 mt-2 md:mt-0">
               <button 
                 onClick={handleSearch}
                 className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-[0_4px_12px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 active:scale-[0.98]">
                 <Search size={18} />
                 <span>Search</span>
               </button>
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════════════
            HORIZONTAL THUMBNAIL STRIP
        ════════════════════════════════════════════ */}
        <div className="flex items-center gap-4 w-full max-w-3xl justify-center">

          {/* Prev arrow */}
          <button
            onClick={goPrev}
            className="shrink-0 w-9 h-9 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/35
                       flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Thumbnail scroll strip */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1 px-1">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`
                  shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300
                  ${i === current
                    ? 'border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.5)]'
                    : 'border-white/30 opacity-60 hover:opacity-90 hover:border-white/70'}
                `}
                style={{ width: 72, height: 48 }}
                aria-label={`Go to image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            className="shrink-0 w-9 h-9 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/35
                       flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex gap-2 mt-5">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`
                rounded-md transition-all duration-300
                ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* ── Progress bar at the very bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div
          key={current} // re-mounts on slide change to restart animation
          className="h-full bg-white origin-left"
          style={{
            animation: `progressBar ${AUTO_SCROLL_INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      {/* Keyframe for the progress bar animation */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        /* hide scrollbar on thumbnail strip */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default Header;
