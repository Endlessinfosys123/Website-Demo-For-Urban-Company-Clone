'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Briefcase, FileText, 
  ChevronRight, CheckCircle2, 
  Smartphone, MapPin, Award, 
  TrendingUp, ShieldCheck, Heart, Info
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
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731522-a0034a49f762?q=80&w=2000" 
            alt="Partner Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Be your own boss. <br />
                <span className="text-primary">Earn more</span> with us.
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-lg">
                Join 50,000+ professionals who have transformed their lives with UrbanClone.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-primary/20"
                >
                  Register Now <ChevronRight size={20} />
                </button>
                <div className="flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <span className="font-bold">50k+</span>
                  <span className="text-gray-400 text-sm">Partners Trust Us</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why join UrbanClone?</h2>
            <p className="text-gray-500">We provide the platform, you provide the expertise. Together we create magic.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="text-blue-500" />, title: 'High Earnings', desc: 'Our partners earn 2-3x more than market average with timely payments.' },
              { icon: <ShieldCheck className="text-green-500" />, title: 'Financial Security', desc: 'Insurance coverage and easy access to loans for equipment.' },
              { icon: <Heart className="text-red-500" />, title: 'Work-Life Balance', desc: 'Flexible working hours. Work when you want, where you want.' },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[50px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-8">Start your journey today.</h2>
              <ul className="space-y-6">
                {[
                  'Quick 5-minute registration',
                  'Document verification in 24 hours',
                  'Onboarding & training session',
                  'Get your first job within 48 hours'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary-foreground/80">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 bg-white/10 rounded-3xl border border-white/20">
                <p className="text-sm italic">"UrbanClone changed my life. I now have a steady income and respect in society."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300" />
                  <div>
                    <p className="font-bold text-sm">Rakesh Sharma</p>
                    <p className="text-xs text-white/60 text-primary-foreground/60">AC Professional since 2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-12 bg-white relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-slate-900">Application Received!</h3>
                    <p className="text-slate-500">Thank you for showing interest. Our team will contact you within 24 hours for document verification.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-primary font-bold hover:underline"
                    >
                      Apply for another skill
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required
                            type="text" 
                            className="w-full pl-12 p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                            placeholder="Enter your name" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-400">Phone Number</label>
                        <div className="relative">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            required
                            type="tel" 
                            className="w-full pl-12 p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none" 
                            placeholder="+91" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-400">Primary Skill</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select 
                          className="w-full pl-12 p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                          value={formData.skill}
                          onChange={(e) => setFormData({...formData, skill: e.target.value})}
                        >
                          <option>AC Service & Repair</option>
                          <option>Home Cleaning</option>
                          <option>Salon & Spa</option>
                          <option>Electrician</option>
                          <option>Plumber</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-400">City</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select 
                          className="w-full pl-12 p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        >
                          <option>New Delhi</option>
                          <option>Mumbai</option>
                          <option>Bangalore</option>
                          <option>Hyderabad</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl flex items-start gap-3">
                      <Info className="text-blue-500 shrink-0 mt-0.5" size={18} />
                      <p className="text-[10px] text-blue-700 font-medium">
                        By submitting this form, you agree to our Terms of Use and Privacy Policy. We will contact you for document verification.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : null}
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
