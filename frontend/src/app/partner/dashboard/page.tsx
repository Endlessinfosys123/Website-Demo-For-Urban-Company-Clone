'use client';

import React from 'react';
import { 
  DollarSign, Star, Zap, Award, 
  Users, MapPin, TrendingUp, Calendar 
} from 'lucide-react';
import { Badge } from '@/components/shared/DesignSystem';

const PartnerDashboard = () => {
  const stats = [
    { label: 'Total Earnings', value: '₹42,850', trend: '+12%', icon: <DollarSign size={20} className="text-black" /> },
    { label: 'Avg Rating', value: '4.9', trend: 'Stable', icon: <Star size={20} className="text-black" /> },
    { label: 'Jobs Done', value: '156', trend: '+8', icon: <Zap size={20} className="text-black" /> },
    { label: 'Level', value: 'Gold', trend: 'Next: Platinum', icon: <Award size={20} className="text-black" /> },
  ];

  const upcomingJobs = [
    {
      id: 'JOB-772',
      customer: 'Siddharth V.',
      service: 'Full Home Deep Cleaning',
      time: '10:30 AM',
      location: 'DLF Phase 3, Gurgaon',
      payout: '₹1,450'
    },
    {
      id: 'JOB-773',
      customer: 'Megha R.',
      service: 'Bathroom Sanitization',
      time: '03:00 PM',
      location: 'Vasant Kunj, Delhi',
      payout: '₹450'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-black tracking-tight">Partner Portal</h1>
            <Badge variant="success">Online</Badge>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Next Payout</p>
              <p className="font-bold text-black text-sm">Mon, 12 May</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-black">
              <Users size={18} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-black">Good morning, <br />Sunil Electricals.</h2>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none py-2 px-6 border border-gray-300 bg-white text-black font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Go Offline
            </button>
            <button className="flex-1 md:flex-none py-2 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm">
              View Earnings
            </button>
          </div>
        </div>

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
              <div>
                <h3 className="text-2xl font-bold text-black mb-1">{stat.value}</h3>
                <p className="text-xs font-semibold text-green-600">{stat.trend}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-bold text-black">Today's Schedule</h3>
                <p className="text-sm font-semibold text-gray-500">2 Jobs</p>
              </div>

              <div className="divide-y divide-gray-100">
                {upcomingJobs.map((job, i) => (
                  <div key={i} className="p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 border border-gray-200 flex flex-col items-center justify-center shrink-0">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Start</p>
                        <p className="text-sm font-bold text-black">{job.time.split(' ')[0]}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <Badge variant="info">Upcoming</Badge>
                           <span className="text-gray-500 font-bold text-xs">{job.id}</span>
                        </div>
                        <h4 className="text-lg font-bold text-black mb-2">{job.service}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 text-sm">
                          <p className="flex items-center gap-1"><Users size={14} /> {job.customer}</p>
                          <p className="flex items-center gap-1"><MapPin size={14} /> {job.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-3 w-full md:w-auto">
                      <div className="md:text-right">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Est. Payout</p>
                        <p className="text-lg font-bold text-green-600">{job.payout}</p>
                      </div>
                      <button className="w-full md:w-auto px-6 py-2 bg-black text-white font-semibold rounded-lg text-sm hover:bg-gray-800 transition-colors">
                        Start Job
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Leads / Alerts */}
          <div className="space-y-6">
            <div className="bg-black text-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Lead Center</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                There are 5 new service requests in your area matching your expertise.
              </p>
              <button className="w-full bg-white text-black font-bold py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                View Available Leads
              </button>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h4 className="text-base font-bold text-black mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-black" /> Availability
              </h4>
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className={`aspect-square rounded-lg flex items-center justify-center font-bold text-xs border ${
                    i < 5 ? 'bg-black border-black text-white' : 'bg-gray-50 border-gray-200 text-gray-500'
                  }`}>
                    {day}
                  </div>
                ))}
              </div>
              <button className="w-full border border-gray-300 text-black font-semibold hover:bg-gray-50 py-2 rounded-lg text-sm transition-colors">
                Manage Calendar
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-base font-bold text-black mb-1">Pro Training</h4>
              <p className="text-gray-500 text-xs font-semibold mb-4">Complete 2 modules for Platinum level.</p>
              <div className="w-full h-2 bg-gray-100 rounded-full mb-6">
                <div className="w-[75%] h-full bg-yellow-500 rounded-full" />
              </div>
              <button className="w-full text-gray-600 font-bold hover:text-black transition-colors text-sm">
                Open Academy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerDashboard;
