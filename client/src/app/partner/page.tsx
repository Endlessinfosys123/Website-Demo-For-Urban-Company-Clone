'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Premium Hero Section with Glassmorphism Overlay */}
      <section className="relative h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000" 
            alt="Professional at work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                  <Zap size={16} className="text-primary" fill="currentColor" />
                  <span className="text-xs font-black uppercase tracking-widest">Join 50k+ Experts</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                  Earn more. <br />
                  <span className="text-primary italic">Respect</span> more.
                </h1>
                <p className="text-2xl text-slate-300 mb-12 max-w-lg leading-relaxed font-medium">
                  Transform your professional career. Join India's leading platform for home services.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary border border-white/20">
                       <DollarSign size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400">Average Earnings</p>
                      <p className="text-xl font-black">₹40,000 / month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary border border-white/20">
                       <Users size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400">Total Partners</p>
                      <p className="text-xl font-black">50,000+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Apply Form - High Visibility */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[50px] p-10 md:p-14 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.4)] border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-primary" />
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={56} />
                    </div>
                    <h3 className="text-4xl font-black mb-4 text-slate-900">Registered!</h3>
                    <p className="text-lg text-slate-500 font-medium">Our onboarding specialist will call you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-10 btn-primary w-full"
                    >
                      Apply for another skill
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-black text-slate-900 mb-2">Partner Application</h2>
                      <p className="text-slate-500 font-bold">Start your journey in 2 minutes.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Full Name</label>
                        <div className="relative">
                          <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input 
                            required
                            type="text" 
                            className="w-full pl-16 p-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none font-bold text-slate-900 transition-all" 
                            placeholder="e.g. Rahul Sharma" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                        <div className="relative">
                          <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input 
                            required
                            type="tel" 
                            className="w-full pl-16 p-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none font-bold text-slate-900 transition-all" 
                            placeholder="+91" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Skill</label>
                          <select 
                            className="w-full p-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none font-black text-slate-900 appearance-none transition-all cursor-pointer"
                            value={formData.skill}
                            onChange={(e) => setFormData({...formData, skill: e.target.value})}
                          >
                            <option>AC Service</option>
                            <option>Cleaning</option>
                            <option>Salon</option>
                            <option>Electrician</option>
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">City</label>
                          <select 
                            className="w-full p-5 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none font-black text-slate-900 appearance-none transition-all cursor-pointer"
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

                    <div className="p-5 bg-blue-50/50 rounded-3xl border border-blue-100 flex gap-4">
                      <Info className="text-blue-500 shrink-0" size={20} />
                      <p className="text-[11px] text-blue-700 font-bold leading-relaxed">
                        By clicking below, you agree to our terms. We will contact you for background verification and training.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-slate-900 text-white font-black text-lg rounded-3xl shadow-2xl shadow-slate-900/20 hover:bg-primary transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      ) : null}
                      {isSubmitting ? 'PROCESSING...' : 'APPLY TO JOIN'}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High Contrast Benefits Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-6 block">Why Choose Us</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Partnership Benefits.</h2>
            <p className="text-xl text-slate-500 font-bold leading-relaxed">We don't just provide work; we provide a platform to grow your professional career and financial future.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <TrendingUp className="text-indigo-600" />, title: 'Stable Income', desc: 'Our partners earn up to ₹50,000/month with regular payouts and incentives for high quality.' },
              { icon: <ShieldCheck className="text-emerald-600" />, title: 'Insurance Covered', desc: 'Every partner and their family is protected with health and accident insurance from day one.' },
              { icon: <Award className="text-amber-600" />, title: 'Professional Dignity', desc: 'Join a community of respected professionals. We provide training and branded uniforms.' },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="section-card p-12 text-center"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Testimonial Section */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-8 block">Success Stories</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
                Don't take our <br />
                <span className="text-primary">word for it.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { name: 'Ritesh Kumar', skill: 'AC Professional', text: 'I started with one bag and a cycle. Today I have a bike and my own team of 3 experts.' },
                  { name: 'Sunita Mehra', skill: 'Salon Expert', text: 'Working as a partner gave me the freedom to take care of my kids while earning well.' }
                ].map((t, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-xl">
                    <p className="text-xl font-medium text-slate-300 italic mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 overflow-hidden" />
                      <div>
                        <p className="font-black text-lg">{t.name}</p>
                        <p className="text-xs text-primary font-bold uppercase tracking-widest">{t.skill}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-white/5">
                  <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200" alt="Partner success" className="w-full h-full object-cover grayscale-[0.2]" />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-[50px] shadow-2xl">
                  <p className="text-6xl font-black">98%</p>
                  <p className="text-sm font-black uppercase tracking-widest text-white/70">Partner Happiness</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
