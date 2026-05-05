'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ChevronRight, Star, ShieldCheck, Zap } from 'lucide-react';
import CitySelector from '../layout/CitySelector';

const HeroSection = () => {
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('New Delhi');
  const [typedText, setTypedText] = useState('');
  const phrases = ['AC Service', 'Home Cleaning', 'Salon at Home', 'Plumbing'];
  const [phraseIndex, setPhraseIndex] = useState(0);

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

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 rounded-l-[100px] -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 bg-primary/10 rounded-xl text-primary">
                  <Zap size={16} fill="currentColor" />
                </span>
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">
                  India's Largest Home Service Provider
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
                Home services, <br />
                <span className="text-gradient">simplified.</span>
              </h1>

              <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
                Book background-verified professionals for 
                <span className="text-slate-900 font-bold ml-1 border-b-4 border-primary/20">
                  {typedText}<span className="animate-pulse">|</span>
                </span>
              </p>

              {/* Search Bar - Premium Design */}
              <div className="bg-white p-3 rounded-[32px] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-3 max-w-2xl group transition-all hover:shadow-primary/5">
                <div className="flex items-center gap-3 px-6 py-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-slate-100 min-w-[200px]">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <button 
                    onClick={() => setIsCityOpen(true)}
                    className="font-bold text-slate-900 text-left whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {selectedCity}
                  </button>
                </div>
                
                <div className="flex items-center gap-4 px-4 w-full relative">
                  <Search className="text-slate-400 shrink-0" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search for 'AC service'..." 
                    className="w-full bg-transparent outline-none font-medium text-slate-900"
                  />
                  
                  {/* Suggestions Dropdown (Example) */}
                  <div className="absolute top-16 left-0 w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 opacity-0 pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all translate-y-2 group-focus-within:translate-y-0 z-50">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-2">Popular Services</p>
                     <div className="space-y-1">
                        {['AC Service', 'Bathroom Cleaning', 'Full Home Deep Cleaning', 'Sofa Spa'].map((s) => (
                          <button key={s} className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group/item">
                            <span className="font-bold text-slate-700">{s}</span>
                            <ChevronRight size={16} className="text-slate-300 group-hover/item:text-primary transition-colors" />
                          </button>
                        ))}
                     </div>
                  </div>
                </div>

                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-primary active:scale-95 shadow-xl shadow-slate-900/10">
                  Search
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-10">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-2xl border-4 border-white bg-primary text-white flex items-center justify-center font-bold text-xs shadow-lg">
                    +2M
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-1">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-sm font-bold text-slate-900">Trusted by over 2M+ users</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Section */}
          <div className="relative lg:block hidden">
             <motion.div
               initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative"
             >
                <div className="bg-gradient-to-br from-primary to-purple-600 rounded-[80px] p-2 rotate-2 shadow-2xl">
                   <div className="rounded-[78px] overflow-hidden aspect-[4/5] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=1200" 
                        alt="Hero" 
                        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                   </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-12 top-1/4 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/40 max-w-[200px]"
                >
                   <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4 text-white">
                      <ShieldCheck size={20} />
                   </div>
                   <h4 className="font-bold text-slate-900 text-sm mb-1">Safety First</h4>
                   <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Background verified professionals only.</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -right-8 bottom-1/4 bg-slate-900 p-6 rounded-3xl shadow-2xl text-white max-w-[180px]"
                >
                   <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Status</span>
                   </div>
                   <h4 className="font-bold text-sm mb-1">Rahul is arriving</h4>
                   <p className="text-[10px] text-gray-400 font-medium">ETA: 12 minutes</p>
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
