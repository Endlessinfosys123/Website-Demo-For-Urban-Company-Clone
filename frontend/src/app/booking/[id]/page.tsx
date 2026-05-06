'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, MapPin, 
  Calendar, CreditCard, ShieldCheck, 
  Clock, CheckCircle2, Zap
} from 'lucide-react';
import { Card, Button, Badge, Input } from '@/components/shared/DesignSystem';
import Link from 'next/link';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Checkout Header */}
      <header className="bg-white border-b border-slate-100 px-10 py-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/services" className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
            <ChevronLeft size={24} />
          </Link>
          <div>
            <h1 className="text-xl font-black">Booking Checkout</h1>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Service: AC Deep Cleaning</p>
          </div>
        </div>
        
        {/* Progress Tracker */}
        <div className="hidden md:flex items-center gap-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all",
                step >= s ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
              )}>
                {step > s ? <CheckCircle2 size={16} /> : s}
              </div>
              <span className={cn(
                "text-xs font-black uppercase tracking-widest",
                step >= s ? "text-slate-900" : "text-slate-400"
              )}>
                {s === 1 ? 'Package' : s === 2 ? 'Schedule' : 'Payment'}
              </span>
              {s < 3 && <div className="w-10 h-px bg-slate-200" />}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</p>
            <p className="text-xl font-black text-slate-900">₹899</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Flow Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <h2 className="text-4xl font-black tracking-tight">Select your package</h2>
                  <div className="grid grid-cols-1 gap-8">
                    {[
                      { name: 'Standard Service', price: '₹599', desc: 'Single jet cleaning, filter wash, and basic performance check.', features: ['45 mins duration', 'Service warranty'] },
                      { name: 'Deep Cleaning (Foam)', price: '₹899', desc: 'Power jet wash with foam cleaning for 2x better cooling.', features: ['1.5 hrs duration', '30 days warranty', 'Gas check included'], recommended: true },
                    ].map((pkg, i) => (
                      <Card 
                        key={i} 
                        className={cn(
                          "p-10 cursor-pointer transition-all border-2",
                          pkg.recommended ? "border-primary bg-primary/5" : "hover:border-slate-200"
                        )}
                        onClick={nextStep}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            {pkg.recommended && <Badge variant="info" className="mb-4">Recommended</Badge>}
                            <h3 className="text-3xl font-black">{pkg.name}</h3>
                          </div>
                          <p className="text-3xl font-black text-slate-900">{pkg.price}</p>
                        </div>
                        <p className="text-slate-500 font-bold mb-8 max-w-md">{pkg.desc}</p>
                        <div className="flex flex-wrap gap-6">
                          {pkg.features.map((f, fi) => (
                            <div key={fi} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                              <CheckCircle2 size={16} className="text-green-500" /> {f}
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h2 className="text-4xl font-black tracking-tight">Schedule your service</h2>
                  
                  <div>
                    <h3 className="text-xl font-black mb-8">Select Date</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {['Mon, 12 May', 'Tue, 13 May', 'Wed, 14 May', 'Thu, 15 May', 'Fri, 16 May'].map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(date)}
                          className={cn(
                            "flex-shrink-0 w-32 h-32 rounded-[32px] border-2 flex flex-col items-center justify-center transition-all",
                            selectedDate === date ? "border-primary bg-primary text-white shadow-xl shadow-primary/20" : "border-slate-100 bg-white hover:border-slate-200"
                          )}
                        >
                          <p className="text-xs font-black uppercase opacity-60 mb-1">{date.split(',')[0]}</p>
                          <p className="text-xl font-black">{date.split(',')[1].split(' ')[0]}</p>
                          <p className="text-xs font-bold">{date.split(',')[1].split(' ')[1]}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black mb-8">Select Time Slot</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'].map((slot, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedSlot(slot)}
                          className={cn(
                            "py-5 rounded-2xl border-2 font-black text-sm transition-all flex items-center justify-center gap-3",
                            selectedSlot === slot ? "border-primary bg-primary text-white" : "border-slate-100 bg-white hover:border-slate-200 text-slate-600"
                          )}
                        >
                          <Clock size={18} /> {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 flex gap-4">
                    <Button variant="outline" className="py-6 px-10" onClick={prevStep}>Back</Button>
                    <Button className="flex-1 py-6" onClick={nextStep}>Continue to Payment</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h2 className="text-4xl font-black tracking-tight">Final Details</h2>
                  
                  <Card className="p-10">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-xl font-black">Service Address</h3>
                      <button className="text-primary font-black text-sm hover:underline">Change</button>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="p-4 bg-slate-50 rounded-2xl text-slate-400">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-black text-lg">Home</p>
                        <p className="text-slate-500 font-bold leading-relaxed max-w-sm">
                          B-12, Green Park Extension, <br />
                          Near Metro Station, New Delhi - 110016
                        </p>
                      </div>
                    </div>
                  </Card>

                  <div>
                    <h3 className="text-xl font-black mb-8">Payment Method</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Razorpay / Cards / UPI', icon: <CreditCard />, active: true },
                        { name: 'Cash after service', icon: <Zap /> },
                      ].map((method, i) => (
                        <div key={i} className={cn(
                          "p-8 rounded-3xl border-2 flex items-center justify-between cursor-pointer transition-all",
                          method.active ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"
                        )}>
                          <div className="flex items-center gap-6">
                            <div className={cn("p-3 rounded-xl", method.active ? "bg-primary text-white" : "bg-slate-100 text-slate-400")}>
                              {method.icon}
                            </div>
                            <span className="font-black">{method.name}</span>
                          </div>
                          <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                            method.active ? "border-primary bg-primary" : "border-slate-200"
                          )}>
                            {method.active && <CheckCircle2 size={12} className="text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 flex gap-4">
                    <Button variant="outline" className="py-6 px-10" onClick={prevStep}>Back</Button>
                    <Button className="flex-1 py-6 bg-slate-900" onClick={nextStep}>Confirm Booking (₹899)</Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-32 h-32 bg-green-500 text-white rounded-[48px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/30">
                    <CheckCircle2 size={64} />
                  </div>
                  <h2 className="text-5xl font-black mb-6 tracking-tighter">Booking Confirmed!</h2>
                  <p className="text-slate-500 font-bold text-xl mb-16 max-w-lg mx-auto">
                    Your service is scheduled for <span className="text-slate-900">{selectedDate}</span> at <span className="text-slate-900">{selectedSlot}</span>.
                  </p>
                  
                  <Card className="max-w-md mx-auto p-10 bg-white shadow-2xl border-none mb-16">
                    <div className="flex justify-between text-left mb-8">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Booking ID</p>
                        <p className="font-black text-slate-900">#UC-62184</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Paid</p>
                        <p className="font-black text-primary text-xl">₹899</p>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8 border-t border-slate-50">
                      <p className="text-sm font-bold text-slate-500">A service professional will be assigned 1 hour before the scheduled time.</p>
                    </div>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/customer/dashboard">
                      <Button className="w-full sm:w-auto py-6 px-16">Go to Dashboard</Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" className="w-full sm:w-auto py-6 px-16">Return Home</Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar (Visible in steps 1-3) */}
          {step < 4 && (
            <aside className="lg:w-96">
              <Card className="p-10 sticky top-32 border-none shadow-2xl bg-white">
                <h3 className="text-2xl font-black mb-8">Order Summary</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-black text-slate-900">AC Deep Cleaning</p>
                      <p className="text-xs text-slate-400 font-bold">Deep Cleaning (Foam)</p>
                    </div>
                    <p className="font-black text-slate-900">₹899</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100 mb-10">
                  <div className="flex justify-between text-sm font-bold text-slate-500">
                    <span>Item Total</span>
                    <span>₹899</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-500">
                    <span>Service Fee</span>
                    <span className="text-green-500">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-black text-slate-900 pt-4">
                    <span>To Pay</span>
                    <span className="text-primary">₹899</span>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl flex gap-4 items-start mb-8">
                  <ShieldCheck className="text-green-600 shrink-0" size={20} />
                  <p className="text-xs font-bold text-green-700 leading-relaxed">
                    UrbanClone Guarantee: Background verified pros & damage protection insurance.
                  </p>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                     <Zap size={14} className="text-primary" /> Applying UC_SAVER_100...
                   </div>
                   <p className="text-[10px] text-slate-400 font-bold italic">By continuing, you agree to our Terms of Service.</p>
                </div>
              </Card>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default BookingPage;
