import React from 'react';

export const BrandWatermark: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-10 w-full bg-[#0a0a0a] text-white overflow-hidden select-none pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[120px] sm:text-[200px] md:text-[260px] lg:text-[320px] font-black tracking-tighter uppercase leading-none text-transparent [-webkit-text-stroke:3px_#e5e5e5] font-sans">
          VEXA
        </h1>
      </div>
    </section>
  );
};
