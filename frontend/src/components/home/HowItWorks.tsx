'use client';

import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Choose a service',
    desc: 'Select from over 50+ professional services for your home and lifestyle.',
    image: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
  },
  {
    number: '2',
    title: 'Book a slot',
    desc: 'Pick a date and time that works best for you. Our pro will arrive on time.',
    image: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png'
  },
  {
    number: '3',
    title: 'Relax and enjoy',
    desc: 'Our expert takes care of the work while you focus on what matters to you.',
    image: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Simple 3-Step Booking</h2>
          <p className="text-sm text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We've streamlined the way you book home services. Fast, efficient, and transparent.
          </p>
        </div>

        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group bg-white"
              >
                <div className="relative mb-8">
                  <div className="w-40 h-40 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-black transition-colors">
                    <img src={step.image} alt={step.title} className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all opacity-80" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
