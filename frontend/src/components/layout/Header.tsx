'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, User, Menu, ShoppingCart } from 'lucide-react';
import CitySelector from './CitySelector';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('New Delhi');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-300 ${
      isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-black flex items-center gap-1">
            Urban<span className="font-normal">Company</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 w-[500px]">
            <button 
              onClick={() => setIsCityOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-black transition-colors shrink-0"
            >
              <MapPin size={16} className="text-gray-500" />
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
            <div className="w-px h-5 bg-gray-300 mx-2" />
            <div className="flex items-center gap-2 flex-1">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for 'AC Repair'" 
                className="bg-transparent border-none outline-none text-sm w-full text-black placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/partner" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
            Register as a Professional
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <Link href="/login" className="flex items-center gap-2 bg-white border border-gray-300 text-black px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
              <User size={18} />
              Login
            </Link>
          </div>
        </nav>

        <button className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
