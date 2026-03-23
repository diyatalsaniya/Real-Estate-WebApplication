import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpImage from '../assets//SignUpImage/Image.png';
import Logo from '../assets/Logo.png';

export default function SignUp() {
  const [role, setRole] = useState('buyer');
  const [activeTab, setActiveTab] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const EyeIcon = ({ open }) =>
    open ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );

  const inputClass =
    'w-full bg-white border border-[#c4cce0] text-[#1a2b4b] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500';
  const labelClass =
    'block text-[0.6rem] font-bold text-[#1a2b4b] mb-0.5 uppercase tracking-wide';

  return (
    <div className="h-screen w-full bg-[#f2f4f7] flex items-center justify-center p-4 font-sans overflow-hidden">

      {/* Outer Card */}
      <div className="max-w-[900px] w-full h-[88vh] bg-white rounded-3xl shadow-2xl p-2 flex flex-col md:flex-row gap-3 overflow-hidden">

        {/* ── Left: Form ── */}
        <div className="flex-1 px-5 py-3 md:px-8 flex flex-col justify-between overflow-hidden">

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold text-[#1a2b4b] text-center font-serif mb-2">
            Create your account
          </h1>

          {/* Email / Phone tabs */}
          <div className="flex bg-[#f2f4f7] rounded-md p-1 mb-2">
            {['email', 'phone'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1.5 rounded-md text-sm font-semibold capitalize transition ${
                  activeTab === tab
                    ? 'bg-white text-[#2b7bc0] shadow-sm'
                    : 'text-gray-400'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Form fields */}
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>

            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                placeholder="Harshi Bhavsar"
                className="w-full bg-[#f2f4f7] border border-transparent text-[#1a2b4b] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Email or Phone */}
            {activeTab === 'email' ? (
              <div>
                <label className={labelClass}>Email Address</label>
                <input type="email" placeholder="name@example.com" className={inputClass} />
              </div>
            ) : (
              <div>
                <label className={labelClass}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className={inputClass} />
              </div>
            )}

            {/* Password */}
            <div>
              <label className={labelClass}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`${inputClass} tracking-[0.2em] font-bold`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className={labelClass}>Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <EyeIcon open={showConfirmPassword} />
                </button>
              </div>
            </div>

            {/* I am a */}
            <div>
              <label className={labelClass}>I am a</label>
              <div className="flex gap-2">
                {['buyer', 'seller'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex-1 py-1.5 rounded-md text-sm font-semibold border transition capitalize ${
                      role === r
                        ? 'border-[#2b7bc0] text-[#2b7bc0] bg-white shadow-sm'
                        : 'border-[#c4cce0] text-gray-400 bg-white hover:border-[#2b7bc0]'
                    }`}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-1.5">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mt-0.5 rounded text-[#2b7bc0] focus:ring-[#2b7bc0] border-gray-300 cursor-pointer"
              />
              <span className="text-xs text-gray-500 leading-snug">
                I agree to the{' '}
                <a href="#" className="text-[#2b7bc0] hover:underline font-semibold">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#2b7bc0] hover:underline font-semibold">Privacy Policy</a>
              </span>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-[0.6rem] text-gray-400 font-semibold uppercase tracking-widest whitespace-nowrap">
                or continue with
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 bg-white border border-[#c4cce0] rounded-md py-2 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-4 h-4"
              />
              <span className="text-sm font-semibold text-[#1a2b4b]">Sign up with Google</span>
            </button>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#2b7bc0] text-white rounded-md py-2.5 font-semibold text-sm hover:bg-blue-600 transition shadow-[0_4px_10px_rgba(43,123,192,0.25)] tracking-wide"
            >
              Create Account →
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-xs font-semibold text-gray-400 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-[#2b7bc0] hover:text-[#1a5a9e] font-bold transition">
              Sign In
            </Link>
          </p>

        </div>

        {/* ── Right: Image ── */}
        <div className="hidden md:flex flex-[0.8] relative rounded-[1.5rem] overflow-hidden">
          <img
            src={SignUpImage}
            alt="Beautiful Home"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1b2533]/90 via-[#1b2533]/20 to-transparent p-5 flex flex-col justify-between">

            {/* Bottom text */}
            <div className="absolute bottom-4 right-6 text-right">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-1.5 tracking-wide leading-tight">
                Find Your Perfect Haven
              </h2>
              <p className="text-xs text-gray-300 leading-snug mb-4 font-medium ml-auto max-w-[90%]">
                Explore thousands of premium properties or list your own to reach top buyers instantly.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
