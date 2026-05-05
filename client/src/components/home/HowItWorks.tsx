import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose a service',
    desc: 'Select from over 50+ professional services for your home and lifestyle.',
    image: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
  },
  {
    number: '02',
    title: 'Book a slot',
    desc: 'Pick a date and time that works best for you. Our pro will arrive on time.',
    image: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png'
  },
  {
    number: '03',
    title: 'Relax and enjoy',
    desc: 'Our expert takes care of the work while you focus on what matters to you.',
    image: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Booking a professional service has never been easier. Just three simple steps to a better home.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-dashed bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-40 h-40 bg-slate-50 rounded-full flex items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-primary transition-colors group-hover:scale-105 duration-500">
                    <img src={step.image} alt={step.title} className="w-20 h-20 grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
