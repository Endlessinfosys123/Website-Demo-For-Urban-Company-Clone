'use client';

import React from 'react';
import { 
  DollarSign, Star, Zap, Award, 
  Users, MapPin, TrendingUp, Calendar, Clock,
  ArrowRight, Phone, MessageSquare, ShieldCheck
} from 'lucide-react';
import { Badge } from '@/components/shared/DesignSystem';

const PartnerDashboard = () => {
  const stats = [
    { label: 'Today\'s Earnings', value: '₹2,450', trend: '+12%', icon: <DollarSign className="text-black" /> },
    { label: 'Avg Rating', value: '4.95', trend: 'Top 5%', icon: <Star className="text-black" /> },
    { label: 'Jobs Done', value: '156', trend: '+8 this week', icon: <Zap className="text-black" /> },
    { label: 'Level', value: 'Gold', trend: 'Next: Platinum', icon: <Award className="text-black" /> },
  ];

  const upcomingJobs = [
    {
      id: 'JOB-772',
      customer: 'Siddharth V.',
      service: 'Full Home Deep Cleaning',
      time: '10:30 AM',
      location: 'DLF Phase 3, Gurgaon',
      payout: '₹1,450',
      status: 'en_route'
    },
    {
      id: 'JOB-773',
      customer: 'Megha R.',
      service: 'Bathroom Sanitization',
      time: '03:00 PM',
      location: 'Vasant Kunj, Delhi',
      payout: '₹450',
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-black shrink-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="Partner Profile" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-black tracking-tight leading-tight">Sunil Electricals</h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Online & Accepting</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors">
              <Phone size={16} /> Helpline
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-black transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  {React.cloneElement(stat.icon, { size: 20, className: "text-gray-500 group-hover:text-white transition-colors" })}
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold mb-1 uppercase tracking-wider">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
                  <span className="text-xs font-bold text-green-600 mb-1">{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* New Lead Alert (Flashy but monochrome) */}
            <div className="bg-black text-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="animate-pulse w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">New Request Nearby</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Fan Installation & Repair</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <MapPin size={14} /> 2.4 km away • Sector 14
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                  <span className="text-2xl font-bold mb-3">₹350</span>
                  <button className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors shadow-sm">
                    Accept Job
                  </button>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                <h3 className="text-lg font-bold text-black flex items-center gap-2">
                  <Calendar size={20} /> Today's Itinerary
                </h3>
                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">2 Jobs Left</span>
              </div>

              <div className="divide-y divide-gray-100">
                {upcomingJobs.map((job, i) => (
                  <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex gap-5">
                        <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center shrink-0">
                          <p className="text-[10px] font-bold text-gray-500 uppercase">Time</p>
                          <p className="text-sm font-bold text-black">{job.time.split(' ')[0]}</p>
                          <p className="text-[10px] font-bold text-gray-500">{job.time.split(' ')[1]}</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                             <Badge variant={job.status === 'en_route' ? 'warning' : 'info'}>
                               {job.status === 'en_route' ? 'Action Required' : 'Upcoming'}
                             </Badge>
                             <span className="text-gray-400 font-bold text-xs">#{job.id}</span>
                          </div>
                          <h4 className="text-lg font-bold text-black mb-2">{job.service}</h4>
                          <div className="space-y-1 text-sm font-medium text-gray-600">
                            <p className="flex items-center gap-2"><Users size={14} className="text-gray-400"/> {job.customer}</p>
                            <p className="flex items-center gap-2"><MapPin size={14} className="text-gray-400"/> {job.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                        <div className="md:text-right mb-4 md:mb-0">
                          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Est. Payout</p>
                          <p className="text-xl font-bold text-black">{job.payout}</p>
                        </div>
                        <div className="flex gap-2 w-full">
                          <button className="flex-1 md:flex-none p-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-center" title="Call Customer">
                            <Phone size={18} />
                          </button>
                          <button className="flex-1 md:flex-none px-6 py-3 bg-black text-white font-bold rounded-lg text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
                            {job.status === 'en_route' ? 'Start Job' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            
            {/* Wallet / Earnings Summary */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Financials</h4>
              <div className="mb-6">
                <p className="text-3xl font-bold text-black">₹42,850</p>
                <p className="text-sm font-medium text-gray-500">Total earnings this month</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Next Payout (12 May)</span>
                  <span className="font-bold text-black">₹8,450</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Pending Clearance</span>
                  <span className="font-bold text-gray-400">₹1,200</span>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 border border-black text-black font-bold hover:bg-gray-50 py-3 rounded-lg text-sm transition-colors">
                View Ledger <ArrowRight size={16} />
              </button>
            </div>
            
            {/* Pro Academy / Quality Score */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Quality Score</h4>
                <ShieldCheck className="text-green-600" size={20} />
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-black">Excellent Standing</span>
                  <span className="font-bold text-black">95/100</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-green-500 rounded-full" />
                </div>
                <p className="text-xs font-medium text-gray-500 mt-2">Maintain above 90 to keep Platinum benefits.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-sm text-black mb-1">New Training Available</h5>
                <p className="text-xs text-gray-500 font-medium mb-3">Learn Advanced AC Servicing to unlock higher tier jobs.</p>
                <button className="text-xs font-bold text-black underline">Start Module</button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-white border border-gray-200 rounded-xl text-center hover:border-black transition-colors">
                <Calendar size={20} className="mx-auto mb-2 text-gray-600" />
                <span className="text-xs font-bold text-black">Calendar</span>
              </button>
              <button className="p-4 bg-white border border-gray-200 rounded-xl text-center hover:border-black transition-colors">
                <MessageSquare size={20} className="mx-auto mb-2 text-gray-600" />
                <span className="text-xs font-bold text-black">Support</span>
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerDashboard;
