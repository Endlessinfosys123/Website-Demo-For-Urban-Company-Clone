'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Star, Shield, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

const CityPage = () => {
  const params = useParams();
  const city = params.city as string;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const categories = [
    { id: 1, name: 'AC Service & Repair', slug: 'ac-repair', image: '❄️' },
    { id: 2, name: 'Home Cleaning', slug: 'cleaning', image: '🧹' },
    { id: 3, name: 'Salon for Women', slug: 'salon', image: '💄' },
    { id: 4, name: 'Massage for Men', slug: 'massage', image: '💆' },
    { id: 5, name: 'Plumbers', slug: 'plumber', image: '🚰' },
    { id: 6, name: 'Electricians', slug: 'electrician', image: '⚡' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">{cityName}</span>
        </div>

        {/* Hero */}
        <section className="mb-16">
          <div className="p-10 md:p-14 rounded-2xl bg-black text-white relative overflow-hidden shadow-md">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Best Home Services in <span className="text-gray-300">{cityName}</span>
              </h1>
              <p className="text-base text-gray-300 mb-8 leading-relaxed font-medium">
                Choose from over 50+ services provided by background-verified professionals in {cityName}. Trusted by 1M+ households.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Star className="text-white fill-white" size={18} />
                  <span className="font-bold text-sm">4.8/5</span>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-white" size={18} />
                  <span className="font-bold text-sm">100%</span>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Safe</span>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">What are you looking for?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link href={`/${city}/${cat.slug}`} key={cat.id}>
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:border-black transition-colors group text-center cursor-pointer">
                  <div className="text-4xl mb-4">
                    {cat.image}
                  </div>
                  <h3 className="font-semibold text-black text-sm">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Service Area */}
        <section className="mt-16 p-10 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <h2 className="text-2xl font-bold text-black mb-4">Serving all major areas in {cityName}</h2>
                 <p className="text-gray-600 mb-8 text-sm font-medium leading-relaxed">
                   Our network of professionals covers every nook and corner of the city. We ensure a professional reaches you within 60 minutes of booking.
                 </p>
                 <div className="flex items-center space-x-2 text-black font-bold text-sm">
                    <MapPin size={18} />
                    <span>Check serviceability in your area</span>
                 </div>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 font-bold border border-gray-300">
                 [Interactive Map Placeholder]
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default CityPage;
