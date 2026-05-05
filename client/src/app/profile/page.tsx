'use client';

import React from 'react';
import { 
  User, Settings, Wallet, 
  MapPin, Bell, Share2, 
  ChevronRight, LogOut, Camera 
} from 'lucide-react';
import Link from 'next/link';

const ProfilePage = () => {
  const menuItems = [
    { icon: <Wallet className="text-blue-600" />, title: 'Wallet', desc: '₹2,450 balance', link: '/wallet' },
    { icon: <MapPin className="text-purple-600" />, title: 'Addresses', desc: '2 saved addresses', link: '/addresses' },
    { icon: <Share2 className="text-green-600" />, title: 'Refer & Earn', desc: 'Earn ₹500 per friend', link: '/refer' },
    { icon: <Bell className="text-amber-500" />, title: 'Notifications', desc: 'Preferences and alerts', link: '/notifications' },
    { icon: <Settings className="text-slate-600" />, title: 'Account Settings', desc: 'Profile, security, and more', link: '/settings' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 pt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="relative group">
            <div className="w-40 h-40 rounded-[50px] overflow-hidden border-8 border-white shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-2 right-2 p-3 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 transition-transform">
              <Camera size={20} />
            </button>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-black mb-2">Amit Sharma</h1>
            <p className="text-muted-foreground font-medium mb-6">+91 98765 43210 • amit.sharma@example.com</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white px-6 py-2 rounded-2xl border border-border shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold">Premium Member</span>
              </div>
              <div className="bg-white px-6 py-2 rounded-2xl border border-border shadow-sm flex items-center gap-2">
                <span className="text-sm font-bold text-primary">1,240 Points</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link href="/orders" className="bg-slate-900 text-white p-8 rounded-[40px] flex items-center justify-between group overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">My Bookings</h3>
              <p className="text-slate-400 text-sm">View and manage your service history</p>
            </div>
            <div className="p-4 bg-white/10 rounded-full group-hover:bg-primary transition-colors relative z-10">
              <ChevronRight size={24} />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-primary/40 transition-colors" />
          </Link>
          <div className="bg-white p-8 rounded-[40px] border border-border shadow-xl flex items-center justify-between group cursor-pointer hover:border-primary transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2">Help Center</h3>
              <p className="text-muted-foreground text-sm">Get support for your bookings</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
              <ChevronRight size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[50px] shadow-xl border border-border overflow-hidden">
          <div className="p-4 md:p-8 space-y-2">
            {menuItems.map((item, i) => (
              <Link 
                key={i} 
                href={item.link}
                className="flex items-center gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-all group"
              >
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <button className="w-full p-8 bg-slate-50 border-t border-border flex items-center justify-center gap-3 text-red-600 font-bold hover:bg-red-50 transition-all">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
