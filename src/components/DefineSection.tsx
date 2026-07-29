import React from 'react';
import { ASSETS } from '../data/assets';
import { TOP_FEATURED_PRODUCTS } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

interface DefineSectionProps {
  onSelectProduct: (id: string) => void;
}

export const DefineSection: React.FC<DefineSectionProps> = ({ onSelectProduct }) => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Model Photo Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden group min-h-[420px] lg:min-h-[500px]">
            <img
              src={ASSETS.modelWhiteSuit}
              alt="Model in White Suit with Sneakers"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 uppercase leading-[0.95] font-sans">
                EVERY STEP<br />DEFINES YOU
              </h2>
            </div>

            {/* Two Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {TOP_FEATURED_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod.id)}
                  className="bg-neutral-100 hover:bg-neutral-150 p-4 rounded-3xl cursor-pointer group transition-all duration-300 flex flex-col justify-between border border-neutral-200/60 shadow-sm hover:shadow-md"
                >
                  <div className="w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center p-2 mb-3">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <h4 className="text-sm font-extrabold text-neutral-950 tracking-wider uppercase">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium">
                        {prod.colorway}
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-neutral-950 group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
