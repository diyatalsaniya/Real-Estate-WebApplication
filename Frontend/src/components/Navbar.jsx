import React from 'react'
import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Property', path: '/property' },
    { name: 'Contact', path: '/contact' },
    { name: 'Profile', path: '/profile' },
    { name: 'Seller', path: '/seller' },
  ]

  return (
    // 1. Full-width wrapper to center the pill
    <nav className='fixed top-6 left-0 w-full flex justify-center px-4 z-50 h-13'>
      
      {/* 2. The Pill: justify-between pushes content to the edges */}
      <div className='flex items-center justify-between w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-8 py-3 shadow-lg'>
        
        {/* LEFT: Logo Section */}
        <div className='shrink-0'>
          <img src="/HomePageImage/main.png" alt="NestNova" className='h-10 w-auto object-contain drop-shadow-sm'/>
        </div>

        {/* CENTER: Links */}
        <div className='hidden md:flex gap-8 items-center'>
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className='text-[17px] font-semibold tracking-wide text-black hover:text-blue-800 transition-colors duration-200'>
              {link.name}   
            </Link>
          ))}
        </div>

        {/* RIGHT: Icon Section */}
        <div className='flex items-center gap-4'>
           <div className='pl-4 border-l border-gray-200 flex items-center'>
              <LogIn size={28} className='cursor-pointer text-gray-800 hover:text-blue-600 transition-colors' />
           </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar