import React from 'react';
import { Maximize, BedDouble, Bath, MapPin } from 'lucide-react';

const Section5 = () => {
  const properties = [
    { id: 1, title: "Skyline Haven", price: "₹4.5 Cr", sqft: "3,500", beds: 4, baths: 4, img: "/PropertyImage/House1.jpg" },
    { id: 2, title: "Emerald Heights", price: "₹1.2 Cr", sqft: "1,250", beds: 3, baths: 2, img: "/PropertyImage/Interior1.jpg" },
    { id: 3, title: "The Grand Residency", price: "₹7.8 Cr", sqft: "5,200", beds: 5, baths: 6, img: "/PropertyImage/Villa1.jpg" },
    { id: 4, title: "Urban Pulse Suites", price: "₹85 L", sqft: "950", beds: 6, baths: 1, img: "/PropertyImage/House2.jpg" },
    { id: 5, title: "Serene Valley", price: "₹3.2 Cr", sqft: "2,800", beds: 4, baths: 3, img: "/PropertyImage/Villa2.jpg" },
    { id: 6, title: "Royal Penthouse", price: "₹12.0 Cr", sqft: "6,500", beds: 2, baths: 7, img: "/PropertyImage/House3.jpg" },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto"> {/* Reduced max-width for a tighter grid */}
        
        {/* Centered Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Find Your Properties</h2>
          <p className="text-gray-500 text-sm mt-2">Handpicked listings for you</p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((item) => (
            <div key={item.id} className="bg-white rounded-md overflow-hidden border border-gray-200 shadow-sm">
              
              {/* Image Container */}
              <div className="aspect-video"> {/* Forces a shorter, wide image size */}
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Details Content */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <span className="text-blue-600 font-bold">{item.price}</span>
                </div>
                
                <p className="flex items-center text-gray-400 text-xs mb-4">
                  <MapPin size={12} className="mr-1" /> Mumbai, India
                </p>

                {/* Property Features - Smaller size */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-gray-500">
                  <div className="flex items-center gap-1">
                    <Maximize size={14} className="text-gray-400" />
                    <span className="text-xs">{item.sqft} sqft</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BedDouble size={14} className="text-gray-400" />
                    <span className="text-xs">{item.beds} BHK</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={14} className="text-gray-400" />
                    <span className="text-xs">{item.baths} Bath</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered View More Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-gray-800 text-gray-800 px-8 py-2.5 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors text-sm">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section5;