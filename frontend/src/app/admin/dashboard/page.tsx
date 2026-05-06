'use client';

import React from 'react';
import { 
  Activity, Users, ShoppingBag, 
  BarChart3, ShieldCheck,
  Search, ArrowDown,
  LayoutGrid, Settings, LogOut,
  Bell, Clock
} from 'lucide-react';
import { Badge } from '@/components/shared/DesignSystem';
import Link from 'next/link';

const AdminDashboard = () => {
  const metrics = [
    { label: 'Total Revenue', value: '₹12.54L', trend: '+18.2%', icon: <BarChart3 className="text-black" /> },
    { label: 'Total Bookings', value: '4,821', trend: '+12.5%', icon: <ShoppingBag className="text-black" /> },
    { label: 'Active Partners', value: '342', trend: '+8.1%', icon: <ShieldCheck className="text-black" /> },
    { label: 'User Growth', value: '12k', trend: '+15.4%', icon: <Users className="text-black" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="text-xl font-bold tracking-tight text-black">
            Admin Portal
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {[
            { label: 'Overview', icon: <Activity size={18} />, active: true },
            { label: 'Users', icon: <Users size={18} /> },
            { label: 'Partners', icon: <ShieldCheck size={18} />, badge: '5' },
            { label: 'Categories', icon: <LayoutGrid size={18} /> },
            { label: 'Bookings', icon: <ShoppingBag size={18} /> },
            { label: 'Financials', icon: <BarChart3 size={18} /> },
            { label: 'Settings', icon: <Settings size={18} /> },
          ].map((item, i) => (
            <Link 
              key={i} 
              href="#" 
              className={`flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                item.active ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={item.active ? "text-black" : "text-gray-500"}>{item.icon}</span>
                {item.label}
              </div>
              {item.badge && (
                <span className="bg-red-50 text-red-600 font-bold text-[10px] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 text-red-600 font-semibold text-sm w-full px-3 py-2 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1">
            <h2 className="text-lg font-bold text-black hidden md:block">Overview</h2>
            <div className="max-w-md w-full relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search records..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm font-medium text-black placeholder:text-gray-400 outline-none focus:border-gray-300 focus:bg-white transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-black transition-colors">
              <Bell size={20} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
              JD
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-black mb-1">Executive Insights</h1>
              <p className="text-gray-500 text-sm font-medium">Real-time performance analytics.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 bg-white text-black font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Download Report
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <div className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    <ArrowDown className="rotate-180" size={12} /> {m.trend}
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">{m.label}</p>
                  <h3 className="text-2xl font-bold text-black">{m.value}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Orders Table */}
            <div className="xl:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
                  <h3 className="text-base font-bold text-black">Recent Bookings</h3>
                  <button className="text-sm font-semibold text-gray-500 hover:text-black">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <tr key={item} className="hover:bg-gray-50 transition-colors cursor-pointer">
                          <td className="px-6 py-4">
                            <span className="font-semibold text-black text-sm">#UC-981{item}</span>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-semibold text-black text-sm">AC Cleaning</p>
                            <p className="text-xs text-gray-500 font-medium">Home Repair</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-semibold text-black text-sm">Aryan S.</span>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant="success">Completed</Badge>
                          </td>
                          <td className="px-6 py-4 font-bold text-black text-sm">₹899</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Approvals & Status */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-black flex items-center gap-2">
                    <ShieldCheck size={18} /> Partner Approvals
                  </h3>
                  <span className="bg-gray-100 text-black text-xs font-bold px-2 py-1 rounded-md">42 Pending</span>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="py-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden shrink-0">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Partner" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-black text-sm truncate">Electric Experts Inc</h4>
                        <p className="text-xs text-gray-500 font-medium">Applied 2h ago</p>
                      </div>
                      <button className="text-blue-600 font-semibold text-sm hover:underline shrink-0">
                        Review
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black text-white rounded-xl shadow-sm p-6">
                <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                  <Activity size={18} /> System Health
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-gray-400 mb-1">
                      <span>API Latency</span>
                      <span className="text-green-400">Optimal</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[15%] h-full bg-green-400 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-gray-400 mb-1">
                      <span>Server Load</span>
                      <span className="text-yellow-400">Moderate</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[45%] h-full bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                  <div className="pt-2 flex items-center gap-2 text-xs font-medium text-gray-500">
                    <Clock size={12} /> Last Scan: 2 mins ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
