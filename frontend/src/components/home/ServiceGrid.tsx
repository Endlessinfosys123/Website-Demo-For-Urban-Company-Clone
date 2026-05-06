'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Women\'s Salon & Spa', slug: 'salon-for-women', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400' },
  { name: 'Men\'s Salon & Massage', slug: 'salon-for-men', image: 'https://images.unsplash.com/photo-1512690192331-789a67a86c65?q=80&w=400' },
  { name: 'AC & Appliance Repair', slug: 'ac-repair', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400' },
  { name: 'Cleaning & Pest Control', slug: 'cleaning', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400' },
  { name: 'Electrician, Plumber', slug: 'home-repairs', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
  { name: 'Painting & Waterproofing', slug: 'home-repairs', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400' },
];

const ServiceGrid = () => {
  return (
    <section className="py-12 bg-white mt-4 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black">New and noteworthy</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <Link 
              key={index}
              href={`/delhi/${cat.slug}`} 
              className="group block cursor-pointer"
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden aspect-square mb-3">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-black text-sm leading-tight group-hover:underline">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
