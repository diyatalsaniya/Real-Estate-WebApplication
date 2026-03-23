import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import { Calendar, Phone, Mail, Globe, MapPin, Building, Home, ArrowLeft, Search } from 'lucide-react';
import { developersData } from '../data/developersData';

const DeveloperDetails = () => {
  const { name } = useParams();
  const [activeTab, setActiveTab] = useState('projects');
  const [tabSearchQuery, setTabSearchQuery] = useState('');

  const decodedName = decodeURIComponent(name || 'Developer Name');
  const devInfo = developersData.find((d) => d.name === decodedName);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-left">
      <Navbar />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-black">
        {/* Back Button */}
        <Link to="/developer" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6 font-medium">
            <ArrowLeft size={18} />
            Back to Developers
        </Link>

        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6">
          {/* Logo */}
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden">
            {devInfo && devInfo.logo ? (
              <img src={devInfo.logo} alt={devInfo.name} className="w-full h-full object-contain p-2" />
            ) : (
              <span className="text-3xl md:text-4xl font-bold text-gray-300">
                  {decodedName.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex-grow space-y-4 w-full">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{decodedName}</h1>
              <div className="flex items-center text-gray-500 text-sm gap-2">
                <Calendar size={15} />
                <span>Established in 2014</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-pointer">
                <Phone size={15} className="text-gray-400" />
                <span>+91 95745 87989</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-pointer">
                <Mail size={15} className="text-gray-400" />
                <span>contact@{(devInfo?.website || decodedName).replace(/\.com|\.in|\.co\.in/g, '').replace(/\s+/g, '').toLowerCase()}.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={15} className="text-gray-400" />
                {devInfo?.domain ? (
                  <a href={devInfo.domain} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">Website</a>
                ) : (
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Website</a>
                )}
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
              <span className="leading-relaxed">Rajpath Rangoli Road, Nr. Lakshya Pre School, Beside Shashwat Bunglows, Bodakdev, Ahmedabad, Gujarat 380054</span>
            </div>
            
            <div className="flex items-center gap-8 pt-6 mt-4 border-t border-gray-100">
              <div className="text-center group cursor-pointer" onClick={() => setActiveTab('projects')}>
                <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">0</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold mt-1">Projects</div>
              </div>
              <div className="text-center group cursor-pointer" onClick={() => setActiveTab('properties')}>
                <div className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors">0</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold mt-1">Properties</div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">About {decodedName}</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-[0.95rem]">
            For more than a decade, {decodedName} has been shaping the infrastructural skyline of India, becoming the builder of choice for numerous satisfied customers. In such a short span, we have earned the distinction of doing 3.7 million square feet of work so far and helping more than 1000+ families and 500+ entrepreneurs make their dreams come true. We are now in the process of reaching another milestone of 12 lakh square feet of up-market commercial spaces.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${activeTab === 'projects' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
            >
              <Building size={18} />
              Projects (0)
            </button>
            <button 
              onClick={() => setActiveTab('properties')}
              className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${activeTab === 'properties' ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
            >
              <Home size={18} />
              Properties (0)
            </button>
          </div>

          {/* Tab Content Header (Search Bar) */}
          <div className="p-4 border-b border-gray-100 bg-white flex justify-between items-center flex-wrap gap-4">
            <div className="relative w-full md:w-auto min-w-[300px]">
               <input 
                 type="text" 
                 placeholder={`Search inside ${activeTab}...`}
                 value={tabSearchQuery}
                 onChange={(e) => setTabSearchQuery(e.target.value)}
                 className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
               />
               <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="p-8 text-center text-gray-500 min-h-[16rem] flex flex-col justify-center items-center bg-gray-50/30">
             {activeTab === 'projects' ? (
                <>
                  <Building size={32} className="text-gray-300 mb-3" />
                  <p className="font-medium text-gray-600">No projects found.</p>
                  {tabSearchQuery && <p className="text-sm mt-1">We couldn't find any projects matching "{tabSearchQuery}"</p>}
                </>
             ) : (
                <>
                  <Home size={32} className="text-gray-300 mb-3" />
                  <p className="font-medium text-gray-600">No properties found.</p>
                  {tabSearchQuery && <p className="text-sm mt-1">We couldn't find any properties matching "{tabSearchQuery}"</p>}
                </>
             )}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default DeveloperDetails;
