import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface PromoBannerProps {
  onShopNow: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onShopNow }) => {
  return (
    <section className="pb-12 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-3xl overflow-hidden bg-stone-100 min-h-[400px] sm:min-h-[460px] flex items-center p-6 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-md">

          {/* Background Image */}
          <img
            src={ASSETS.promoGiantShoe}
            alt="Giant Sneaker Sculpture Studio"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {/* Soft Gradient Overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100/90 via-stone-100/60 to-transparent sm:w-2/3" />

          {/* Left Text Content Container */}
          <div className="relative z-10 max-w-xl space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 uppercase leading-none font-sans">
              READY TO UPGRADE<br />YOUR STEPS?
            </h2>

            <p className="text-sm sm:text-base text-neutral-800 font-medium max-w-md">
              Discover footwear designed for comfort, style, and everyday performance.
            </p>

            <div className="pt-2">
              <button
                onClick={onShopNow}
                className="group inline-flex items-center gap-3 bg-neutral-950 text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:scale-105"
              >
                <span>Shop Now</span>
                <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
