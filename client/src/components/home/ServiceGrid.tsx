'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Women\'s Salon & Spa', slug: 'salon-for-women', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400', color: 'bg-pink-50', textColor: 'text-pink-700' },
  { name: 'Men\'s Salon & Massage', slug: 'salon-for-men', image: 'https://images.unsplash.com/photo-1512690192331-789a67a86c65?q=80&w=400', color: 'bg-blue-50', textColor: 'text-blue-700' },
  { name: 'AC & Appliance Repair', slug: 'ac-repair', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400', color: 'bg-orange-50', textColor: 'text-orange-700' },
  { name: 'Cleaning & Pest Control', slug: 'cleaning', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400', color: 'bg-green-50', textColor: 'text-green-700' },
  { name: 'Electrician, Plumber & Painter', slug: 'home-repairs', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400', color: 'bg-purple-50', textColor: 'text-purple-700' },
  { name: 'Home Repairs & Projects', slug: 'home-repairs', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400', color: 'bg-amber-50', textColor: 'text-amber-700' },
];

const ServiceGrid = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-primary font-black uppercase tracking-[0.25em] text-[11px] mb-6 block">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              What are you <br />
              <span className="text-gradient">looking for today?</span>
            </h2>
          </div>
          <Link href="/services" className="group flex items-center gap-3 font-black text-slate-900 hover:text-primary transition-all text-lg border-b-4 border-primary/20 pb-1">
            View All Categories <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/delhi/${cat.slug}`} 
                className="group block h-full"
              >
                <div className="section-card p-10 flex items-center gap-8 group-hover:border-primary/20">
                  <div className={`w-28 h-28 ${cat.color} rounded-[32px] flex items-center justify-center overflow-hidden shadow-lg transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6`}>
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black leading-snug text-slate-900 group-hover:text-primary transition-colors mb-3">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      Explore Services <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
