import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import PropertyCard from '../components/PropertyCard';

const RentProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const rentalPropertiesPage1 = [
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      title: "Modern Studio",
      price: "₹45,000 /mo",
      location: "South Bopal, Ahmedabad",
      sqft: "650 sqft",
      bhk: "1 BHK",
      bath: "1 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      title: "Cozy Apartment",
      price: "₹65,000 /mo",
      location: "Maninagar, Ahmedabad",
      sqft: "1,100 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      title: "Luxury Loft",
      price: "₹1.2 L /mo",
      location: "Vastrapur, Ahmedabad",
      sqft: "1,800 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800",
      title: "Sky View Flat",
      price: "₹55,000 /mo",
      location: "Gota, Ahmedabad",
      sqft: "950 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
      title: "Garden Villa",
      price: "₹2.5 L /mo",
      location: "Sindhubhavan, Ahmedabad",
      sqft: "3,200 sqft",
      bhk: "4 BHK",
      bath: "4 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
      title: "Bright Apartment",
      price: "₹35,000 /mo",
      location: "Thaltej, Ahmedabad",
      sqft: "800 sqft",
      bhk: "1 BHK",
      bath: "1 Bath"
    }
  ];

  const rentalPropertiesPage2 = [
    {
      image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      title: "Elite Penthouse",
      price: "₹3.5 L /mo",
      location: "Bodakdev, Ahmedabad",
      sqft: "4,500 sqft",
      bhk: "5 BHK",
      bath: "5 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      title: "The Minimalist",
      price: "₹40,000 /mo",
      location: "Satellite, Ahmedabad",
      sqft: "1,050 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1494438639946-1bd1b20bf250?auto=format&fit=crop&q=80&w=800",
      title: "Urban Corner",
      price: "₹50,000 /mo",
      location: "Prahlad Nagar, Ahmedabad",
      sqft: "1,200 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800",
      title: "Seaside Condo",
      price: "₹75,000 /mo",
      location: "Shela, Ahmedabad",
      sqft: "1,500 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?auto=format&fit=crop&q=80&w=800",
      title: "The Residency",
      price: "₹90,000 /mo",
      location: "Gurukul, Ahmedabad",
      sqft: "2,000 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&q=80&w=800",
      title: "Peaceful Manor",
      price: "₹28,000 /mo",
      location: "Nikol, Ahmedabad",
      sqft: "1,200 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    }
  ];

  const getCurrentProperties = () => {
    switch (currentPage) {
      case 1: return rentalPropertiesPage1;
      case 2: return rentalPropertiesPage2;
      default: return rentalPropertiesPage1;
    }
  };

  const currentProperties = getCurrentProperties();

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-32 pb-12 bg-[#1e293b] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Properties For Rent</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">Discover our curated list of exclusive rental properties that fit your lifestyle.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[#0f172a]">Showing Page {currentPage}</h2>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProperties.map((prop, index) => (
            <PropertyCard key={index} {...prop} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
            {[1, 2].map((page) => (
                <button 
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                    currentPage === page 
                    ? "bg-blue-600 border-blue-600 text-white shadow-md" 
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RentProperty;
