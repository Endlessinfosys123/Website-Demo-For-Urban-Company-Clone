'use client';

import React, { useState } from 'react';
import { ChevronLeft, MapPin, Clock, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('online');

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const addresses = [
    { type: 'Home', text: 'B-12, Green Park Extension, Near Metro Station, New Delhi - 110016' },
    { type: 'Work', text: 'Floor 4, Tech Park, Sector 44, Gurugram - 122003' }
  ];

  const dates = ['Today', 'Tomorrow', '14 May', '15 May', '16 May'];
  const slots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your service is scheduled for <span className="font-semibold text-black">{selectedDate}</span> at <span className="font-semibold text-black">{selectedSlot}</span>.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-left mb-8 border border-gray-100">
             <div className="flex justify-between mb-2">
               <span className="text-gray-500 text-sm">Booking ID</span>
               <span className="font-bold text-black text-sm">#UC-62184</span>
             </div>
             <div className="flex justify-between">
               <span className="text-gray-500 text-sm">Total Paid</span>
               <span className="font-bold text-black text-sm">₹899</span>
             </div>
          </div>
          <Link href="/customer/dashboard">
            <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/services" className="text-gray-500 hover:text-black">
              <ChevronLeft size={24} />
            </Link>
            <h1 className="text-xl font-bold text-black">Checkout</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Checkout Flow */}
          <div className="flex-1 space-y-6">
            
            {/* Step 1: Address */}
            <div className={`border border-gray-200 rounded-xl overflow-hidden ${step === 1 ? 'shadow-sm' : ''}`}>
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer" onClick={() => step > 1 && setStep(1)}>
                <div className="flex items-center gap-3">
                  <MapPin className={step === 1 ? 'text-black' : 'text-gray-400'} size={20} />
                  <h2 className={`font-bold ${step === 1 ? 'text-black' : 'text-gray-600'}`}>1. Service Address</h2>
                </div>
                {step > 1 && <span className="text-sm font-semibold text-gray-500">{addresses[selectedAddress].type}</span>}
              </div>
              
              {step === 1 && (
                <div className="p-6 bg-white">
                  <div className="space-y-4 mb-6">
                    {addresses.map((addr, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedAddress(i)}
                        className={`p-4 border rounded-lg cursor-pointer flex gap-4 transition-colors ${
                          selectedAddress === i ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedAddress === i ? 'border-black' : 'border-gray-300'
                        }`}>
                          {selectedAddress === i && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                        </div>
                        <div>
                          <p className="font-bold text-black text-sm mb-1">{addr.type}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{addr.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="text-black font-semibold text-sm hover:underline mb-8">+ Add new address</button>
                  <div>
                    <button onClick={nextStep} className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                      Continue to Schedule
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Date & Time */}
            <div className={`border border-gray-200 rounded-xl overflow-hidden ${step === 2 ? 'shadow-sm' : ''}`}>
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer" onClick={() => step > 2 && setStep(2)}>
                <div className="flex items-center gap-3">
                  <Clock className={step === 2 ? 'text-black' : 'text-gray-400'} size={20} />
                  <h2 className={`font-bold ${step === 2 ? 'text-black' : 'text-gray-600'}`}>2. Schedule</h2>
                </div>
                {step > 2 && <span className="text-sm font-semibold text-gray-500">{selectedDate}, {selectedSlot}</span>}
              </div>
              
              {step === 2 && (
                <div className="p-6 bg-white">
                  <div className="mb-8">
                    <p className="text-sm font-bold text-black mb-3">Select Date</p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {dates.map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(date)}
                          className={`px-4 py-3 border rounded-lg whitespace-nowrap text-sm font-semibold transition-colors ${
                            selectedDate === date ? 'border-black bg-gray-50 text-black' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm font-bold text-black mb-3">Select Time</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {slots.map((slot, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-3 border rounded-lg text-sm font-semibold transition-colors ${
                            selectedSlot === slot ? 'border-black bg-gray-50 text-black' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button 
                      onClick={nextStep} 
                      disabled={!selectedDate || !selectedSlot}
                      className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Payment */}
            <div className={`border border-gray-200 rounded-xl overflow-hidden ${step === 3 ? 'shadow-sm' : ''}`}>
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <CreditCard className={step === 3 ? 'text-black' : 'text-gray-400'} size={20} />
                  <h2 className={`font-bold ${step === 3 ? 'text-black' : 'text-gray-600'}`}>3. Payment</h2>
                </div>
              </div>
              
              {step === 3 && (
                <div className="p-6 bg-white">
                  <div className="space-y-4 mb-8">
                    {[
                      { id: 'online', name: 'Pay via UPI / Cards / NetBanking' },
                      { id: 'cash', name: 'Pay with Cash after service' }
                    ].map((method) => (
                      <div 
                        key={method.id} 
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 border rounded-lg cursor-pointer flex gap-4 items-center transition-colors ${
                          selectedPayment === method.id ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                         <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selectedPayment === method.id ? 'border-black' : 'border-gray-300'
                        }`}>
                          {selectedPayment === method.id && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                        </div>
                        <span className="font-semibold text-black text-sm">{method.name}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <button onClick={() => setStep(4)} className="w-full md:w-auto px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Sidebar: Order Summary */}
          <aside className="lg:w-80">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
              <h3 className="font-bold text-black mb-4">Payment Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">AC Deep Cleaning x1</span>
                  <span className="font-medium text-black">₹899</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Item Total</span>
                  <span className="font-medium text-black">₹899</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes & Fee</span>
                  <span className="font-medium text-black">₹45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-green-600">-₹45</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">Total to pay</span>
                  <span className="font-bold text-black text-lg">₹899</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex gap-3 items-start">
                <ShieldCheck className="text-green-600 shrink-0" size={18} />
                <p className="text-xs text-gray-600 leading-relaxed">
                  <span className="font-bold text-black">UC Promise:</span> Verified professionals and 30-day service guarantee.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default BookingPage;
