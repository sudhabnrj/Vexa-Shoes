import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface ElevateSectionProps {
  onExplore: () => void;
}

export const ElevateSection: React.FC<ElevateSectionProps> = ({ onExplore }) => {
  return (
    <section className="pb-12 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Title */}
        <div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 uppercase leading-[0.95] font-sans">
            ELEVATE<br />YOUR STRIDE
          </h2>
        </div>

        {/* 2 Big Feature Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Streetwear Male Model */}
          <div
            onClick={onExplore}
            className="group relative rounded-3xl overflow-hidden cursor-pointer h-[420px] sm:h-[500px] border border-neutral-200/60 shadow-sm"
          >
            <img
              src={ASSETS.modelMaleStreetwear}
              alt="Male Streetwear Model"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Bottom Right Floating Badge CTA */}
            <div className="absolute bottom-6 right-6 z-10">
              <button className="flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-950 backdrop-blur-md text-white pl-4 pr-1.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all shadow-lg">
                <span>Explore Now</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Card 2: Olive Jacket Female Model */}
          <div
            onClick={onExplore}
            className="group relative rounded-3xl overflow-hidden cursor-pointer h-[420px] sm:h-[500px] border border-neutral-200/60 shadow-sm"
          >
            <img
              src={ASSETS.modelFemaleOlive}
              alt="Female Model in Olive Jacket"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Bottom Right Floating Badge CTA */}
            <div className="absolute bottom-6 right-6 z-10">
              <button className="flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-950 backdrop-blur-md text-white pl-4 pr-1.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all shadow-lg">
                <span>Explore Now</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
