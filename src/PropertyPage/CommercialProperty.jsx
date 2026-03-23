import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import PropertyCard from '../components/PropertyCard';

const CommercialProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const commercialPropertiesPage1 = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      title: "Global Business Center",
      price: "₹18.5 Cr",
      location: "Bodakdev, Ahmedabad",
      sqft: "12,000 sqft",
      bhk: "Office Space",
      bath: "8 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      title: "Corporate Tower A",
      price: "₹12.2 Cr",
      location: "Prahlad Nagar, Ahmedabad",
      sqft: "8,500 sqft",
      bhk: "Co-working",
      bath: "6 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      title: "Tech Park One",
      price: "₹25.0 Cr",
      location: "Gota, Ahmedabad",
      sqft: "20,000 sqft",
      bhk: "IT Office",
      bath: "12 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      title: "Prime Retail Mall Suite",
      price: "₹5.8 Cr",
      location: "Vastrapur, Ahmedabad",
      sqft: "3,200 sqft",
      bhk: "Retail Outlet",
      bath: "2 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
      title: "Emerald Plaza Offices",
      price: "₹7.4 Cr",
      location: "Satellite, Ahmedabad",
      sqft: "5,500 sqft",
      bhk: "Office Space",
      bath: "4 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      title: "The Meeting Point",
      price: "₹3.2 Cr",
      location: "Thaltej, Ahmedabad",
      sqft: "2,400 sqft",
      bhk: "Commercial Hub",
      bath: "3 Washrooms"
    }
  ];

  const commercialPropertiesPage2 = [
    {
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
      title: "Summit Business Bay",
      price: "₹22.5 Cr",
      location: "South Bopal, Ahmedabad",
      sqft: "15,000 sqft",
      bhk: "Full Floor",
      bath: "10 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
      title: "Gateway IT Park",
      price: "₹14.8 Cr",
      location: "Sindhubhavan, Ahmedabad",
      sqft: "10,500 sqft",
      bhk: "Tech Floor",
      bath: "7 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
      title: "Metro Plaza",
      price: "₹6.9 Cr",
      location: "Maninagar, Ahmedabad",
      sqft: "4,200 sqft",
      bhk: "Showroom",
      bath: "3 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
      title: "Iconic Tower",
      price: "₹35.0 Cr",
      location: "Shela, Ahmedabad",
      sqft: "25,000 sqft",
      bhk: "Grade A Office",
      bath: "15 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&q=80&w=800",
      title: "Business Hub",
      price: "₹8.2 Cr",
      location: "Gurukul, Ahmedabad",
      sqft: "6,000 sqft",
      bhk: "Office Floor",
      bath: "5 Washrooms"
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      title: "The Executive Suites",
      price: "₹4.5 Cr",
      location: "Nikol, Ahmedabad",
      sqft: "3,500 sqft",
      bhk: "Executive Office",
      bath: "4 Washrooms"
    }
  ];

  const getCurrentProperties = () => {
    switch (currentPage) {
      case 1: return commercialPropertiesPage1;
      case 2: return commercialPropertiesPage2;
      default: return commercialPropertiesPage1;
    }
  };

  const currentProperties = getCurrentProperties();

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-32 pb-12 bg-[#1e293b] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Properties</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">Elevate your business with our premium selection of office spaces and retail hubs.</p>
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

export default CommercialProperty;
