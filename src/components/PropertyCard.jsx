import React, { useState } from 'react';
import { MapPin, Maximize, Bed, Bath, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// StarRating component: renders filled/empty stars with colour based on rating
const StarRating = ({ rating = 5 }) => {
  // Choose color theme based on star count
  const colorMap = {
    5: '#F59E0B',  // Gold
    4: '#F97316',  // Amber-Orange
    3: '#EF4444',  // Red-Orange
    2: '#6B7280',
    1: '#9CA3AF',
  };
  const filledColor = colorMap[rating] || colorMap[5];

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill={star <= rating ? filledColor : 'none'}
          stroke={star <= rating ? filledColor : '#D1D5DB'}
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};

const PropertyCard = ({ image, title, price, location, sqft, bhk, bath, rating = 5 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property-details/${encodeURIComponent(title)}`, {
      state: { image, title, price, location, sqft, bhk, bath, rating }
    });
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
    >
      {/* Property Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Like Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-4 right-4 p-2.5 rounded-md backdrop-blur-md transition-all duration-300 shadow-sm
            ${isLiked 
              ? 'bg-rose-500 text-white shadow-rose-200' 
              : 'bg-white/70 text-gray-900 hover:bg-white hover:scale-110'}`}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} strokeWidth={isLiked ? 0 : 2} />
        </button>
      </div>

      {/* Property Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="text-xl font-bold text-[#0f172a]">{title}</h3>
          <span className="text-blue-600 font-bold text-lg">{price}</span>
        </div>

        {/* Star Rating */}
        <div className="mb-2">
          <StarRating rating={rating} />
        </div>

        <div className="flex items-center text-gray-400 text-sm mb-6">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        {/* Stats Row */}
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center gap-1.5">
            <Maximize size={16} className="text-gray-300" />
            <span>{sqft}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed size={16} className="text-gray-300" />
            <span>{bhk}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={16} className="text-gray-300" />
            <span>{bath}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
