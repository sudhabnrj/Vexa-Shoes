import React from 'react';

export const BrandWatermark: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 bg-white overflow-hidden select-none pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[120px] sm:text-[200px] md:text-[260px] lg:text-[320px] font-black tracking-tighter uppercase leading-none text-transparent [-webkit-text-stroke:3px_#e5e5e5] font-sans">
          IKA4
        </h1>
      </div>
    </section>
  );
};
