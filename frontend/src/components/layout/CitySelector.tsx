'use client';

import React from 'react';
import { MapPin, X } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" 
        onClick={onClose}
      />
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden border border-gray-200"
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div>
            <h2 className="text-xl font-bold text-black">Where are you?</h2>
            <p className="text-sm text-gray-500 font-medium">Select your city to see available services</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-500 hover:text-black">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 gap-3 max-h-[60vh] overflow-y-auto">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => onSelect(city.name)}
              className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200">
                  <MapPin size={18} className="text-gray-500 group-hover:text-black transition-colors" />
                </div>
                <span className="font-bold text-base text-gray-700 group-hover:text-black">{city.name}</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-black flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 bg-gray-50 text-center border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Coming soon to 20+ more cities!</p>
        </div>
      </div>
    </>
  );
};

export default CitySelector;
