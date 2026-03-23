import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  MessageSquareText, 
  Star, 
  Bell, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { label: 'Overview', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { label: 'Properties', icon: <Building2 size={20} />, path: '/admin/properties' },
    { label: 'Users', icon: <Users size={20} />, path: '/admin/users' },
    { label: 'Inquiries', icon: <MessageSquareText size={20} />, path: '/admin/inquiries' },
    { label: 'Reviews', icon: <Star size={20} />, path: '/admin/reviews' },
    { label: 'Notifications', icon: <Bell size={20} />, path: '/admin/notifications' },
    { label: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <aside className="w-64 min-h-screen flex flex-col fixed left-0 top-0 pt-6" style={{ backgroundColor: '#0A1128' }}>
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded shadow-sm flex items-center justify-center text-white font-serif text-2xl font-bold" style={{ backgroundColor: '#D4A373' }}>
          N
        </div>
        <div>
          <h1 className="text-xl font-bold font-serif text-white tracking-wide">NestNova</h1>
          <p className="text-[10px] font-sans text-gray-400 font-semibold tracking-widest uppercase">Admin Portal</p>
        </div>
      </div>
      
      <div className="px-6 mb-3">
        <p className="text-[10px] font-sans text-gray-500 font-semibold tracking-widest uppercase">Main Menu</p>
      </div>

      <div className="flex flex-col gap-1 px-4">
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            end={item.path === '/admin'} // "end" matches exactly for Overview
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm ${
                isActive
                  ? 'text-white border-l-2'
                  : 'text-gray-400 hover:bg-[#1a223f] hover:text-white'
              }`
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: '#1A223F', borderColor: '#D4A373' } : {}
            }
          >
            {({ isActive }) => (
              <>
                <div className={isActive ? "text-[#D4A373]" : ""}>{item.icon}</div>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      
      <div className="mt-auto p-4 px-6 pb-6">
        <div className="p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-[#1a223f] transition-colors" style={{ backgroundColor: '#161e38' }}>
          <div className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#D4A373' }}>
            AS
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Admin System</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-widest">Superadmin</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
