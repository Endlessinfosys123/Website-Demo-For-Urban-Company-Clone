'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, ShoppingBag, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Users', value: '1,240', icon: <Users />, color: 'bg-blue-500' },
    { title: 'Active Partners', value: '156', icon: <Briefcase />, color: 'bg-green-500' },
    { title: 'Total Bookings', value: '8,420', icon: <ShoppingBag />, color: 'bg-purple-500' },
    { title: 'Revenue', value: '₹12.4L', icon: <DollarSign />, color: 'bg-orange-500' },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-gray-900">Admin Command Center</h1>
          <div className="flex space-x-3">
             <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                Export Data
             </button>
             <button className="px-4 py-2 bg-purple-600 rounded-xl text-sm font-bold text-white hover:bg-purple-700 transition-colors">
                New Service
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex items-center space-x-6"
            >
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400">{stat.title}</div>
                <div className="text-2xl font-black text-gray-900">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Recent Bookings */}
           <div className="lg:col-span-2 bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8">Recent Bookings</h3>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-xs text-gray-400 uppercase font-bold tracking-wider border-b border-gray-50">
                          <th className="pb-4">Order ID</th>
                          <th className="pb-4">Service</th>
                          <th className="pb-4">Customer</th>
                          <th className="pb-4">Status</th>
                          <th className="pb-4">Amount</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm">
                       {[1, 2, 3, 4, 5].map((i) => (
                         <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                            <td className="py-4 font-bold text-gray-900">#UC-824{i}</td>
                            <td className="py-4 text-gray-600">AC Deep Cleaning</td>
                            <td className="py-4 text-gray-600">Tishya Patel</td>
                            <td className="py-4">
                               <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">Confirmed</span>
                            </td>
                            <td className="py-4 font-bold text-gray-900">₹899</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Alerts & Notifications */}
           <div className="space-y-8">
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
                 <h3 className="text-xl font-bold mb-8">Pending Verifications</h3>
                 <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between group">
                         <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                               <AlertCircle size={20} />
                            </div>
                            <div>
                               <div className="text-sm font-bold text-gray-900">Partner KYC</div>
                               <div className="text-xs text-gray-500">Rahul Saxena • Plumber</div>
                            </div>
                         </div>
                         <button className="p-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            <TrendingUp size={18} />
                         </button>
                      </div>
                    ))}
                 </div>
                 <button className="w-full mt-8 py-3 bg-gray-50 text-gray-600 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors">
                    View All Tasks
                 </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-[40px] p-8 text-white relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">System Health</h3>
                    <div className="flex items-center space-x-3 mb-8">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                       <span className="text-xs font-bold text-green-500 uppercase tracking-widest">All Systems Operational</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <div className="text-xs text-gray-500 mb-1">Server Latency</div>
                          <div className="text-lg font-bold">24ms</div>
                       </div>
                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <div className="text-xs text-gray-500 mb-1">DB Load</div>
                          <div className="text-lg font-bold">12%</div>
                       </div>
                    </div>
                 </div>
                 <div className="absolute right-[-20%] bottom-[-20%] w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
