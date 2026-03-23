import React from 'react';
import { Link } from 'react-router-dom';

// ── Category images from assets ─────────────────────────────────────
import HouseImage     from '../assets/Categories/House.jpeg';
import VillaImage     from '../assets/Categories/Villa.jpeg';
import ApartmentImage from '../assets/Categories/Apartment.jpeg';
import CommercialImage from '../assets/Categories/Commercial.jpeg';

// ── Data ─────────────────────────────────────────────────────────────
const EXPLORE_CATEGORIES = [
  {
    id: 1,
    title: 'Town House',
    count: '3 Properties',
    image: HouseImage,
    link: '/town-house'
  },
  {
    id: 2,
    title: 'Modern Villa',
    count: '10 Properties',
    image: VillaImage,
    link: '/modern-villa'
  },
  {
    id: 3,
    title: 'Apartment',
    count: '3 Properties',
    image: ApartmentImage,
    link: '/apartment'
  },
  {
    id: 4,
    title: 'Commercial',
    count: '3 Properties',
    image: CommercialImage,
    link: '/commercial'
  },
];

const Section3 = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">
      
      {/* ── Heading ── */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a1f3c]">
          Explore Our Properties
        </h2>
      </div>

      {/* ── 4-Column Image Grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {EXPLORE_CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={cat.link}
            className="group relative rounded-lg overflow-hidden aspect-square cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Gradient Overlay for text readability */}
            <div 
              className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
            />

            {/* Content (Top Left aligned) */}
            <div className="absolute top-0 left-0 p-6 flex flex-col">
              <h3 className="text-white text-xl font-semibold tracking-wide drop-shadow-md">
                {cat.title}
              </h3>
              <p className="text-gray-200 text-sm mt-1 drop-shadow-sm font-medium">
                {cat.count}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default Section3;
