'use client';

import React from 'react';
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
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl font-bold text-black mb-8">My Bookings</h1>

        <div className="space-y-6">
          {bookings.map((booking, i) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-colors hover:border-gray-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Status & Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase ${
                      booking.status === 'CONFIRMED' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                    }`}>
                      {booking.status}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">Order ID: {booking.id}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-black mb-1">{booking.service}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-5">{booking.category}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-gray-100">
                     <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
                        <Clock size={16} className="text-black" />
                        <span>{booking.date}</span>
                     </div>
                     <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
                        <MapPin size={16} className="text-black" />
                        <span className="truncate">{booking.address}</span>
                     </div>
                  </div>
                </div>

                {/* Professional & Action */}
                <div className="md:w-56 border-t md:border-t-0 md:border-l border-gray-100 pt-5 md:pt-0 md:pl-6 flex flex-col justify-between">
                   <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-3 border border-gray-200">
                      <div className="w-8 h-8 bg-white border border-gray-200 rounded-md flex items-center justify-center text-black">
                         <User size={16} />
                      </div>
                      <div>
                         <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Professional</div>
                         <div className="text-sm font-bold text-black">{booking.professional.name}</div>
                      </div>
                   </div>

                   <div className="flex items-center justify-between mt-5">
                      <div className="text-xl font-bold text-black">₹{booking.amount}</div>
                      <Link href={`/orders/${booking.id}`} className="flex items-center space-x-1 text-black font-bold text-sm hover:underline">
                         <span>View Details</span>
                         <ChevronRight size={16} />
                      </Link>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
             <p className="text-gray-500 font-medium text-sm">No bookings yet.</p>
             <Link href="/" className="text-black font-bold text-sm mt-3 inline-block hover:underline">
               Explore Services
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
