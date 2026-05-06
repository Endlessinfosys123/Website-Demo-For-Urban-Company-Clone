'use client';

import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cleaning', 'Electrician', 'Plumber', 'Carpentry', 'Salon', 'AC Repair'];

  const services = [
    { name: 'Full Home Cleaning', price: '₹2,499', rating: '4.8', reviews: '12k', category: 'Cleaning', image: 'https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=400' },
    { name: 'Fan Repair & Install', price: '₹149', rating: '4.7', reviews: '5k', category: 'Electrician', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
    { name: 'Kitchen Deep Cleaning', price: '₹1,299', rating: '4.9', reviews: '8k', category: 'Cleaning', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400' },
    { name: 'Haircut for Men', price: '₹199', rating: '4.6', reviews: '42k', category: 'Salon', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400' },
    { name: 'AC Service (Split)', price: '₹599', rating: '4.8', reviews: '15k', category: 'AC Repair', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400' },
    { name: 'Tap Repair', price: '₹129', rating: '4.5', reviews: '3k', category: 'Plumber', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400' },
  ];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-xs text-gray-500 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-black">Services</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar - Categories */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28">
              <h1 className="text-2xl font-bold text-black mb-6">Categories</h1>
              <nav className="flex flex-col space-y-1">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      activeCategory === cat 
                        ? 'bg-gray-100 text-black' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Content - Services */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-black mb-6">{activeCategory} Services</h2>
            
            <div className="flex flex-col gap-6">
              {filteredServices.map((service, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  {/* Service Image */}
                  <div className="w-full sm:w-40 h-32 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Service Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">{service.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1 font-semibold text-black">
                          <Star size={14} fill="currentColor" /> {service.rating}
                        </div>
                        <span>({service.reviews} reviews)</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>{service.category}</span>
                      </div>
                      <p className="text-gray-500 text-sm line-clamp-2">Standard service for typical requirements. Takes approx 45 mins.</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-black">{service.price}</span>
                      <Link href={`/booking/UC-00${i+1}`}>
                        <button className="px-6 py-2 bg-white border border-gray-300 text-black font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors">
                          Add +
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
