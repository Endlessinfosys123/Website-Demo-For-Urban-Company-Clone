'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Clock, 
  Wallet, Star, CheckCircle2,
  Calendar, ArrowUpRight, Power
} from 'lucide-react';
import Link from 'next/link';

const PartnerDashboard = () => {
  const stats = [
    { label: 'Total Earnings', value: '₹42,500', icon: <Wallet className="text-blue-600" />, trend: '+12%' },
    { label: 'Completed Jobs', value: '124', icon: <CheckCircle2 className="text-green-600" />, trend: '+5%' },
    { label: 'Avg. Rating', value: '4.9', icon: <Star className="text-amber-500 fill-amber-500" />, trend: 'Stable' },
    { label: 'On-time Rate', value: '98%', icon: <Clock className="text-purple-600" />, trend: '+2%' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-border pt-8 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-black">Good morning, Rahul!</h1>
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online
                </div>
              </div>
              <p className="text-muted-foreground font-medium">Here's what's happening with your business today.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-slate-800 transition-all">
                <Power size={18} /> Go Offline
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[35px] border border-border shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  {stat.icon}
                </div>
                <div className={`text-xs font-bold px-2 py-1 rounded-lg ${
                  stat.trend.includes('+') ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-500'
                }`}>
                  {stat.trend}
                </div>
              </div>
              <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</h4>
              <p className="text-3xl font-black">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Jobs */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] border border-border shadow-xl overflow-hidden">
              <div className="p-8 border-b border-border flex items-center justify-between">
                <h3 className="text-xl font-bold">Upcoming Jobs</h3>
                <Link href="/partner/jobs" className="text-primary font-bold text-sm hover:underline">View All</Link>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { service: 'Full Home Deep Cleaning', time: '10:00 AM', date: 'Today', customer: 'Amit Sharma', address: 'Green Park, South Delhi' },
                  { service: 'Kitchen Cleaning', time: '04:00 PM', date: 'Today', customer: 'Priya Verma', address: 'GK-1, New Delhi' },
                ].map((job, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-all group">
                    <div className="w-full md:w-24 h-24 bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-muted-foreground uppercase">{job.date}</span>
                      <span className="text-xl font-black text-primary">{job.time.split(' ')[0]}</span>
                      <span className="text-[10px] font-bold text-muted-foreground">{job.time.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{job.service}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{job.customer} • {job.address}</p>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full font-bold">Standard Pkg</span>
                        <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-bold">Confirmed</span>
                      </div>
                    </div>
                    <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-primary transition-all">
                      Start Job
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[40px] border border-border shadow-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">Earnings Overview</h3>
                <select className="bg-slate-50 border-none outline-none rounded-xl px-4 py-2 text-sm font-bold">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-[300px] flex items-end justify-between gap-4 px-4">
                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="w-full bg-slate-100 rounded-t-xl relative overflow-hidden h-full">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="absolute bottom-0 left-0 w-full bg-primary group-hover:bg-purple-400 transition-colors"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground">Mon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info */}
          <div className="space-y-6">
            <div className="bg-primary rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
              <h3 className="text-xl font-bold mb-4 relative z-10">Refer a Partner</h3>
              <p className="text-primary-foreground/80 text-sm mb-8 relative z-10 leading-relaxed">
                Earn ₹2,000 for every professional you refer who completes 10 jobs.
              </p>
              <button className="w-full bg-white text-primary py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all relative z-10">
                Invite Friends
              </button>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>

            <div className="bg-white rounded-[40px] border border-border p-8 shadow-xl">
              <h3 className="text-lg font-bold mb-6">Partner Support</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all font-bold group">
                  <span className="text-sm">Help Center</span>
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all font-bold group">
                  <span className="text-sm">Contact Manager</span>
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default PartnerDashboard;
