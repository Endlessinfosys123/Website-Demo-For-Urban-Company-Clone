import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center">
              UrbanCompany
            </Link>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              India's most trusted home services platform. Professional experts, guaranteed quality, and background verified professionals.
            </p>
            <div className="flex items-center gap-4">
              {[
                { 
                  name: 'Facebook', 
                  path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' 
                },
                { 
                  name: 'Instagram', 
                  path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' 
                },
                { 
                  name: 'Twitter', 
                  path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' 
                }
              ].map((social, i) => (
                <Link key={i} href="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-300 group-hover:text-black"
                  >
                    <path d={social.path} />
                    {social.name === 'Instagram' && <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Careers', href: '/careers' },
                { name: 'UC Impact', href: '/impact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors font-medium text-sm">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">For Customers</h4>
            <ul className="space-y-4">
              {[
                { name: 'UC Reviews', href: '/reviews' },
                { name: 'Categories Near You', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Help Center', href: '/help' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors font-medium text-sm">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="text-gray-400">
                  <Phone size={16} />
                </div>
                <span className="text-gray-400 font-medium text-sm">+91 1800-419-419</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-gray-400">
                  <Mail size={16} />
                </div>
                <span className="text-gray-400 font-medium text-sm">support@urbanclone.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-gray-400">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-400 font-medium text-sm">South Delhi, New Delhi - 110016</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-gray-500 font-medium text-xs">
              © 2024 UrbanCompany Clone. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/" className="group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
