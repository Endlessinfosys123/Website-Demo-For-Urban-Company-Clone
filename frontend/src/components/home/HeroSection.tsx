'use client';

import React, { useState } from 'react';
import { Search, MapPin, ChevronRight, Wind, Home, Scissors, Sparkles, Droplet } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CitySelector from '../layout/CitySelector';

const HeroSection = () => {
  const router = useRouter();
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('New Delhi');
  const [searchQuery, setSearchQuery] = useState('');
  
  const topCategories = [
    { name: "Women's Salon", icon: <Sparkles size={24} strokeWidth={1.5} />, slug: "salon" },
    { name: "Men's Salon", icon: <Scissors size={24} strokeWidth={1.5} />, slug: "salon-men" },
    { name: "AC Repair", icon: <Wind size={24} strokeWidth={1.5} />, slug: "ac-repair" },
    { name: "Cleaning", icon: <Home size={24} strokeWidth={1.5} />, slug: "cleaning" },
    { name: "Plumber", icon: <Droplet size={24} strokeWidth={1.5} />, slug: "plumber" },
  ];

  const handleSearchSelect = (slug: string) => {
    const citySlug = selectedCity.toLowerCase().replace(/ /g, '-');
    router.push(`/${citySlug}/${slug}`);
  };

  return (
    <section className="pt-32 pb-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-8">
            Home services at your doorstep
          </h1>

          {/* Search Bar */}
          <div className="bg-white border border-gray-300 rounded-xl flex flex-col md:flex-row items-center overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-12 max-w-3xl mx-auto">
            <button 
              onClick={() => setIsCityOpen(true)}
              className="w-full md:w-auto flex items-center gap-2 px-6 py-4 md:border-r border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <MapPin className="text-gray-500" size={20} />
              <span className="font-semibold text-gray-800 whitespace-nowrap">{selectedCity}</span>
            </button>
            
            <div className="flex-1 flex items-center gap-3 px-6 py-4 w-full">
              <Search className="text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for 'AC Service'" 
                className="w-full bg-transparent outline-none font-medium text-black placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Top Categories Grid */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-lg font-bold text-black text-left mb-6">What are you looking for?</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {topCategories.map((cat, i) => (
                <button 
                  key={i}
                  onClick={() => handleSearchSelect(cat.slug)}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-100 group-hover:border-gray-200 transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-black text-center">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <CitySelector 
        isOpen={isCityOpen} 
        onClose={() => setIsCityOpen(false)} 
        onSelect={(city: string) => {
          setSelectedCity(city);
          setIsCityOpen(false);
        }} 
      />
    </section>
  );
};

export default HeroSection;
