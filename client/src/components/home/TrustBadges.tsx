import React from 'react';
import { ShieldCheck, UserCheck, CreditCard, Sparkles } from 'lucide-react';

const badges = [
  {
    title: 'Fixed Pricing',
    desc: 'See fixed prices before you book. No hidden charges.',
    icon: <CreditCard className="text-primary" size={32} />
  },
  {
    title: 'Experts Only',
    desc: 'Our professionals are well-trained and background verified.',
    icon: <UserCheck className="text-primary" size={32} />
  },
  {
    title: 'Fully Equipped',
    desc: 'We bring everything needed to get the job done right.',
    icon: <ShieldCheck className="text-primary" size={32} />
  },
  {
    title: 'Quality Assured',
    desc: 'Your satisfaction is our top priority. 100% guarantee.',
    icon: <Sparkles className="text-primary" size={32} />
  }
];

const TrustBadges = () => {
  return (
    <section className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-[28px] shadow-xl border border-slate-100 flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:-rotate-3">
                {badge.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{badge.title}</h4>
              <p className="text-slate-500 font-bold leading-relaxed max-w-[260px] mx-auto">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
