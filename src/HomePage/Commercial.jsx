import React from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import Footer from './Footer';
import { Briefcase } from 'lucide-react';

const Commercial = () => {
  const commercialProps = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      title: "Global Business Center",
      price: "₹18.5 Cr",
      location: "CG Road, Ahmedabad",
      sqft: "12,000 sqft",
      bhk: "Office Space",
      bath: "8 Washrooms",
      rating: 5
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      title: "Corporate Tower A",
      price: "₹12.2 Cr",
      location: "Science City, Ahmedabad",
      sqft: "8,500 sqft",
      bhk: "Co-working",
      bath: "6 Washrooms",
      rating: 4
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      title: "Tech Park One",
      price: "₹25.0 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "20,000 sqft",
      bhk: "IT Office",
      bath: "12 Washrooms",
      rating: 5
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      title: "Prime Retail Mall Suite",
      price: "₹5.8 Cr",
      location: "Sindhubhavan, Ahmedabad",
      sqft: "3,200 sqft",
      bhk: "Retail Outlet",
      bath: "2 Washrooms",
      rating: 3
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
      title: "Emerald Plaza Offices",
      price: "₹7.4 Cr",
      location: "Navrangpura, Ahmedabad",
      sqft: "5,500 sqft",
      bhk: "Office Space",
      bath: "4 Washrooms",
      rating: 4
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      title: "The Meeting Point",
      price: "₹3.2 Cr",
      location: "Vastrapur, Ahmedabad",
      sqft: "2,400 sqft",
      bhk: "Commercial Hub",
      bath: "3 Washrooms",
      rating: 3
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
      title: "Summit Business Bay",
      price: "₹22.5 Cr",
      location: "Satellite, Ahmedabad",
      sqft: "15,000 sqft",
      bhk: "Full Floor",
      bath: "10 Washrooms",
      rating: 5
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
      title: "Gateway IT Park",
      price: "₹14.8 Cr",
      location: "Gota, Ahmedabad",
      sqft: "10,500 sqft",
      bhk: "Tech Floor",
      bath: "7 Washrooms",
      rating: 4
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
      title: "Metro Plaza",
      price: "₹6.9 Cr",
      location: "South Bopal, Ahmedabad",
      sqft: "4,200 sqft",
      bhk: "Showroom",
      bath: "3 Washrooms",
      rating: 3
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-center px-4">
        <div className="inline-flex items-center justify-center p-3 bg-teal-600/20 rounded-2xl mb-6 text-teal-400">
          <Briefcase size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Property Collection</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          "Strategic business locations and state-of-the-art office spaces for modern enterprises."
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">120+</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Business Units</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">₹3.2Cr</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Starting Price</p>
          </div>
          <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">A+ Grade</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Building Rating</p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialProps.map((p) => (
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

export default Commercial;
