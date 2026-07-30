import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Plus, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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

// 6 Curated Runway Looks using product images p1 through p6
const RUNWAY_LOOKS: RunwayLook[] = [
  {
    id: 'look-1',
    lookNumber: '1',
    title: 'TERRA HIKING',
    subtitle: 'All-terrain hiking boot engineered for ultimate grip, durability and ankle stability.',
    modelImage: ASSETS.p1,
    products: [
      PRODUCTS_GRID_1[0],
      {
        id: 'rl-1b',
        name: 'CROPPED FEATHERED TWEED JACKET',
        category: 'Formal',
        price: 2900,
        rating: 5,
        sizes: 'XS - XL',
        image: ASSETS.p1,
        colorway: 'Rose Blush / Tweed',
        description: 'Structured wool tweed cropped jacket with handcrafted feather cuffs.'
      }
    ]
  },
  {
    id: 'look-2',
    lookNumber: '2',
    title: 'AURA CLASSIC',
    subtitle: 'Timeless low-top minimal design crafted with premium full-grain Italian leather.',
    modelImage: ASSETS.p2,
    products: [
      PRODUCTS_GRID_1[1],
      {
        id: 'rl-2b',
        name: 'OVERSIZED COTTON TRENCH COAT',
        category: 'Lifestyle',
        price: 1950,
        rating: 5,
        sizes: 'S - XXL',
        image: ASSETS.p2,
        colorway: 'Camel Sand',
        description: 'Water-resistant double-breasted cotton gabardine trench coat.'
      }
    ]
  },
  {
    id: 'look-3',
    lookNumber: '3',
    title: 'DOMINA TITAN',
    subtitle: 'Chunky tactical sole with reinforced toe cap and micro-gel impact absorption.',
    modelImage: ASSETS.p3,
    products: [
      PRODUCTS_GRID_1[2],
      {
        id: 'rl-3b',
        name: 'FORMAL MINT SILK SWEATER',
        category: 'Lifestyle',
        price: 795,
        rating: 5,
        sizes: 'XS - L',
        image: ASSETS.p3,
        colorway: 'Sky Mint',
        description: 'Form-fitting draped silk tunic with statement bow tie waist.'
      }
    ]
  },
  {
    id: 'look-4',
    lookNumber: '4',
    title: 'AURA NOVA',
    subtitle: 'Ultralight performance road runner featuring energy return nitrogen-infused foam.',
    modelImage: ASSETS.p4,
    products: [
      PRODUCTS_GRID_1[3],
      {
        id: 'rl-4b',
        name: 'BELTED VEGAN TROUSER',
        category: 'Formal',
        price: 895,
        rating: 5,
        sizes: 'XS - XL',
        image: ASSETS.p4,
        colorway: 'Chalk White',
        description: 'High-waisted wide leg vegan leather trousers with cinched waist belt.'
      }
    ]
  },
  {
    id: 'look-5',
    lookNumber: '5',
    title: 'AURA ECHO 01',
    subtitle: 'Multi-textured layered upper with futuristic speed lacing and translucent heel clip.',
    modelImage: ASSETS.p5,
    products: [
      PRODUCTS_GRID_1[4],
      {
        id: 'rl-5b',
        name: 'AERO-WEAVE KINETIC BLAZER',
        category: 'Lifestyle',
        price: 1850,
        rating: 5,
        sizes: 'S - XL',
        image: ASSETS.p5,
        colorway: 'Charcoal Matte',
        description: 'Breathable 4-way stretch tailored blazer engineered for unrestricted motion.'
      }
    ]
  },
  {
    id: 'look-6',
    lookNumber: '6',
    title: 'HERITAGE 74',
    subtitle: 'Vintage-inspired court shoe rendered in butter-soft pigskin suede and gum sole.',
    modelImage: ASSETS.p6,
    products: [
      PRODUCTS_GRID_1[5],
      {
        id: 'rl-6b',
        name: 'KITTEN HEEL SLINGBACK PUMP',
        category: 'Sneakers',
        price: 780,
        rating: 5,
        sizes: 'US 6 - 11',
        image: ASSETS.p6,
        colorway: 'Patent Ivory',
        description: 'Sleek pointed slingback heel with contrast bow accent.'
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % RUNWAY_LOOKS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + RUNWAY_LOOKS.length) % RUNWAY_LOOKS.length);
  };

  // GPU Hardware-accelerated 3D perspective slot parameters
  // Slot 5: Active / Foreground Right (Facing forward, full scale, front layer)
  // Slots 0-4: Lined up diagonally receding into 3D space toward back-left
  const slotConfig = [
    // Slot 0 (Deepest Back-Left)
    { left: '0%', rotateY: 35, z: -240, height: '240px', width: '140px', scale: 0.68, opacity: 0.45, zIndex: 1 },
    // Slot 1 (Far Back-Left)
    { left: '11%', rotateY: 28, z: -180, height: '270px', width: '160px', scale: 0.75, opacity: 0.60, zIndex: 2 },
    // Slot 2 (Mid Back-Left)
    { left: '23%', rotateY: 21, z: -120, height: '300px', width: '180px', scale: 0.82, opacity: 0.74, zIndex: 3 },
    // Slot 3 (Center Stage)
    { left: '36%', rotateY: 14, z: -60, height: '330px', width: '200px', scale: 0.88, opacity: 0.86, zIndex: 4 },
    // Slot 4 (Mid Right Foreground)
    { left: '49%', rotateY: 7, z: 0, height: '365px', width: '220px', scale: 0.94, opacity: 0.94, zIndex: 5 },
    // Slot 5 (ACTIVE FOREGROUND RIGHT - TALLEST, Sharpest, 0 deg)
    { left: '62%', rotateY: 0, z: 50, height: '400px', width: '240px', scale: 1.0, opacity: 1.0, zIndex: 10 },
  ];

  const getSlotForIndex = (idx: number) => {
    const total = RUNWAY_LOOKS.length;
    const diff = (idx - activeIndex + total) % total;
    const slotMap = [5, 0, 1, 2, 3, 4];
    return slotMap[diff];
  };

  return (
    <section className="bg-[#e9eff4] text-neutral-900 overflow-hidden select-none border-t border-b border-neutral-300/60 font-sans">

      {/* MAIN CONTENT STAGE CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">

        {/* LEFT 8 COLS: TITLE + TRIANGLE PERSPECTIVE STAGE + LOOK FOOTER */}
        <div className="lg:col-span-8 p-6 md:p-10 flex flex-col justify-between relative">

          {/* Top Left Title & Subtitle */}
          <div className="max-w-xs sm:max-w-sm z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLook.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.15em] text-neutral-900">
                  {activeLook.title}
                </h2>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed font-normal">
                  {activeLook.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER TRIANGLE PERSPECTIVE MODEL LINEUP (SILKY SMOOTH GPU TRANSFORM) */}
          <div
            className="relative w-full h-[440px] md:h-[480px] flex items-end my-2 overflow-visible"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            {RUNWAY_LOOKS.map((look, idx) => {
              const slot = getSlotForIndex(idx);
              const cfg = slotConfig[slot];
              const isActive = slot === 5;

              return (
                <motion.div
                  key={look.id}
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    left: cfg.left,
                    rotateY: cfg.rotateY,
                    z: cfg.z,
                    height: cfg.height,
                    width: cfg.width,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    zIndex: cfg.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                    mass: 0.8,
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'bottom center',
                    willChange: 'transform, opacity, left',
                  }}
                  className={`cursor-pointer group flex flex-col items-center justify-between rounded-3xl p-3 sm:p-4 transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-white/90 ring-1 ring-black/5'
                    : 'bg-gradient-to-b from-white/70 to-white/40 backdrop-blur-md shadow-lg border border-white/50 hover:bg-white/80'
                    }`}
                >
                  <div className="relative w-full flex-1 flex items-center justify-center min-h-0">
                    <div className={`absolute bottom-1 w-4/5 h-3 rounded-full blur-md transition-opacity ${isActive ? 'bg-black/25 opacity-100' : 'bg-black/15 opacity-60'}`} />
                    <img
                      src={look.modelImage}
                      alt={look.title}
                      className="max-w-full max-h-full object-contain object-center pointer-events-none drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2 text-center select-none">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest block truncate ${isActive ? 'text-neutral-950' : 'text-neutral-500'}`}>
                      {look.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Stage Left/Right Quick Click Nav Overlay */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/70 backdrop-blur-md hover:bg-white text-neutral-800 flex items-center justify-center shadow-md active:scale-95 transition-all"
              aria-label="Previous Look"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/70 backdrop-blur-md hover:bg-white text-neutral-800 flex items-center justify-center shadow-md active:scale-95 transition-all"
              aria-label="Next Look"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Left Look Details & Shop CTA */}
          <div className="z-20 pt-4 flex items-end justify-between border-t border-neutral-300/40">
            <div>
              <div className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-neutral-950 font-sans">
                LOOK | <span className="font-extrabold">{activeLook.lookNumber}</span>
              </div>
              <button
                onClick={() => onSelectProduct(activeLook.products[0])}
                className="group mt-2 inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-neutral-300 text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm transition-all hover:scale-105"
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-neutral-950' : 'w-1.5 bg-neutral-400 hover:bg-neutral-600'
                    }`}
                  aria-label={`Go to look ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT 4 COLS: SILKY SMOOTH CROSS-FADE PRODUCT PANEL */}
        <div className="lg:col-span-4 bg-white border-l border-neutral-200/80 p-6 md:p-8 flex flex-col justify-between">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLook.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
