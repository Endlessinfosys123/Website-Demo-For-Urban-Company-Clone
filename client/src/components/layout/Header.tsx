'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, User, ShoppingCart, Menu } from 'lucide-react';
import CitySelector from './CitySelector';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
            URBAN<span className="text-foreground">CLONE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-4 bg-white shadow-sm border border-border rounded-lg px-4 py-2 w-[400px]">
            <CitySelector />
            <div className="w-px h-6 bg-border mx-2" />
            <div className="flex items-center gap-2 flex-1">
              <Search size={18} className="text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search for services..." 
                className="bg-transparent border-none outline-none text-sm w-full"
              />
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/partner" className="text-sm font-medium hover:text-primary transition-colors">
            Register as Professional
          </Link>
          <Link href="/helpcenter" className="text-sm font-medium hover:text-primary transition-colors">
            Help
          </Link>
          <Link href="/login" className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
            <User size={18} />
            Login / Signup
          </Link>
        </nav>

        <button className="md:hidden text-foreground">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
