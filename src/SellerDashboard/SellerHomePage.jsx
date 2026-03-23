import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, LayoutGrid, Home, MessageSquare, TrendingUp, Clock, Award, Users, Plus } from 'lucide-react';

import PropertyImg1 from '../assets/SellerProperty/Image1.jpg';
import PropertyImg2 from '../assets/SellerProperty/Image2.jpg';
import PropertyImg3 from '../assets/SellerProperty/Image3.jpg';

const OVERVIEW_CARDS = [
  { label: 'Total Properties', value: '4', icon: Home, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Active Listings', value: '2', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Pending Review', value: '1', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Sold Properties', value: '1', icon: Award, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { label: 'Total Inquiries', value: '4', icon: Users, color: 'text-gray-500', bg: 'bg-gray-100' },
];

const RECENT_LISTINGS = [
  {
    id: 1,
    title: 'Modern Villa in Bandra',
    location: 'Bodakdev, Ahmedabad',
    price: '₹85.00 L',
    status: 'Active',
    img: PropertyImg1,
  },
  {
    id: 2,
    title: 'Studio Apartment, Koramangala',
    location: 'Satellite, Ahmedabad',
    price: '₹45.00 L',
    status: 'Pending',
    img: PropertyImg2,
  },
  {
    id: 3,
    title: '3BHK Sea-Facing Flat',
    location: 'Vastrapur, Ahmedabad',
    price: '₹1.20 Cr',
    status: 'Sold',
    img: PropertyImg3,
  },
];

const RECENT_INQUIRIES = [
  { id: 1, name: 'Rahul Sharma', property: 'Modern Villa in Bandra', msg: 'Interested in viewing this weekend. Is Saturday mo...', status: 'Pending', color: 'bg-yellow-500' },
  { id: 2, name: 'Priya Mehta', property: 'Modern Villa in Bandra', msg: 'I have a home loan pre-approval. Can we discuss th...', status: 'Accepted', color: 'bg-emerald-500' },
  { id: 3, name: 'Amit Patel', property: 'Studio Apartment, Koramangala', msg: 'Is the apartment furnished? Looking for immediate ...', status: 'Rejected', color: 'bg-rose-500' },
  { id: 4, name: 'Sneha Gupta', property: 'Commercial Office Space', msg: 'Looking for office space for 15 employees. Row h...', status: 'Pending', color: 'bg-yellow-500' },
];

const SellerHomePage = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen text-gray-800 font-sans">
      
      {/* ── Sidebar ── */}
      <aside className="w-[260px] bg-[#0A1128] text-white flex flex-col h-screen sticky top-0 shrink-0">
        
        {/* Logo block */}
        <div className="p-6 flex items-center gap-4 mt-2">
          <div className="w-12 h-12 bg-[#D4A373] rounded-xl flex items-center justify-center text-2xl font-serif font-bold text-white shadow-lg">
            N
          </div>
          <div>
            <h1 className="font-serif font-bold text-xl leading-tight tracking-wide text-white">NestNova</h1>
            <p className="text-[#8492a6] text-[0.7rem] font-medium tracking-widest uppercase mt-0.5">Seller Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 mt-8">
          <p className="text-[#3b4b6b] text-[0.65rem] font-bold mb-4 uppercase tracking-widest ml-3">Main Menu</p>
          <ul className="space-y-1.5">
            <li>
              <button 
                onClick={() => setActiveTab('Overview')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-semibold rounded-xl outline-none shadow-sm transition-all border-l-4
                ${activeTab === 'Overview' ? 'bg-white/5 text-white border-[#D4A373]' : 'text-[#8492a6] border-transparent hover:text-white hover:bg-white/5'}`}
              >
                <LayoutGrid className={`w-5 h-5 ${activeTab === 'Overview' ? 'text-[#D4A373]' : ''}`} />
                Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('My Properties')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl outline-none shadow-sm transition-all border-l-4
                ${activeTab === 'My Properties' ? 'bg-white/5 text-white border-[#D4A373]' : 'text-[#8492a6] border-transparent hover:text-white hover:bg-white/5'}`}
              >
                <Home className={`w-5 h-5 ${activeTab === 'My Properties' ? 'text-[#D4A373]' : ''}`} />
                My Properties
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('Inquiries')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl outline-none shadow-sm transition-all border-l-4
                ${activeTab === 'Inquiries' ? 'bg-white/5 text-white border-[#D4A373]' : 'text-[#8492a6] border-transparent hover:text-white hover:bg-white/5'}`}
              >
                <MessageSquare className={`w-5 h-5 ${activeTab === 'Inquiries' ? 'text-[#D4A373]' : ''}`} />
                Inquiries
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-5">
          <div className="bg-white/5 rounded-2xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D4A373] rounded-md flex items-center justify-center text-sm font-bold shadow-inner">
              VS
            </div>
            <div>
              <p className="text-sm font-bold text-white">Vikram Singh</p>
              <p className="text-xs font-medium text-[#8492a6]">Premium Seller</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Dashboard ── */}
      <main className="flex-1 px-8 py-10 lg:px-12 overflow-y-auto">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-serif text-[#0A1128] font-bold mb-1.5">
              {activeTab === 'Overview' && 'Dashboard Overview'}
              {activeTab === 'My Properties' && 'My Properties'}
              {activeTab === 'Inquiries' && 'Recent Inquiries'}
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              {activeTab === 'Overview' && "Welcome back! Here's what's happening with your listings."}
              {activeTab === 'My Properties' && 'Manage and view all your property listings in one place.'}
              {activeTab === 'Inquiries' && 'Review and respond to all your buyer and renter inquiries.'}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-[#0A1128] hover:border-gray-300 transition-all shadow-sm">
              <Bell className="w-5 h-5" />
            </button>
            <Link 
              to="/seller/add-property" 
              className="flex items-center gap-2 bg-[#D4A373] text-white px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide hover:bg-[#c69362] transition-colors shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add Property
            </Link>
          </div>
        </div>

        {/* ── Overview Tab Content ── */}
        {activeTab === 'Overview' && (
          <>
            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
              {OVERVIEW_CARDS.map((card, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.bg} ${card.color}`}>
                      <card.icon className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1128]">{card.value}</h3>
                  </div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{card.label}</p>
                </div>
              ))}
            </div>

            {/* 2 Column Section: Recent Listings & Recent Inquiries */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Recent Listings */}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-serif font-bold text-[#0A1128]">Recent Listings</h3>
                  <button onClick={() => setActiveTab('My Properties')} className="text-sm font-medium text-[#D4A373] hover:text-[#b88555] flex items-center gap-1 transition-colors">
                    View All 
                  </button>
                </div>
                
                <div className="space-y-4">
                  {RECENT_LISTINGS.map(item => (
                    <div key={item.id} className="group flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <img src={item.img} alt={item.title} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                        <div>
                          <h4 className="text-[0.95rem] font-bold text-[#0A1128] group-hover:text-[#D4A373] transition-colors">{item.title}</h4>
                          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            {item.location}
                          </p>
                          <p className="text-[#D4A373] font-bold text-sm mt-1.5">{item.price}</p>
                        </div>
                      </div>
                      <div className={`
                        px-3 py-1 rounded-md text-xs font-bold border
                        ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
                        ${item.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : ''}
                        ${item.status === 'Sold' ? 'bg-gray-100 text-gray-500 border-gray-200' : ''}
                      `}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Inquiries */}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-serif font-bold text-[#0A1128]">Recent Inquiries</h3>
                  <button onClick={() => setActiveTab('Inquiries')} className="text-sm font-medium text-[#D4A373] hover:text-[#b88555] flex items-center gap-1 transition-colors">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {RECENT_INQUIRIES.map(inq => (
                    <div key={inq.id} className="group flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 ${inq.color} rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}>
                          {inq.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-[0.95rem] font-bold text-[#0A1128]">{inq.name}</h4>
                          <p className="text-xs text-gray-500 font-medium mt-0.5">{inq.property}</p>
                          <p className="text-xs text-gray-400 mt-1.5 line-clamp-1">{inq.msg}</p>
                        </div>
                      </div>
                      <div className={`
                        px-3 py-1 rounded-md text-xs font-bold border ml-2 shrink-0
                        ${inq.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : ''}
                        ${inq.status === 'Accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
                        ${inq.status === 'Rejected' ? 'bg-rose-50 text-rose-600 border-rose-100' : ''}
                      `}>
                        {inq.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── My Properties Tab Content ── */}
        {activeTab === 'My Properties' && (
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 max-w-4xl">
            <div className="space-y-4">
              {RECENT_LISTINGS.map(item => (
                <div key={item.id} className="group flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <img src={item.img} alt={item.title} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                    <div>
                      <h4 className="text-[0.95rem] font-bold text-[#0A1128] group-hover:text-[#D4A373] transition-colors">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        {item.location}
                      </p>
                      <p className="text-[#D4A373] font-bold text-sm mt-1.5">{item.price}</p>
                    </div>
                  </div>
                  <div className={`
                    px-3 py-1 rounded-md text-xs font-bold border
                    ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
                    ${item.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : ''}
                    ${item.status === 'Sold' ? 'bg-gray-100 text-gray-500 border-gray-200' : ''}
                  `}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Inquiries Tab Content ── */}
        {activeTab === 'Inquiries' && (
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 max-w-4xl">
            <div className="space-y-4">
              {RECENT_INQUIRIES.map(inq => (
                <div key={inq.id} className="group flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${inq.color} rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}>
                      {inq.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-[0.95rem] font-bold text-[#0A1128]">{inq.name}</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{inq.property}</p>
                      <p className="text-xs text-gray-400 mt-1.5 line-clamp-1">{inq.msg}</p>
                    </div>
                  </div>
                  <div className={`
                    px-3 py-1 rounded-md text-xs font-bold border ml-2 shrink-0
                    ${inq.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : ''}
                    ${inq.status === 'Accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
                    ${inq.status === 'Rejected' ? 'bg-rose-50 text-rose-600 border-rose-100' : ''}
                  `}>
                    {inq.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default SellerHomePage;
