'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Women\'s Salon & Spa', slug: 'salon-for-women', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400', color: 'bg-pink-50' },
  { name: 'Men\'s Salon & Massage', slug: 'salon-for-men', image: 'https://images.unsplash.com/photo-1512690192331-789a67a86c65?q=80&w=400', color: 'bg-blue-50' },
  { name: 'AC & Appliance Repair', slug: 'ac-repair', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400', color: 'bg-orange-50' },
  { name: 'Cleaning & Pest Control', slug: 'cleaning', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400', color: 'bg-green-50' },
  { name: 'Electrician, Plumber & Painter', slug: 'home-repairs', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400', color: 'bg-purple-50' },
  { name: 'Home Repairs & Projects', slug: 'home-repairs', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400', color: 'bg-amber-50' },
];

const ServiceGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Categories</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">What are you looking for?</h2>
          <p className="text-slate-500 text-lg max-w-2xl">Choose from our wide range of professional services, delivered right to your doorstep.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/delhi/${cat.slug}`} 
                className="group block"
              >
                <div className={`aspect-square rounded-[40px] ${cat.color} p-8 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-4 border border-transparent group-hover:border-white group-hover:ring-8 group-hover:ring-primary/5`}>
                  <div className="w-20 h-20 mb-6 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm font-black leading-tight text-slate-800 group-hover:text-primary transition-colors h-10 flex items-center justify-center">
                    {cat.name}
                  </h3>
                  
                  <div className="mt-4 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                     <ChevronRight size={16} className="text-primary" />
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

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default ServiceGrid;
