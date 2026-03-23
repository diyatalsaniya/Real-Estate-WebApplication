import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const Section2 = () => {
  const navigate = useNavigate();
  
  const rentalProperties = [
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      title: "Modern Studio",
      price: "₹45,000 /mo",
      location: "Maninagar, Ahmedabad",
      sqft: "650 sqft",
      bhk: "1 BHK",
      bath: "1 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      title: "Cozy Apartment",
      price: "₹65,000 /mo",
      location: "Vastrapur, Ahmedabad",
      sqft: "1,100 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      title: "Luxury Loft",
      price: "₹1.2 L /mo",
      location: "Sindhubhavan, Ahmedabad",
      sqft: "1,800 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-3">Properties for Rent</h2>
        <p className="text-gray-500 font-medium">Discover your perfect rental home</p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {rentalProperties.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => navigate('/rent-property')}
          className="px-10 py-3 rounded-md bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all transform active:scale-95 shadow-lg shadow-blue-500/30">
          View All Rentals
        </button>
      </div>
    </div>
  );
};

export default Section2;
