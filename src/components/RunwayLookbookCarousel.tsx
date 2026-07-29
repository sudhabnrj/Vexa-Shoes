import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Plus, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Product, PRODUCTS_GRID_1 } from '../data/products';
import { ASSETS } from '../data/assets';

export interface RunwayLook {
  id: string;
  lookNumber: string;
  title: string;
  subtitle: string;
  modelImage: string;
  products: Product[];
}

// 5 Curated Runway Looks matching the exact video & screenshot reference
const RUNWAY_LOOKS: RunwayLook[] = [
  {
    id: 'look-1',
    lookNumber: '5',
    title: 'SPRING SUMMER 2026',
    subtitle: 'Picture-perfect and fashionably on the dot. High-shine micro-sequin trousers paired with classic tweed cropped jacket and IKA4 Vexa accents.',
    modelImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', // Pink / Gold fashion outfit
    products: [
      {
        id: 'rl-1',
        name: 'CROPPED FEATHERED TWEED JACKET',
        category: 'Formal',
        price: 2900,
        rating: 5,
        sizes: 'XS - XL',
        image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop',
        colorway: 'Rose Blush / Tweed',
        description: 'Structured wool tweed cropped jacket with handcrafted feather cuffs.'
      },
      {
        id: 'rl-2',
        name: 'MICRO SEQUIN DRESS PANTS',
        category: 'Formal',
        price: 895,
        rating: 5,
        sizes: 'XS - XL',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
        colorway: 'Metallic Rose Gold',
        description: 'Fluid micro-sequin tailored trousers with silk lining.'
      }
    ]
  },
  {
    id: 'look-2',
    lookNumber: '6',
    title: 'OVERSIZED TRENCH & SLINGBACK',
    subtitle: 'Classic double-breasted cotton trench coat paired with kitten heel slingbacks and IKA4 Vexa stride geometry.',
    modelImage: ASSETS.modelMaleStreetwear,
    products: [
      {
        id: 'rl-3',
        name: 'KITTEN HEEL SLINGBACK PUMP',
        category: 'Sneakers',
        price: 780,
        rating: 5,
        sizes: 'US 6 - 11',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
        colorway: 'Patent Ivory',
        description: 'Sleek pointed slingback heel with contrast bow accent.'
      },
      {
        id: 'rl-4',
        name: 'OVERSIZED COTTON TRENCH COAT',
        category: 'Lifestyle',
        price: 1950,
        rating: 5,
        sizes: 'S - XXL',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
        colorway: 'Camel Sand',
        description: 'Water-resistant double-breasted cotton gabardine trench coat.'
      }
    ]
  },
  {
    id: 'look-3',
    lookNumber: '7',
    title: 'ICE BLUE SILK TUNIC',
    subtitle: 'Asymmetric ruffled silk tunic paired with fitted metallic heels and minimalist silver accessories.',
    modelImage: ASSETS.modelFemaleOlive,
    products: [
      {
        id: 'rl-5',
        name: 'FORMAL MINT SILK SWEATER',
        category: 'Lifestyle',
        price: 795,
        rating: 5,
        sizes: 'XS - L',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
        colorway: 'Sky Mint',
        description: 'Form-fitting draped silk tunic with statement bow tie waist.'
      },
      {
        id: 'rl-6',
        name: 'FITTED SILVER MIRROR PUMP',
        category: 'Formal',
        price: 850,
        rating: 5,
        sizes: 'US 5 - 10',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop',
        colorway: 'Chrome Silver',
        description: 'High-shine mirrored leather pump with subtle red sole detailing.'
      }
    ]
  },
  {
    id: 'look-4',
    lookNumber: '9',
    title: 'COUTURE BLACK BUSTIER',
    subtitle: 'Voluminous ruffle bustier top paired with belted denim trousers and IKA4 Vexa classic soles.',
    modelImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    products: [
      {
        id: 'rl-7',
        name: 'RUFFLES BUSTIER TOP',
        category: 'Lifestyle',
        price: 950,
        rating: 5,
        sizes: 'XS - L',
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
        colorway: 'Jet Black',
        description: 'Sculptural architectural shoulder ruffles with boned internal bustier.'
      },
      {
        id: 'rl-8',
        name: 'BELTED VEGAN TROUSER',
        category: 'Formal',
        price: 895,
        rating: 5,
        sizes: 'XS - XL',
        image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=800&auto=format&fit=crop',
        colorway: 'Chalk White',
        description: 'High-waisted wide leg vegan leather trousers with cinched waist belt.'
      }
    ]
  },
  {
    id: 'look-5',
    lookNumber: '12',
    title: 'IKA4 VEXA KINETIC SUIT',
    subtitle: 'Ultralight performance blazer paired with Vexa 360° nitrogen foam sneakers.',
    modelImage: ASSETS.modelWhiteSuit,
    products: [
      {
        id: 'rl-9',
        name: 'IKA4 VEXA NITRO RUNNER',
        category: 'Running',
        price: 320,
        rating: 5,
        sizes: 'US 7 - 13',
        image: PRODUCTS_GRID_1[1].image,
        colorway: 'White / Neon Amber',
        description: 'Nitrogen-infused foam midsole with carbon strike plate for maximum energy return.'
      },
      {
        id: 'rl-10',
        name: 'AERO-WEAVE KINETIC BLAZER',
        category: 'Lifestyle',
        price: 1850,
        rating: 5,
        sizes: 'S - XL',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
        colorway: 'Charcoal Matte',
        description: 'Breathable 4-way stretch tailored blazer engineered for unrestricted motion.'
      }
    ]
  }
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

  const activeLook = RUNWAY_LOOKS[activeIndex];

  // Triangle perspective slots calculation
  // Slot 4: Active / Foreground Right (Tallest, Full Color)
  // Slot 3: Center Right
  // Slot 2: Center Left
  // Slot 1: Far Left
  // Slot 0: Background Deep Left (Smallest, Faded)
  const getSlotForIndex = (idx: number) => {
    const total = RUNWAY_LOOKS.length;
    // Calculate distance from activeIndex in cyclic order
    const diff = (idx - activeIndex + total) % total;
    // Map diff 0 -> slot 4 (active foreground right)
    // diff 1 -> slot 0, diff 2 -> slot 1, diff 3 -> slot 2, diff 4 -> slot 3
    const slotMap = [4, 0, 1, 2, 3];
    return slotMap[diff];
  };

  // Positions for the 5 triangle perspective slots (from left background to right foreground)
  const slotStyles = [
    // Slot 0 (Deepest Background Left)
    { left: '4%', height: '220px', width: '130px', scale: 0.65, opacity: 0.25, zIndex: 1, filter: 'blur(2px) grayscale(40%)' },
    // Slot 1 (Far Left)
    { left: '16%', height: '270px', width: '150px', scale: 0.75, opacity: 0.45, zIndex: 2, filter: 'blur(1px) grayscale(20%)' },
    // Slot 2 (Center Left)
    { left: '29%', height: '330px', width: '180px', scale: 0.85, opacity: 0.70, zIndex: 3, filter: 'none' },
    // Slot 3 (Mid Right)
    { left: '44%', height: '400px', width: '210px', scale: 0.94, opacity: 0.90, zIndex: 4, filter: 'none' },
    // Slot 4 (ACTIVE FOREGROUND RIGHT - TALLEST & LARGEST)
    { left: '63%', height: '490px', width: '260px', scale: 1.0, opacity: 1.0, zIndex: 10, filter: 'none' },
  ];

  return (
    <section className="bg-[#e9eff4] text-neutral-900 overflow-hidden select-none border-t border-b border-neutral-300/60 font-sans">
      
      {/* TOP LUXURY NAVBAR (MARC JACOBS STYLE) */}
      <div className="bg-white border-b border-neutral-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
            <span className="text-neutral-900 font-extrabold border-b-2 border-neutral-900 pb-0.5">RUNWAY</span>
            <span className="hover:text-neutral-900 cursor-pointer">THE IKA4 COLLECTION</span>
            <span className="hover:text-neutral-900 cursor-pointer">BOOKMARC</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-[0.18em] text-neutral-400 uppercase">
            <span className="hover:text-neutral-900 cursor-pointer">COLLECTIONS</span>
            <span className="hover:text-neutral-900 cursor-pointer">CLOTHING</span>
            <span className="hover:text-neutral-900 cursor-pointer">LOOKBOOK</span>
            <span className="hover:text-neutral-900 cursor-pointer">BEAUTY</span>
            <span className="hover:text-neutral-900 cursor-pointer">ACCESSORIES</span>
            <span className="hover:text-neutral-900 cursor-pointer">BE IKA4</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT STAGE CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        
        {/* LEFT 8 COLS: TITLE + TRIANGLE PERSPECTIVE STAGE + LOOK FOOTER */}
        <div className="lg:col-span-8 p-6 md:p-10 flex flex-col justify-between relative">
          
          {/* Top Left Title & Paragraph */}
          <div className="max-w-xs sm:max-w-sm z-20">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.15em] text-neutral-900">
              {activeLook.title}
            </h2>
            <p className="mt-3 text-xs text-neutral-600 leading-relaxed font-normal">
              {activeLook.subtitle}
            </p>
          </div>

          {/* CENTER TRIANGLE PERSPECTIVE MODEL LINEUP */}
          <div className="relative w-full h-[460px] md:h-[500px] flex items-end my-4">
            {RUNWAY_LOOKS.map((look, idx) => {
              const slot = getSlotForIndex(idx);
              const style = slotStyles[slot];
              const isActive = slot === 4;

              return (
                <motion.div
                  key={look.id}
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    left: style.left,
                    height: style.height,
                    width: style.width,
                    scale: style.scale,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier transition
                  }}
                  className={`absolute bottom-0 cursor-pointer flex flex-col items-center justify-end origin-bottom transition-all ${
                    isActive ? 'drop-shadow-2xl' : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={look.modelImage}
                    alt={look.title}
                    className="w-full h-full object-cover object-top rounded-t-lg"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Left Look Details & Shop CTA */}
          <div className="z-20 pt-4 flex items-end justify-between border-t border-neutral-300/40">
            <div>
              <div className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-neutral-950 font-sans">
                LOOK | <span className="font-extrabold">{activeLook.lookNumber}</span>
              </div>
              <button
                onClick={() => onSelectProduct(activeLook.products[0])}
                className="group mt-2 inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-neutral-300 text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm transition-all hover:scale-105"
              >
                <span>SHOP THE LOOK</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Look Selector Dots */}
            <div className="flex items-center gap-2">
              {RUNWAY_LOOKS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? 'w-6 bg-neutral-950' : 'w-1.5 bg-neutral-400 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT 4 COLS: CLEAN WHITE PRODUCT CARDS PANEL (EXACT SCREENSHOT LAYOUT) */}
        <div className="lg:col-span-4 bg-white border-l border-neutral-200/80 p-6 md:p-8 flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLook.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-8 flex-1 flex flex-col justify-around"
            >
              {activeLook.products.map((prod) => {
                const isWishlisted = wishlistIds.includes(prod.id);

                return (
                  <div key={prod.id} className="relative flex flex-col justify-between group">
                    
                    {/* Top Left Heart Wishlist Toggle */}
                    <div className="flex justify-between items-center mb-2">
                      <button
                        onClick={() => onToggleWishlist(prod)}
                        className="text-neutral-400 hover:text-neutral-900 transition-colors p-1"
                        title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-neutral-900 text-neutral-900' : ''}`} />
                      </button>
                    </div>

                    {/* Product Image Thumbnail */}
                    <div
                      onClick={() => onSelectProduct(prod)}
                      className="w-full h-44 sm:h-52 flex items-center justify-center p-2 cursor-pointer"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Bottom Details & Add Plus Icon */}
                    <div className="mt-4 flex items-end justify-between pt-3 border-t border-neutral-100">
                      <div>
                        <h4
                          onClick={() => onSelectProduct(prod)}
                          className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 hover:underline cursor-pointer"
                        >
                          {prod.name}
                        </h4>
                        <p className="text-[11px] font-medium text-neutral-400 mt-0.5 font-mono">
                          ${prod.price.toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="p-1.5 text-neutral-400 hover:text-neutral-950 transition-colors"
                        title="View item details"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};
