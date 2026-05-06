'use client';

import React, { useState } from 'react';
import { 
  User, Briefcase, FileText, 
  ChevronRight, CheckCircle2, 
  Smartphone, MapPin, Award, 
  TrendingUp, ShieldCheck, Heart, Info,
  DollarSign, Users, Zap
} from 'lucide-react';

const PartnerPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    skill: 'AC Service & Repair',
    city: 'New Delhi'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Premium Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000" 
            alt="Professional at work" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                  <Zap size={14} className="text-white" fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-wider">Join 50k+ Experts</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Earn more. <br />
                  <span className="text-gray-300">Respect more.</span>
                </h1>
                <p className="text-lg text-gray-300 mb-10 max-w-lg font-medium leading-relaxed">
                  Transform your professional career. Join India's leading platform for home services.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white border border-white/20">
                       <DollarSign size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Average Earnings</p>
                      <p className="text-xl font-bold">₹40,000 / month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white border border-white/20">
                       <Users size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Partners</p>
                      <p className="text-xl font-bold">50,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Apply Form */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-black">Registered!</h3>
                  <p className="text-sm text-gray-500 font-medium mb-8">Our onboarding specialist will call you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Apply for another skill
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black mb-1">Partner Application</h2>
                    <p className="text-gray-500 text-sm font-medium">Start your journey in 2 minutes.</p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          required
                          type="text" 
                          className="w-full pl-12 p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-black focus:bg-white outline-none font-medium text-black transition-colors" 
                          placeholder="e.g. Rahul Sharma" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          required
                          type="tel" 
                          className="w-full pl-12 p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-black focus:bg-white outline-none font-medium text-black transition-colors" 
                          placeholder="+91" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Skill</label>
                        <select 
                          className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-black focus:bg-white outline-none font-medium text-black appearance-none transition-colors cursor-pointer"
                          value={formData.skill}
                          onChange={(e) => setFormData({...formData, skill: e.target.value})}
                        >
                          <option>AC Service</option>
                          <option>Cleaning</option>
                          <option>Salon</option>
                          <option>Electrician</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">City</label>
                        <select 
                          className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-black focus:bg-white outline-none font-medium text-black appearance-none transition-colors cursor-pointer"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        >
                          <option>New Delhi</option>
                          <option>Mumbai</option>
                          <option>Bangalore</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex gap-3">
                    <Info className="text-black shrink-0" size={18} />
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      By clicking below, you agree to our terms. We will contact you for background verification and training.
                    </p>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'PROCESSING...' : 'APPLY TO JOIN'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Partnership Benefits</h2>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">We don't just provide work; we provide a platform to grow your professional career and financial future.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="text-black" />, title: 'Stable Income', desc: 'Our partners earn up to ₹50,000/month with regular payouts and incentives for high quality.' },
              { icon: <ShieldCheck className="text-black" />, title: 'Insurance Covered', desc: 'Every partner and their family is protected with health and accident insurance from day one.' },
              { icon: <Award className="text-black" />, title: 'Professional Dignity', desc: 'Join a community of respected professionals. We provide training and branded uniforms.' },
            ].map((benefit, i) => (
              <div 
                key={i}
                className="bg-white p-8 border border-gray-200 rounded-xl text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{benefit.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
