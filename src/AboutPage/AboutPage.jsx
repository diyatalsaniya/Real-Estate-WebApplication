import React from 'react';
import Navbar        from '../components/Navbar';
import AboutHeader   from './AboutHeader';
import AboutSection1 from './AboutSection1';
import AboutSection2 from './AboutSection2';
import AboutSection3 from './AboutSection3';
import AboutSection4 from './AboutSection4';
import AboutSection5 from './AboutSection5';
import AboutSection6 from './AboutSection6';
import AboutSection7 from './AboutSection7';
import Footer        from '../HomePage/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar — fixed at top */}
      <Navbar />

      {/* Hero / Header section */}
      <AboutHeader />

      {/* Our Story / Who We Are section */}
      <AboutSection1 />

      {/* Our Story section */}
      {/* <AboutSection2 /> */}

      {/* Mission & Vision section */}
      <AboutSection3 />

      {/* Why Choose Us section */}
      <AboutSection4 />

      {/* Our Services section */}
      <AboutSection5 />

      {/* Coverage Areas section */}
      <AboutSection6 />

      {/* CTA Banner section */}
      <AboutSection7 />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default AboutPage;
