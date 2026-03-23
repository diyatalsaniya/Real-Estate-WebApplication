import React from 'react';
import { usersData } from '../data/dummyData';
import { UserPlus, Search, MoreVertical } from 'lucide-react';

const Users = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end items-center">
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm w-64 shadow-sm">
            <Search size={16} className="text-gray-400" />
            <input type="text" placeholder="Search users..." className="outline-none border-none w-full bg-transparent" />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm shadow-blue-500/30">
            <UserPlus size={16} /> Add User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {usersData.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                      {user.name.charAt(0)}
                    </div>
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 font-medium">{user.role}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
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
      </div>
    </div>
  );
};

export default Users;
