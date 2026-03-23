import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Search, IndianRupee } from 'lucide-react';
import PropertyHome from '../assets/PropertyImage/PropertyHome.jpg';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state from URL
  const [filters, setFilters] = useState({
    location: '',
    price: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setFilters({
      location: searchParams.get('location') || '',
      price: searchParams.get('price') || ''
    });
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.append('location', filters.location);
    if (filters.price) params.append('price', filters.price);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[500px] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={PropertyHome} 
          alt="Property Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Neutral Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Subtle patterns overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        
        {/* Headline */}
        <div className="text-center mb-10 md:mb-12 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            Find Your Dream <span className="text-blue-400">Property</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-200 font-medium">
            Explore the best real estate options matching your lifestyle.
          </p>
        </div>

        {/* Search Card - White rounded-2xl */}
        <div className="w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-4 sm:p-5 md:p-6 flex flex-col md:flex-row items-center gap-4">
          
          {/* Location Input */}
          <div className="w-full md:w-[60%] relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <MapPin className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            </div>
            <input 
              type="text" 
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="Search by Area, Property Type and Location..."
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all hover:border-gray-300"
            />
          </div>

          {/* Desktop Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-200 shrink-0"></div>

          {/* Filters Grid */}
          <div className="w-full md:w-[20%] grid grid-cols-1 gap-3 md:gap-4">
            


            {/* Price Range Dropdown */}
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <IndianRupee className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              </div>
              <select 
                name="price"
                value={filters.price}
                onChange={handleChange}
                className="appearance-none w-full pl-10 pr-8 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:border-gray-300"
              >
                <option value="">Price Range</option>
                <option value="under25">Under 25L</option>
                <option value="25to50">25L - 50L</option>
                <option value="50to1cr">50L - 1Cr</option>
                <option value="above1cr">1Cr+</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>



          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto shrink-0 mt-2 md:mt-0">
            <button 
              onClick={handleSearch}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-[0_4px_12px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 active:scale-[0.98]">
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Header;
