import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RippleButton from '../components/RippleButton';

// ── Category data ─────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 1,
    label: 'Rent',
    count: '24 Properties',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Buy',
    count: '18 Properties',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21v-4h4v4" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Commercial',
    count: '9 Properties',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 21h18M4 21V7a1 1 0 011-1h6V3h4v3h4a1 1 0 011 1v14" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 21v-4h6v4M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    ),
  },
];

const Section2 = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const handleCategoryClick = (cat) => {
    setActive(cat.id);
    if (cat.label === 'Rent') {
      navigate('/rent-property');
    } else if (cat.label === 'Buy') {
      navigate('/buy-property');
    } else if (cat.label === 'Commercial') {
      navigate('/commercial-property');
    }
  };

  return (
    /* ── Light blue-tinted background to match the site's blue theme ── */
    <section className="w-full py-16 px-4 md:px-10"
      style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)' }}
    >

      {/* ── Heading ── */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          Featured Categories
        </h2>
      </div>

      {/* ── 3 Category cards ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <RippleButton
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className={`
                group relative flex items-center gap-5 text-left
                bg-white rounded-lg px-8 py-7
                border-2 transition-all duration-300
                shadow-[0_4px_20px_rgba(0,0,0,0.07)]
                hover:-translate-y-1
                hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)]
                ${isActive
                  ? 'border-blue-600 shadow-[0_8px_30px_rgba(59,130,246,0.25)]'
                  : 'border-transparent hover:border-gray-200'}
              `}
            >
              {/* Icon */}
              <span className={`relative shrink-0 transition-colors duration-300
                ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                {cat.icon}
              </span>

              {/* Text */}
              <span className="relative flex flex-col">
                <span className={`text-lg font-semibold leading-snug transition-colors duration-300
                  ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
                  {cat.label}
                </span>
                <span className="text-sm text-gray-400 mt-0.5">{cat.count}</span>
              </span>

              {/* Right arrow — appears on hover */}
              <span className={`relative ml-auto text-2xl transition-all duration-300
                opacity-0 -translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                ${isActive ? 'opacity-100 translate-x-0 text-blue-600' : 'text-gray-400'}`}>
                ›
              </span>
            </RippleButton>
          );
        })}
      </div>

    </section>
  );
};

export default Section2;

