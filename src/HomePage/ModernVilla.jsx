import React from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import Footer from './Footer';
import { Palmtree } from 'lucide-react';

const ModernVilla = () => {
  const villaProps = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      title: "Ultima Modern Villa",
      price: "₹12.5 Cr",
      location: "Sindhubhavan, Ahmedabad",
      sqft: "6,200 sqft",
      bhk: "6 BHK",
      bath: "7 Bath",
      rating: 5
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "The Glass House Villa",
      price: "₹8.2 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "4,800 sqft",
      bhk: "5 BHK",
      bath: "5 Bath",
      rating: 5
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
      title: "Serene Valley Villa",
      price: "₹3.2 Cr",
      location: "Science City, Ahmedabad",
      sqft: "2,800 sqft",
      bhk: "4 BHK",
      bath: "3 Bath",
      rating: 4
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1628744276664-2d0497bad49c?auto=format&fit=crop&q=80&w=800",
      title: "Elysian Palms Villa",
      price: "₹6.4 Cr",
      location: "Satellite, Ahmedabad",
      sqft: "4,800 sqft",
      bhk: "5 BHK",
      bath: "5 Bath",
      rating: 4
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      title: "Golden Sands Villa",
      price: "₹4.8 Cr",
      location: "Vastrapur, Ahmedabad",
      sqft: "3,500 sqft",
      bhk: "4 BHK",
      bath: "4 Bath",
      rating: 5
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=800",
      title: "Azure Horizon Villa",
      price: "₹9.5 Cr",
      location: "CG Road, Ahmedabad",
      sqft: "5,500 sqft",
      bhk: "5 BHK",
      bath: "6 Bath",
      rating: 5
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800",
      title: "Hilltop Manor Villa",
      price: "₹3.8 Cr",
      location: "Gota, Ahmedabad",
      sqft: "3,200 sqft",
      bhk: "4 BHK",
      bath: "4 Bath",
      rating: 3
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      title: "Zenith Modern Villa",
      price: "₹15.0 Cr",
      location: "Navrangpura, Ahmedabad",
      sqft: "7,500 sqft",
      bhk: "6 BHK",
      bath: "8 Bath",
      rating: 5
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
      title: "The White Marble Villa",
      price: "₹5.9 Cr",
      location: "South Bopal, Ahmedabad",
      sqft: "4,200 sqft",
      bhk: "5 BHK",
      bath: "5 Bath",
      rating: 4
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-center px-4">
        <div className="inline-flex items-center justify-center p-3 bg-blue-400/20 rounded-2xl mb-6 text-blue-200">
          <Palmtree size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Modern Villa Collection</h1>
        <p className="text-blue-100/70 max-w-2xl mx-auto text-lg italic">
          "Exquisite contemporary villas designed for those who seek the ultimate in luxury, privacy, and architectural brilliance."
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">85+</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Premium Villas</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">₹3.2Cr</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Starting Range</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">Verified</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Luxury Selection</p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villaProps.map((p) => (
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

export default ModernVilla;
