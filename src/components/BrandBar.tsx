import React from 'react';

export const BrandBar: React.FC = () => {
  return (
    <section className="py-10 border-y border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          
          {/* NIKE */}
          <div className="flex items-center justify-center">
            <svg className="h-9 sm:h-12 text-neutral-900 fill-current" viewBox="0 0 24 24">
              <path d="M21.707 5.293c-.391-.391-1.023-.391-1.414 0l-12 12c-.391.391-1.023.391-1.414 0l-5-5c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l5.707 5.707c.391.391 1.023.391 1.414 0l12.707-12.707c.391-.391.391-1.023 0-1.414z" />
              <path d="M9.8 17.5L2.2 12.3c-2.3-1.6 1.1-4.2 3.1-2.8l5.8 4.1c.8.6.8 1.8 0 2.4l-1.3 1.5z" />
              <path d="M21.71 5.3C18.1 7.8 11.2 13.5 7.6 17.1c-.8.8-2.1.2-2.1-.9 0-.4.2-.8.5-1.1L18.6 4c.9-.9 2.5-.2 2.3 1.1-.1.1-.1.1-.2.2z" />
            </svg>
            <span className="text-3xl font-black italic tracking-tighter text-neutral-950 font-sans ml-1">NIKE</span>
          </div>

          {/* ADIDAS */}
          <div className="flex items-center justify-center space-x-1">
            <div className="flex flex-col items-center">
              <div className="flex items-end space-x-1 h-6">
                <span className="w-1.5 h-3 bg-neutral-950 transform -skew-x-[20deg]" />
                <span className="w-1.5 h-4.5 bg-neutral-950 transform -skew-x-[20deg]" />
                <span className="w-1.5 h-6 bg-neutral-950 transform -skew-x-[20deg]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-950 font-sans mt-0.5">adidas</span>
            </div>
          </div>

          {/* PUMA */}
          <div className="flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black tracking-widest text-neutral-950 font-sans uppercase">
              PUMA
            </span>
          </div>

          {/* REEBOK */}
          <div className="flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-sans tracking-tight">
              Reebok
            </span>
          </div>

          {/* UNDER ARMOUR */}
          <div className="flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-black text-neutral-950 font-sans tracking-tight uppercase">
              UNDER ARMOUR
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
