import React from 'react';
import { notificationsData } from '../data/dummyData';
import { Bell, MoreVertical } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end items-center">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">Mark all as read</button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
        {notificationsData.map((notif) => (
          <div key={notif.id} className={`p-6 transition-colors flex gap-4 ${notif.read ? 'bg-white hover:bg-gray-50' : 'bg-blue-50/50 hover:bg-blue-50'}`}>
            <div className={`mt-1 shrink-0 ${notif.read ? 'text-gray-400' : 'text-blue-600'}`}>
              <Bell size={20} className={notif.read ? '' : 'fill-blue-600 text-blue-600'} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className={`text-sm ${notif.read ? 'font-medium text-gray-700' : 'font-bold text-gray-900'}`}>{notif.title}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">{notif.time}</span>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors tooltip p-1">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
              <p className={`text-sm ${notif.read ? 'text-gray-500' : 'font-medium text-gray-700'}`}>
                {notif.message}
              </p>
            </div>
            {!notif.read && (
              <div className="shrink-0 mt-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full block"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
