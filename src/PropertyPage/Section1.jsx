import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const Section1 = () => {
  const navigate = useNavigate();
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Skyline Haven",
      price: "₹4.5 Cr",
      location: "South Bopal, Ahmedabad",
      sqft: "3,500 sqft",
      bhk: "4 BHK",
      bath: "4 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      title: "Emerald Heights",
      price: "₹1.2 Cr",
      location: "Vastrapur, Ahmedabad",
      sqft: "1,250 sqft",
      bhk: "3 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
      title: "The Grand Residency",
      price: "₹7.8 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "5,200 sqft",
      bhk: "5 BHK",
      bath: "6 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      title: "Urban Pulse Suites",
      price: "₹85 L",
      location: "Maninagar, Ahmedabad",
      sqft: "950 sqft",
      bhk: "6 BHK",
      bath: "1 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
      title: "Serene Valley",
      price: "₹3.2 Cr",
      location: "Gota, Ahmedabad",
      sqft: "2,800 sqft",
      bhk: "4 BHK",
      bath: "3 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      title: "Royal Penthouse",
      price: "₹12.0 Cr",
      location: "Bodakdev, Ahmedabad",
      sqft: "6,500 sqft",
      bhk: "2 BHK",
      bath: "7 Bath"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-3">Find Your Properties</h2>
        <p className="text-gray-500 font-medium">Handpicked listings for you</p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {properties.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => navigate('/properties')}
          className="px-10 py-3 rounded-md border-2 border-[#1e293b] text-[#1e293b] text-lg font-semibold hover:bg-[#1e293b] hover:text-white transition-all transform active:scale-95">
          View More
        </button>
      </div>
    </div>
  );
};

export default Section1;
