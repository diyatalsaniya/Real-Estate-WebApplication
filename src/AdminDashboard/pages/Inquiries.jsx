import React from 'react';
import { inquiriesData } from '../data/dummyData';
import { MailOpen, Mail, Trash2 } from 'lucide-react';

const Inquiries = () => {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
        {inquiriesData.map((inquiry) => (
          <div key={inquiry.id} className="p-6 hover:bg-gray-50 transition-colors flex gap-4">
            <div className={`mt-1 shrink-0 ${inquiry.status === 'Unread' ? 'text-blue-500' : 'text-gray-400'}`}>
              {inquiry.status === 'Unread' ? <Mail size={24} /> : <MailOpen size={24} />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-sm ${inquiry.status === 'Unread' ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                  {inquiry.user} <span className="text-gray-400 font-normal ml-2">on</span> {inquiry.property}
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">{inquiry.date}</span>
                  <button className="text-red-400 hover:text-red-600 transition-colors tooltip" aria-label="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className={`text-sm ${inquiry.status === 'Unread' ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                {inquiry.message}
              </p>
              <div className="mt-3">
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline">Reply to {inquiry.user.split(' ')[0]}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inquiries;
