import React, { useRef } from 'react';
import { Maximize, BedDouble, Bath, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Section1 = () => {
  const scrollRef = useRef(null);

  const properties = [
    { id: 1, title: "Skyline Haven", price: "₹4.5 Cr", sqft: "3,500", beds: 4, baths: 4, img: "/PropertyImage/House1.jpg" },
    { id: 2, title: "Emerald Heights", price: "₹1.2 Cr", sqft: "1,250", beds: 3, baths: 2, img: "/PropertyImage/Interior1.jpg" },
    { id: 3, title: "The Grand Residency", price: "₹7.8 Cr", sqft: "5,200", beds: 5, baths: 6, img: "/PropertyImage/Villa1.jpg" },
    { id: 4, title: "Urban Pulse Suites", price: "₹85 L", sqft: "950", beds: 2, baths: 1, img: "/PropertyImage/House2.jpg" },
    { id: 5, title: "Serene Valley", price: "₹3.2 Cr", sqft: "2,800", beds: 4, baths: 3, img: "/PropertyImage/Villa2.jpg" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -340 : 340,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header Row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1" />

          <h2 className="text-3xl font-bold text-gray-800 flex-1 text-center">Fresh Properties</h2>

          {/* Scroll Arrows */}
          <div className="flex gap-2 flex-1 justify-end">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {properties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow shrink-0"
              style={{ width: 'calc((100% - 40px) / 3)' }}
            >
              {/* Image */}
              <div className="aspect-video">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover"/>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-bold text-gray-800 truncate">{item.title}</h3>
                  <span className="text-blue-600 font-bold text-sm ml-2 whitespace-nowrap">{item.price}</span>
                </div>

                <p className="flex items-center text-gray-400 text-xs mb-4">
                  <MapPin size={11} className="mr-1" /> Mumbai, India
                </p>

                {/* Features */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-gray-500">
                  <div className="flex items-center gap-1">
                    <Maximize size={13} className="text-gray-400" />
                    <span className="text-xs">{item.sqft} sqft</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BedDouble size={13} className="text-gray-400" />
                    <span className="text-xs">{item.beds} BHK</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={13} className="text-gray-400" />
                    <span className="text-xs">{item.baths} Bath</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <button className="border-2 border-gray-800 text-gray-800 px-8 py-2.5 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors text-sm">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section1;