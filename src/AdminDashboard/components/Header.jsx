import React, { useMemo } from 'react';
import { Bell, User, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getHeaderDetails = () => {
    switch (location.pathname) {
      case '/admin/properties':
        return { title: 'Manage Properties', subtitle: 'View and manage your real estate listings.' };
      case '/admin/users':
        return { title: 'Manage Users', subtitle: 'Monitor and control user accounts and roles.' };
      case '/admin/inquiries':
        return { title: 'Inquiries', subtitle: 'Respond to potential buyer messages and requests.' };
      case '/admin/reviews':
        return { title: 'Reviews', subtitle: 'See what clients are saying about properties.' };
      case '/admin/notifications':
        return { title: 'Notifications', subtitle: 'Stay updated with platform alerts.' };
      case '/admin/settings':
        return { title: 'Settings', subtitle: 'Configure your portal preferences and policies.' };
      case '/admin':
      default:
        return { title: 'Dashboard Overview', subtitle: 'Welcome back! Here\'s what\'s happening.' };
    }
  };

  const { title, subtitle } = useMemo(() => getHeaderDetails(), [location.pathname]);

  return (
    <header className="bg-transparent sticky top-0 z-10 px-8 py-6 flex flex-col md:flex-row md:items-start justify-between">
      <div className="mb-4 md:mb-0">
        <h2 className="text-3xl font-serif text-gray-900 font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-gray-500 shadow-sm relative">
          <Bell size={18} />
          {/* Subtle dot, not a huge red bubble, per theme or we can keep it without the number */}
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
        </button>
        {(location.pathname === '/admin' || location.pathname === '/admin/') && (
          <button 
            className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-md transition-all duration-300"
            style={{ backgroundColor: '#D4A373' }}
          >
            <Plus size={16} /> Add Property
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
