import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Plus, Check } from 'lucide-react';
import { Product, PRODUCTS_GRID_1, PRODUCTS_CATEGORY_SECTION } from '../data/products';
import { ASSETS } from '../data/assets';

export interface RunwayLook {
  id: string;
  lookNumber: string;
  title: string;
  subtitle: string;
  modelImage: string;
  products: Product[];
}

// 5 Curated Runway Looks matching the video aesthetic
const RUNWAY_LOOKS: RunwayLook[] = [
  {
    id: 'look-1',
    lookNumber: '05',
    title: 'ROSE GOLD METALLIC',
    subtitle: 'High-shine sequin trousers paired with classic tweed cropped jacket & Vexa high-tops.',
    modelImage: ASSETS.modelWhiteSuit,
    products: [
      {
        id: 'rl-1',
        name: 'CROPPED FEATURED TWEED JACKET',
        category: 'Formal',
        price: 2800,
        rating: 5,
        sizes: 'XS - XL',
        image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop',
        colorway: 'Rose Blush / Tweed',
        description: 'Structured wool tweed cropped jacket with handcrafted pearl buttons.'
      },
      {
        id: 'rl-2',
        name: 'MICRO SEQUIN DRESS PANTS',
        category: 'Formal',
        price: 1950,
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
    lookNumber: '06',
    title: 'OVERSIZED TRENCH & SLINGBACK',
    subtitle: 'Classic double-breasted cotton trench coat paired with kitten heel slingbacks.',
    modelImage: ASSETS.modelMaleStreetwear,
    products: [
      {
        id: 'rl-3',
        name: 'KITTEN HEEL SLINGBACK PUMP',
        category: 'Sneakers',
        price: 980,
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
        price: 2450,
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
    lookNumber: '07',
    title: 'ICE BLUE SILK & SLINGBACKS',
    subtitle: 'Asymmetric ruffled silk tunic paired with fitted metallic heels & IKA4 Vexa accents.',
    modelImage: ASSETS.modelFemaleOlive,
    products: [
      {
        id: 'rl-5',
        name: 'FITTED RIBBED SILK TUNIC',
        category: 'Lifestyle',
        price: 1650,
        rating: 5,
        sizes: 'XS - L',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
        colorway: 'Sky Mint',
        description: 'Form-fitting draped silk tunic with statement bow tie back.'
      },
      {
        id: 'rl-6',
        name: 'SILVER MIRROR SLINGBACK PUMP',
        category: 'Formal',
        price: 1120,
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
    lookNumber: '09',
    title: 'COUTURE BLACK BUSTIER',
    subtitle: 'Voluminous ruffle bustier top paired with belted denim trousers.',
    modelImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    products: [
      {
        id: 'rl-7',
        name: 'RUFFLED BUSTIER TOP',
        category: 'Lifestyle',
        price: 1450,
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
        price: 995,
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
    modelImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % RUNWAY_LOOKS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + RUNWAY_LOOKS.length) % RUNWAY_LOOKS.length);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50 text-neutral-900 overflow-hidden border-t border-neutral-200/80 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND & CATEGORY NAVBAR */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-6 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-6 mb-3 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <span className="text-neutral-900 border-b-2 border-neutral-950 pb-1">COLLECTIONS</span>
              <span className="hover:text-neutral-900 cursor-pointer">CLOTHING</span>
              <span className="hover:text-neutral-900 cursor-pointer">LOOKBOOK</span>
              <span className="hover:text-neutral-900 cursor-pointer">BEAUTY</span>
              <span className="hover:text-neutral-900 cursor-pointer">ACCESSORIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 font-sans">
              SPRING SUMMER 2026
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed">
              Futuristic streetwear silhouettes paired with high-performance IKA4 Vexa footwear. Explore curated runway looks and shop individual pieces directly from the runway.
            </p>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Previous Look"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold font-mono text-neutral-500">
              {String(activeIndex + 1).padStart(2, '0')} / {String(RUNWAY_LOOKS.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Next Look"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN STAGE GRID: LEFT MODEL RUNWAY CAROUSEL + RIGHT PRODUCT COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 8 COLS: INTERACTIVE RUNWAY MODEL STAGE */}
          <div className="lg:col-span-8 relative flex flex-col justify-between min-h-[520px] md:min-h-[580px]">
            
            {/* Horizontal Lineup of Models */}
            <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
              <div className="flex items-center justify-center gap-4 sm:gap-8 transition-all duration-500">
                {RUNWAY_LOOKS.map((look, idx) => {
                  const isActive = idx === activeIndex;
                  const isPrev = idx === (activeIndex - 1 + RUNWAY_LOOKS.length) % RUNWAY_LOOKS.length;
                  const isNext = idx === (activeIndex + 1) % RUNWAY_LOOKS.length;

                  // Only render active, previous, and next for a focused carousel experience
                  if (!isActive && !isPrev && !isNext) return null;

                  return (
                    <motion.div
                      key={look.id}
                      onClick={() => setActiveIndex(idx)}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.05 : 0.84,
                        opacity: isActive ? 1 : 0.45,
                        zIndex: isActive ? 20 : 10,
                        x: isActive ? 0 : isPrev ? -30 : 30,
                        filter: isActive ? 'brightness(100%)' : 'brightness(80%) grayscale(30%)',
                      }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className={`relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-xl transition-all ${
                        isActive
                          ? 'w-64 sm:w-80 md:w-96 h-[440px] md:h-[490px] ring-2 ring-neutral-900/10'
                          : 'w-48 sm:w-56 md:w-64 h-[360px] md:h-[400px] hover:opacity-70'
                      }`}
                    >
                      <img
                        src={look.modelImage}
                        alt={look.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-80" />
                      
                      {/* Active Indicator Badge */}
                      {isActive && (
                        <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-white/20">
                          ACTIVE RUNWAY LOOK
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Left Look Details & Shop CTA */}
            <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
              <div>
                <div className="text-2xl sm:text-3xl font-black uppercase text-neutral-950 tracking-tight">
                  LOOK | <span className="text-orange-600">{activeLook.lookNumber}</span>
                </div>
                <button
                  onClick={() => onSelectProduct(activeLook.products[0])}
                  className="group mt-1 flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider text-neutral-900 hover:text-orange-600 uppercase transition-colors"
                >
                  <span>SHOP THE LOOK</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Step indicator dots */}
              <div className="flex items-center gap-2">
                {RUNWAY_LOOKS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex ? 'w-8 bg-neutral-950' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to look ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLS: STACKED PRODUCT CARDS FOR CURRENT LOOK */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
                FEATURED ITEMS IN LOOK {activeLook.lookNumber}
              </span>
              <span className="text-xs font-bold text-neutral-400 font-mono">
                {activeLook.products.length} ITEMS
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLook.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                {activeLook.products.map((prod) => {
                  const isWishlisted = wishlistIds.includes(prod.id);

                  return (
                    <div
                      key={prod.id}
                      className="group bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex gap-4 items-center relative"
                    >
                      {/* Product Thumbnail */}
                      <div
                        onClick={() => onSelectProduct(prod)}
                        className="w-24 h-28 sm:w-28 sm:h-32 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer p-2 flex items-center justify-center relative"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
                          {prod.category}
                        </span>
                        <h4
                          onClick={() => onSelectProduct(prod)}
                          className="text-sm sm:text-base font-extrabold text-neutral-950 truncate hover:text-orange-600 transition-colors cursor-pointer mt-0.5"
                        >
                          {prod.name}
                        </h4>
                        <p className="text-xs text-neutral-500 font-mono mt-1">
                          ${prod.price.toLocaleString()}
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                          <button
                            onClick={() => onSelectProduct(prod)}
                            className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95"
                          >
                            View Item
                          </button>
                        </div>
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => onToggleWishlist(prod)}
                        className={`absolute top-3 right-3 p-2 rounded-full border transition-all ${
                          isWishlisted
                            ? 'bg-red-50 border-red-200 text-red-600'
                            : 'bg-white border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-400'
                        }`}
                        title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-600' : ''}`} />
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
