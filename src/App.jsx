import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import TownHouse from './HomePage/TownHouse';
import ModernVilla from './HomePage/ModernVilla';
import Apartment from './HomePage/Apartment';
import Commercial from './HomePage/Commercial';
import SellerHomePage from './SellerDashboard/SellerHomePage';
import AddProperty from './SellerDashboard/AddProperty';
import Login from './LoginPage/Login';
import SignUp from './SignUpPage/SignUp';
import PropertyPage from './PropertyPage/PropertyPage';
import Property from './PropertyPage/Property';
import RentProperty from './PropertyPage/RentProperty';
import BuyProperty from './PropertyPage/BuyProperty';
import CommercialProperty from './PropertyPage/CommercialProperty';
import Profile from './ProfilePage/Profile';
import DeveloperPage from './DeveloperPage/DeveloperPage';
import DeveloperDetails from './DeveloperPage/DeveloperDetails';
import PropertyDetails from './PropertyPage/PropertyDetails';
import ContactPage from './ContactPage/ContactPage';
import AboutPage from './AboutPage/AboutPage';
import AdminDashboard from './AdminDashboard/AdminDashboard';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/town-house" element={<TownHouse />} />
        <Route path="/modern-villa" element={<ModernVilla />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/seller" element={<SellerHomePage />} />
        <Route path="/seller/add-property" element={<AddProperty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/property-details/:propertyTitle" element={<PropertyDetails />} />
        <Route path="/rent-property" element={<RentProperty />} />
        <Route path="/buy-property" element={<BuyProperty />} />
        <Route path="/commercial-property" element={<CommercialProperty />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/developer/:name" element={<DeveloperDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

