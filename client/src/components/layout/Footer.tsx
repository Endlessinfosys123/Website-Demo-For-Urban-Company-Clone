import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const socialIcons = [
    { name: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
    { name: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              URBAN<span className="text-primary">CLONE</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality home services, on demand. Experienced, hand-picked Professionals to serve you at your doorstep.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <Link key={icon.name} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon.path} />
                    {icon.name === 'Instagram' && <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Terms & Conditions', 'Privacy Policy', 'Anti-discrimination Policy', 'UC Impact', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">For Customers</h4>
            <ul className="space-y-4">
              {['UC Reviews', 'Categories Near You', 'Blog', 'Contact Us', 'Help Center'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">For Partners</h4>
            <ul className="space-y-4">
              {['Register as a Professional', 'Partner Help Center'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 UrbanClone Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
            </Link>
            <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
