import React from 'react';
import { ShieldCheck, UserCheck, CreditCard, Sparkles } from 'lucide-react';

const badges = [
  {
    title: 'Transparent Pricing',
    desc: 'See fixed prices before you book. No hidden charges.',
    icon: <CreditCard className="text-blue-600" size={32} />
  },
  {
    title: 'Experts Only',
    desc: 'Our professionals are well-trained and background verified.',
    icon: <UserCheck className="text-purple-600" size={32} />
  },
  {
    title: 'Fully Equipped',
    desc: 'We bring everything needed to get the job done.',
    icon: <ShieldCheck className="text-green-600" size={32} />
  },
  {
    title: 'Quality Assured',
    desc: 'Your satisfaction is our priority. 100% money back guarantee.',
    icon: <Sparkles className="text-amber-500" size={32} />
  }
];

const TrustBadges = () => {
  return (
    <section className="py-20 border-y border-border bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-border">
                {badge.icon}
              </div>
              <h4 className="text-lg font-bold">{badge.title}</h4>
              <p className="text-sm text-muted-foreground max-w-[240px] mx-auto">
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
