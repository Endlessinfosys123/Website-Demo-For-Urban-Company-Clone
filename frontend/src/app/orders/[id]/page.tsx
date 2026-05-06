'use client';

import React from 'react';
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
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <Link href="/orders" className="flex items-center gap-2 text-sm text-gray-500 font-semibold hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to My Bookings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Status & Tracking */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-gray-100 pb-8">
                <div>
                  <h1 className="text-2xl font-bold mb-1 text-black">Deep Home Cleaning</h1>
                  <p className="text-gray-500 font-medium text-sm">Order ID: #UC9821</p>
                </div>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold text-sm border border-green-200">
                  Partner is en route
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-0 relative">
                <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gray-200" />
                {statusSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-6 relative pb-10 last:pb-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-[3px] border-white shadow-sm z-10 ${
                      step.status === 'completed' ? 'bg-black text-white' : 
                      step.status === 'active' ? 'bg-black text-white' : 
                      'bg-gray-100 text-gray-300'
                    }`}>
                      {step.status === 'completed' ? <StatusCheck size={18} /> : <div className="w-2.5 h-2.5 rounded-full bg-current" />}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex justify-between items-start">
                        <h4 className={`font-bold text-sm ${step.status === 'pending' ? 'text-gray-400' : 'text-black'}`}>
                          {step.label}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">{step.time}</span>
                      </div>
                      {step.status === 'active' && (
                        <p className="text-xs text-gray-500 font-medium mt-1">Our professional Rahul is on his way to your location.</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl border border-gray-300 shadow-sm h-[300px] overflow-hidden relative flex items-center justify-center">
              <div className="text-gray-500 font-bold flex items-center gap-3">
                <MapPin className="text-black" />
                Live Tracking Map Placeholder
              </div>
            </div>
          </div>

          {/* Right: Partner & Service Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-base font-bold mb-6 text-black border-b border-gray-100 pb-4">Service Professional</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" 
                    alt="Partner" 
                    className="w-full h-full object-cover grayscale opacity-90"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Rahul Kumar</h4>
                  <div className="flex items-center gap-1 text-xs font-bold mt-1 text-gray-600">
                    <Star size={12} className="fill-black" /> 4.9 (2k+ jobs)
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
                  <MessageSquare size={16} /> Chat
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
                  <Phone size={16} /> Call
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-base font-bold mb-6 text-black border-b border-gray-100 pb-4">Booking Details</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Calendar className="text-gray-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Date</p>
                    <p className="font-bold text-sm text-black">Wednesday, May 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Time Slot</p>
                    <p className="font-bold text-sm text-black">10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Location</p>
                    <p className="font-bold text-sm text-black">Green Park, South Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full p-4 text-red-600 font-bold bg-white hover:bg-red-50 rounded-xl border border-red-200 transition-colors text-sm">
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
