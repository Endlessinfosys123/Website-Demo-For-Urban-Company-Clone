'use client';

import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
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
    }, 1000);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // SIMULATE API CALL
    setTimeout(() => {
      setLoading(false);
      router.push('/customer/dashboard');
    }, 1000);
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
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-black" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-black mb-2">
            {step === 1 ? 'Login / Sign up' : 'Enter verification code'}
          </h1>
          <p className="text-sm text-gray-500">
            {step === 1 
              ? 'Enter your phone number to continue' 
              : `We've sent a 6-digit code to +91 ${phone}`}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 text-black border-r pr-3 border-gray-200">
                <span className="text-sm font-bold">+91</span>
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile Number" 
                className="w-full pl-20 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-semibold text-black placeholder:text-gray-400"
                required
              />
            </div>
            <button 
              disabled={loading || phone.length < 10}
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Continue'
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div className="flex justify-between gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  className="w-12 h-14 text-center text-lg font-bold bg-white border border-gray-300 focus:border-black focus:ring-1 focus:ring-black rounded-lg outline-none transition-all text-black"
                />
              ))}
            </div>
            <button 
              disabled={loading || otp.join('').length < 6}
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Verify OTP'
              )}
            </button>
            <div className="text-center">
                <button 
                type="button"
                onClick={() => setStep(1)}
                className="text-sm font-semibold text-black hover:underline"
                >
                  Edit phone number
                </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our <Link href="/terms" className="text-black font-semibold underline">Terms of Service</Link> and <Link href="/privacy" className="text-black font-semibold underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
