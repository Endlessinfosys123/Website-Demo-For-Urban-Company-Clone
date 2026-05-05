'use client';

import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const cities = [
  { id: '1', name: 'New Delhi', slug: 'delhi' },
  { id: '2', name: 'Mumbai', slug: 'mumbai' },
  { id: '3', name: 'Bangalore', slug: 'bangalore' },
  { id: '4', name: 'Hyderabad', slug: 'hyderabad' },
  { id: '5', name: 'Pune', slug: 'pune' },
];

const CitySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap"
      >
        <MapPin size={18} className="text-primary" />
        {selectedCity.name}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-3 bg-muted/30 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Select City
          </div>
          <div className="max-h-60 overflow-y-auto">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => {
                  setSelectedCity(city);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-between ${
                  selectedCity.id === city.id ? 'text-primary font-bold bg-primary/5' : 'text-foreground'
                }`}
              >
                {city.name}
                {selectedCity.id === city.id && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;
