import React from 'react';
import { recentProperties } from '../data/dummyData';
import { Plus, Filter, MoreVertical } from 'lucide-react';

const Properties = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end items-center">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm shadow-blue-500/30">
            <Plus size={16} /> Add Property
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 font-medium">Property Title</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {recentProperties.map((prop) => (
                <tr key={prop.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{prop.title}</td>
                  <td className="px-6 py-4">{prop.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      prop.status === 'Active' ? 'bg-green-100 text-green-700' :
                      prop.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {prop.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{prop.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-50">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-gray-50/30">
          <span>Showing 1 to 4 of 4 results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-gray-200 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-gray-200 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
