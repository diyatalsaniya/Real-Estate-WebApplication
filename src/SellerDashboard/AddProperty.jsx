import React from 'react';
import { Link } from 'react-router-dom';

const AddProperty = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* ── Sidebar ── */}
      <aside className="w-64 bg-[#0a1128] text-white flex flex-col h-full shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#e4a853] rounded-xl flex items-center justify-center text-xl font-bold text-white">
            N
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">NestNova</h1>
            <p className="text-[#a0aabf] text-xs">Seller Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-4 mt-6">
          <p className="text-[#4b5563] text-xs font-bold mb-4 uppercase tracking-wider ml-2">Main Menu</p>
          <ul className="space-y-2">
            <li>
              <Link to="/seller" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Overview
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl bg-white/10 text-white shadow-sm border-l-2 border-[#e4a853]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                My Properties
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ── Main Dashboard Content ── */}
      <main className="flex-1 overflow-auto p-8 lg:p-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-serif text-[#1e293b] mb-1">Add New Property</h2>
            <p className="text-gray-500 text-sm">Fill in the details below to list your property on NestNova.</p>
          </div>
          <Link to="/seller" className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg text-sm hover:bg-gray-300 transition-colors">
            Cancel
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Title</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e4a853]" placeholder="e.g. Modern Villa in Bandra" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e4a853]" placeholder="e.g. 85.00 L" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e4a853]" placeholder="Describe the property..."></textarea>
            </div>

            <button type="button" className="w-full bg-[#1e293b] text-white py-3 rounded-xl font-medium shadow-sm hover:bg-[#0f172a] transition-all">
              Save Property
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProperty;
