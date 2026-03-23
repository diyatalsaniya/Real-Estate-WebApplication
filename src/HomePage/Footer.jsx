import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, MessageCircle, Mail, ChevronUp } from 'lucide-react';
import MainLogo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A1128] font-sans relative overflow-hidden py-16 px-6 md:px-12 lg:px-20 text-gray-300">
      
      {/* Background illustration placeholder (Right side) */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none hidden md:block">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle leaves/buildings placeholder vector to match image vibe */}
          <path d="M280 100 C240 100 240 200 280 200 C320 200 320 100 280 100 Z" fill="#ffffff" />
          <path d="M340 120 C310 120 310 200 340 200 C370 200 370 120 340 120 Z" fill="#ffffff" />
          <path d="M280 200 L280 300" stroke="#ffffff" strokeWidth="4" />
          <path d="M340 200 L340 300" stroke="#ffffff" strokeWidth="4" />
          <rect x="200" y="240" w="80" h="60" fill="#ffffff" />
          <rect x="300" y="260" w="100" h="40" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        
        {/* ── Top Section ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* 1. Logo & Bio */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={MainLogo} alt="NestNova Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <div className="text-sm leading-relaxed space-y-4 font-medium opacity-80">
              <p>We believe everyone deserves a place to call home.</p>
              <p>NestNova brings you premium real estate solutions from budget apartments to luxury villas with trust, transparency, and care at every step.</p>
            </div>
          </div>

          {/* 2. Navigation Links */}
          <div className="flex flex-col gap-5 text-sm font-semibold opacity-80 pl-0 md:pl-10">
            <Link to="/" className="hover:text-white transition-colors w-max">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors w-max">About</Link>
            <Link to="/property" className="hover:text-white transition-colors w-max">Property</Link>
            <Link to="/developer" className="hover:text-white transition-colors w-max">Developer</Link>
            <Link to="/contact" className="hover:text-white transition-colors w-max">Contact</Link>
          </div>

          {/* 3. Search & Socials */}
          <div className="flex flex-col gap-8 md:items-end w-full">
            <div className="flex items-center justify-end gap-5 text-gray-400">
              <a href="#" className="hover:text-[#3B82F6] transition-colors"><Facebook size={18} fill="currentColor" strokeWidth={0} /></a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors"><Twitter size={18} fill="currentColor" strokeWidth={0} /></a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors"><Youtube size={20} /></a>
            </div>

            <div className="w-full max-w-sm flex items-center bg-white/90 rounded-lg p-1 shadow-sm">
              <input 
                type="text" 
                placeholder="xyz@gmail.com" 
                className="flex-1 bg-transparent px-5 py-2 text-sm outline-none placeholder-gray-500 text-gray-900"
              />
              <button className="bg-blue-600 text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Send 
              </button>
            </div>
          </div>

        </div>

        {/* ── Middle Section: Help Banner ── */}
        <div className="w-full bg-white rounded-2xl py-5 px-6 flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8 shadow-sm">
          <span className="text-[#0A1128] font-bold">Need Help?</span>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:1-800-555-4321" className="bg-gray-50 border border-gray-300 rounded-lg px-5 py-2.5 flex items-center gap-2.5 text-sm font-bold text-gray-800 hover:bg-gray-100 transition-colors">
              <Phone size={16} className="text-blue-600" />
              +91-8735843736
            </a>
            
            <a href="#" className="bg-gray-50 border border-gray-300 rounded-lg px-5 py-2.5 flex items-center gap-2.5 text-sm font-bold text-gray-800 hover:bg-gray-100 transition-colors">
              <MessageCircle size={16} className="text-blue-600" />
              +91-8735843736
            </a>
            
            <a href="mailto:hello@yoursite.com" className="bg-gray-50 border border-gray-300 rounded-lg px-5 py-2.5 flex items-center gap-2.5 text-sm font-bold text-gray-800 hover:bg-gray-100 transition-colors">
              <Mail size={16} className="text-blue-600" />
              nestnove@gmail.com
            </a>
          </div>
        </div>

        {/* ── Bottom Section: Copyright ── */}
        <div className="text-[13px] font-medium opacity-60 text-center md:text-left">
          © 2026. All rights reserved. Designed by NestNova
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden md:flex absolute bottom-8 right-8 bg-[#D4A373] hover:bg-[#b88555] w-12 h-12 items-center justify-center text-white rounded shadow-lg transition-colors z-20"
        aria-label="Back to Top"
      >
        <ChevronUp size={24} />
      </button>

    </footer>
  );
};

export default Footer;
