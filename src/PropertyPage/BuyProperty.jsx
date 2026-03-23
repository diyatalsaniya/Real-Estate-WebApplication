import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import PropertyCard from '../components/PropertyCard';

const BuyProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const buyPropertiesPage1 = [
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
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Skyline Haven",
      price: "₹4.5 Cr",
      location: "Vastrapur, Ahmedabad",
      sqft: "3,500 sqft",
      bhk: "4 BHK",
      bath: "4 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      title: "Royal Penthouse",
      price: "₹12.0 Cr",
      location: "Bodakdev, Ahmedabad",
      sqft: "6,500 sqft",
      bhk: "2 BHK",
      bath: "7 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
      title: "The Grand Residency",
      price: "₹7.8 Cr",
      location: "Maninagar, Ahmedabad",
      sqft: "5,200 sqft",
      bhk: "5 BHK",
      bath: "6 Bath"
    }
  ];

  const buyPropertiesPage2 = [
    {
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800",
      title: "Crystal Vista",
      price: "₹2.8 Cr",
      location: "Satellite, Ahmedabad",
      sqft: "2,100 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=80&w=800",
      title: "Alpine Retreat",
      price: "₹2.2 Cr",
      location: "Sindhubhavan, Ahmedabad",
      sqft: "1,600 sqft",
      bhk: "3 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      title: "Elysian Fields",
      price: "₹6.4 Cr",
      location: "Prahlad Nagar, Ahmedabad",
      sqft: "4,800 sqft",
      bhk: "5 BHK",
      bath: "5 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      title: "Silver Oak Towers",
      price: "₹1.1 Cr",
      location: "Shela, Ahmedabad",
      sqft: "1,350 sqft",
      bhk: "2 BHK",
      bath: "2 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
      title: "Nature's Edge",
      price: "₹3.5 Cr",
      location: "Gurukul, Ahmedabad",
      sqft: "3,000 sqft",
      bhk: "4 BHK",
      bath: "4 Bath"
    },
    {
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800",
      title: "The Urban Oasis",
      price: "₹1.8 Cr",
      location: "Nikol, Ahmedabad",
      sqft: "1,950 sqft",
      bhk: "3 BHK",
      bath: "3 Bath"
    }
  ];

  const getCurrentProperties = () => {
    switch (currentPage) {
      case 1: return buyPropertiesPage1;
      case 2: return buyPropertiesPage2;
      default: return buyPropertiesPage1;
    }
  };

  const currentProperties = getCurrentProperties();

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-32 pb-12 bg-[#020617] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Properties For Buying</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore exclusive premium investment-grade real estate listings designed for full ownership.</p>
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
                    ? "bg-slate-900 border-slate-900 text-white shadow-md" 
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

export default BuyProperty;
