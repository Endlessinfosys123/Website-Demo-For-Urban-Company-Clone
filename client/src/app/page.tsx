'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServiceGrid from '@/components/home/ServiceGrid';
import HowItWorks from '@/components/home/HowItWorks';
import TrustBadges from '@/components/home/TrustBadges';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Smartphone, CheckCircle2, Play, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServiceGrid />
      
      {/* Featured Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Most Booked</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Trending services <br />
                in <span className="text-gradient">New Delhi</span>
              </h2>
            </div>
            <Link href="/services" className="group flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors">
              View all services <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'AC Deep Cleaning', price: '599', rating: '4.8', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400', tag: 'Best Seller' },
              { name: 'Kitchen Cleaning', price: '1,299', rating: '4.9', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400', tag: 'Recommended' },
              { name: 'Sofa Spa & Shampoo', price: '499', rating: '4.7', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400', tag: 'Fastest' },
              { name: 'Bathroom Cleaning', price: '399', rating: '4.6', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400', tag: 'Top Rated' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                    {service.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{service.name}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-lg text-xs font-bold">
                      <Star size={12} fill="currentColor" /> {service.rating}
                    </div>
                    <span className="text-gray-400 text-xs">(12k+ Bookings)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Starts at</p>
                      <p className="text-xl font-black text-gray-900">₹{service.price}</p>
                    </div>
                    <button className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors shadow-lg active:scale-90">
                      <Play size={16} fill="currentColor" className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section - Creative Layout */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block">Safety First</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Your safety is our <br />
                <span className="text-gradient">top priority.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Verified Professionals', desc: 'Every pro undergoes a rigorous 4-step background verification process.' },
                  { title: 'Masks & Gloves', desc: 'All pros follow strict hygiene protocols including temperature checks.' },
                  { title: 'Insurance Covered', desc: 'Up to ₹10,000 insurance coverage for all services provided by us.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-[50px] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=1200" alt="Safety" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[30px] text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <ShieldCheck size={32} className="text-primary" />
                      <h3 className="text-2xl font-bold">UC SafeGuard</h3>
                    </div>
                    <p className="text-sm text-gray-200">Our promise to keep you and your family safe during every service visit.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Unique Design */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-center md:text-left">
              Loved by <br /> <span className="text-primary">Millions.</span>
            </h2>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-black">4.8</p>
                <div className="flex text-amber-500 mt-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-500 text-[10px] uppercase font-bold mt-2">App Store Rating</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-4xl font-black">10M+</p>
                <p className="text-gray-500 text-[10px] uppercase font-bold mt-2">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[50px] relative group hover:bg-white/10 transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-primary/20 transition-colors" size={80} />
                <div className="relative z-10">
                  <p className="text-lg text-gray-300 leading-relaxed mb-10">
                    "The service was exceptionally professional. Rahul arrived right on time and deep cleaned my AC so well it feels brand new. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                    <div>
                      <h4 className="font-bold">Ananya Sharma</h4>
                      <p className="text-gray-500 text-sm">New Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Promo - Creative Layout */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
            
            <div className="max-w-xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Home services <br />
                at your <span className="text-white underline decoration-white/30">fingertips.</span>
              </h2>
              <p className="text-xl text-white/80 mb-12">Download the UrbanClone app to book services and track them in real-time.</p>
              <div className="flex flex-wrap gap-6">
                <Link href="#" className="flex items-center gap-4 bg-black px-8 py-4 rounded-3xl hover:scale-105 transition-transform">
                   <Smartphone className="text-white" size={32} />
                   <div className="text-left">
                     <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Download on</p>
                     <p className="text-lg font-bold">App Store</p>
                   </div>
                </Link>
                <Link href="#" className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-3xl hover:scale-105 transition-transform">
                   <Smartphone className="text-black" size={32} />
                   <div className="text-left">
                     <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Get it on</p>
                     <p className="text-lg font-bold">Google Play</p>
                   </div>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 mt-16 lg:mt-0 relative z-10 transform lg:rotate-6 hover:rotate-0 transition-transform duration-700">
               <div className="bg-slate-900 rounded-[50px] p-4 border-[8px] border-slate-800 shadow-2xl">
                  <div className="bg-white rounded-[40px] aspect-[9/19] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-2xl z-20" />
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400" alt="App Preview" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <TrustBadges />
    </div>
  );
};

export default HomePage;
