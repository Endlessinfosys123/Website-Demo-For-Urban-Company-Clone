'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Check, Calendar, MapPin, 
  CreditCard, Ticket, ShieldCheck, ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  { id: 1, title: 'Package', icon: <Check size={18} /> },
  { id: 2, title: 'Slot', icon: <Calendar size={18} /> },
  { id: 3, title: 'Address', icon: <MapPin size={18} /> },
  { id: 4, title: 'Review', icon: <Ticket size={18} /> },
  { id: 5, title: 'Payment', icon: <CreditCard size={18} /> },
];

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
    else setIsSuccess(true);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[50px] shadow-2xl border border-border text-center max-w-md w-full"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={48} strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-8">
            Your booking #UC9821 has been successfully placed. Our professional will arrive on time.
          </p>
          <div className="space-y-4">
            <Link href="/orders/1" className="block w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Track Order
            </Link>
            <Link href="/" className="block w-full bg-slate-100 text-foreground py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all">
              Go to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-white border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2 relative flex-1 last:flex-none">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 ${
                  currentStep >= step.id 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-white border-border text-muted-foreground'
                }`}>
                  {currentStep > step.id ? <Check size={18} /> : step.id}
                </div>
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${
                  currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
                {/* Connector Line */}
                {step.id < 5 && (
                  <div className={`absolute top-5 left-1/2 w-full h-0.5 -z-0 transition-all duration-1000 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-slate-100'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Flow Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-border min-h-[500px]"
              >
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Select a package</h2>
                    <div className="space-y-4">
                      {['Basic Cleaning', 'Premium Deep Cleaning', 'Ultra Modern Cleaning'].map((name, i) => (
                        <div key={i} className="flex items-center justify-between p-6 rounded-3xl border-2 border-slate-100 hover:border-primary transition-all cursor-pointer group">
                          <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full border-2 border-border group-hover:border-primary flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="font-bold">{name}</span>
                          </div>
                          <span className="font-bold text-primary">₹{999 + i * 1000}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Select a slot</h2>
                    <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`p-4 rounded-2xl border-2 text-center cursor-pointer transition-all ${i === 0 ? 'border-primary bg-primary/5' : 'border-slate-50'}`}>
                          <div className="text-[10px] text-muted-foreground uppercase">May</div>
                          <div className="text-xl font-bold">{15 + i}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['09:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM'].map((time, i) => (
                        <div key={i} className={`p-4 rounded-xl border-2 text-center cursor-pointer font-semibold ${i === 1 ? 'border-primary' : 'border-slate-50'}`}>
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Where should we come?</h2>
                    <div className="space-y-4">
                      <div className="p-6 rounded-3xl border-2 border-primary bg-primary/5 relative">
                        <div className="flex items-start gap-4">
                          <MapPin className="text-primary shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold">Home</h4>
                            <p className="text-sm text-muted-foreground">Plot 42, Green Park, South Delhi, 110016</p>
                          </div>
                        </div>
                        <Check className="absolute top-6 right-6 text-primary" />
                      </div>
                      <button className="w-full p-6 rounded-3xl border-2 border-dashed border-slate-200 text-muted-foreground hover:text-primary hover:border-primary transition-all font-bold">
                        + Add New Address
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Review booking</h2>
                    <div className="bg-slate-50 rounded-3xl p-8 space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-bold">Deep Home Cleaning</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                        <span className="text-muted-foreground">Date & Time</span>
                        <span className="font-bold">May 15, 10:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Address</span>
                        <span className="font-bold text-right max-w-[200px]">Green Park, South Delhi</span>
                      </div>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Apply Promo Code" 
                        className="w-full p-5 bg-white rounded-2xl border border-border pr-24 focus:ring-2 focus:ring-primary outline-none"
                      />
                      <button className="absolute right-2 top-2 bottom-2 px-6 bg-slate-900 text-white rounded-xl text-sm font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Payment Method</h2>
                    <div className="space-y-4">
                      {['UPI (PhonePe, Google Pay)', 'Credit / Debit Card', 'Net Banking', 'Cash after service'].map((method, i) => (
                        <div key={i} className={`p-6 rounded-3xl border-2 flex items-center justify-between cursor-pointer ${i === 0 ? 'border-primary bg-primary/5' : 'border-slate-50'}`}>
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 ${i === 0 ? 'border-primary flex items-center justify-center' : 'border-border'}`}>
                              {i === 0 && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                            </div>
                            <span className="font-bold">{method}</span>
                          </div>
                          <CreditCard className={i === 0 ? 'text-primary' : 'text-slate-300'} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${
                  currentStep === 1 ? 'opacity-0' : 'bg-white text-foreground hover:bg-slate-100 border border-border shadow-sm'
                }`}
              >
                <ChevronLeft size={20} /> Back
              </button>
              <button 
                onClick={nextStep}
                className="flex items-center gap-2 px-12 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                {currentStep === 5 ? 'Pay Now' : 'Continue'} <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-[40px] border border-border p-8 shadow-xl">
              <h3 className="text-lg font-bold mb-6">Price Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Item Total</span>
                  <span>₹2,499</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Taxes & Fee</span>
                  <span>₹120</span>
                </div>
                <div className="flex justify-between text-sm text-green-600 font-medium">
                  <span>Discount</span>
                  <span>-₹500</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold">Total Payable</span>
                  <span className="text-2xl font-black">₹2,119</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-3xl p-6 flex items-start gap-4">
              <ShieldCheck className="text-green-600 shrink-0" size={24} />
              <div>
                <h4 className="text-sm font-bold text-green-900">Safety First</h4>
                <p className="text-xs text-green-700 leading-relaxed mt-1">
                  Our pros follow strict safety protocols. Mask and temperature checks are mandatory.
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
