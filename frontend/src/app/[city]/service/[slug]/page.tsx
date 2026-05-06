'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ChevronRight, Clock, Shield, Info } from 'lucide-react';
import Link from 'next/link';

const ServiceDetailPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <Link href="/delhi/cleaning" className="hover:text-primary">Cleaning</Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">Deep Home Cleaning</span>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Deep Home Cleaning</h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold text-sm">
                <Star size={14} fill="currentColor" /> 4.8
              </div>
              <span className="text-muted-foreground text-sm">(12.4k reviews)</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span className="text-muted-foreground text-sm">15.2k bookings in Delhi</span>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-video mb-12">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200" 
                alt="Service" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">What's included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Complete cleaning of all rooms',
                  'Kitchen deep cleaning (including chimney)',
                  'Bathroom deep cleaning & descaling',
                  'Window track and pane cleaning',
                  'Floor scrubbing with machine',
                  'Dusting & cobweb removal'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm">
                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">About this service</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our deep home cleaning service is designed for homes that need extra attention. We use professional-grade machines and eco-friendly chemicals to ensure every corner of your home is spotless. From descaling bathrooms to degreasing chimneys, our experts cover it all.
            </p>
          </div>
        </div>

        {/* Right Column: Packages & Sticky Booking */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-[40px] border border-border shadow-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Select Package</h3>
              <div className="space-y-4">
                {[
                  { id: 'basic', name: 'Essential Cleaning', price: '₹2,499', time: '4-5 hrs' },
                  { id: 'standard', name: 'Premium Deep Cleaning', price: '₹4,999', time: '7-8 hrs' },
                  { id: 'pro', name: 'Ultra Modern Cleaning', price: '₹7,499', time: '10-12 hrs' },
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full text-left p-6 rounded-3xl border-2 transition-all ${
                      selectedPackage === pkg.id 
                        ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">{pkg.name}</span>
                      <span className="text-primary font-bold">{pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock size={14} />
                      {pkg.time}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground bg-slate-50 p-3 rounded-xl">
                  <Shield size={18} className="text-primary" />
                  Free 7-day service guarantee
                </div>
                <Link 
                  href="/booking" 
                  className="block w-full bg-primary text-white text-center py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-purple-600 rounded-[40px] p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Info size={24} />
                <h4 className="font-bold text-lg">Safe and Secure</h4>
              </div>
              <p className="text-purple-100 text-sm leading-relaxed">
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
