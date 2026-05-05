'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ChevronRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CitySelector from '../layout/CitySelector';

const HeroSection = () => {
  const router = useRouter();
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('New Delhi');
  const [typedText, setTypedText] = useState('');
  const phrases = ['AC Service', 'Home Cleaning', 'Salon at Home', 'Plumbing'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  const popularServices = [
    { name: 'AC Service & Repair', slug: 'ac-repair' },
    { name: 'Bathroom Cleaning', slug: 'cleaning' },
    { name: 'Full Home Deep Cleaning', slug: 'cleaning' },
    { name: 'Sofa Spa & Shampoo', slug: 'cleaning' },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (typedText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, phraseIndex]);

  const handleSearchSelect = (slug: string) => {
    const citySlug = selectedCity.toLowerCase().replace(/ /g, '-');
    router.push(`/${citySlug}/${slug}`);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background with higher contrast patterns */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-slate-50 rounded-l-[120px] -z-10" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 mb-8 bg-white shadow-xl shadow-primary/5 px-6 py-3 rounded-full border border-primary/10">
                <span className="p-2 bg-primary rounded-xl text-white">
                  <Zap size={14} fill="currentColor" />
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800">
                  Premium Home Services
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-10 tracking-tighter">
                Services at <br />
                <span className="text-gradient">your door.</span>
              </h1>

              <p className="text-2xl text-slate-500 mb-14 max-w-lg leading-relaxed font-bold">
                Professional professionals for 
                <span className="text-primary ml-2 underline decoration-primary/30 decoration-8 underline-offset-4">
                  {typedText}<span className="animate-pulse">|</span>
                </span>
              </p>

              {/* Search Bar - Ultra Clear */}
              <div className="bg-white p-4 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-2 border-slate-100 flex flex-col md:flex-row items-center gap-4 max-w-2xl group transition-all hover:border-primary/20">
                <div className="flex items-center gap-4 px-6 py-4 w-full md:w-auto md:border-r-2 border-slate-100 min-w-[220px]">
                  <MapPin className="text-primary shrink-0" size={24} />
                  <button 
                    onClick={() => setIsCityOpen(true)}
                    className="font-black text-slate-900 text-lg hover:text-primary transition-colors text-left"
                  >
                    {selectedCity}
                  </button>
                </div>
                
                <div className="flex items-center gap-4 px-4 w-full relative">
                  <Search className="text-slate-400 shrink-0" size={24} />
                  <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="w-full bg-transparent outline-none font-black text-slate-900 text-lg placeholder:text-slate-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  
                  {/* Suggestions - Improved Visibility */}
                  <AnimatePresence>
                    {searchQuery.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-20 left-0 w-full bg-white rounded-[32px] shadow-2xl border-2 border-slate-50 p-6 z-50"
                      >
                         <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6 px-2">Best Results</p>
                         <div className="space-y-2">
                            {popularServices.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).map((s) => (
                              <button 
                                key={s.name} 
                                onClick={() => handleSearchSelect(s.slug)}
                                className="w-full text-left p-5 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-between group/item border border-transparent hover:border-primary/10"
                              >
                                <span className="font-black text-slate-800 text-lg">{s.name}</span>
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all">
                                  <ChevronRight size={18} className="text-primary" />
                                </div>
                              </button>
                            ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button className="bg-slate-900 text-white px-10 py-5 rounded-[28px] font-black text-lg transition-all hover:bg-primary active:scale-95 shadow-2xl shadow-slate-900/20">
                  Search
                </button>
              </div>

              <div className="mt-16 flex items-center gap-12">
                <div className="flex -space-x-5">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-[20px] border-4 border-white bg-slate-200 overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform cursor-pointer">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="h-14 w-px bg-slate-200" />
                <div>
                  <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-lg font-black text-slate-900">10 Million+ <span className="text-slate-400 font-bold">Trusted Users</span></p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual - More Distinctive */}
          <div className="relative lg:block hidden">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative"
             >
                <div className="bg-white p-4 rounded-[100px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] border-2 border-slate-50 rotate-3">
                   <div className="rounded-[85px] overflow-hidden aspect-[4/5] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=1200" 
                        alt="Hero" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                   </div>
                </div>

                {/* Clear Floating Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-16 top-1/4 bg-white p-8 rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-50 flex items-center gap-5 min-w-[280px]"
                >
                   <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <ShieldCheck size={28} />
                   </div>
                   <div>
                      <h4 className="font-black text-slate-900 text-lg">Verified Pros</h4>
                      <p className="text-xs text-slate-500 font-bold">4-step background check.</p>
                   </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -right-10 bottom-1/4 bg-slate-900 p-8 rounded-[32px] shadow-2xl text-white min-w-[240px]"
                >
                   <div className="flex items-center gap-3 mb-5">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Tracking</span>
                   </div>
                   <h4 className="font-black text-lg mb-1">Partner Arriving</h4>
                   <p className="text-xs text-primary font-bold">ETA: 08 Minutes</p>
                </motion.div>
             </motion.div>
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
