'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Shield, Clock, CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

const CategoryPage = () => {
  const params = useParams();
  const router = useRouter();
  const { city, category } = params;
  const { addItem, items } = useCartStore();
  const [addedId, setAddedId] = useState<number | null>(null);
  
  const categoryTitle = (category as string).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const cityName = (city as string).charAt(0).toUpperCase() + (city as string).slice(1);

  const packages = [
    {
      id: 1,
      name: 'Power Saver AC Service',
      price: 599,
      duration: '45 mins',
      rating: 4.8,
      reviews: 1240,
      image: '❄️',
      category: category as string,
      inclusions: [
        'Advanced foam cleaning',
        'Filter & coil cleaning',
        'Drain pipe check',
        'Gas pressure check'
      ]
    },
    {
      id: 2,
      name: 'AC Gas Charging',
      price: 2499,
      duration: '60 mins',
      rating: 4.9,
      reviews: 850,
      image: '⛽',
      category: category as string,
      inclusions: [
        'Complete gas refill',
        'Leakage identification',
        'Performance check',
        '90-day warranty'
      ]
    }
  ];

  const handleAddToCart = (pkg: any) => {
    addItem({
      id: pkg.id.toString(),
      name: pkg.name,
      price: pkg.price,
      image: pkg.image,
      category: pkg.category
    });
    setAddedId(pkg.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href={`/${city}`} className="hover:text-primary">{cityName}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{categoryTitle}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{categoryTitle} in {cityName}</h1>
            <div className="flex items-center space-x-4 text-sm mb-12">
              <div className="flex items-center text-green-600 font-bold">
                <Star size={16} className="fill-green-600 mr-1" />
                <span>4.8 (1.2M+ bookings)</span>
              </div>
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
              <div className="text-gray-500">Starts at ₹599</div>
            </div>

            {/* Packages Grid */}
            <div className="space-y-8">
               {packages.map((pkg, i) => (
                 <motion.div 
                   key={pkg.id}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                 >
                   <div className="flex flex-col md:flex-row gap-8">
                      {/* Package Info */}
                      <div className="flex-1">
                         <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                            <div className="text-2xl font-black text-gray-900">₹{pkg.price}</div>
                         </div>
                         <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                            <div className="flex items-center"><Clock size={14} className="mr-1" /> {pkg.duration}</div>
                            <div className="flex items-center"><Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" /> {pkg.rating} ({pkg.reviews})</div>
                         </div>
                         
                         <div className="border-t border-slate-50 pt-6">
                            <h4 className="text-sm font-bold text-gray-700 mb-4">What's included:</h4>
                            <ul className="grid sm:grid-cols-2 gap-3">
                               {pkg.inclusions.map((inc, j) => (
                                 <li key={j} className="flex items-start text-sm text-gray-600">
                                   <CheckCircle2 size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                                   <span>{inc}</span>
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>
                      {/* Action */}
                      <div className="md:w-48 shrink-0 flex flex-col justify-between">
                         <div className="aspect-square bg-slate-50 rounded-3xl flex items-center justify-center text-5xl mb-4 group-hover:scale-110 transition-transform">
                            {pkg.image}
                         </div>
                         <button 
                          onClick={() => handleAddToCart(pkg)}
                          className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${
                            addedId === pkg.id 
                              ? 'bg-green-600 text-white' 
                              : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                          }`}
                         >
                            {addedId === pkg.id ? <CheckCircle2 size={18} /> : <ShoppingCart size={18} />}
                            {addedId === pkg.id ? 'Added' : 'Add to Cart'}
                         </button>
                      </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Right: Sidebar / Sticky */}
          <div className="hidden lg:block">
             <div className="sticky top-24 space-y-6">
                {items.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary p-8 rounded-[40px] text-white shadow-2xl shadow-primary/30"
                  >
                    <h3 className="text-xl font-bold mb-4">Your Cart ({items.length})</h3>
                    <p className="text-primary-foreground/80 text-sm mb-6">Ready to get the best service?</p>
                    <button 
                      onClick={() => router.push('/booking')}
                      className="w-full py-4 bg-white text-primary font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-foreground transition-colors"
                    >
                      Checkout Now <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
                   <h3 className="text-lg font-bold mb-6">Why book with us?</h3>
                   <ul className="space-y-6">
                      {[
                        { icon: <Shield size={20} className="text-primary" />, title: 'UC Safe Guard', desc: 'Insurance up to ₹10,000' },
                        { icon: <Clock size={20} className="text-primary" />, title: 'Fixed Pricing', desc: 'No hidden charges' },
                        { icon: <CheckCircle2 size={20} className="text-primary" />, title: 'Quality Assured', desc: 'Service warranty included' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-4">
                           <div className="p-2 bg-primary/5 rounded-xl">{item.icon}</div>
                           <div>
                              <div className="font-bold text-sm text-slate-900">{item.title}</div>
                              <div className="text-xs text-slate-500">{item.desc}</div>
                           </div>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden">
                   <div className="relative z-10">
                      <h4 className="font-bold text-xl mb-4">Refer & Earn</h4>
                      <p className="text-slate-400 text-sm mb-6">Get ₹100 off on your next booking by inviting your friends.</p>
                      <button className="w-full py-3 bg-white/10 text-white font-bold rounded-xl text-sm border border-white/20 hover:bg-white/20 transition-colors">Refer Now</button>
                   </div>
                   <div className="absolute right-[-20%] bottom-[-20%] w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
