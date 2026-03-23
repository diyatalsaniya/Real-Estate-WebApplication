import React from 'react';
import { Home, TrendingUp, Clock, Users } from 'lucide-react';
import { recentProperties, inquiriesData } from '../data/dummyData';

const Overview = () => {
  const customStats = [
    { title: 'TOTAL PROPERTIES', value: '4', icon: <Home size={20} className="text-[#3b82f6]" />, bg: 'bg-[#EFF6FF]' },
    { title: 'ACTIVE LISTINGS', value: '2', icon: <TrendingUp size={20} className="text-[#10B981]" />, bg: 'bg-[#ECFDF5]' },
    { title: 'PENDING REVIEW', value: '1', icon: <Clock size={20} className="text-[#F59E0B]" />, bg: 'bg-[#FFFBEB]' },
    { title: 'TOTAL INQUIRIES', value: '4', icon: <Users size={20} className="text-[#6B7280]" />, bg: 'bg-[#F3F4F6]' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customStats.map((stat, idx) => (
          <div key={idx} className="bg-white px-6 py-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center relative shadow-sm">
            <div className="flex w-full items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg}`}>
                {stat.icon}
              </div>
              <span className="text-3xl font-bold font-serif text-gray-800">{stat.value}</span>
            </div>
            <h3 className="text-gray-400 text-[10px] w-full text-left tracking-widest font-bold uppercase">{stat.title}</h3>
          </div>
        ))}
      </div>

      {/* Content Panels */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Recent Listings Panel */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif font-bold text-gray-800 text-xl">Recent Listings</h3>
            <button className="text-[#D4A373] hover:text-[#c49262] text-sm font-semibold transition-colors">View All</button>
          </div>
          
          <div className="space-y-6">
            {recentProperties.map((prop) => (
              <div key={prop.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden shrink-0">
                    {/* Placeholder image shape */}
                    <div className="w-full h-full bg-blue-100/50"></div>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-800 text-lg mb-0.5">{prop.title}</h4>
                    <p className="text-xs text-gray-400 font-medium mb-1">Ahmedabad</p>
                    <p className="text-[#D4A373] font-semibold text-sm">{prop.price}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                    prop.status === 'Active' ? 'bg-[#ECFDF5] text-[#10B981]' :
                    prop.status === 'Pending' ? 'bg-[#FFFBEB] text-[#F59E0B]' :
                    'bg-[#F3F4F6] text-[#6B7280]'
                  }`}>
                    {prop.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inquiries Panel */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif font-bold text-gray-800 text-xl">Recent Inquiries</h3>
            <button className="text-[#D4A373] hover:text-[#c49262] text-sm font-semibold transition-colors">View All</button>
          </div>

          <div className="space-y-6">
            {inquiriesData.map((inquiry) => (
              <div key={inquiry.id} className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 ${
                    inquiry.status === 'Unread' ? 'bg-[#F59E0B]' :
                    inquiry.status === 'Replied' ? 'bg-[#EF4444]' : 'bg-[#10B981]' // using colors for initials 
                  }`}>
                    {inquiry.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-semibold text-gray-800 text-[15px]">{inquiry.user}</h4>
                    <p className="text-xs text-gray-500 font-medium mb-1">{inquiry.property}</p>
                    <p className="text-xs text-gray-400 line-clamp-1">{inquiry.message}</p>
                  </div>
                </div>
                
                <div className="shrink-0 pt-1">
                  <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                    inquiry.status === 'Unread' ? 'bg-[#FFFBEB] text-[#F59E0B]' :
                    inquiry.status === 'Read' ? 'bg-[#ECFDF5] text-[#10B981]' :
                    'bg-[#FEF2F2] text-[#EF4444]'
                  }`}>
                    {inquiry.status === 'Unread' ? 'Pending' : inquiry.status === 'Read' ? 'Accepted' : 'Rejected'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
