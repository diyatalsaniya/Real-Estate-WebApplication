import React from 'react';
import { reviewsData } from '../data/dummyData';
import { Star, MoreVertical } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="space-y-6">


      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
        {reviewsData.map((review) => (
          <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors flex gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold text-gray-800">{review.author}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors tooltip p-1">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
              <div className="text-sm font-medium text-blue-600 mb-2">{review.property}</div>
              <div className="flex gap-1 mb-3 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < review.rating ? 'fill-current' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic">
                "{review.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
