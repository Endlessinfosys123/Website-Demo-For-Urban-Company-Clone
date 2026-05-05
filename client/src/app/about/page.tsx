import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-5xl font-black text-gray-900 mb-8">About UrbanServe</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          We are on a mission to transform the way home services are delivered. By connecting skilled professionals with homeowners, we ensure quality, reliability, and transparency in every task.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
           <div className="bg-slate-50 p-8 rounded-[32px]">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted platform for all home service needs across the globe.</p>
           </div>
           <div className="bg-purple-50 p-8 rounded-[32px]">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">Empowering professionals to build sustainable businesses while providing exceptional service to customers.</p>
           </div>
        </div>

        <section className="space-y-8">
           <h2 className="text-3xl font-bold">Why choose us?</h2>
           <div className="space-y-4">
              {[
                'Vetted and background-checked professionals',
                'Transparent pricing with no hidden costs',
                'Insurance coverage for every service',
                'Easy scheduling and real-time tracking'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-2xl">
                   <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                   <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
