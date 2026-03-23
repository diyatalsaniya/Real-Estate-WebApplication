import React from 'react';
import Navbar   from '../components/Navbar';
import Header   from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      {/* Navbar — fixed at top */}
      <Navbar />

      {/* Hero / Header section */}
      <Header />

      {/* Fresh Properties section */}
      <Section1 />

      {/* Featured Categories section */}
      <Section2 />

      {/* Explore Our Properties section */}
      <Section3 />

      {/* Our Trusted Builders section */}
      <Section4 />

      {/* Find Your Properties section */}
      <Section5 />

      {/* Customer Reviews section */}
      <Section6 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
