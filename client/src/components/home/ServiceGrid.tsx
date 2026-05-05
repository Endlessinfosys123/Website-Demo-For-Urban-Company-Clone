import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Women\'s Salon & Spa', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400', color: 'bg-pink-50' },
  { name: 'Men\'s Salon & Massage', image: 'https://images.unsplash.com/photo-1512690192331-789a67a86c65?q=80&w=400', color: 'bg-blue-50' },
  { name: 'AC & Appliance Repair', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400', color: 'bg-orange-50' },
  { name: 'Cleaning & Pest Control', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400', color: 'bg-green-50' },
  { name: 'Electrician, Plumber & Painter', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400', color: 'bg-purple-50' },
  { name: 'Home Repairs & Projects', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400', color: 'bg-amber-50' },
];

const ServiceGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">What are you looking for?</h2>
          <p className="text-muted-foreground">Choose from our wide range of professional services.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <Link 
              href={`/services/${cat.name.toLowerCase().replace(/ /g, '-')}`} 
              key={index}
              className="group"
            >
              <div className={`aspect-square rounded-3xl ${cat.color} p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border border-transparent group-hover:border-primary/10`}>
                <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden shadow-sm">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
