'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Wallet, CreditCard, 
  MapPin, Settings, HelpCircle, 
  ChevronRight, Star, Clock, CheckCircle2 
} from 'lucide-react';
import { Card, Button, Badge } from '@/components/shared/DesignSystem';
import Link from 'next/link';

const CustomerDashboard = () => {
  const stats = [
    { label: 'Active Bookings', value: '2', icon: <ShoppingBag className="text-blue-600" />, color: 'bg-blue-50' },
    { label: 'Wallet Balance', value: '₹1,250', icon: <Wallet className="text-green-600" />, color: 'bg-green-50' },
    { label: 'UC Points', value: '450', icon: <Star className="text-amber-500" />, color: 'bg-amber-50' },
    { label: 'Total Spent', value: '₹12.4k', icon: <CreditCard className="text-purple-600" />, color: 'bg-purple-50' },
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
    <div className="min-h-screen bg-slate-50/50">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40 px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            URBAN<span className="text-primary">CLONE</span>
          </Link>
          <div className="w-px h-8 bg-slate-100 hidden md:block" />
          <p className="text-sm font-bold text-slate-500 hidden md:block">Welcome back, <span className="text-slate-900">Aryan</span></p>
        </div>
        <div className="flex items-center gap-6">
          <button className="p-3 hover:bg-slate-50 rounded-2xl transition-colors relative">
            <HelpCircle size={24} className="text-slate-400" />
            <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full" />
          </button>
          <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg">
            A
          </div>
        </div>
      </div>

      <main className="container mx-auto px-10 py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4 tracking-tighter">My Account</h1>
          <p className="text-slate-500 font-bold text-lg">Manage your bookings, wallet, and settings.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {stats.map((stat, i) => (
            <Card key={i} className="p-10 border-none shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div className={cn("p-5 rounded-[24px]", stat.color)}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content: Recent Bookings */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black tracking-tight">Active Bookings</h2>
              <Link href="/customer/orders" className="text-primary font-black text-sm hover:underline flex items-center gap-2">
                View History <ChevronRight size={16} />
              </Link>
            </div>

            {recentBookings.map((booking, i) => (
              <Card key={i} className="p-10 border-none group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="flex gap-8">
                    <div className="w-24 h-24 rounded-[32px] bg-slate-900 flex items-center justify-center text-white shrink-0">
                      <Clock size={32} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={booking.status === 'In Progress' ? 'info' : 'success'}>
                          {booking.status}
                        </Badge>
                        <span className="text-slate-300 font-bold text-xs">{booking.id}</span>
                      </div>
                      <h4 className="text-2xl font-black mb-1">{booking.service}</h4>
                      <p className="text-slate-500 font-bold flex items-center gap-2">
                        <MapPin size={14} /> South Extension, Delhi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-10 border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-10">
                    <div className="text-right hidden md:block">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Scheduled For</p>
                      <p className="font-black text-slate-900">{booking.date}</p>
                    </div>
                    <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                      Track Pro
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="pt-10">
              <h2 className="text-3xl font-black mb-10 tracking-tight">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Manage Address', desc: 'Add or edit service addresses', icon: <MapPin /> },
                  { title: 'Payment Methods', desc: 'Securely manage your cards', icon: <CreditCard /> },
                  { title: 'Account Settings', desc: 'Update profile and privacy', icon: <Settings /> },
                ].map((action, i) => (
                  <Card key={i} className="p-8 hover:bg-slate-900 group transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {action.icon}
                    </div>
                    <h4 className="text-xl font-black mb-2 group-hover:text-white">{action.title}</h4>
                    <p className="text-sm text-slate-500 font-bold group-hover:text-slate-400">{action.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Profile Summary */}
          <div className="space-y-10">
            <Card className="p-10 bg-slate-900 text-white border-none overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-[32px] bg-primary mb-8 border-4 border-white/10 flex items-center justify-center text-4xl font-black">
                  A
                </div>
                <h3 className="text-3xl font-black mb-2">Aryan Sharma</h3>
                <p className="text-slate-400 font-bold mb-10">Premium Member since 2024</p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Email</span>
                    <span className="font-black">aryan@example.com</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-400 font-bold">Phone</span>
                    <span className="font-black">+91 98765 43210</span>
                  </div>
                </div>

                <Button variant="secondary" className="w-full py-6">
                  Edit Profile
                </Button>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </Card>

            <Card className="p-10 border-none bg-indigo-50/50">
              <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                <Star className="text-amber-500" fill="currentColor" /> Refer & Earn
              </h4>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-8">
                Invite your friends to UrbanClone and get ₹200 off on your next booking!
              </p>
              <div className="bg-white p-4 rounded-2xl border border-indigo-100 flex items-center justify-between mb-8">
                <span className="font-black text-indigo-600 tracking-widest">UC_ARYAN_200</span>
                <button className="text-xs font-black uppercase text-slate-400 hover:text-primary">Copy</button>
              </div>
              <Button className="w-full bg-indigo-600">Invite Now</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper for class merging (already in DesignSystem, but needed for local use if not exported properly)
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default CustomerDashboard;
