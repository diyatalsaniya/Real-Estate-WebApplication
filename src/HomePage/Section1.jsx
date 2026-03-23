import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ── Property images from assets ──────────────────────────────────────
import House1    from '../assets/PropertyImage/House1.jpg';
import House2    from '../assets/PropertyImage/House2.jpg';
import House3    from '../assets/PropertyImage/House3.jpg';
import Interior1 from '../assets/PropertyImage/Interior1.jpg';
import Villa1    from '../assets/PropertyImage/Villa1.jpg';
import Villa2    from '../assets/PropertyImage/Villa2.jpg';

import PropertyCard from '../components/PropertyCard';

// ── Property data ────────────────────────────────────────────────────
const PROPERTIES = [
  { id: 1, image: House1,    name: 'Skyline Haven',       location: 'South Bopal, Ahmedabad',    price: '₹4.5 Cr', sqft: '3,400 sqft', bhk: '4 BHK', bath: '4 Bath' },
  { id: 2, image: Interior1, name: 'Emerald Heights',     location: 'Vastrapur, Ahmedabad',      price: '₹1.2 Cr', sqft: '1,250 sqft', bhk: '3 BHK', bath: '2 Bath' },
  { id: 3, image: Villa1,    name: 'The Grand Residency', location: 'Thaltej, Ahmedabad',       price: '₹7.8 Cr', sqft: '5,200 sqft', bhk: '5 BHK', bath: '6 Bath' },
  { id: 4, image: House2,    name: 'Green Valley Villa',  location: 'Gota, Ahmedabad', price: '₹3.2 Cr', sqft: '2,800 sqft', bhk: '4 BHK', bath: '3 Bath' },
  { id: 5, image: Villa2,    name: 'Sunset Retreat',      location: 'Sindhubhavan, Ahmedabad', price: '₹5.5 Cr', sqft: '4,100 sqft', bhk: '5 BHK', bath: '5 Bath' },
  { id: 6, image: House3,    name: 'Urban Nest',          location: 'Maninagar, Ahmedabad',     price: '₹2.1 Cr', sqft: '1,800 sqft', bhk: '3 BHK', bath: '2 Bath' },
];

const VISIBLE = 3; // cards shown at a time

const Section1 = () => {
  // startIndex = index of the first visible card
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = PROPERTIES.length - VISIBLE; // 6 - 3 = 3

  const goPrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setStartIndex((prev) => Math.min(prev + 1, maxIndex));

  // Only render the 3 cards starting at startIndex
  const visibleCards = PROPERTIES.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="w-full bg-white py-14 px-4 md:px-10">

      {/* ── Section header row ── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          Fresh Properties
        </h2>

        {/* Prev / Next arrows */}
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            disabled={startIndex === 0}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center text-lg
                        transition-all duration-200 shadow-sm
                        ${startIndex === 0
                          ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                          : 'border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            disabled={startIndex === maxIndex}
            className={`w-10 h-10 rounded-md border flex items-center justify-center text-lg
                        transition-all duration-200 shadow-sm
                        ${startIndex === maxIndex
                          ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                          : 'border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/* ── 3-card grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCards.map((p) => (
          <PropertyCard
            key={p.id}
            image={p.image}
            title={p.name}
            price={p.price}
            location={p.location}
            sqft={p.sqft}
            bhk={p.bhk}
            bath={p.bath}
          />
        ))}
      </div>

      {/* ── View More button ── */}
      <div className="flex justify-center mt-10">
        <Link
          to="/properties"
          className="px-8 py-3 rounded-md border border-gray-300 inline-block
                     text-sm font-semibold text-gray-700
                     hover:bg-gray-100 hover:text-gray-900
                     transition-all duration-200 shadow-sm hover:shadow-md"
        >
          View More
        </Link>
      </div>

    </section>
  );
};

export default Section1;
