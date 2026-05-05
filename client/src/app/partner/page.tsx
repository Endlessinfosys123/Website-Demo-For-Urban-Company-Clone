'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Wallet, TrendingUp, 
  ShieldCheck, ArrowRight, Star, 
  PlayCircle 
} from 'lucide-react';
import Link from 'next/link';

const PartnerLanding = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=2000" 
            alt="Partner working" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-8">
              <Star size={14} fill="currentColor" /> Become a Partner
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
              Earn more. <br />
              Grow <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">faster.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-xl leading-relaxed">
              Join 50,000+ service professionals who have grown their business by 3x with UrbanClone. Flexible hours, regular leads, and weekly payouts.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/partner/register" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/40 flex items-center gap-3">
                Join Now <ArrowRight size={20} />
              </Link>
              <button className="flex items-center gap-3 text-white font-bold hover:text-primary transition-colors">
                <PlayCircle size={32} className="text-primary" /> Watch how it works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Wallet className="text-blue-600" />, title: 'Weekly Payouts', desc: 'Get your hard-earned money every week directly in your bank account.' },
              { icon: <TrendingUp className="text-green-600" />, title: 'Grow Business', desc: 'Regular high-quality leads tailored to your location and expertise.' },
              { icon: <Users className="text-purple-600" />, title: 'Full Flexibility', desc: 'Be your own boss. Choose when and where you want to work.' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl border border-border hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{stat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Simple 3-step onboarding</h2>
            <p className="text-muted-foreground text-lg">You are just a few clicks away from growing your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dashed bg-slate-200 -z-0" />
            {[
              { num: '01', title: 'Register', desc: 'Fill out the application and tell us about your expertise.' },
              { num: '02', title: 'Verify', desc: 'Visit our center for a quick background check and skill test.' },
              { num: '03', title: 'Earn', desc: 'Download the partner app and start receiving leads instantly.' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 bg-white">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mb-8 shadow-xl shadow-primary/20 ring-8 ring-white">
                  {step.num}
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-muted-foreground max-w-[280px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-primary rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to take the leap?</h2>
            <p className="text-primary-foreground/80 text-xl mb-12">
              Join the community of the highest-earning service professionals in India.
            </p>
            <Link href="/partner/register" className="inline-block bg-white text-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerLanding;
