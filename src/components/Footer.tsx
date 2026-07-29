import React from 'react';
import { ASSETS } from '../data/assets';

interface FooterProps {
  onSelectLink?: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectLink }) => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Main Dark Card Container */}
        <div className="bg-[#0a0a0a] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Column 1: IKA4 */}
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

            {/* Column 2: SUPPORT */}
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

            {/* Column 3: SOCIAL MEDIA */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-sm font-extrabold tracking-widest text-white uppercase font-sans">
                SOCIAL MEDIA
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin</a></li>
              </ul>
            </div>

            {/* Column 4: Floating White Shoe Graphic on Right */}
            <div className="md:col-span-3 relative flex justify-end items-center h-48 md:h-auto pointer-events-none">
              <img
                src={ASSETS.footerWhite}
                alt="IKA4 White Shoe"
                className="w-full max-w-xs md:max-w-sm h-auto object-contain transform rotate-[-12deg] translate-x-4 md:translate-x-12 -translate-y-4 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Bottom Branding Inside Dark Card */}
          <div className="pt-16 mt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            
            <div>
              {/* Massive Logo */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-5xl sm:text-7xl font-black tracking-tighter text-white font-sans">
                  IKA
                </span>
                <span className="text-5xl sm:text-7xl font-black text-neutral-950 bg-white px-3 py-0.5 rounded-xl transform -skew-x-6">
                  4
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-300 tracking-wide">
                Light on Feet. Heavy on Impact.......
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Legal / Copyright Bar Outside */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-medium px-2 py-2 gap-4">
          <p>@2026 IKA4. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onSelectLink?.('Terms and Service')} className="hover:text-neutral-900 transition-colors">Terms and Service</button>
            <button onClick={() => onSelectLink?.('Privacy Policy')} className="hover:text-neutral-900 transition-colors">Privacy Policy</button>
            <button onClick={() => onSelectLink?.('Cookies')} className="hover:text-neutral-900 transition-colors">Cookies</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
