'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const PartnerPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-black mb-8"
             >
               Grow your business <br />
               <span className="text-purple-500 text-6xl">with UrbanServe</span>
             </motion.h1>
             <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
               Join over 50,000+ professionals earning up to ₹50,000 per month with flexible hours and guaranteed leads.
             </p>
             <button className="px-10 py-5 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95 shadow-xl shadow-purple-500/20">
               Register as Partner
             </button>
          </div>
        </div>
        {/* Background shapes */}
        <div className="absolute right-[-10%] bottom-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <DollarSign size={32} />, title: 'High Earnings', desc: 'Earn up to ₹50,000 per month with weekly payouts.' },
              { icon: <Users size={32} />, title: 'Regular Leads', desc: 'Get guaranteed service requests near your location.' },
              { icon: <ShieldCheck size={32} />, title: 'Insurance', desc: 'Stay protected with our partner insurance policy.' },
              { icon: <TrendingUp size={32} />, title: 'Growth', desc: 'Upskill with free training and certified badges.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 hover:bg-purple-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                   {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl font-black text-gray-900 mb-8">What you need to get started</h2>
                 <ul className="space-y-6">
                    {[
                      'Aadhar Card & PAN Card for verification',
                      'Minimum 2 years of experience in your field',
                      'Professional equipment and uniform (provided)',
                      'Valid bank account for weekly payouts',
                      'Android smartphone with UrbanServe Partner App'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                        <span className="text-lg font-medium text-gray-700">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="lg:w-1/2 w-full aspect-square bg-gray-200 rounded-[40px] flex items-center justify-center text-gray-400 font-bold">
                 [Partner App Preview Image]
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="text-4xl font-black text-center mb-16">Partner Success Stories</h2>
           <div className="flex space-x-8 overflow-x-auto pb-12 snap-x">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[400px] p-8 bg-gray-50 rounded-[32px] snap-center">
                   <p className="text-gray-600 italic mb-8">
                     "Joining UrbanServe was the best decision for my plumbing business. I now have a steady flow of customers and my income has tripled in just 6 months."
                   </p>
                   <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full" />
                      <div>
                         <div className="font-bold text-gray-900">Amit Prajapati</div>
                         <div className="text-sm text-gray-500">Professional Plumber, Ahmedabad</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
