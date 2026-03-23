import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import PropertyCard from '../components/PropertyCard';
import Header from './Header';

const Property = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever search filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [location.search]);

  const allProperties = useMemo(() => [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Skyline Haven",
      price: "₹4.5 Cr",
      priceVal: 450, // in Lakhs
      location: "South Bopal, Ahmedabad",
      sqft: "3,500 sqft",
      bhk: "4 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      title: "Emerald Heights",
      price: "₹1.2 Cr",
      priceVal: 120,
      location: "Vastrapur, Ahmedabad",
      sqft: "1,250 sqft",
      bhk: "3 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
      title: "The Grand Residency",
      price: "₹7.8 Cr",
      priceVal: 780,
      location: "Thaltej, Ahmedabad",
      sqft: "5,200 sqft",
      bhk: "5 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      title: "Urban Pulse Suites",
      price: "₹85 L",
      priceVal: 85,
      location: "Maninagar, Ahmedabad",
      sqft: "950 sqft",
      bhk: "2 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
      title: "Serene Valley",
      price: "₹3.2 Cr",
      priceVal: 320,
      location: "Gota, Ahmedabad",
      sqft: "2,800 sqft",
      bhk: "4 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      title: "Royal Penthouse",
      price: "₹12.0 Cr",
      priceVal: 1200,
      location: "Bodakdev, Ahmedabad",
      sqft: "6,500 sqft",
      bhk: "5 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800",
      title: "Crystal Vista",
      price: "₹2.8 Cr",
      priceVal: 280,
      location: "Satellite, Ahmedabad",
      sqft: "2,100 sqft",
      bhk: "3 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
      title: "Maple Wood Manor",
      price: "₹1.5 Cr",
      priceVal: 150,
      location: "Sindhubhavan, Ahmedabad",
      sqft: "1,800 sqft",
      bhk: "3 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1628744276664-2d0497bad49c?auto=format&fit=crop&q=80&w=800",
      title: "Elysian Fields",
      price: "₹6.4 Cr",
      priceVal: 640,
      location: "Prahlad Nagar, Ahmedabad",
      sqft: "4,800 sqft",
      bhk: "5 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
      title: "Silver Oak Towers",
      price: "₹1.1 Cr",
      priceVal: 110,
      location: "Shela, Ahmedabad",
      sqft: "1,350 sqft",
      bhk: "2 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
      title: "Sunset Retreat",
      price: "₹45 L",
      priceVal: 45,
      location: "Gurukul, Ahmedabad",
      sqft: "1,200 sqft",
      bhk: "2 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      title: "Golden Palms Villa",
      price: "₹48 L",
      priceVal: 48,
      location: "Nikol, Ahmedabad",
      sqft: "2,000 sqft",
      bhk: "3 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=800",
      title: "Coastal Villa",
      price: "₹5.2 Cr",
      priceVal: 520,
      location: "Ambli, Ahmedabad",
      sqft: "4,000 sqft",
      bhk: "4 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
      title: "Spring Meadows",
      price: "₹95 L",
      priceVal: 95,
      location: "Chandkheda, Ahmedabad",
      sqft: "1,500 sqft",
      bhk: "3 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=80&w=800",
      title: "Lakeside Penthouse",
      price: "₹2.2 Cr",
      priceVal: 220,
      location: "Vejalpur, Ahmedabad",
      sqft: "2,600 sqft",
      bhk: "4 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600047508788-786f3865b4b9?auto=format&fit=crop&q=80&w=800",
      title: "Blue Bell Residences",
      price: "₹18 L",
      priceVal: 18,
      location: "Rakhial, Ahmedabad",
      sqft: "850 sqft",
      bhk: "1 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800",
      title: "Hilltop Manor",
      price: "₹3.8 Cr",
      priceVal: 380,
      location: "Science City, Ahmedabad",
      sqft: "3,200 sqft",
      bhk: "4 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      title: "The White House",
      price: "₹24 L",
      priceVal: 24,
      location: "Odhav, Ahmedabad",
      sqft: "1,100 sqft",
      bhk: "2 BHK",
      type: "apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
      title: "Woodland Villa",
      price: "₹42 L",
      priceVal: 42,
      location: "Hathijan, Ahmedabad",
      sqft: "1,800 sqft",
      bhk: "3 BHK",
      type: "villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Metro Heights",
      price: "₹65 L",
      priceVal: 65,
      location: "Navrangpura, Ahmedabad",
      sqft: "1,400 sqft",
      bhk: "3 BHK",
      type: "apartment"
    }
  ], []);

  const filteredProperties = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const locFilter = searchParams.get('location')?.toLowerCase() || '';
    const typeFilter = searchParams.get('type') || '';
    const priceFilter = searchParams.get('price') || '';
    const bhkFilter = searchParams.get('bhk') || '';

    return allProperties.filter(p => {
      // 1. Location match
      if (locFilter && !p.location.toLowerCase().includes(locFilter)) return false;
      // 2. Type match
      if (typeFilter && p.type !== typeFilter) return false;
      // 3. BHK match
      if (bhkFilter) {
        const pBhkNum = parseInt(p.bhk);
        if (bhkFilter === '4+') {
          if (pBhkNum < 4) return false;
        } else {
          if (pBhkNum !== parseInt(bhkFilter)) return false;
        }
      }
      // 4. Price match
      if (priceFilter) {
        if (priceFilter === 'under25' && p.priceVal >= 25) return false;
        if (priceFilter === '25to50' && (p.priceVal < 25 || p.priceVal > 50)) return false;
        if (priceFilter === '50to1cr' && (p.priceVal < 50 || p.priceVal > 100)) return false;
        if (priceFilter === 'above1cr' && p.priceVal < 100) return false;
      }
      return true;
    });
  }, [location.search, allProperties]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const currentProperties = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilters = () => navigate('/properties');

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[#0f172a]">
            {filteredProperties.length > 0 ? `Showing ${filteredProperties.length} results` : 'No results found'}
          </h2>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProperties.map((prop, index) => (
              <PropertyCard key={index} {...prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-6 flex justify-center text-gray-300">
               <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No matching properties found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your filters or search terms for better results.</p>
            <button 
              onClick={resetFilters}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination (only if more than 1 page) */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Property;
