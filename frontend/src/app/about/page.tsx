'use client';

import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <main className="bg-white pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-gray-500 font-bold uppercase tracking-wider text-xs mb-4 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
              Redefining <br /> Home Services.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              UrbanCompany clone is on a mission to empower millions of professionals worldwide by delivering services in a way that has never been experienced before.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Verified Pros', value: '50k+' },
              { label: 'Happy Customers', value: '5M+' },
              { label: 'Services Delivered', value: '12M+' },
              { label: 'Cities Covered', value: '60+' },
            ].map((stat, i) => (
              <div key={i} className="text-left border-l border-gray-200 pl-6">
                <p className="text-3xl font-bold text-black mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200" alt="Team" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Empowering the Gig Economy</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We believe that professional services should be as easy to book as a ride. Our platform bridges the gap between expert skill and immediate home needs.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Quality First', desc: 'We only partner with the top 1% of service professionals in every city.', icon: <CheckCircle2 className="text-black" size={24} /> },
                    { title: 'Transparent Pricing', desc: 'No hidden charges or surprise costs. What you see is what you pay.', icon: <CheckCircle2 className="text-black" size={24} /> },
                    { title: 'Safety Guaranteed', desc: 'Every service is insured up to ₹10,000 for your peace of mind.', icon: <CheckCircle2 className="text-black" size={24} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-black text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/partner" className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Join as a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl font-bold text-black mb-4">Built by experts, trusted by millions.</h2>
             <p className="text-gray-600">Our diverse team of engineers, designers, and operators work tirelessly to make your home life easier.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&u=${i}`} alt="Office" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-black mb-1">Global Operations</h4>
                  <p className="text-gray-500 text-sm">Scaling quality across boundaries.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Ready to experience the future of services?</h2>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/services" className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
               Book a Service
             </Link>
             <Link href="/contact" className="px-8 py-3 bg-white border border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-50 transition-colors">
               Contact Us
             </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
