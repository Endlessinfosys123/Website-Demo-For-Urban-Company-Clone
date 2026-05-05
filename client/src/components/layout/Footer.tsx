import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white flex items-center gap-1">
              URBAN<span className="text-primary">CLONE</span>
            </Link>
            <p className="text-slate-400 font-bold leading-relaxed">
              India's most trusted home services platform. Professional experts, guaranteed quality, and background verified professionals.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <span className="text-slate-400 group-hover:text-white">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-primary mb-10">Company</h4>
            <ul className="space-y-6">
              {['About Us', 'Terms & Conditions', 'Privacy Policy', 'Careers', 'UC Impact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-primary mb-10">For Customers</h4>
            <ul className="space-y-6">
              {['UC Reviews', 'Categories Near You', 'Blog', 'Contact Us', 'Help Center'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-primary mb-10">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/10">
                  <Phone size={18} />
                </div>
                <span className="text-slate-400 font-bold text-sm">+91 1800-419-419</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/10">
                  <Mail size={18} />
                </div>
                <span className="text-slate-400 font-bold text-sm">support@urbanclone.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/10">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400 font-bold text-sm">South Delhi, New Delhi - 110016</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-slate-500 font-bold text-sm">
              © 2024 UrbanClone Technologies Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Secure Payments</span>
               <div className="flex gap-2">
                  <div className="w-8 h-5 bg-white/5 rounded" />
                  <div className="w-8 h-5 bg-white/5 rounded" />
                  <div className="w-8 h-5 bg-white/5 rounded" />
               </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="#" className="group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
