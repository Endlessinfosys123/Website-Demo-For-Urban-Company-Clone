'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { Card, Button } from '@/components/shared/DesignSystem';

const AboutPage = () => {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-slate-950 text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-10 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-8 block"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]"
            >
              Redefining <br /> <span className="text-primary italic">Home Services.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-400 font-bold leading-relaxed mb-12"
            >
              UrbanClone is on a mission to empower millions of professionals worldwide by delivering services in a way that has never been experienced before.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { label: 'Verified Pros', value: '50k+' },
              { label: 'Happy Customers', value: '5M+' },
              { label: 'Services Delivered', value: '12M+' },
              { label: 'Cities Covered', value: '60+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl font-black text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl rotate-3">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200" alt="Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-2xl max-w-xs -rotate-3">
                 <Award className="text-primary mb-4" size={40} />
                 <h4 className="text-xl font-black mb-2">Market Leader</h4>
                 <p className="text-sm text-slate-500 font-bold">Voted #1 most trusted home service platform in 2024.</p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">What drives us</span>
                <h2 className="text-5xl font-black tracking-tight mb-8">Empowering the <br /> <span className="text-gradient">Gig Economy.</span></h2>
                <p className="text-slate-600 text-lg font-bold leading-relaxed mb-10">
                  We believe that professional services should be as easy to book as a ride. Our platform bridges the gap between expert skill and immediate home needs.
                </p>
                
                <div className="space-y-8">
                  {[
                    { title: 'Quality First', desc: 'We only partner with the top 1% of service professionals in every city.', icon: <CheckCircle2 className="text-primary" /> },
                    { title: 'Transparent Pricing', desc: 'No hidden charges or surprise costs. What you see is what you pay.', icon: <CheckCircle2 className="text-primary" /> },
                    { title: 'Safety Guaranteed', desc: 'Every service is insured up to ₹10,000 for your peace of mind.', icon: <CheckCircle2 className="text-primary" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-black text-xl mb-1">{item.title}</h4>
                        <p className="text-slate-500 font-bold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="py-6 px-12 text-lg">Join as a Partner</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-5xl font-black tracking-tighter mb-6">Built by experts, <br /> trusted by millions.</h2>
             <p className="text-slate-500 font-bold text-lg">Our diverse team of engineers, designers, and operators work tirelessly to make your home life easier.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-0 border-none overflow-hidden group">
                <div className="h-80 overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&u=${i}`} alt="Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black mb-2">Global Operations</h4>
                  <p className="text-slate-500 font-bold">Scaling quality across boundaries.</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-10 text-center">
           <h2 className="text-6xl font-black mb-10 tracking-tighter">Ready to experience the <br /> <span className="text-primary italic">future of services?</span></h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Button variant="secondary" className="py-6 px-16 text-lg">Book a Service</Button>
             <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 py-6 px-16 text-lg">Contact Us</Button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
