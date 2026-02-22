import React from 'react'

const Home = () => {
  return (
    <div className='relative w-full h-screen'>

      <img src="/HomeImage.jpg" alt="Hero Image" className='w-full h-full object-cover'/>

      <div className='absolute inset-0 bg-black/30'></div>
    </div>
  )
}

export default Home