import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const Section3 = () => {
  const navigate = useNavigate();
  
  const buyProperties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      title: "Luxury Estate",
      price: "₹12.5 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "5,500 sqft",
      bhk: "5 BHK",
      bath: "6 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800",
      title: "Royal Residency",
      price: "₹4.8 Cr",
      location: "South Bopal, Ahmedabad",
      sqft: "2,400 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      title: "Sunset Villa",
      price: "₹8.2 Cr",
      location: "Gota, Ahmedabad",
      sqft: "4,000 sqft",
      bhk: "4 BHK",
      bath: "4 Bath"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-3">Properties for Buy</h2>
        <p className="text-gray-500 font-medium">Invest in your dream forever home</p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {buyProperties.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => navigate('/buy-property')}
          className="px-10 py-3 rounded-md bg-[#1e293b] text-white text-lg font-semibold hover:bg-[#0f172a] transition-all transform active:scale-95 shadow-lg shadow-gray-400/30">
          View All Buy Properties
        </button>
      </div>
    </div>
  );
};

export default Section3;
