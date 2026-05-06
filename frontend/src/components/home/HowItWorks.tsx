'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Choose a service',
    desc: 'Select from over 50+ professional services for your home and lifestyle.',
    image: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
  },
  {
    number: '02',
    title: 'Book a slot',
    desc: 'Pick a date and time that works best for you. Our pro will arrive on time.',
    image: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png'
  },
  {
    number: '03',
    title: 'Relax and enjoy',
    desc: 'Our expert takes care of the work while you focus on what matters to you.',
    image: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">The Process</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Simple 3-Step Booking.</h2>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
            We've streamlined the way you book home services. Fast, efficient, and 100% transparent.
          </p>
        </div>

        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-12">
                  <div className="w-52 h-52 bg-white rounded-[60px] flex items-center justify-center border-4 border-slate-100 group-hover:border-primary transition-all duration-700 shadow-2xl shadow-slate-900/5 group-hover:scale-110 group-hover:rotate-6">
                    <img src={step.image} alt={step.title} className="w-24 h-24 grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center font-black text-xl shadow-2xl group-hover:bg-primary transition-colors">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 text-slate-900 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed max-w-[300px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
