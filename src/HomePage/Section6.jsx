import React, { useState } from 'react';

// ── Review images from assets ────────────────────────────────────────
import ReviewImg1 from '../assets/Reviews/Image1.jpeg';
import ReviewImg2 from '../assets/Reviews/Image2.jpeg';
import ReviewImg3 from '../assets/Reviews/Image3.jpeg';
import ReviewImg4 from '../assets/Reviews/Image4.jpeg';

const REVIEWS = [
  {
    id: 1,
    name: 'Cameron Williamson',
    role: 'Designer',
    text: 'Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.',
    image: ReviewImg1,
  },
  {
    id: 2,
    name: 'Esther Howard',
    role: 'Real Estate Agent',
    text: 'The interface is so clean and easy to use. I can track all my properties and client requests in one place without any hassle.',
    image: ReviewImg2,
  },
  {
    id: 3,
    name: 'Robert Fox',
    role: 'Home Buyer',
    text: 'I found my dream home within a week of using this platform. The search filters are incredibly accurate and helpful.',
    image: ReviewImg3,
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    role: 'Investor',
    text: 'The property comparisons and ROI estimator tools are unmatched. This platform is a must-have for any serious property investor.',
    image: ReviewImg4,
  },
];

const Section6 = () => {
  const [active, setActive] = useState(0);

  // Auto-scroll could be added, or click to next
  const goToNext = () => setActive((prev) => (prev + 1) % REVIEWS.length);
  const goToSlide = (index) => setActive(index);

  const currentReview = REVIEWS[active];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#FDF6F5] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-24 relative overflow-hidden">
        
        {/* ── Left side: Image with Play Button ── */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-xl overflow-hidden shadow-xl group">
            <img
              key={currentReview.image} // Re-triggers animation on slide change
              src={currentReview.image}
              alt={currentReview.name}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
        </div>

        {/* ── Right side: Review Content ── */}
        <div className="w-full md:w-1/2 flex flex-col">
          
          {/* Quote & Author Row */}
          <div className="flex items-center gap-5 mb-8 animate-slide-up" key={`header-${currentReview.id}`}>
            {/* Yellow Box with Quote Icon */}
            <div className="w-14 h-14 rounded-lg bg-[#F0C969] flex flex-col items-center justify-center text-[#1a1f3c] shadow-sm">
              <span className="text-3xl font-serif font-black leading-none mt-2">"</span>
            </div>
            {/* Name & Role */}
            <div>
              <h3 className="text-[#1a1f3c] text-lg font-bold">{currentReview.name}</h3>
              <p className="text-gray-500 text-sm mt-0.5">{currentReview.role}</p>
            </div>
          </div>

          {/* Review Text */}
          <p 
            key={`text-${currentReview.id}`}
            className="text-gray-700 leading-relaxed text-base sm:text-lg mb-12 max-w-lg font-medium animate-slide-up"
          >
            {currentReview.text}
          </p>

          {/* ── Pagination Indicator ── */}
          <div className="flex items-center gap-4 text-sm font-semibold text-gray-800">
            <span>{active + 1}</span>
            <div className="flex gap-0.5 h-0.5 w-40 bg-gray-200 rounded-md relative">
              {/* Active animated bar */}
              <div 
                className="absolute top-0 left-0 h-0.5 bg-gray-500 transition-all duration-300 rounded-md"
                style={{
                  width: `${100 / REVIEWS.length}%`,
                  transform: `translateX(${active * 100}%)`
                }}
              />
              {/* Clickable hit areas for the progress bar */}
              {REVIEWS.map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 h-6 -translate-y-[11px] cursor-pointer" 
                  onClick={() => goToSlide(i)}
                  title={`Go to slide ${i+1}`}
                />
              ))}
            </div>
            <span>{REVIEWS.length}</span>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Section6;
