'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Shield, Star, Zap, Clock } from 'lucide-react';

export default function Home() {
  const categories = [
    { id: 1, name: 'AC Repair', icon: '❄️', color: 'bg-blue-100', slug: 'ac-repair' },
    { id: 2, name: 'Cleaning', icon: '🧹', color: 'bg-green-100', slug: 'cleaning' },
    { id: 3, name: 'Electrician', icon: '⚡', color: 'bg-yellow-100', slug: 'electrician' },
    { id: 4, name: 'Plumber', icon: '🚰', color: 'bg-indigo-100', slug: 'plumber' },
    { id: 5, name: 'Beauty', icon: '💄', color: 'bg-pink-100', slug: 'beauty' },
    { id: 6, name: 'Massage', icon: '💆', color: 'bg-purple-100', slug: 'massage' },
    { id: 7, name: 'Painting', icon: '🎨', color: 'bg-orange-100', slug: 'painting' },
    { id: 8, name: 'Pest Control', icon: '🐜', color: 'bg-red-100', slug: 'pest-control' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-purple-700 uppercase bg-purple-100 rounded-full">
                #1 Trusted Home Services
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Quality home services, <br />
                <span className="text-purple-600">on demand.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl">
                Expert professionals at your doorstep. From repairs to cleaning, we've got you covered with 100% quality assurance.
              </p>

              {/* Search Box */}
              <div className="flex flex-col sm:flex-row p-2 bg-white rounded-2xl shadow-2xl shadow-purple-200 border border-gray-100 max-w-2xl">
                <div className="flex items-center flex-1 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <Search className="text-gray-400 mr-3" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search for 'AC repair'..." 
                    className="w-full focus:outline-none text-gray-700 font-medium"
                  />
                </div>
                <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all active:scale-95 sm:ml-2">
                  Search
                </button>
              </div>

              {/* Popular Searches */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-sm text-gray-500 font-medium">Popular:</span>
                {['AC Service', 'Deep Cleaning', 'Salon at Home'].map((item) => (
                  <button key={item} className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Illustration/Image - Abstract Shapes for Wow factor */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="relative h-full">
             <motion.div 
               animate={{ 
                 rotate: 360,
                 scale: [1, 1.1, 1],
               }}
               transition={{ 
                 duration: 20, 
                 repeat: Infinity,
                 ease: "linear" 
               }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-5" />
               {/* Use a placeholder image or generating one would be better */}
               <div className="flex items-center justify-center h-full text-9xl">🏠</div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="text-purple-600" />, title: 'Transparent Pricing', desc: 'No hidden costs' },
              { icon: <Star className="text-purple-600" />, title: 'Experts Only', desc: 'Vetted professionals' },
              { icon: <Zap className="text-purple-600" />, title: 'Fully Equipped', desc: 'Professional tools' },
              { icon: <Clock className="text-purple-600" />, title: '100% Quality', desc: 'Service assurance' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="p-3 bg-purple-50 rounded-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600">Choose from a wide range of home services</p>
            </div>
            <button className="text-purple-600 font-bold hover:underline">View All</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <Link href={`/ahmedabad/${cat.slug}`} className={`aspect-square ${cat.color} rounded-3xl flex flex-col items-center justify-center p-6 transition-all group-hover:shadow-xl group-hover:shadow-purple-100 border border-transparent group-hover:border-white`}>
                  <span className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <h3 className="font-bold text-gray-900 text-center">{cat.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-600">Simple 3-step process to get your job done</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
             <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-100 hidden md:block -z-10" />
             
             {[
               { step: '01', title: 'Book a Service', desc: 'Choose from our range of services and book a slot that suits you.' },
               { step: '02', title: 'Expert Arrives', desc: 'Our background-verified professional arrives at your doorstep.' },
               { step: '03', title: 'Job Done', desc: 'Sit back and relax while our expert takes care of everything.' },
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center text-center space-y-4">
                 <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg">
                   {item.step}
                 </div>
                 <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                 <p className="text-gray-500 max-w-xs">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
             <div className="relative z-10 max-w-xl text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Earn more with UrbanServe</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Join our community of 50,000+ professionals and grow your business with regular leads and transparent earnings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all">
                    Register as Partner
                  </button>
                  <button className="px-8 py-4 bg-gray-800 text-white font-bold rounded-2xl border border-gray-700 hover:bg-gray-700 transition-all">
                    Learn More
                  </button>
                </div>
             </div>
             {/* Abstract background shape */}
             <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
