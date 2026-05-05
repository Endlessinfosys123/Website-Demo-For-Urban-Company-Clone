'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
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
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{cityName}</span>
        </div>

        {/* Hero */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 rounded-[40px] bg-gradient-to-br from-purple-600 to-indigo-700 text-white relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Best Home Services in <span className="text-purple-200">{cityName}</span>
              </h1>
              <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                Choose from over 50+ services provided by background-verified professionals in {cityName}. Trusted by 1M+ households.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="font-bold">4.8/5</span>
                  <span className="text-purple-200 text-sm">Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-purple-200" size={20} />
                  <span className="font-bold">100%</span>
                  <span className="text-purple-200 text-sm">Safe</span>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What are you looking for?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link href={`/${city}/${cat.slug}`} key={cat.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group text-center"
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {cat.image}
                  </div>
                  <h3 className="font-bold text-gray-900">{cat.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Service Area */}
        <section className="mt-20 p-12 bg-gray-50 rounded-[40px] border border-gray-100">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving all major areas in {cityName}</h2>
                 <p className="text-gray-600 mb-8">
                   Our network of professionals covers every nook and corner of the city. We ensure a professional reaches you within 60 minutes of booking.
                 </p>
                 <div className="flex items-center space-x-2 text-purple-600 font-bold">
                    <MapPin size={20} />
                    <span>Check serviceability in your area</span>
                 </div>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center text-gray-400 font-bold">
                 [Interactive Map Placeholder]
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default CityPage;
