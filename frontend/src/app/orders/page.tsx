'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle2, ChevronRight, User } from 'lucide-react';
import Link from 'next/link';

const OrdersPage = () => {
  const bookings = [
    {
      id: 'UC-123456',
      service: 'Power Saver AC Service',
      category: 'AC Repair & Service',
      date: 'Today, 10:00 AM',
      status: 'CONFIRMED',
      amount: 599,
      professional: { name: 'Rahul Sharma', rating: 4.8 },
      address: 'Skyline Residency, Satellite'
    },
    {
      id: 'UC-123450',
      service: 'Deep Home Cleaning',
      category: 'Cleaning',
      date: '28 Apr, 11:30 AM',
      status: 'COMPLETED',
      amount: 2499,
      professional: { name: 'Sanjay Kumar', rating: 4.9 },
      address: 'Titanium Square, Thaltej'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-8">My Bookings</h1>

          <div className="space-y-6">
            {bookings.map((booking, i) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Status & Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        booking.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {booking.status}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Order ID: {booking.id}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{booking.service}</h3>
                    <p className="text-sm text-gray-500 mb-6">{booking.category}</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                       <div className="flex items-center space-x-3">
                          <Clock size={16} className="text-purple-600" />
                          <span className="text-sm font-medium text-gray-700">{booking.date}</span>
                       </div>
                       <div className="flex items-center space-x-3">
                          <MapPin size={16} className="text-purple-600" />
                          <span className="text-sm font-medium text-gray-700 truncate">{booking.address}</span>
                       </div>
                    </div>
                  </div>

                  {/* Professional & Action */}
                  <div className="md:w-64 border-l border-gray-50 md:pl-8 flex flex-col justify-between">
                     <div className="p-4 bg-gray-50 rounded-2xl flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                           <User size={20} />
                        </div>
                        <div>
                           <div className="text-xs text-gray-500">Professional</div>
                           <div className="text-sm font-bold text-gray-900">{booking.professional.name}</div>
                        </div>
                     </div>

                     <div className="flex items-center justify-between mt-6">
                        <div className="text-xl font-black text-gray-900">₹{booking.amount}</div>
                        <button className="flex items-center space-x-1 text-purple-600 font-bold text-sm hover:translate-x-1 transition-transform">
                           <span>View Details</span>
                           <ChevronRight size={16} />
                        </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {bookings.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-300">
               <p className="text-gray-500 font-medium">No bookings yet.</p>
               <Link href="/" className="text-purple-600 font-bold mt-4 inline-block hover:underline">
                 Explore Services
               </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
