import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../assets/LoginImage/Image.png';
import Logo from '../assets/Logo.png';

export default function Login() {
  return (
    <div className="h-screen w-full bg-[#f2f4f7] flex items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* Container - Highly rounded edges, shadow */}
      <div className="max-w-[850px] w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl p-2 flex flex-col md:flex-row gap-4 lg:gap-6 overflow-hidden">
        
        {/* Left Side: Image */}
        <div className="hidden md:flex flex-[0.8] relative rounded-[1.5rem] overflow-hidden">
          <img 
            src={LoginImage} 
            alt="Beautiful Home" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay for bottom text */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1b2533]/90 via-[#1b2533]/20 to-transparent p-5 flex flex-col justify-between">
            
            {/* Bottom Text */}
            <div className="absolute bottom-4 left-4 text-left">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-1.5 tracking-wide leading-tight">Manage Properties Efficiently</h2>
              <p className="text-xs text-gray-300 leading-snug mb-4 font-medium">
                Easily track rent payments, maintenance requests, and tenant communications in one place.
              </p>
              {/* Pagination dots */}
              
            </div>
            
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 px-4 py-4 md:py-6 md:px-8 flex flex-col justify-center relative overflow-y-auto [&::-webkit-scrollbar]:hidden">

          <h1 className="text-xl md:text-2xl font-bold text-[#1a2b4b] mb-1 font-serif mt-4 md:mt-0">Welcome Back to NestNova!</h1>
          <p className="text-gray-400 text-xs mb-6 font-medium tracking-wide">Sign in your account</p>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Field */}
            <div>
              <label className="block text-[0.65rem] font-bold text-[#1a2b4b] mb-1.5 uppercase tracking-wide">Your Email</label>
              <input 
                type="email" 
                defaultValue="info.madhu786@gmail.com"
                className="w-full bg-white border border-[#c4cce0] text-[#1a2b4b] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-medium"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[0.65rem] font-bold text-[#1a2b4b] mb-1.5 uppercase tracking-wide">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  defaultValue="12345678"
                  className="w-full bg-white border border-[#c4cce0] text-[#1a2b4b] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-bold tracking-[0.2em]"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-0.5">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-3.5 h-3.5 rounded text-[#2b7bc0] focus:ring-[#2b7bc0] border-gray-300" />
                <span className="text-xs font-semibold text-[#1a2b4b]">Remember Me</span>
              </label>
              <a href="#" className="text-xs font-semibold text-gray-400 hover:text-[#2b7bc0] transition">Forgot Password?</a>
            </div>

            {/* Main Login Button */}
            <button type="submit" className="w-full bg-[#2b7bc0] text-white rounded-md py-2.5 font-semibold text-[0.95rem] hover:bg-blue-600 transition shadow-[0_4px_10px_rgba(43,123,192,0.25)] mt-1 tracking-wide">
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-[0.65rem] text-gray-400 font-semibold uppercase tracking-widest">Instant Login</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <button className="flex-1 flex justify-center items-center gap-2 bg-white border border-[#c4cce0] rounded-md py-2 hover:bg-gray-50 transition shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              <span className="text-[0.75rem] font-bold text-[#1a2b4b]">Sign in with Google</span>
            </button>
          </div>

          {/* Footer Register Link */}
          <p className="text-center text-xs font-semibold text-gray-400">
            Don't have any account? <Link to="/signup" className="text-[#2b7bc0] hover:text-[#1a5a9e] font-bold ml-1 transition">
    Sign Up
  </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
