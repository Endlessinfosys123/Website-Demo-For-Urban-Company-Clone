'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronRight, Clock, Shield, Info } from 'lucide-react';
import Link from 'next/link';

const ServiceDetailPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight size={14} />
          <Link href="/delhi/cleaning" className="hover:text-black">Cleaning</Link>
          <ChevronRight size={14} />
          <span className="text-black">Deep Home Cleaning</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-black">Deep Home Cleaning</h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-black font-bold text-sm">
                <Star size={14} fill="currentColor" /> 4.8
              </div>
              <span className="text-gray-500 font-medium text-sm">(12.4k reviews)</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="text-gray-500 font-medium text-sm">15.2k bookings in Delhi</span>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video mb-10">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200" 
                alt="Service" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-4">What's included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Complete cleaning of all rooms',
                  'Kitchen deep cleaning (including chimney)',
                  'Bathroom deep cleaning & descaling',
                  'Window track and pane cleaning',
                  'Floor scrubbing with machine',
                  'Dusting & cobweb removal'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-black">About this service</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              Our deep home cleaning service is designed for homes that need extra attention. We use professional-grade machines and eco-friendly chemicals to ensure every corner of your home is spotless. From descaling bathrooms to degreasing chimneys, our experts cover it all.
            </p>
          </div>
        </div>

        {/* Right Column: Packages & Sticky Booking */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-bold mb-6 text-black">Select Package</h3>
              <div className="space-y-4">
                {[
                  { id: 'basic', name: 'Essential Cleaning', price: '₹2,499', time: '4-5 hrs' },
                  { id: 'standard', name: 'Premium Deep Cleaning', price: '₹4,999', time: '7-8 hrs' },
                  { id: 'pro', name: 'Ultra Modern Cleaning', price: '₹7,499', time: '10-12 hrs' },
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full text-left p-5 rounded-lg border-2 transition-all ${
                      selectedPackage === pkg.id 
                        ? 'border-black bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-black text-sm">{pkg.name}</span>
                      <span className="text-black font-bold text-sm">{pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                      <Clock size={14} />
                      {pkg.time}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 p-3 rounded-lg border border-gray-200">
                  <Shield size={16} className="text-black" />
                  Free 7-day service guarantee
                </div>
                <Link 
                  href="/booking" 
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 text-white border border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <Info size={20} />
                <h4 className="font-bold text-sm">Safe and Secure</h4>
              </div>
              <p className="text-gray-300 text-xs font-medium leading-relaxed">
                All our pros follow strict hygiene protocols including masks and temperature checks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
