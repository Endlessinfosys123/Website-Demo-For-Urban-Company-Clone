'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, 
  CreditCard, ChevronRight, ChevronLeft, 
  CheckCircle2, Star, ShieldCheck, 
  Smartphone, User, Mail, Home
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Service Info', icon: <Home size={20} /> },
  { id: 2, name: 'Schedule', icon: <Calendar size={20} /> },
  { id: 3, name: 'Address', icon: <MapPin size={20} /> },
  { id: 4, name: 'Payment', icon: <CreditCard size={20} /> },
];

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    addressType: 'home',
    paymentMethod: 'razorpay'
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            {/* Step Progress */}
            <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-[30px] shadow-sm border border-slate-100">
              {steps.map((step, i) => (
                <div key={step.id} className="flex items-center group">
                  <div className={`flex flex-col items-center gap-2 transition-all ${
                    currentStep >= step.id ? 'text-primary' : 'text-slate-400'
                  }`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      currentStep >= step.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' 
                        : 'bg-slate-100'
                    }`}>
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{step.name}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-12 md:w-20 h-1 mx-4 rounded-full transition-all ${
                      currentStep > step.id ? 'bg-primary' : 'bg-slate-100'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100 min-h-[500px] flex flex-col"
              >
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Confirm Service</h2>
                      <p className="text-slate-500">You are booking Deep Home Cleaning in New Delhi</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-dashed border-slate-200">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-lg">Premium 2 BHK Package</span>
                        <span className="text-primary font-black text-xl">₹3,499</span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> All rooms cleaning</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Kitchen deep cleaning</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Bathroom descaling</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Floor scrubbing</li>
                      </ul>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">When should we arrive?</h2>
                      <p className="text-slate-500">Select a date and time slot for your service.</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                      {['May 15', 'May 16', 'May 17', 'May 18'].map((date) => (
                        <button
                          key={date}
                          onClick={() => setFormData({...formData, date})}
                          className={`p-4 rounded-2xl border-2 transition-all ${
                            formData.date === date ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-primary/50'
                          }`}
                        >
                          <div className="text-sm font-bold">{date}</div>
                          <div className="text-[10px] uppercase text-slate-400 mt-1">Available</div>
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                      {['08:00 AM', '10:00 AM', '02:00 PM', '04:00 PM'].map((time) => (
                        <button
                          key={time}
                          onClick={() => setFormData({...formData, time})}
                          className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                            formData.time === time ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-primary/50'
                          }`}
                        >
                          <Clock size={16} className={formData.time === time ? 'text-primary' : 'text-slate-400'} />
                          <span className="font-bold text-sm">{time}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Service Address</h2>
                      <p className="text-slate-500">Where should our professional arrive?</p>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center gap-3 p-6 rounded-3xl border-2 border-primary bg-primary/5 font-bold">
                          <Home className="text-primary" /> Home
                        </button>
                        <button className="flex items-center gap-3 p-6 rounded-3xl border-2 border-slate-100 hover:border-primary/50 font-bold text-slate-500">
                          <Smartphone /> Office
                        </button>
                      </div>
                      <div className="space-y-4">
                        <input type="text" placeholder="House / Flat No." className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none" />
                        <input type="text" placeholder="Landmark (Optional)" className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none" />
                        <div className="p-4 bg-slate-50 rounded-2xl text-xs text-slate-500 flex items-center gap-2">
                          <MapPin size={14} /> New Delhi, South Delhi, Green Park - 110016
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-8 text-center py-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={48} className="text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Secure Payment</h2>
                      <p className="text-slate-500">Choose your preferred payment method</p>
                    </div>
                    <div className="grid gap-4 max-w-md mx-auto">
                      <button className="flex items-center justify-between p-6 rounded-3xl border-2 border-primary bg-primary/5 font-bold">
                        <div className="flex items-center gap-4">
                          <CreditCard className="text-primary" /> Pay via Card/UPI
                        </div>
                        <div className="flex gap-1">
                          <div className="w-6 h-4 bg-slate-200 rounded" />
                          <div className="w-6 h-4 bg-slate-300 rounded" />
                        </div>
                      </button>
                      <button className="flex items-center justify-between p-6 rounded-3xl border-2 border-slate-100 hover:border-primary/50 font-bold text-slate-500">
                        <div className="flex items-center gap-4">
                          <Smartphone /> Cash after service
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-12 flex items-center justify-between border-t border-slate-100">
                  <button 
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 font-bold text-slate-400 hover:text-primary transition-colors disabled:opacity-0"
                  >
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="bg-primary text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                  >
                    {currentStep === steps.length ? 'Confirm Booking' : 'Next Step'} <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold mb-8">Payment Summary</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Item Total</span>
                  <span className="font-bold">₹3,499</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Conveyance Fee</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Platform Fee</span>
                  <span className="font-bold">₹49</span>
                </div>
                <div className="h-px bg-slate-100" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Amount Payable</span>
                  <span className="text-2xl font-black text-primary">₹3,548</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="text-green-600 shrink-0 mt-0.5" size={18} />
                <p className="text-[10px] text-green-700 font-medium leading-relaxed">
                  UC Promise: Background verified professionals with high quality standards. Free insurance up to ₹10,000 included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
