'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageSquare, MapPin, 
  Calendar, Clock, ShieldCheck, 
  ChevronRight, ArrowLeft, Star, Check as LucideCheck 
} from 'lucide-react';
import Link from 'next/link';

const OrderTrackingPage = () => {
  const statusSteps = [
    { label: 'Booking Confirmed', time: '10:00 AM', status: 'completed' },
    { label: 'Partner Assigned', time: '10:05 AM', status: 'completed' },
    { label: 'Partner En Route', time: '09:45 AM', status: 'active' },
    { label: 'Job Started', time: '--:--', status: 'pending' },
    { label: 'Job Completed', time: '--:--', status: 'pending' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="container mx-auto px-4 pt-8">
        <Link href="/orders" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to My Bookings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Status & Tracking */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-border">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Deep Home Cleaning</h1>
                  <p className="text-muted-foreground font-medium">Order ID: #UC9821</p>
                </div>
                <div className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-sm">
                  Partner is en route
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-0 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-100" />
                {statusSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-8 relative pb-12 last:pb-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${
                      step.status === 'completed' ? 'bg-green-500 text-white' : 
                      step.status === 'active' ? 'bg-primary text-white animate-pulse' : 
                      'bg-slate-200 text-slate-400'
                    }`}>
                      {step.status === 'completed' ? <StatusCheck size={20} /> : <div className="w-2.5 h-2.5 rounded-full bg-current" />}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-start">
                        <h4 className={`font-bold ${step.status === 'pending' ? 'text-slate-400' : 'text-foreground'}`}>
                          {step.label}
                        </h4>
                        <span className="text-xs text-muted-foreground font-medium">{step.time}</span>
                      </div>
                      {step.status === 'active' && (
                        <p className="text-sm text-muted-foreground mt-1">Our professional Rahul is on his way to your location.</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-[40px] border border-border shadow-xl h-[400px] overflow-hidden relative group">
              <img 
                src="https://media.wired.com/photos/59269770af951b14815456f4/master/w_1600,c_limit/GoogleMap-660x440.jpg" 
                alt="Tracking Map" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-full shadow-2xl border border-border font-bold flex items-center gap-3">
                <MapPin className="text-primary" />
                Live Tracking Enabled
              </div>
            </div>
          </div>

          {/* Right: Partner & Service Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-[40px] border border-border p-8 shadow-xl">
              <h3 className="text-lg font-bold mb-8">Service Professional</h3>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" 
                    alt="Partner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Rahul Kumar</h4>
                  <div className="flex items-center gap-1 text-sm font-bold mt-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" /> 4.9 (2k+ jobs)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-slate-100 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                  <MessageSquare size={20} /> Chat
                </button>
                <button className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  <Phone size={20} /> Call
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[40px] border border-border p-8 shadow-xl">
              <h3 className="text-lg font-bold mb-6">Booking Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-muted-foreground shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Date</p>
                    <p className="font-bold">Wednesday, May 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-muted-foreground shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Time Slot</p>
                    <p className="font-bold">10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-muted-foreground shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Location</p>
                    <p className="font-bold">Green Park, South Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full p-6 text-red-600 font-bold hover:bg-red-50 rounded-[30px] border-2 border-dashed border-red-100 transition-all">
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusCheck = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default OrderTrackingPage;
