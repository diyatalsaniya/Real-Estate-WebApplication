import React from 'react';
import Navbar from '../components/Navbar';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from '../HomePage/Footer';

const PropertyPage = () => {
  return (
    <div className="bg-[#f2f4f7] min-h-screen font-sans">
      {/* Reusing existing Navbar */}
      <Navbar />
      
      {/* Property Search Hero Section */}
      <Header />
      
      {/* Handpicked Listings Sections */}
      <div className="bg-[#f8fafc]">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>

      {/* Reusing existing Footer */}
      <Footer />
    </div>
  );
};

export default PropertyPage;
