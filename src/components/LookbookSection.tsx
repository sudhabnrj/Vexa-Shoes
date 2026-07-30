import React, { useState } from 'react';
import { ChevronRight, Instagram } from 'lucide-react';
import { LOOKBOOK_IMAGES } from '../data/products';

export const LookbookSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % LOOKBOOK_IMAGES.length);
  };

  const visibleLookbooks = [
    ...LOOKBOOK_IMAGES.slice(startIndex),
    ...LOOKBOOK_IMAGES.slice(0, startIndex),
  ].slice(0, 5);

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Top Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-200/80 pb-6">
          <div>
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 uppercase leading-none font-sans flex items-center gap-3">
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-neutral-950" />
              <span>INSTAGRAM LOOKBOOK</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2 font-mono">
              @IKA4_FOOTWEAR • Tag us to get featured
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {visibleLookbooks.map((lb) => (
              <div
                key={lb.id}
                className="group relative rounded-3xl overflow-hidden h-72 sm:h-96 bg-neutral-50 cursor-pointer border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-full h-full p-4 flex items-center justify-center bg-neutral-50/90 group-hover:bg-neutral-100/90 transition-colors">
                  <img
                    src={lb.image}
                    alt={lb.title}
                    className="max-w-full max-h-full object-contain pointer-events-none drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Instagram Icon Thumbnail Badge */}
                <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-neutral-950 transition-all shadow-md">
                  <Instagram className="w-4.5 h-4.5" />
                </div>

                {/* Subtle Overlay Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {lb.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Floating Slide Control */}
          <button
            onClick={handleNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black text-white rounded-xl shadow-xl flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all border border-white/20"
            title="Next Lookbook"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};
