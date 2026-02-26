import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './Pages/Home/Header'
import Property from './pages/Property'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import SellerDashboard from './components/Seller Dashboard/sellerHome'
import AddProperty from './components/Seller Dashboard/AddProperty'

const App = () => {
  const location = useLocation()
  const hideNavbar = location.pathname === '/seller' || location.pathname === '/seller/add-property'

  return (
    <div className='relative'>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/seller" element={<SellerDashboard/>}/>
        <Route path="/seller/add-property" element={<AddProperty/>}/>
      </Routes>
    </div>
  )
}

export default App
