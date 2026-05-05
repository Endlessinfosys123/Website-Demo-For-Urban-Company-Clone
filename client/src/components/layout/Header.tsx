'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, User, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
            UrbanServe
          </span>
        </Link>

        {/* City Selector & Search (Desktop) */}
        <div className="hidden md:flex items-center flex-1 max-w-2xl mx-12 space-x-4">
          <div className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
            <MapPin size={18} className="text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Ahmedabad</span>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
          
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search for services..." 
              className="w-full pl-12 pr-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Auth & CTA */}
        <div className="flex items-center space-x-4">
          <Link href="/partner" className="hidden lg:block text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            Register as Professional
          </Link>
          <Link href="/login" className="flex items-center space-x-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95">
            <User size={18} />
            <span>Login</span>
          </Link>
          
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t md:hidden shadow-lg"
          >
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-xl">
                <MapPin size={18} className="text-purple-600" />
                <span className="text-sm font-medium">Ahmedabad</span>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search for services..." 
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none"
                />
              </div>
              <nav className="flex flex-col space-y-3">
                <Link href="/profile" className="p-3 text-gray-700 font-medium">My Profile</Link>
                <Link href="/orders" className="p-3 text-gray-700 font-medium">My Bookings</Link>
                <Link href="/partner" className="p-3 text-purple-600 font-bold">Register as Professional</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
