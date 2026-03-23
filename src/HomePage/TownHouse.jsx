import React from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import Footer from './Footer';
import { Home } from 'lucide-react';

const TownHouse = () => {
  const townHouseProps = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      title: "Lincoln Square Row",
      price: "₹1.8 Cr",
      location: "Maninagar, Ahmedabad",
      sqft: "1,850 sqft",
      bhk: "3 BHK",
      bath: "3 Bath",
      rating: 4
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Victoria Park Mews",
      price: "₹2.2 Cr",
      location: "Satellite, Ahmedabad",
      sqft: "2,100 sqft",
      bhk: "4 BHK",
      bath: "3 Bath",
      rating: 5
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
      title: "Chelsea Terrace",
      price: "₹1.5 Cr",
      location: "Gota, Ahmedabad",
      sqft: "1,600 sqft",
      bhk: "3 BHK",
      bath: "2 Bath",
      rating: 3
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
      title: "Greenwich Village Row",
      price: "₹3.1 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "2,800 sqft",
      bhk: "4 BHK",
      bath: "4 Bath",
      rating: 5
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      title: "Belgravia Mews",
      price: "₹4.2 Cr",
      location: "Navrangpura, Ahmedabad",
      sqft: "3,500 sqft",
      bhk: "5 BHK",
      bath: "5 Bath",
      rating: 5
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      title: "Kensington Court",
      price: "₹2.8 Cr",
      location: "South Bopal, Ahmedabad",
      sqft: "2,400 sqft",
      bhk: "4 BHK",
      bath: "3 Bath",
      rating: 4
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-center px-4">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-2xl mb-6 text-blue-400">
          <Home size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Town House Collection</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          "Elegant multi-story residences combining the privacy of a villa with the convenience of urban living."
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">120+</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Available Units</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">₹1.5Cr</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Starting Price</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">Verified</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Property Status</p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {townHouseProps.map((p) => (
            <div key={p.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <PropertyCard {...p} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TownHouse;
