import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../HomePage/Footer';
import { User, Mail, Phone, MapPin, Edit2, Settings, Heart, Bell, History, LogOut, Camera } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Dummy user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Ahmedabad, India",
    profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    memberSince: "March 2024",
    savedProperties: 12,
    searches: 45
  };

  const tabs = [
    { name: 'Overview', icon: <User size={18} /> },
    { name: 'Saved', icon: <Heart size={18} /> },
    { name: 'History', icon: <History size={18} /> },
    { name: 'Settings', icon: <Settings size={18} /> }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <div className="pt-32 pb-48 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">User Profile</h1>
          <p className="text-gray-400">Manage your account settings and property interests</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 pb-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            
            {/* Sidebar / Profile Summary */}
            <div className="w-full md:w-80 bg-gray-50/50 border-r border-gray-100 p-8 flex flex-col items-center">
              <div className="relative group mb-6">
                <div className="w-32 h-32 rounded-md overflow-hidden border-4 border-white shadow-lg relative">
                  <img 
                    src={userData.profilePic} 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <button className="absolute bottom-1 right-1 bg-blue-600 text-white p-2 rounded-md shadow-md hover:bg-blue-700 transition-all border-2 border-white">
                  <Camera size={16} />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-1">{userData.name}</h2>
              <p className="text-gray-500 text-sm mb-6 font-medium">Verified Property Buyer</p>

              <div className="w-full space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-600 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Mail size={16} /></div>
                  <span className="text-xs font-semibold truncate">{userData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Phone size={16} /></div>
                  <span className="text-xs font-semibold">{userData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><MapPin size={16} /></div>
                  <span className="text-xs font-semibold">{userData.location}</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg mb-4">
                <Edit2 size={16} />
                <span>Edit Profile</span>
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 font-semibold py-3 rounded-xl transition-all border border-transparent hover:border-red-100">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-8 md:p-10">
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 pb-4">
                {tabs.map((tab) => (
                  <button 
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all
                      ${activeTab === tab.name 
                        ? 'bg-[#0f172a] text-white shadow-lg' 
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Based on Tab */}
              {activeTab === 'Overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl text-white shadow-lg">
                      <div className="flex justify-between items-center mb-4">
                        <Heart size={24} className="opacity-80" />
                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">Saved</span>
                      </div>
                      <div className="text-3xl font-bold mb-1">{userData.savedProperties}</div>
                      <div className="text-sm opacity-80">Saved Properties</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-800 to-[#0f172a] rounded-3xl text-white shadow-lg">
                      <div className="flex justify-between items-center mb-4">
                        <History size={24} className="opacity-80" />
                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">History</span>
                      </div>
                      <div className="text-3xl font-bold mb-1">{userData.searches}</div>
                      <div className="text-sm opacity-80">Recent Searches</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all cursor-pointer group">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <img 
                            src={`https://images.unsplash.com/photo-${1600585154340 + i}-be6161a56a0c?auto=format&fit=crop&q=80&w=200`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                            alt="Property" 
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">Viewed "Emerald Heights Villa"</h4>
                          <p className="text-xs text-gray-500">2 hours ago • South Bopal, Ahmedabad</p>
                        </div>
                        <div className="text-blue-600 font-bold text-sm">₹4.5 Cr</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Saved' && (
                <div className="text-center py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-50 text-pink-500 rounded-md mb-6">
                    <Heart size={40} fill="currentColor" opacity={0.2} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">My Wishlist</h3>
                  <p className="text-gray-500 max-w-sm mx-auto mb-8">You have saved {userData.savedProperties} properties. Start exploring and add more to your collection.</p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md">Browse Properties</button>
                </div>
              )}

              {activeTab === 'Settings' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                       <Bell size={20} className="text-blue-600" /> Notifications
                    </h3>
                    <div className="space-y-4">
                      {['Email Notifications', 'Push Notifications', 'Real-time Property Alerts'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <span className="font-semibold text-gray-700 text-sm">{item}</span>
                          <div className="w-12 h-6 bg-blue-600 rounded-md relative cursor-pointer">
                            <div className="w-4 h-4 bg-white rounded-md absolute top-1 right-1"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                       <Settings size={20} className="text-blue-600" /> Account Security
                    </h3>
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4">Change Password</button>
                    <p className="text-xs text-gray-500 mt-2 italic">Last changed 3 months ago</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
