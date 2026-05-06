'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // SIMULATE API CALL
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // SIMULATE API CALL
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/';
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-purple-100 p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="text-purple-600" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {step === 1 ? 'Welcome back' : 'Verify Phone'}
          </h1>
          <p className="text-gray-500">
            {step === 1 
              ? 'Enter your phone number to continue' 
              : `We've sent a 6-digit code to +91 ${phone}`}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleSendOTP} 
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 text-gray-400 border-r pr-3 border-gray-100">
                  <span className="text-sm font-bold">+91</span>
                </div>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number" 
                  className="w-full pl-20 pr-4 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-purple-500 focus:bg-white outline-none transition-all font-bold text-lg tracking-wider"
                  required
                />
              </div>
              <button 
                disabled={loading || phone.length < 10}
                className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send OTP</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.form 
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleVerifyOTP} 
              className="space-y-8"
            >
              <div className="flex justify-between gap-2">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    className="w-12 h-14 text-center text-2xl font-bold bg-gray-50 border-2 border-transparent focus:border-purple-500 focus:bg-white rounded-xl outline-none transition-all"
                  />
                ))}
              </div>
              <button 
                disabled={loading || otp.join('').length < 6}
                className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Verify & Login</span>
                )}
              </button>
              <div className="text-center">
                 <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-bold text-purple-600 hover:underline"
                 >
                   Edit phone number
                 </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our <Link href="/terms" className="text-purple-600 underline">Terms</Link> and <Link href="/privacy" className="text-purple-600 underline">Privacy Policy</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
