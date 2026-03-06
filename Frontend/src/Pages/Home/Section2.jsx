import React from 'react';
import { Building } from 'lucide-react';
import { House } from 'lucide-react';
import { School } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Rent",
    count: 24,
    icon: <House />
  },
  {
    id: 2,
    title: "Buy",
    count: 18,
    icon: <School />
  },
  {
    id: 3,
    title: "Commercial",
    count: 9,
    icon: <Building />  
  },
];

const Section2 = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 h-screen m-20 rounded-lg flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Categories</h2>
        </div>

        {/* Cards */}
        <div className="flex gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="flex-1 bg-white border border-gray-200 rounded-md p-5 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all">
              <div className="text-gray-400 shrink-0">{cat.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{cat.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{cat.count} Properties</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section2;