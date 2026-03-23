import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './pages/Overview';
import Properties from './pages/Properties';
import Users from './pages/Users';
import Inquiries from './pages/Inquiries';
import Reviews from './pages/Reviews';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - fixed width */}
      <Sidebar />
      
      {/* Main Content with padding left to avoid sidebar overlap */}
      <div className="flex-1 flex flex-col pl-64">
        <Header />
        
        <main className="flex-1 p-8 overflow-y-auto w-full">
          <Routes>
            <Route path="" element={<Overview />} />
            <Route path="properties" element={<Properties />} />
            <Route path="users" element={<Users />} />
            <Route path="inquiries" element={<Inquiries />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
