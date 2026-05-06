'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, TrendingUp, Users, 
  Award, Calendar, DollarSign,
  ChevronRight, ArrowUpRight, 
  MapPin, Clock, Star
} from 'lucide-react';
import { Card, Button, Badge } from '@/components/shared/DesignSystem';
import Link from 'next/link';

const PartnerDashboard = () => {
  const stats = [
    { label: 'Total Earnings', value: '₹42,850', trend: '+12%', icon: <DollarSign className="text-green-600" />, color: 'bg-green-50' },
    { label: 'Avg Rating', value: '4.9', trend: 'Stable', icon: <Star className="text-amber-500" />, color: 'bg-amber-50' },
    { label: 'Jobs Done', value: '156', trend: '+8', icon: <Zap className="text-blue-600" />, color: 'bg-blue-50' },
    { label: 'Level', value: 'Gold', trend: 'Next: Platinum', icon: <Award className="text-purple-600" />, color: 'bg-purple-50' },
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
    <div className="min-h-screen bg-slate-950 text-white pb-24">
      {/* Top Navbar */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50 px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-black tracking-tighter">PARTNER<span className="text-primary">PORTAL</span></h1>
          <Badge variant="success" className="bg-green-500/20 text-green-400 border border-green-500/20">ONLINE</Badge>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex flex-col items-end">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Next Payout</p>
            <p className="font-black text-primary">Monday, 12 May</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
            <Users size={20} />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-10 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Performance Overview</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Good morning, <br /><span className="text-slate-400">Sunil Electricals.</span></h2>
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <Button variant="secondary" className="flex-1 lg:flex-none py-6 px-10 rounded-[24px]">
              Go Offline
            </Button>
            <Button className="flex-1 lg:flex-none py-6 px-10 rounded-[24px] bg-white text-slate-950 hover:bg-slate-200">
              View Earnings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-white/5 border-white/10 p-10 hover:bg-white/10" hover={true}>
              <div className="flex justify-between items-start mb-10">
                <div className={cn("p-5 rounded-[24px] bg-white/5", stat.color.replace('bg-', 'text-'))}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1 text-green-400 text-xs font-black">
                   {stat.trend} <ArrowUpRight size={14} />
                </div>
              </div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-4xl font-black text-white">{stat.value}</h3>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black tracking-tight">Today's Schedule</h3>
              <p className="text-slate-500 font-bold">2 Jobs Scheduled</p>
            </div>

            <div className="space-y-8">
              {upcomingJobs.map((job, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-10 group overflow-hidden relative">
                  {/* Progress Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
                    <div className="flex gap-8">
                      <div className="w-20 h-20 rounded-[28px] bg-slate-900 border border-white/10 flex flex-col items-center justify-center shrink-0">
                        <p className="text-[10px] font-black text-slate-500 uppercase">Start</p>
                        <p className="text-xl font-black text-primary">{job.time.split(' ')[0]}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                           <Badge className="bg-primary/20 text-primary border border-primary/20">Upcoming</Badge>
                           <span className="text-slate-600 font-bold text-xs">{job.id}</span>
                        </div>
                        <h4 className="text-2xl font-black mb-3">{job.service}</h4>
                        <div className="flex flex-wrap gap-6 text-slate-400 font-bold text-sm">
                          <p className="flex items-center gap-2"><Users size={16} className="text-slate-600" /> {job.customer}</p>
                          <p className="flex items-center gap-2"><MapPin size={16} className="text-slate-600" /> {job.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-10">
                      <div className="text-right">
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Estimated Payout</p>
                        <p className="text-3xl font-black text-green-400">{job.payout}</p>
                      </div>
                      <Button className="w-full md:w-auto bg-white text-slate-950 font-black px-10">
                        Start Job
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* New Leads / Alerts */}
          <div className="space-y-10">
            <Card className="bg-primary p-10 border-none relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">Lead Center</h3>
                <p className="text-white/70 font-bold mb-10 leading-relaxed">
                  There are 5 new service requests in your area matching your expertise.
                </p>
                <Button className="w-full bg-white text-primary py-6">
                  Check Available Leads
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
            </Card>

            <Card className="bg-white/5 border-white/10 p-10">
              <h4 className="text-xl font-black mb-8 flex items-center gap-3">
                <Calendar className="text-purple-500" /> Availability
              </h4>
              <div className="grid grid-cols-7 gap-3 mb-10">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className={cn(
                    "aspect-square rounded-xl flex items-center justify-center font-black text-xs transition-all cursor-pointer border",
                    i < 5 ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-slate-500"
                  )}>
                    {day}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 py-5">
                Manage Calendar
              </Button>
            </Card>

            <Card className="bg-slate-900 border-white/5 p-10 text-center">
              <div className="w-20 h-20 rounded-[32px] bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-6">
                <Award size={40} />
              </div>
              <h4 className="text-xl font-black mb-2">Pro Training</h4>
              <p className="text-slate-500 font-bold text-sm mb-8">Complete 2 more modules to reach Platinum level.</p>
              <div className="w-full h-2 bg-white/5 rounded-full mb-10">
                <div className="w-[75%] h-full bg-amber-500 rounded-full" />
              </div>
              <Button variant="ghost" className="w-full text-slate-400 font-black">
                Open Academy
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default PartnerDashboard;
