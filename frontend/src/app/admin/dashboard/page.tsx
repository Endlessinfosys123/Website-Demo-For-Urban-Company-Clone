'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Users, ShoppingBag, 
  BarChart3, ShieldCheck, AlertCircle,
  Plus, Search, Filter, ArrowDown,
  LayoutGrid, Settings, LogOut,
  Bell, CheckCircle2, Clock
} from 'lucide-react';
import { Card, Button, Badge, Input } from '@/components/shared/DesignSystem';
import Link from 'next/link';

const AdminDashboard = () => {
  const metrics = [
    { label: 'Total Revenue', value: '₹12.54L', trend: '+18.2%', icon: <BarChart3 className="text-indigo-600" />, color: 'bg-indigo-50' },
    { label: 'Total Bookings', value: '4,821', trend: '+12.5%', icon: <ShoppingBag className="text-blue-600" />, color: 'bg-blue-50' },
    { label: 'Active Partners', value: '342', trend: '+8.1%', icon: <ShieldCheck className="text-green-600" />, color: 'bg-green-50' },
    { label: 'User Growth', value: '12k', trend: '+15.4%', icon: <Users className="text-purple-600" />, color: 'bg-purple-50' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Fixed Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-100 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-10">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            ADMIN<span className="text-primary">CORE</span>
          </Link>
        </div>

        <nav className="flex-1 px-6 space-y-2">
          {[
            { label: 'Overview', icon: <Activity />, active: true },
            { label: 'User Management', icon: <Users /> },
            { label: 'Partner Approval', icon: <ShieldCheck />, badge: '5' },
            { label: 'Service Categories', icon: <LayoutGrid /> },
            { label: 'Bookings Log', icon: <ShoppingBag /> },
            { label: 'Financials', icon: <BarChart3 /> },
            { label: 'Settings', icon: <Settings /> },
          ].map((item, i) => (
            <Link 
              key={i} 
              href="#" 
              className={cn(
                "flex items-center justify-between px-6 py-5 rounded-[24px] font-black text-sm transition-all group",
                item.active ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <div className="flex items-center gap-4">
                <span className={cn(item.active ? "text-primary" : "text-slate-400 group-hover:text-primary")}>{item.icon}</span>
                {item.label}
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-10">
          <button className="flex items-center gap-4 text-red-500 font-black text-sm hover:translate-x-2 transition-transform">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50 px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-10 flex-1">
            <h2 className="text-xl font-black hidden md:block">Overview</h2>
            <div className="max-w-md w-full">
              <Input placeholder="Search records..." icon={<Search size={18} />} />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <Bell size={22} className="text-slate-400" />
              <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black">
              JD
            </div>
          </div>
        </header>

        <div className="p-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
            <div>
              <h1 className="text-5xl font-black mb-4 tracking-tighter">Executive Insights</h1>
              <p className="text-slate-500 font-bold text-lg">Real-time performance analytics for UrbanClone.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="py-5 px-10">Download Report</Button>
              <Button className="py-5 px-10"><Plus size={20} /> New Category</Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-16">
            {metrics.map((m, i) => (
              <Card key={i} className="p-10 border-none shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110", m.color)}>
                    {m.icon}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{m.label}</p>
                      <h3 className="text-4xl font-black text-slate-900">{m.value}</h3>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-1 mb-1">
                      <ArrowDown className="rotate-180" size={14} /> {m.trend}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
            {/* Recent Orders Table */}
            <div className="xl:col-span-2 space-y-10">
              <Card className="p-0 border-none shadow-2xl overflow-hidden bg-white">
                <div className="p-10 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-2xl font-black">Recent Bookings</h3>
                  <button className="text-primary font-black text-sm hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Order ID</th>
                        <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Service</th>
                        <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Customer</th>
                        <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Status</th>
                        <th className="px-10 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <tr key={item} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                          <td className="px-10 py-8">
                            <span className="font-black text-slate-900">#UC-981{item}</span>
                          </td>
                          <td className="px-10 py-8">
                            <p className="font-bold text-slate-900">AC Cleaning</p>
                            <p className="text-xs text-slate-400 font-bold">Category: Home Repair</p>
                          </td>
                          <td className="px-10 py-8">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500">
                                AS
                              </div>
                              <span className="font-bold text-slate-900">Aryan S.</span>
                            </div>
                          </td>
                          <td className="px-10 py-8">
                            <Badge variant="success">Completed</Badge>
                          </td>
                          <td className="px-10 py-8 font-black text-slate-900">₹899</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Approvals & Status */}
            <div className="space-y-10">
              <Card className="p-10 border-none shadow-xl bg-white">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <ShieldCheck className="text-primary" /> Partner Approvals
                </h3>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-all group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden relative">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Partner" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-sm">Electric Experts Inc</h4>
                        <p className="text-xs text-slate-400 font-bold">Delhi • Applied 2h ago</p>
                      </div>
                      <button className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-all shadow-lg shadow-slate-900/20 opacity-0 group-hover:opacity-100">
                        <Plus size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <Button variant="secondary" className="w-full mt-10 py-5">Review 42 Pending</Button>
              </Card>

              <Card className="p-10 border-none shadow-xl bg-slate-900 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                    <Activity className="text-primary" /> System Health
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                        <span>API Latency</span>
                        <span className="text-green-400">Optimal</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[15%] h-full bg-green-400 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                        <span>Server Load</span>
                        <span className="text-amber-400">Moderate</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[45%] h-full bg-amber-400 rounded-full" />
                      </div>
                    </div>
                    <div className="pt-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      <Clock size={14} /> Last Scan: 2 mins ago
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default AdminDashboard;
