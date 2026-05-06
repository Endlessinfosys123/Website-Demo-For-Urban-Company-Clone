'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle } from 'lucide-react';
import { Card, Button, Input } from '@/components/shared/DesignSystem';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-8 block"
          >
            Contact Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]"
          >
            We're here to <br /> <span className="text-primary italic">support you.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-500 font-bold leading-relaxed"
          >
            Whether you have a question about services, pricing, or becoming a partner, our team is ready to help 24/7.
          </motion.p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-black mb-10 tracking-tight">Direct Channels</h3>
                <div className="space-y-8">
                  {[
                    { label: 'Customer Support', value: 'support@urbanclone.com', icon: <Mail className="text-primary" /> },
                    { label: 'Phone Assistance', value: '+91 1800 123 4567', icon: <Phone className="text-primary" /> },
                    { label: 'WhatsApp Support', value: 'Chat with us now', icon: <MessageCircle className="text-green-500" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg font-black text-slate-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-10 tracking-tight">Regional Offices</h3>
                <div className="space-y-8">
                  {[
                    { city: 'New Delhi (HQ)', address: 'Level 12, Cyber Hub, Gurugram, Haryana - 122002' },
                    { city: 'Mumbai', address: 'B-701, BKC Business Park, Bandra East, Mumbai - 400051' },
                  ].map((office, i) => (
                    <div key={i} className="flex gap-6">
                      <MapPin className="text-slate-300 mt-1" size={24} />
                      <div>
                        <h4 className="font-black text-lg mb-1">{office.city}</h4>
                        <p className="text-slate-500 font-bold leading-relaxed">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-16 border-none shadow-2xl bg-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-4 tracking-tighter">Send us a message</h3>
                  <p className="text-slate-500 font-bold mb-12 text-lg">Estimated response time: 2 hours</p>
                  
                  <form className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                        <Input placeholder="John Doe" className="py-6" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                        <Input placeholder="john@example.com" className="py-6" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">How can we help?</label>
                      <select className="w-full bg-slate-50 border-2 border-transparent py-6 px-6 rounded-2xl outline-none transition-all focus:bg-white focus:border-primary/20 font-bold text-slate-600">
                        <option>Booking Related Issue</option>
                        <option>Partner Registration</option>
                        <option>Payment/Refund Query</option>
                        <option>Feedback/Suggestions</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Message Details</label>
                      <textarea 
                        rows={6} 
                        className="w-full bg-slate-50 border-2 border-transparent py-6 px-6 rounded-2xl outline-none transition-all focus:bg-white focus:border-primary/20 font-bold text-slate-600"
                        placeholder="Please describe your query in detail..."
                      />
                    </div>

                    <Button className="w-full py-6 text-lg bg-slate-900 group">
                      Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-0" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-black mb-6 tracking-tight">Need immediate answers?</h2>
              <p className="text-slate-400 font-bold text-xl">Browse our help center for quick solutions.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Button variant="secondary" className="py-6 px-12">Visit Help Center</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 py-6 px-12">Search FAQs</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
