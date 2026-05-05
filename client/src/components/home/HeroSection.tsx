'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Quality home services, <span className="text-primary">on demand</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Experienced, hand-picked Professionals to serve you at your doorstep.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto border border-border">
            <div className="flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-border w-full md:w-auto">
              <MapPin size={20} className="text-primary" />
              <span className="text-sm font-semibold whitespace-nowrap">New Delhi</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 flex-1 w-full">
              <Search size={20} className="text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search for 'AC Repair', 'Salon', 'Cleaning'..." 
                className="w-full bg-transparent border-none outline-none text-base"
              />
            </div>
            <button className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg">
              Search
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['AC Repair', 'Home Cleaning', 'Salon for Women', 'Massage', 'Electricians'].map((service) => (
              <button 
                key={service}
                className="px-4 py-1.5 bg-white border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                {service}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
