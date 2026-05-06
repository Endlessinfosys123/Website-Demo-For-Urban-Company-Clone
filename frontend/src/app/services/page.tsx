'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Play, ChevronRight, Zap } from 'lucide-react';
import { Card, Button, Badge, Input } from '@/components/shared/DesignSystem';
import Link from 'next/link';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cleaning', 'Electrician', 'Plumber', 'Carpentry', 'Salon', 'AC Repair'];

  const services = [
    { name: 'Full Home Cleaning', price: '₹2,499', rating: '4.8', category: 'Cleaning', image: 'https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=600' },
    { name: 'Fan Repair & Install', price: '₹149', rating: '4.7', category: 'Electrician', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600' },
    { name: 'Kitchen Deep Cleaning', price: '₹1,299', rating: '4.9', category: 'Cleaning', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600' },
    { name: 'Haircut for Men', price: '₹199', rating: '4.6', category: 'Salon', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600' },
    { name: 'AC Service (Split)', price: '₹599', rating: '4.8', category: 'AC Repair', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600' },
    { name: 'Tap Repair', price: '₹129', rating: '4.5', category: 'Plumber', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600' },
  ];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-black mb-10 tracking-tighter">What can we help <br /> you with <span className="text-primary italic">today?</span></h1>
            <div className="relative group">
               <Input 
                 placeholder="Search for 'AC Repair', 'Cleaning', 'Salon'..." 
                 className="py-8 px-10 text-xl shadow-2xl shadow-slate-200/50"
                 icon={<Search size={28} className="text-slate-300 group-focus-within:text-primary transition-colors" />}
               />
               <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3">
                 <Button className="py-4 px-8 bg-slate-900">Find Services</Button>
               </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <span className="text-slate-400 font-bold text-sm uppercase tracking-widest pt-2">Popular:</span>
              {['AC Repair', 'Sofa Cleaning', 'Mens Haircut', 'Bathroom Cleaning'].map((tag, i) => (
                <button key={i} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-primary hover:text-primary transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-10 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Filters */}
          <aside className="lg:w-80 space-y-12">
            <div>
              <h3 className="text-xl font-black mb-8">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "w-full text-left px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-between group",
                      activeCategory === cat ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {cat}
                    <ChevronRight size={16} className={cn("transition-transform", activeCategory === cat ? "translate-x-1" : "opacity-0 group-hover:opacity-100")} />
                  </button>
                ))}
              </div>
            </div>

            <Card className="bg-slate-900 text-white p-10 border-none overflow-hidden relative">
              <div className="relative z-10">
                <Zap className="text-primary mb-6" size={32} />
                <h4 className="text-xl font-black mb-2">UC Plus</h4>
                <p className="text-slate-400 text-sm font-bold mb-8">Save 15% on every booking with our membership.</p>
                <Button variant="secondary" className="w-full">Join Now</Button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </Card>
          </aside>

          {/* Service Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black">{activeCategory} Services</h2>
              <div className="flex items-center gap-4">
                <span className="text-slate-400 font-bold text-sm">{filteredServices.length} Results</span>
                <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50">
                  <Filter size={18} /> Sort
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredServices.map((service, i) => (
                <Card key={i} className="p-0 border-none overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{service.name}</h4>
                      <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-xl text-xs font-black">
                         <Star size={14} fill="currentColor" /> {service.rating}
                      </div>
                    </div>
                    <p className="text-slate-500 font-bold text-sm mb-10 line-clamp-2">Professional deep cleaning services for your home using high-end equipment.</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">Starts at</p>
                        <p className="text-2xl font-black text-slate-900">{service.price}</p>
                      </div>
                      <Link href={`/booking/UC-00${i+1}`}>
                        <Button className="bg-slate-900 group-hover:bg-primary transition-all">
                          Book Now <ChevronRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default ServicesPage;
