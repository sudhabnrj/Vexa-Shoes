import React from 'react';
import { ASSETS } from '../data/assets';

interface FooterProps {
  onSelectLink?: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectLink }) => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-12 lg:py-16">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-3 space-y-4">
            <img
              src={ASSETS.logo}
              alt="IKA4 Footwear"
              className="h-10 sm:h-12 object-contain invert brightness-200"
            />
            <p className="text-xs text-neutral-400 font-medium leading-relaxed max-w-xs">
              Light on Feet. Heavy on Impact. Premium footwear designed for everyday performance and style.
            </p>
          </div>

          {/* Column 2: IKA4 NAVIGATION */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold tracking-widest text-white uppercase font-sans">
              IKA4
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><button onClick={() => onSelectLink?.('About us')} className="hover:text-white transition-colors">About us</button></li>
              <li><button onClick={() => onSelectLink?.('Our Store')} className="hover:text-white transition-colors">Our Store</button></li>
              <li><button onClick={() => onSelectLink?.('Career')} className="hover:text-white transition-colors">Career</button></li>
              <li><button onClick={() => onSelectLink?.('Reseller')} className="hover:text-white transition-colors">Reseller</button></li>
            </ul>
          </div>

          {/* Column 3: SUPPORT */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold tracking-widest text-white uppercase font-sans">
              SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><button onClick={() => onSelectLink?.('Contact us')} className="hover:text-white transition-colors">Contact us</button></li>
              <li><button onClick={() => onSelectLink?.('Return Policy')} className="hover:text-white transition-colors">Return Policy</button></li>
              <li><button onClick={() => onSelectLink?.('Product Guaranter')} className="hover:text-white transition-colors">Product Guaranter</button></li>
            </ul>
          </div>

          {/* Column 4: SOCIAL MEDIA */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold tracking-widest text-white uppercase font-sans">
              SOCIAL MEDIA
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Linkedin</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-medium gap-4">
          <p>© 2026 IKA4. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onSelectLink?.('Terms and Service')} className="hover:text-white transition-colors">Terms & Service</button>
            <button onClick={() => onSelectLink?.('Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onSelectLink?.('Cookies')} className="hover:text-white transition-colors">Cookies</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
