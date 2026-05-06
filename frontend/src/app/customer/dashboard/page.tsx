'use client';

import React from 'react';
import { 
  ShoppingBag, Wallet, CreditCard, 
  MapPin, Settings, HelpCircle, 
  ChevronRight, Star, Clock 
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/shared/DesignSystem';

const CustomerDashboard = () => {
  const stats = [
    { label: 'Active Bookings', value: '2', icon: <ShoppingBag size={20} className="text-black" /> },
    { label: 'Wallet Balance', value: '₹1,250', icon: <Wallet size={20} className="text-black" /> },
    { label: 'UC Points', value: '450', icon: <Star size={20} className="text-black" /> },
    { label: 'Total Spent', value: '₹12.4k', icon: <CreditCard size={20} className="text-black" /> },
  ];

  const recentBookings = [
    {
      id: 'UC-9021',
      service: 'AC Deep Cleaning',
      date: 'Today, 2:00 PM',
      status: 'In Progress',
      pro: 'Rahul S.',
      price: '₹599'
    },
    {
      id: 'UC-8942',
      service: 'Sofa Spa & Shampoo',
      date: 'Yesterday',
      status: 'Completed',
      pro: 'Ankit M.',
      price: '₹899'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-black tracking-tight">
              My Account
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-black transition-colors">
              <HelpCircle size={24} />
            </button>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-gray-500 text-sm font-semibold">{stat.label}</p>
              </div>
              <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Recent Bookings */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-bold text-black">Active Bookings</h2>
                <Link href="/customer/orders" className="text-sm font-semibold text-gray-500 hover:text-black">
                  View History
                </Link>
              </div>

              <div className="divide-y divide-gray-100">
                {recentBookings.map((booking, i) => (
                  <div key={i} className="p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        <Clock size={24} className="text-gray-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-black font-bold">{booking.service}</span>
                          <Badge variant={booking.status === 'In Progress' ? 'info' : 'success'}>
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 font-medium mb-1">{booking.date} • {booking.id}</p>
                        <p className="text-xs text-gray-400 font-medium">Assigned to: {booking.pro}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                      <p className="font-bold text-black">{booking.price}</p>
                      <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-black font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-lg font-bold text-black mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Manage Addresses', icon: <MapPin size={20} /> },
                  { title: 'Payment Methods', icon: <CreditCard size={20} /> },
                  { title: 'Settings', icon: <Settings size={20} /> },
                ].map((action, i) => (
                  <button key={i} className="bg-white p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-all flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-black">
                      {action.icon}
                    </div>
                    <span className="font-semibold text-black text-sm">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Profile Summary */}
          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-black">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">Aryan Sharma</h3>
                  <p className="text-gray-500 text-sm font-medium">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Email</span>
                  <span className="font-semibold text-black">aryan@example.com</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Member Since</span>
                  <span className="font-semibold text-black">2024</span>
                </div>
              </div>

              <button className="w-full py-2 bg-white border border-gray-300 text-black font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Star className="text-yellow-500" size={20} fill="currentColor" />
                <h4 className="font-bold text-black text-lg">Refer & Earn</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Invite your friends and get ₹200 off your next booking!
              </p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center justify-between mb-4">
                <span className="font-bold text-black tracking-wide text-sm">UC_ARYAN_200</span>
                <button className="text-xs font-bold text-gray-500 hover:text-black">COPY</button>
              </div>
              <button className="w-full py-2 bg-black text-white font-semibold rounded-lg text-sm hover:bg-gray-800 transition-colors">
                Share Link
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
