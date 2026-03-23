import React from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import Footer from './Footer';
import { Building2 } from 'lucide-react';

const Apartment = () => {
  const apartmentProps = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-f1d3ac1ef730?auto=format&fit=crop&q=80&w=800",
      title: "Skyline Luxury Suites",
      price: "₹2.2 Cr",
      location: "Satellite, Ahmedabad",
      sqft: "1,450 sqft",
      bhk: "3 BHK",
      bath: "3 Bath",
      rating: 5
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      title: "Emerald Heights Apartment",
      price: "₹1.2 Cr",
      location: "Navrangpura, Ahmedabad",
      sqft: "1,250 sqft",
      bhk: "2 BHK",
      bath: "2 Bath",
      rating: 4
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      title: "Urban Pulse Residency",
      price: "₹1.8 Cr",
      location: "Gota, Ahmedabad",
      sqft: "1,600 sqft",
      bhk: "3 BHK",
      bath: "3 Bath",
      rating: 4
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
      title: "Grand Horizon Plaza",
      price: "₹3.5 Cr",
      location: "CG Road, Ahmedabad",
      sqft: "2,200 sqft",
      bhk: "4 BHK",
      bath: "4 Bath",
      rating: 5
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800",
      title: "Sapphire Towers",
      price: "₹1.1 Cr",
      location: "Maninagar, Ahmedabad",
      sqft: "1,150 sqft",
      bhk: "2 BHK",
      bath: "2 Bath",
      rating: 3
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1493246318656-5bbd4cfb29ad?auto=format&fit=crop&q=80&w=800",
      title: "Pearl Vista Apartments",
      price: "₹95 L",
      location: "Vastrapur, Ahmedabad",
      sqft: "950 sqft",
      bhk: "2 BHK",
      bath: "2 Bath",
      rating: 3
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800",
      title: "The Royal Crest",
      price: "₹4.2 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "2,800 sqft",
      bhk: "4 BHK",
      bath: "4 Bath",
      rating: 5
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      title: "Silver Moon Residency",
      price: "₹75 L",
      location: "South Bopal, Ahmedabad",
      sqft: "850 sqft",
      bhk: "1 BHK",
      bath: "1 Bath",
      rating: 3
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&q=80&w=800",
      title: "Metropolis Heights",
      price: "₹2.9 Cr",
      location: "Science City, Ahmedabad",
      sqft: "1,950 sqft",
      bhk: "3 BHK",
      bath: "3 Bath",
      rating: 4
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-center px-4">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-600/20 rounded-2xl mb-6 text-indigo-400">
          <Building2 size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Luxury Apartment Collection</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          "Modern high-rise living with world-class amenities and breathtaking city views."
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">250+</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Available Units</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">₹75L</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Starting Price</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">Premium</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location Status</p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartmentProps.map((p) => (
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

export default Apartment;
