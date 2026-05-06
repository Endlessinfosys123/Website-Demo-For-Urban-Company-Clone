'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, User, Menu, X } from 'lucide-react';
import CitySelector from './CitySelector';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('New Delhi');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-2xl shadow-2xl py-4 border-b border-slate-100' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-3xl font-black tracking-tighter text-primary flex items-center gap-1">
            URBAN<span className="text-slate-900">CLONE</span>
          </Link>
          
          <div className={`hidden lg:flex items-center gap-4 bg-slate-50 border-2 border-slate-100 rounded-[28px] px-6 py-3 w-[450px] transition-all ${
            isScrolled ? 'bg-white border-slate-200 shadow-inner' : ''
          }`}>
            <button 
              onClick={() => setIsCityOpen(true)}
              className="flex items-center gap-3 text-sm font-black text-slate-800 hover:text-primary transition-colors shrink-0"
            >
              <MapPin size={18} className="text-primary" />
              {selectedCity}
            </button>
            <CitySelector 
              isOpen={isCityOpen} 
              onClose={() => setIsCityOpen(false)} 
              onSelect={(city) => {
                setSelectedCity(city);
                setIsCityOpen(false);
              }} 
            />
            <div className="w-px h-8 bg-slate-200 mx-2" />
            <div className="flex items-center gap-3 flex-1">
              <Search size={20} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search for services..." 
                className="bg-transparent border-none outline-none text-sm w-full font-bold text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/partner" className="text-[13px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all">
            Be a Professional
          </Link>
          <Link href="/login" className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-[20px] text-sm font-black hover:bg-primary transition-all shadow-xl shadow-slate-900/10 active:scale-95">
            <User size={18} />
            Login
          </Link>
        </nav>

        <button className="md:hidden p-3 bg-slate-100 rounded-2xl text-slate-900">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
