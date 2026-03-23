import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../HomePage/Footer";
import { Search, MapPin, Building2, Star } from "lucide-react";
import SplitText from "../HomePage/SplitText";
import LightRays from "./LightRays";
import { developersData } from "../data/developersData";

const DeveloperPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const [filteredDevelopers, setFilteredDevelopers] = useState(developersData);

  const handleSearch = (e) => {
    e.preventDefault();
    
    const results = developersData.filter((dev) => {
      // name match (lowercase, includes)
      const matchesSearch = dev.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // property type match
      const matchesType = propertyType ? dev.targetType === propertyType : true;

      return matchesSearch && matchesType;
    });

    setFilteredDevelopers(results);
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* ════════════════════════════════════════════
          HERO & SEARCH SECTION
      ════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 bg-black overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-md mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-md mix-blend-screen" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-[1]" />
          
          <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 2 }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays opacity-40 mix-blend-screen"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <SplitText
            text="Find Top Real Estate Developers"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6 drop-shadow-lg"
            delay={30}
            duration={1}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            tag="h1"
          />

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-12 animate-fade-in-up">
            Connect with trusted builders, explore their ongoing projects, and
            find the perfect partner for your dream property.
          </p>

          {/* ── Search Bar ── */}
          <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl md:rounded-md p-2 md:p-3 transition-all duration-300 shadow-xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-0"
            >
              {/* Developer Name Search */}
              <div className="w-full relative flex items-center md:border-r border-gray-200 md:pr-2 group">
                <Search
                  className="absolute left-4 text-gray-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Builder or Agency Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 py-3 pl-12 pr-4 focus:outline-none focus:ring-0 text-base"
                />
              </div>

              {/* Property Type Focus */}
              <div className="w-full relative flex items-center group mt-2 md:mt-0 md:mr-2">
                <Building2
                  className="absolute left-4 text-gray-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 py-3 pl-12 pr-4 outline-none focus:outline-none focus:ring-0 text-base appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Project Type
                  </option>
                  <option value="residential" className="text-gray-900 bg-white">Residential</option>
                  <option value="commercial" className="text-gray-900 bg-white">Commercial</option>
                  <option value="mixed" className="text-gray-900 bg-white">Mixed Use</option>
                  <option value="villas" className="text-gray-900 bg-white">Villas</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl md:rounded-md transition-all shadow-md hover:shadow-lg mt-2 md:mt-0 flex items-center justify-center gap-2"
              >
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURED DEVELOPERS PREVIEW
      ════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 w-full max-w-7xl mx-auto flex-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Partner with the most trusted and reputable real estate developers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover top-rated developers with a proven track record of
            delivering exceptional properties on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDevelopers.map((dev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full"
              style={{ boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' }}
            >
              {/* Top Banner half */}
              <div className="h-44 bg-[#f4f6f8] relative flex items-center justify-center">
                 {/* Rating badge */}
                 <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-md text-xs font-bold text-yellow-500 flex items-center gap-1 shadow-sm">
                   <Star size={12} fill="currentColor" /> 4.9+
                 </div>
                 
                 {/* Logo Circle */}
                 <div className="bg-white rounded-md shadow-sm w-24 h-24 flex items-center justify-center overflow-hidden border border-gray-50 p-4">
                    {dev.logo ? (
                      <img src={dev.logo} alt={dev.name} className="w-full h-full object-contain" />
                    ) : (
                      <Building2 size={36} className="text-[#1e3a8a]" />
                    )}
                 </div>
              </div>

              {/* Bottom Content half */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[1.3rem] leading-tight font-semibold text-[#1e3a8a] mb-1.5 font-serif">
                  {dev.name}
                </h3>
                <a 
                  href={dev.domain} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 text-sm mb-6 transition-colors"
                >
                  {dev.website}
                </a>

                {/* Footer section of card */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-sm">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <MapPin size={15} /> {dev.location}
                  </span>
                  
                  <Link 
                    to={`/developer/${encodeURIComponent(dev.name)}`}
                    className="button-48 bg-[#f4f6f8]"
                    role="button"
                  >
                    <span className="text flex items-center gap-1.5 capitalize font-serif font-semibold text-gray-700">View Profile <span className="text-base leading-none">&rarr;</span></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDevelopers.length === 0 && (
          <div className="col-span-full py-16 text-center flex flex-col items-center">
            <Building2 size={48} className="text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">No Developers Found</h3>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">Try adjusting your search query, location, or property type to find what you are looking for.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default DeveloperPage;
