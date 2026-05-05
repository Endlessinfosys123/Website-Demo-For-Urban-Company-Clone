'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, CreditCard, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const steps = [
    { id: 1, name: 'Date & Time', icon: <Calendar size={20} /> },
    { id: 2, name: 'Address', icon: <MapPin size={20} /> },
    { id: 3, name: 'Payment', icon: <CreditCard size={20} /> },
  ];

  const slots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const addresses = [
    { id: '1', title: 'Home', address: 'B-402, Skyline Residency, Satellite, Ahmedabad - 380015' },
    { id: '2', title: 'Office', address: '701, Titanium Square, Thaltej, Ahmedabad - 380054' }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleComplete();
  };

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4); // Confirmation
    }, 2000);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          {step <= 3 && (
            <div className="flex items-center justify-between mb-12">
              {steps.map((s, i) => (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      step >= s.id ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-white text-gray-400 border border-gray-200'
                    }`}>
                      {s.icon}
                    </div>
                    <span className={`text-xs font-bold mt-2 ${step >= s.id ? 'text-purple-600' : 'text-gray-400'}`}>
                      {s.name}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 mb-6 ${step > s.id ? 'bg-purple-600' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Step Content */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 flex-1"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Select Date & Time</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-4 rounded-2xl border-2 transition-all font-bold text-sm ${
                          selectedSlot === slot 
                            ? 'border-purple-600 bg-purple-50 text-purple-600' 
                            : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-purple-200'
                        }`}
                      >
                        {slot}
                      </button>
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
                  className="space-y-8 flex-1"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Choose Address</h2>
                    <button className="text-purple-600 font-bold text-sm">+ Add New</button>
                  </div>
                  <div className="space-y-4">
                    {addresses.map((addr) => (
                      <div 
                        key={addr.id}
                        onClick={() => setSelectedAddress(addr.id)}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedAddress === addr.id 
                            ? 'border-purple-600 bg-purple-50' 
                            : 'border-gray-100 bg-gray-50 hover:border-purple-200'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg ${selectedAddress === addr.id ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                            <MapPin size={18} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{addr.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">{addr.address}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 flex-1"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl border-2 border-purple-600 bg-purple-50 flex items-center space-x-4">
                       <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                          <CreditCard size={24} />
                       </div>
                       <div className="flex-1">
                          <h4 className="font-bold">Online Payment</h4>
                          <p className="text-xs text-purple-600">UPI, Card, Wallets</p>
                       </div>
                       <CheckCircle2 className="text-purple-600" />
                    </div>
                    <div className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 flex items-center space-x-4 opacity-60 grayscale cursor-not-allowed">
                       <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center text-white">
                          <Clock size={24} />
                       </div>
                       <div className="flex-1">
                          <h4 className="font-bold">Cash After Service</h4>
                          <p className="text-xs text-gray-500">Not available for this slot</p>
                       </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gray-900 rounded-3xl text-white">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400">Total Amount</span>
                        <span className="text-3xl font-black">₹599</span>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed">
                        By clicking "Pay Now", you agree to our booking policy and terms of service.
                     </p>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex-1 flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                     <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-500 mb-10 max-w-sm mx-auto">
                    Your service has been scheduled for {selectedSlot}. A professional will be assigned shortly.
                  </p>
                  <Link href="/orders" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95">
                    View My Bookings
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {step <= 3 && (
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <button 
                  onClick={() => step > 1 && setStep(step - 1)}
                  className={`text-sm font-bold ${step === 1 ? 'invisible' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Back
                </button>
                <button 
                  disabled={loading || (step === 1 && !selectedSlot) || (step === 2 && !selectedAddress)}
                  onClick={handleNext}
                  className="px-10 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95 disabled:opacity-50 flex items-center space-x-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{step === 3 ? 'Pay Now' : 'Continue'}</span>
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
