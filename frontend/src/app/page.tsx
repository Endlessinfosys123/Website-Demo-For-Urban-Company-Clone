'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServiceGrid from '@/components/home/ServiceGrid';
import HowItWorks from '@/components/home/HowItWorks';
import TrustBadges from '@/components/home/TrustBadges';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Smartphone, CheckCircle2, Play, ChevronRight, Quote, Zap, Award } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />
      
      {/* Featured Services Section - High Visibility */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Trending Now</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
                Most Booked <br />
                <span className="text-gradient underline decoration-primary/10 decoration-8 underline-offset-8">Services.</span>
              </h2>
            </div>
            <Link href="/services" className="group flex items-center gap-3 font-black text-slate-900 hover:text-primary transition-all text-xl border-b-4 border-primary/20 pb-2">
              View All <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: 'AC Deep Cleaning', price: '599', rating: '4.8', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600', tag: 'Best Seller' },
              { name: 'Kitchen Cleaning', price: '1,299', rating: '4.9', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600', tag: 'Recommended' },
              { name: 'Sofa Spa & Shampoo', price: '499', rating: '4.7', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600', tag: 'Fastest' },
              { name: 'Bathroom Cleaning', price: '399', rating: '4.6', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600', tag: 'Top Rated' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group section-card overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8 px-6 py-2 bg-white text-slate-900 rounded-full text-[11px] font-black uppercase tracking-widest shadow-2xl border border-slate-100">
                    {service.tag}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="font-black text-2xl mb-4 text-slate-900 group-hover:text-primary transition-colors">{service.name}</h3>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-xl text-xs font-black">
                      <Star size={14} fill="currentColor" /> {service.rating}
                    </div>
                    <span className="text-slate-400 font-bold text-sm tracking-tight">12k+ Bookings</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">Starts at</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tighter">₹{service.price}</p>
                    </div>
                    <button className="w-16 h-16 rounded-[24px] bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-all shadow-2xl shadow-slate-900/20 active:scale-90 group-hover:rotate-6">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGrid />

      {/* Safety & Trust - Split Design */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
               <motion.div 
                 initial={{ opacity: 0, rotate: -5 }}
                 whileInView={{ opacity: 1, rotate: 0 }}
                 className="relative z-10 aspect-square rounded-[80px] overflow-hidden border-[12px] border-slate-100 shadow-2xl"
               >
                  <img src="https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=1200" alt="Safety First" className="w-full h-full object-cover" />
               </motion.div>
               <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
               
               {/* High Vis Trust Card */}
               <div className="absolute -bottom-10 -left-10 bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl z-20 max-w-[320px]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                      <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-2xl font-black">UC SafeGuard</h3>
                  </div>
                  <p className="text-sm text-slate-400 font-bold leading-relaxed">Your family's safety is our priority. Every pro is background-verified & COVID-safety trained.</p>
               </div>
            </div>

            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Our Commitment</span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                  Safety in <br />
                  <span className="text-gradient">every touchpoint.</span>
                </h2>
              </div>
              <div className="space-y-10">
                {[
                  { icon: <CheckCircle2 className="text-primary" />, title: '4-Step Verification', desc: 'Rigorous background & criminal record check for every professional.' },
                  { icon: <Zap className="text-primary" />, title: 'Quality Standards', desc: 'Hand-picked experts who undergo 2-week technical training sessions.' },
                  { icon: <Award className="text-primary" />, title: 'Insurance Promise', desc: 'Free accidental & property damage insurance up to ₹10,000.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-[24px] bg-slate-50 border-2 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-2xl text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-bold leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Bolder Layout */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
            <div className="text-center lg:text-left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Testimonials</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                Loved by <br /> <span className="text-primary">Millions.</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-16">
              <div className="text-center">
                <p className="text-6xl font-black mb-4">4.8</p>
                <div className="flex justify-center text-amber-500 mb-4">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest">Store Rating</p>
              </div>
              <div className="hidden md:block h-24 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-6xl font-black mb-4">10M+</p>
                <div className="h-5 mb-4" /> {/* Spacer */}
                <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest">Happy Users</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[50px] relative group hover:bg-white/10 transition-all duration-500"
              >
                <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-primary/20 transition-all" size={100} />
                <div className="relative z-10 h-full flex flex-col">
                  <p className="text-2xl font-medium text-slate-300 leading-relaxed mb-12 italic">
                    "Exceptional service. Rahul was right on time and professional. My home feels refreshed!"
                  </p>
                  <div className="mt-auto flex items-center gap-5">
                    <div className="w-16 h-16 rounded-[24px] bg-primary/20 border-2 border-primary/20 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl">Ananya S.</h4>
                      <p className="text-primary font-black text-[11px] uppercase tracking-widest">New Delhi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Promo - High Impact */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[80px] p-16 md:p-32 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="max-w-2xl relative z-10 text-center lg:text-left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-8 block">Mobile Experience</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter">
                Home services <br />
                at your <span className="text-primary italic">command.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-bold mb-16 leading-relaxed">Download the UrbanClone app for real-time tracking and exclusive mobile offers.</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <Link href="#" className="flex items-center gap-5 bg-white text-slate-900 px-10 py-6 rounded-[32px] hover:scale-105 transition-all shadow-2xl">
                   <Smartphone size={32} />
                   <div className="text-left">
                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Get it on</p>
                     <p className="text-xl font-black">Google Play</p>
                   </div>
                </Link>
                <Link href="#" className="flex items-center gap-5 bg-slate-800 text-white px-10 py-6 rounded-[32px] border border-white/10 hover:scale-105 transition-all shadow-2xl">
                   <Smartphone size={32} />
                   <div className="text-left">
                     <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Download on</p>
                     <p className="text-xl font-black">App Store</p>
                   </div>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 mt-24 lg:mt-0 relative z-10">
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="bg-slate-800 rounded-[60px] p-5 border-[12px] border-slate-700 shadow-[0_100px_100px_-50px_rgba(0,0,0,0.8)] rotate-6"
               >
                  <div className="bg-white rounded-[45px] aspect-[9/19] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600" alt="App Preview" className="w-full h-full object-cover" />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <TrustBadges />
    </main>
  );
};

export default HomePage;
