'use client';

import React from 'react';
import { MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface City {
  id: string;
  name: string;
  slug: string;
}

export const cities: City[] = [
  { id: '1', name: 'New Delhi', slug: 'delhi' },
  { id: '2', name: 'Mumbai', slug: 'mumbai' },
  { id: '3', name: 'Bangalore', slug: 'bangalore' },
  { id: '4', name: 'Hyderabad', slug: 'hyderabad' },
  { id: '5', name: 'Pune', slug: 'pune' },
];

interface CitySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (city: string) => void;
}

const CitySelector = ({ isOpen, onClose, onSelect }: CitySelectorProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]" 
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[40px] shadow-2xl z-[101] overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Where are you?</h2>
                <p className="text-sm text-slate-500">Select your city to see available services</p>
              </div>
              <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 grid grid-cols-1 gap-3">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => onSelect(city.name)}
                  className="w-full text-left p-6 rounded-3xl border-2 border-slate-50 hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                      <MapPin size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-bold text-lg text-slate-700 group-hover:text-slate-900">{city.name}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-slate-100 group-hover:border-primary flex items-center justify-center transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>

            <div className="p-8 bg-slate-50 text-center">
              <p className="text-sm text-slate-500">Coming soon to 20+ more cities!</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CitySelector;
