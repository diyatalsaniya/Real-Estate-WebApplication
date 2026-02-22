import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {

const links = [
    {name: 'Home', path: '/'},
    {name: 'Property', path: '/property'},
    {name: 'Contact', path: '/contact'},
    {name: 'Profile', path: '/profile'},
    {name: 'Seller', path: '/seller'},
]

  return (
    <nav className='absolute top-0 left-0 w-full flex items-center justify-between px-16 py-4 z-20'>
        <img src="/main.png" alt="NestNova" width={200} className='h-15 w-auto object-contain drop-shadow-md'/>

        <div className='flex gap-10'>
            {links.map((link) => (
                <Link key={link.name} to={link.path} 
                className={`text-[16px] font-semibold tracking-wide trasition-200 pb-0.5 deration-200 text-white/75 `}>
                    {link.name} 
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar