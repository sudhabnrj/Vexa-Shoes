import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Plus, ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Check, Zap, Shield, Sparkles } from 'lucide-react';
import { Product } from '../data/products';

// Import all product images directly from assets/product
import vexaKnitPair from '../../assets/product/ChatGPT Image Jul 29, 2026, 08_21_22 PM.png';
import vexaStealthBlack from '../../assets/product/ChatGPT Image Jul 29, 2026, 07_39_03 PM.png';
import vexaSilverBlack from '../../assets/product/ChatGPT Image Jul 29, 2026, 07_53_12 PM.png';
import magentaCourt from '../../assets/product/pngegg (5).png';
import crimsonZoom from '../../assets/product/pngegg (6).png';
import airMaxRed from '../../assets/product/pngegg (7).png';

export interface ProductShowcaseItem {
  id: string;
  name: string;
  category: 'Running' | 'Sneakers' | 'Formal' | 'Lifestyle';
  price: number;
  colorway: string;
  tagline: string;
  description: string;
  image: string;
  specs: {
    weight: string;
    cushioning: string;
    drop: string;
  };
}

const SHOWCASE_PRODUCTS: ProductShowcaseItem[] = [
  {
    id: 'prod-1',
    name: 'IKA4 VEXA AERO-KNIT SLIP-ON',
    category: 'Sneakers',
    price: 280,
    colorway: 'Heathered Ash / Rose Gold Accent',
    tagline: 'Lightweight slip-on construction with high-recoil nitrogen foam sole.',
    description: 'Engineered 3D aero-knit upper with zoned dynamic tension band and metallic copper heel clips for responsive everyday performance.',
    image: vexaKnitPair,
    specs: { weight: '185G', cushioning: 'NITRO-FOAM 3.0', drop: '8MM' },
  },
  {
    id: 'prod-2',
    name: 'IKA4 VEXA STEALTH BLACK',
    category: 'Running',
    price: 320,
    colorway: 'Stealth Matte Black / White Sole',
    tagline: 'Tactical dark silhouette engineered for high-velocity lateral support.',
    description: 'Full-grain synthetic leather overlays over micro-mesh upper with high-density strike plate for supreme velocity and traction.',
    image: vexaStealthBlack,
    specs: { weight: '210G', cushioning: 'CARBON-RECOIL', drop: '10MM' },
  },
  {
    id: 'prod-3',
    name: 'IKA4 VEXA CHROME DUAL',
    category: 'Lifestyle',
    price: 295,
    colorway: 'Dual Slate Gray / Onyx',
    tagline: 'Minimalist dual-tone design crafted with breathable synthetic mesh.',
    description: 'Contrast panelling with speed lacing architecture and flexible sculpted midsole for effortless all-day comfort.',
    image: vexaSilverBlack,
    specs: { weight: '195G', cushioning: 'AIR-MATRIX', drop: '8MM' },
  },
  {
    id: 'prod-4',
    name: 'IKA4 VEXA COURT MAGENTA',
    category: 'Sneakers',
    price: 240,
    colorway: 'Berry Magenta / Pure White',
    tagline: 'Vibrant court silhouette with reinforced sole tread geometry.',
    description: 'Padded ankle collar with high-friction herringbone outsole designed for explosive quick cuts and lateral grip.',
    image: magentaCourt,
    specs: { weight: '225G', cushioning: 'EVA IMPACT', drop: '6MM' },
  },
  {
    id: 'prod-5',
    name: 'IKA4 VEXA CRIMSON ZOOM',
    category: 'Running',
    price: 310,
    colorway: 'Crimson Red / Midnight Navy',
    tagline: 'Marathon distance road runner with dual-density foam core.',
    description: 'Gradient engineered mesh upper with responsive zoom airbag unit for effortless toe-off propulsion.',
    image: crimsonZoom,
    specs: { weight: '190G', cushioning: 'ZOOM AIR-PODS', drop: '9MM' },
  },
  {
    id: 'prod-6',
    name: 'IKA4 VEXA AIR MAX TAVAS',
    category: 'Lifestyle',
    price: 260,
    colorway: 'Ember Red / Stealth Charcoal',
    tagline: 'Iconic visible air cushion unit with micro-perforated heel counter.',
    description: 'Seamless synthetic construction with visible heel airbag for maximum shock absorption on hard surfaces.',
    image: airMaxRed,
    specs: { weight: '205G', cushioning: 'MAX-AIR UNIT', drop: '10MM' },
  },
];

interface RunwayLookbookCarouselProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const RunwayLookbookCarousel: React.FC<RunwayLookbookCarouselProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = SHOWCASE_PRODUCTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length);
  };

  const isWishlisted = wishlistIds.includes(activeProduct.id);

  // Convert ShowcaseItem to standard Product interface for callbacks
  const currentProductData: Product = {
    id: activeProduct.id,
    name: activeProduct.name,
    category: activeProduct.category,
    price: activeProduct.price,
    rating: 5,
    sizes: 'US 7 - 12',
    image: activeProduct.image,
    colorway: activeProduct.colorway,
    description: activeProduct.description,
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white select-none overflow-hidden border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND HEADER & NAVIGATION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5" /> OFFICIAL VEXA PRODUCT LINEUP
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
              THE VEXA FOOTWEAR GALLERY
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl leading-relaxed font-normal">
              Explore our complete high-performance footwear collection. Crafted with precision 3D aero-knit, nitrogen foam cushioning, and kinetic energy return.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-white hover:text-black flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold font-mono text-neutral-400">
              {String(activeIndex + 1).padStart(2, '0')} / {String(SHOWCASE_PRODUCTS.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-white hover:text-black flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Next Product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN STAGE GRID: LEFT PRODUCT HIGHLIGHT + RIGHT DETAILS PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 7 COLS: LARGE HERO PRODUCT SHOWCASE STAGE */}
          <div className="lg:col-span-7 relative bg-neutral-950/80 border border-neutral-800 rounded-3xl p-6 md:p-10 flex flex-col justify-between min-h-[460px] md:min-h-[520px] shadow-2xl overflow-hidden">
            
            {/* Ambient Background Radial Lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none blur-3xl" />
            
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">
                MODEL // {String(activeIndex + 1).padStart(2, '0')}
              </span>

              <button
                onClick={() => onToggleWishlist(currentProductData)}
                className={`p-2.5 rounded-full border transition-all ${
                  isWishlisted
                    ? 'bg-red-500/20 border-red-500 text-red-500'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
                title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
            </div>

            {/* Main Animated Product Image */}
            <div className="relative z-10 my-6 flex items-center justify-center h-[280px] sm:h-[340px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => onSelectProduct(currentProductData)}
                />
              </AnimatePresence>
            </div>

            {/* Spec Pills Bar */}
            <div className="z-10 grid grid-cols-3 gap-3 pt-4 border-t border-neutral-800/80 text-center font-mono text-xs">
              <div className="bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800">
                <span className="block text-[10px] text-neutral-500 font-bold uppercase">WEIGHT</span>
                <span className="font-extrabold text-white">{activeProduct.specs.weight}</span>
              </div>
              <div className="bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800">
                <span className="block text-[10px] text-neutral-500 font-bold uppercase">CUSHION</span>
                <span className="font-extrabold text-orange-400">{activeProduct.specs.cushioning}</span>
              </div>
              <div className="bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800">
                <span className="block text-[10px] text-neutral-500 font-bold uppercase">OFFSET</span>
                <span className="font-extrabold text-white">{activeProduct.specs.drop}</span>
              </div>
            </div>

          </div>

          {/* RIGHT 5 COLS: PRODUCT DETAILS & THUMBNAIL SELECTOR */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                    {activeProduct.category} SERIES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1 leading-tight">
                    {activeProduct.name}
                  </h3>
                  <div className="mt-2 text-2xl font-black font-mono text-white">
                    ${activeProduct.price}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {activeProduct.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-neutral-850 border border-neutral-800 text-xs text-neutral-400">
                  <span className="font-bold text-neutral-300 block mb-0.5">COLORWAY</span>
                  {activeProduct.colorway}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(currentProductData)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-neutral-950 px-6 py-3.5 rounded-full text-sm font-extrabold shadow-lg shadow-orange-500/20 transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>VIEW PRODUCT DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* THUMBNAIL SELECTOR GRID */}
            <div className="pt-6 border-t border-neutral-800">
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                SELECT COLORWAY / MODEL
              </span>
              
              <div className="grid grid-cols-6 gap-2">
                {SHOWCASE_PRODUCTS.map((prod, i) => (
                  <button
                    key={prod.id}
                    onClick={() => setActiveIndex(i)}
                    className={`h-16 rounded-xl border p-1 overflow-hidden transition-all bg-neutral-950 flex items-center justify-center ${
                      i === activeIndex
                        ? 'border-orange-500 ring-2 ring-orange-500/40 scale-105'
                        : 'border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600'
                    }`}
                    title={prod.name}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
