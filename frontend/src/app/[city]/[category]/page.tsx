'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link href={`/${city}`} className="hover:text-black">{cityName}</Link>
          <span>/</span>
          <span className="text-black">{categoryTitle}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-black mb-4">{categoryTitle} in {cityName}</h1>
            <div className="flex items-center space-x-4 text-sm mb-8 border-b border-gray-100 pb-8">
              <div className="flex items-center text-black font-bold">
                <Star size={16} className="fill-black mr-1" />
                <span>4.8 (1.2M+ bookings)</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="text-gray-500 font-medium">Starts at ₹599</div>
            </div>

            {/* Packages Grid */}
            <div className="space-y-6">
               {packages.map((pkg, i) => (
                 <div 
                   key={pkg.id}
                   className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                 >
                   <div className="flex flex-col md:flex-row gap-6">
                      {/* Package Info */}
                      <div className="flex-1">
                         <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-black">{pkg.name}</h3>
                            <div className="text-xl font-bold text-black">₹{pkg.price}</div>
                         </div>
                         <div className="flex items-center space-x-4 text-xs font-semibold text-gray-500 mb-6">
                            <div className="flex items-center"><Clock size={14} className="mr-1" /> {pkg.duration}</div>
                            <div className="flex items-center text-black"><Star size={14} className="fill-black mr-1" /> {pkg.rating} ({pkg.reviews})</div>
                         </div>
                         
                         <div className="border-t border-gray-100 pt-4">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">What's included:</h4>
                            <ul className="grid sm:grid-cols-2 gap-2">
                               {pkg.inclusions.map((inc, j) => (
                                 <li key={j} className="flex items-start text-sm font-medium text-gray-700">
                                   <CheckCircle2 size={16} className="text-green-600 mr-2 shrink-0 mt-0.5" />
                                   <span>{inc}</span>
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>
                      {/* Action */}
                      <div className="md:w-32 shrink-0 flex flex-col justify-between">
                         <div className="aspect-square bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-4xl mb-4">
                            {pkg.image}
                         </div>
                         <button 
                          onClick={() => handleAddToCart(pkg)}
                          className={`w-full py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm border ${
                            addedId === pkg.id 
                              ? 'bg-green-50 border-green-200 text-green-700' 
                              : 'bg-white border-gray-300 text-black hover:bg-gray-50'
                          }`}
                         >
                            {addedId === pkg.id ? 'Added' : 'Add to Cart'}
                         </button>
                      </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Sidebar / Sticky */}
          <div className="hidden lg:block">
             <div className="sticky top-24 space-y-6">
                {items.length > 0 && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-black mb-2">Cart Total ({items.length} items)</h3>
                    <p className="text-gray-500 font-medium text-sm mb-6">Ready to checkout?</p>
                    <button 
                      onClick={() => router.push('/booking')}
                      className="w-full py-3 bg-black text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                    >
                      Checkout Now <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                   <h3 className="text-base font-bold text-black mb-4">Why book with us?</h3>
                   <ul className="space-y-4">
                      {[
                        { icon: <Shield size={18} className="text-black" />, title: 'UC Safe Guard', desc: 'Insurance up to ₹10,000' },
                        { icon: <Clock size={18} className="text-black" />, title: 'Fixed Pricing', desc: 'No hidden charges' },
                        { icon: <CheckCircle2 size={18} className="text-black" />, title: 'Quality Assured', desc: 'Service warranty included' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                           <div className="p-1.5 bg-gray-100 rounded-lg shrink-0">{item.icon}</div>
                           <div>
                              <div className="font-bold text-sm text-black">{item.title}</div>
                              <div className="text-xs font-medium text-gray-500">{item.desc}</div>
                           </div>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
