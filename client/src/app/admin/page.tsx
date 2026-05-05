'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Admin Top Bar */}
      <div className="bg-white border-b border-border sticky top-0 z-40 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-black tracking-tight">ADMIN<span className="text-primary">CENTER</span></h1>
          <div className="w-px h-6 bg-border" />
          <p className="text-sm font-bold text-muted-foreground">Platform Overview</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-slate-50 border-none outline-none py-2 pl-10 pr-4 rounded-xl text-sm w-64 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">A</div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black mb-2">Executive Summary</h2>
            <p className="text-muted-foreground font-medium">Real-time performance metrics for your platform.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-border px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
              <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
              <Plus size={18} /> Add Service
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {kpis.map((kpi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[35px] border border-border shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  {kpi.icon}
                </div>
                <div className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded-lg">
                  {kpi.trend}
                </div>
              </div>
              <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">{kpi.label}</h4>
              <p className="text-3xl font-black">{kpi.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings Table */}
          <div className="lg:col-span-2 bg-white rounded-[40px] border border-border shadow-xl overflow-hidden">
            <div className="p-8 border-b border-border flex items-center justify-between">
              <h3 className="text-xl font-bold">Recent Bookings</h3>
              <button className="text-primary font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-border">
                  <tr>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Service</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Customer</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-6">
                        <p className="font-bold">Full Home Cleaning</p>
                        <p className="text-xs text-muted-foreground">ID: #UC-981{item}</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="font-bold">Rahul Mishra</p>
                        <p className="text-xs text-muted-foreground">South Delhi</p>
                      </td>
                      <td className="px-8 py-6">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Completed</span>
                      </td>
                      <td className="px-8 py-6 font-black">₹2,499</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Critical Alerts */}
          <div className="space-y-6">
            <div className="bg-white rounded-[40px] border border-border p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="text-red-500" /> Pending KYC
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Partner" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">Sunil Electricals</h4>
                      <p className="text-xs text-muted-foreground">Applied 2h ago</p>
                    </div>
                    <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-all">
                      <Plus size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all">
                Review All Applications
              </button>
            </div>

            <div className="bg-primary rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
              <h3 className="text-lg font-bold mb-4 relative z-10">System Status</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-70">Server Latency</span>
                  <span className="font-bold">24ms</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-70">Success Rate</span>
                  <span className="font-bold">99.98%</span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full mt-4">
                  <div className="w-[95%] h-full bg-white rounded-full" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
