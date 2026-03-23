import React from 'react';
import { Link } from 'react-router-dom';

// ── Property Videos from assets ──────────────────────────────────────
import Video1 from '../assets/Videos/Video1.mp4';
import Video2 from '../assets/Videos/Video2.mp4';
import Video3 from '../assets/Videos/Video3.mp4';
import Video4 from '../assets/Videos/Video4.mp4';
import Video5 from '../assets/Videos/Video5.mp4';

// ── Video data ───────────────────────────────────────────────────────
const VIDEOS = [
  { id: 1, src: Video1, title: 'The Grand Villa', location: 'Sindhubhavan, Ahmedabad' },
  { id: 2, src: Video2, title: 'Modern Apartments', location: 'Science City, Ahmedabad' },
  { id: 3, src: Video3, title: 'Luxury Penthouse', location: 'Navrangpura, Ahmedabad' },
  { id: 4, src: Video4, title: 'Serene Township', location: 'Thaltej, Ahmedabad' },
  { id: 5, src: Video5, title: 'Lakefront Estate', location: 'Satellite, Ahmedabad' },
];

const Section5 = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4">
            Virtual Home Tours
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto tracking-wide">
            Experience our exclusive properties through immersive cinematic video tours designed to capture every luxurious detail.
          </p>
        </div>

        {/* ── Video Bento Box Grid (1 large + 4 small) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {VIDEOS.map((video, index) => (
            <div 
              key={video.id} 
              className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <video 
                src={video.src} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Play Icon - Centered */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg cursor-pointer hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              {/* Content - Bottom */}
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-xs md:text-sm text-gray-300 mb-1.5 font-medium tracking-widest uppercase flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {video.location}
                </p>
                <h3 className={`text-white font-serif font-semibold leading-tight ${
                  index === 0 ? 'text-2xl md:text-4xl mb-2' : 'text-xl md:text-2xl'
                }`}>
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Tours button ── */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            to="/properties"
            className="px-8 py-3 rounded-md border border-gray-900 inline-block
                       text-sm font-semibold text-gray-900
                       hover:bg-[#1a1f3c] hover:text-white hover:border-[#1a1f3c]
                       transition-all duration-300"
          >
            Explore All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section5;
