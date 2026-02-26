import React from 'react'
import {useEffect, useRef} from 'react'
import {Search} from 'lucide-react'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const Home = () => {

const images = [
  {
    id: 1,
    img: "/HomePageImage/HomeImage1.jpg",
    alt: "Image 1"
  },
  {
    id: 2,
    img: "/HomePageImage/HomeImage2.jpg",
    alt: "Image 2"
  },
  {
    id: 3,
    img: "/HomePageImage/HomeImage3.jpg",
    alt: "Image 3"
  },
  {
    id: 4,
    img: "/HomePageImage/HomeImage4.jpg",
    alt: "Image 4"
  },
  {
    id: 5,
    img: "/HomePageImage/HomeImage5.jpg",
    alt: "Image 5"
  }
];

const scrollRef = useRef(null);

useEffect(() => {
  const interval = setInterval(() => {
    if(scrollRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;

      if (scrollLeft + offsetWidth >= scrollWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
      else {
        scrollRef.current.scrollBy({ left: offsetWidth, behavior: 'smooth' });
      }
    }
  }, 3000);
  return () => clearInterval(interval);
}, []);



  return (
    <>
    <div className='relative w-full h-screen overflow-hidden font-body'>

      {/* 1. AUTO-SLIDING BACKGROUND IMAGES */}
      <div  ref={scrollRef} className='w-full h-screen overflow-x-auto flex flex-nowrap snap-x snap-mandatory scroll-smooth no-scrollbar'>
        {images.map((prop) => (
          <img src={prop.img} alt={prop.alt} />
        ))}
        {/* <img src="/HomePageImage/HomeImage1.jpg" alt="Hero Image" className='w-full h-full object-cover shrink-0'/>
        <img src="/HomePageImage/HomeImage2.jpg" alt="Hero Image" className='w-full h-full object-cover shrink-0'/>
        <img src="/HomePageImage/HomeImage3.jpg" alt="Hero Image" className='w-full h-full object-cover shrink-0'/>
        <img src="/HomePageImage/HomeImage4.jpg" alt="Hero Image" className='w-full h-full object-cover shrink-0'/>
        <img src="/HomePageImage/HomeImage5.jpg" alt="Hero Image" className='w-full h-full object-cover shrink-0'/> */}

        {/* 2. DARK OVERLAY (Ensures text is readable) */}
      <div className='absolute inset-0 bg-black/40 pointer-events-auto'></div>

      {/* 3. HERO TEXT CONTENT (Centered over the images) */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10'>

        {/* Main Headline */}
        <h3 className='font-heading text-white md:text-7xl lg:text-7xl font-semibold drop-shadow-2xl mt-23 leading-light'>
          Your Home, Our Priority
        </h3>
        

        {/* Sub-headline */}
        <p className='text-white/90 text-lg md:text-xl font-light max-w-2xl mb-12'>
          Step into the home you’ve always imagined with NestNova
        </p>

        {/* Search Bar Placeholder (Optional) */}
        <div className='mt-10 h-11 w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-full p-2 flex items-center shadow-2xl border border-white/30'>
            <input type="text" placeholder="Search by Locality..." className='flex-1 px-6 py-3 outline-none text-primary text-sm'/>
            <button className='bg-blue-300 hover:bg-blue-700 transition-all duration-300 p-2 rounded-full text-white shadow-md'>
              <Search className="h-5 w-5" strokeWidth={2} />
            </button>

        </div>


        <div className='absolute inset-0  pointer-events-none'></div>
        </div>
      </div>
    </div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    </>
  )
}

export default Home