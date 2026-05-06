'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServiceGrid from '@/components/home/ServiceGrid';
import { Star } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroSection />
      
      {/* Most Booked Services - Clean Horizontal Scroll or Grid */}
      <section className="py-12 bg-white mt-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Most Booked Services</h2>
            <Link href="/services" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">
              See All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'AC Servicing', price: '₹599', rating: '4.8', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400', reviews: '24k' },
              { name: 'Sofa Cleaning', price: '₹499', rating: '4.7', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400', reviews: '18k' },
              { name: 'Bathroom Deep Clean', price: '₹399', rating: '4.9', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400', reviews: '32k' },
              { name: 'Haircut for Men', price: '₹199', rating: '4.8', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400', reviews: '55k' },
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-black text-sm mb-1">{service.name}</h3>
                <div className="flex items-center gap-2 text-xs mb-1">
                  <div className="flex items-center gap-1 text-black font-semibold">
                    <Star size={12} fill="currentColor" /> {service.rating}
                  </div>
                  <span className="text-gray-400">({service.reviews})</span>
                </div>
                <p className="text-sm font-semibold text-black">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGrid />
    </main>
  );
};

export default HomePage;
