'use client';

import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button, Input } from '@/components/shared/DesignSystem';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      {/* Header Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black tracking-tight">
            We're here to help
          </h1>
          <p className="text-lg text-gray-600">
            Whether you have a question about services, pricing, or becoming a partner, our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-black">Direct Channels</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Customer Support', value: 'support@urbanclone.com', icon: <Mail className="text-black" size={20} /> },
                    { label: 'Phone Assistance', value: '+91 1800 123 4567', icon: <Phone className="text-black" size={20} /> },
                    { label: 'WhatsApp Support', value: 'Chat with us', icon: <MessageCircle className="text-black" size={20} /> },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-black">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-black">Offices</h3>
                <div className="space-y-6">
                  {[
                    { city: 'New Delhi (HQ)', address: 'Level 12, Cyber Hub, Gurugram, Haryana - 122002' },
                    { city: 'Mumbai', address: 'B-701, BKC Business Park, Bandra East, Mumbai - 400051' },
                  ].map((office, i) => (
                    <div key={i} className="flex gap-4">
                      <MapPin className="text-gray-400 mt-1 shrink-0" size={20} />
                      <div>
                        <h4 className="font-bold text-black text-sm mb-1">{office.city}</h4>
                        <p className="text-gray-600 text-sm">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-2 text-black">Send us a message</h3>
                <p className="text-gray-500 mb-8 text-sm">Estimated response time: 2 hours</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-black uppercase tracking-wider">Full Name</label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-black uppercase tracking-wider">Email Address</label>
                      <Input placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">How can we help?</label>
                    <select className="w-full bg-white border border-gray-300 py-3 px-4 rounded-lg outline-none transition-all focus:border-black focus:ring-1 focus:ring-black text-sm text-black">
                      <option>Booking Related Issue</option>
                      <option>Partner Registration</option>
                      <option>Payment/Refund Query</option>
                      <option>Feedback/Suggestions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">Message Details</label>
                    <textarea 
                      rows={5} 
                      className="w-full bg-white border border-gray-300 py-3 px-4 rounded-lg outline-none transition-all focus:border-black focus:ring-1 focus:ring-black text-sm text-black"
                      placeholder="Please describe your query in detail..."
                    />
                  </div>

                  <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Need immediate answers?</h2>
          <p className="text-gray-600 mb-8">Browse our help center for quick solutions to common questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Visit Help Center
            </button>
            <button className="px-8 py-3 bg-white border border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Search FAQs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
