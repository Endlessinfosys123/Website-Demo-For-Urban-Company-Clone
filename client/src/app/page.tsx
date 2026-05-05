import HeroSection from '@/components/home/HeroSection';
import ServiceGrid from '@/components/home/ServiceGrid';
import TrustBadges from '@/components/home/TrustBadges';
import HowItWorks from '@/components/home/HowItWorks';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServiceGrid />
      <TrustBadges />
      <HowItWorks />

      {/* Featured Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Services</h2>
              <p className="text-muted-foreground">Most booked services in your city</p>
            </div>
            <Link href="/services" className="text-primary font-bold hover:underline">
              View All
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
            {[
              { name: 'AC Deep Cleaning', price: '₹599', rating: '4.8', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=300' },
              { name: 'Kitchen Cleaning', price: '₹1,299', rating: '4.9', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=300' },
              { name: 'Sofa Spa', price: '₹499', rating: '4.7', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=300' },
              { name: 'Bathroom Cleaning', price: '₹399', rating: '4.6', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=300' },
              { name: 'Home Painting', price: '₹2,999', rating: '4.9', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=300' },
            ].map((service, i) => (
              <div key={i} className="min-w-[280px] bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="h-44 relative overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    ⭐ {service.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{service.name}</h4>
                  <p className="text-primary font-bold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-[#0a0a0a] rounded-[40px] p-8 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Grow your business with <span className="text-primary">UrbanClone</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Join 50,000+ professionals who earn more and grow their business with UrbanClone. Flexible hours, regular leads, and weekly payouts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/partner" className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Register as a Professional
              </Link>
              <Link href="/partner/benefits" className="bg-white/10 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all backdrop-blur-md">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
