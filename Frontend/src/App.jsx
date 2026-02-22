import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Property from './pages/Property'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import SellerDashboard from './Pages/Seller Dashboard/sellerHome'
import AddProperty from './Pages/Seller Dashboard/AddProperty'

const App = () => {
  const location = useLocation()
  const hideNavbar = location.pathname === '/seller' || location.pathname === '/seller/add-property'

  return (
    <div className='relative'>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
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
