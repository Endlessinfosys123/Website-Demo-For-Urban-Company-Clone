import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-black text-gray-900 mb-8">Get in touch</h1>
              <p className="text-xl text-gray-500 mb-12">
                Have questions about our services or want to become a partner? We're here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
                      <Mail size={24} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-gray-400">Email Us</div>
                      <div className="text-lg font-bold text-gray-900">support@urbanserve.com</div>
                   </div>
                </div>
                <div className="flex items-center space-x-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
                      <Phone size={24} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-gray-400">Call Us</div>
                      <div className="text-lg font-bold text-gray-900">+91 12345 67890</div>
                   </div>
                </div>
                <div className="flex items-center space-x-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-gray-400">Visit Us</div>
                      <div className="text-lg font-bold text-gray-900">701, Titanium Square, Thaltej, Ahmedabad</div>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
               <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-400 uppercase">Subject</label>
                     <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-400 uppercase">Message</label>
                     <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="Tell us more..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95 shadow-xl shadow-purple-500/20">
                     Send Message
                  </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
