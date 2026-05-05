import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                UrbanServe
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Quality home services, on demand. We provide expert solutions for all your home needs, from cleaning to repairs.
            </p>
            <div className="flex space-x-4">
              <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Connect with us</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-purple-500 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-purple-500 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-purple-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-purple-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Popular Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/ahmedabad/ac-repair" className="hover:text-purple-500 transition-colors">AC Repair & Service</Link></li>
              <li><Link href="/ahmedabad/cleaning" className="hover:text-purple-500 transition-colors">Home Cleaning</Link></li>
              <li><Link href="/ahmedabad/pest-control" className="hover:text-purple-500 transition-colors">Pest Control</Link></li>
              <li><Link href="/ahmedabad/massage" className="hover:text-purple-500 transition-colors">Massage for Women</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-500" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-500" />
                <span>support@urbanserve.com</span>
              </li>
              <li><Link href="/helpcenter" className="hover:text-purple-500 transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-purple-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>© 2026 UrbanServe Technologies Private Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
