import React from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">General Settings</h3>
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input type="text" defaultValue="NestNova Real Estate" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
              <input type="email" defaultValue="support@nestnova.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm">
                <option>Asia/Kolkata (IST)</option>
                <option>America/New_York (EST)</option>
                <option>Europe/London (GMT)</option>
              </select>
            </div>
            <div className="pt-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm shadow-blue-500/30">
                <Save size={16} /> Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Notifications Preferences</h3>
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div>
                <span className="font-medium text-gray-800">Email Notifications</span>
                <p className="text-sm text-gray-500">Receive reports and alerts on your email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div>
                <span className="font-medium text-gray-800">SMS Alerts</span>
                <p className="text-sm text-gray-500">Receive alerts via SMS messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
