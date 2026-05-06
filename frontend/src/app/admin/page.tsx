'use client';

import React from 'react';
import { 
  BarChart3, Users, Briefcase, 
  Wallet, TrendingUp, AlertCircle,
  Plus, Search, Filter, Download
} from 'lucide-react';

const AdminDashboard = () => {
  const kpis = [
    { label: 'Total Revenue', value: '₹12.5L', trend: '+18.2%', icon: <Wallet className="text-blue-600" /> },
    { label: 'Active Bookings', value: '1,420', trend: '+12.5%', icon: <Briefcase className="text-purple-600" /> },
    { label: 'New Partners', value: '42', trend: '+8.1%', icon: <Users className="text-green-600" /> },
    { label: 'Platform Comm.', value: '₹2.5L', trend: '+15.4%', icon: <TrendingUp className="text-amber-500" /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Admin Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-black tracking-tight">ADMIN<span className="text-black">CENTER</span></h1>
          <div className="w-px h-6 bg-gray-200" />
          <p className="text-sm font-bold text-gray-500">Platform Overview</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-gray-50 border border-gray-200 outline-none py-2 pl-10 pr-4 rounded-lg text-sm w-64 focus:border-black"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">A</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-black">Executive Summary</h2>
            <p className="text-gray-500 font-medium">Real-time performance metrics for your platform.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
              <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
              <Plus size={18} /> Add Service
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, i) => (
            <div 
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {kpi.icon}
                </div>
                <div className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
                  {kpi.trend}
                </div>
              </div>
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{kpi.label}</h4>
              <p className="text-2xl font-bold text-black">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings Table */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-black">Recent Bookings</h3>
              <button className="text-black font-semibold text-sm hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Service</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Customer</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm text-black">Full Home Cleaning</p>
                        <p className="text-xs text-gray-500 mt-1">ID: #UC-981{item}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm text-black">Rahul Mishra</p>
                        <p className="text-xs text-gray-500 mt-1">South Delhi</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Completed</span>
                      </td>
                      <td className="px-6 py-4 font-bold text-black text-sm">₹2,499</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Critical Alerts */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-black">
                <AlertCircle className="text-red-500" /> Pending KYC
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Partner" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-black">Sunil Electricals</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Applied 2h ago</p>
                    </div>
                    <button className="p-1.5 hover:bg-gray-200 rounded-md text-black transition-colors">
                      <Plus size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-gray-100 text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors border border-gray-200">
                Review All Applications
              </button>
            </div>

            <div className="bg-black rounded-xl p-6 text-white shadow-sm border border-gray-800">
              <h3 className="text-base font-bold mb-4">System Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Server Latency</span>
                  <span className="font-bold">24ms</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="font-bold">99.98%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-4 overflow-hidden">
                  <div className="w-[95%] h-full bg-green-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
