import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './Pages/Home/Header'
import Property from './Pages/Property'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import SellerDashboard from './components/Seller Dashboard/sellerHome'
import AddProperty from './components/Seller Dashboard/AddProperty'

const App = () => {
  const location = useLocation();

  // ── List ALL pages where Navbar should be hidden ──
  const hideNavbarOn = [
    "/logIn",               // Login page
    "/signup",              // SignUp page
    "/seller",              // Seller dashboard
    "/seller/add-property", // Add property page
  ];

  // Single clean check — true means show navbar, false means hide
  const showNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <div className='relative'>

      {/* Hide all scrollbars globally */}
      <style>{`
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ── Single Navbar — only shows on allowed pages ── */}
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/"                     element={<Header />}          />
        <Route path="/property"             element={<Property />}        />
        <Route path="/contact"              element={<Contact />}         />
        <Route path="/profile"              element={<Profile />}         />
        <Route path="/logIn"                element={<Login />}           />
        <Route path="/signup"               element={<SignUp />}          />
        <Route path="/seller"               element={<SellerDashboard />} />
        <Route path="/seller/add-property"  element={<AddProperty />}    />
      </Routes>

    </div>
  );
};

export default App;
