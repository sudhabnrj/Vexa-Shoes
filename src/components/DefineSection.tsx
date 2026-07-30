import React from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { Product, PRODUCTS_GRID_1 } from '../data/products';

interface DefineSectionProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onAddToCart?: (product: Product) => void;
}

export const DefineSection: React.FC<DefineSectionProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  onAddToCart,
}) => {
  const p9Product = PRODUCTS_GRID_1.find((p) => p.id === 'p9') || {
    id: 'p9',
    name: 'VEXA SPEED',
    category: 'Sneakers' as const,
    price: 290,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p9,
    colorway: 'Futuristic Stealth Gray',
    description: 'Aerodynamic running silhouette engineered for maximum energy return and speed.'
  };

  const p10Product = PRODUCTS_GRID_1.find((p) => p.id === 'p10') || {
    id: 'p10',
    name: 'AURA APEX',
    category: 'Running' as const,
    price: 310,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p10,
    colorway: 'Hyper Red / Crimson Black',
    description: 'High-propulsion road runner featuring responsive 3D aero-weave geometry.'
  };

  const featuredPair = [p9Product, p10Product];

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

            {/* Two Product Cards (Matching FIND YOUR PERFECT PAIR Card Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {featuredPair.map((product) => {
                const isWishlisted = wishlistIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="group relative bg-white hover:bg-neutral-50/80 rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 border border-neutral-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Top Bar: Size Tag & Wishlist Button */}
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 rounded-full text-neutral-600 border border-neutral-200/60 font-mono">
                        {product.sizes}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product);
                        }}
                        className={`p-2 rounded-full transition-all shadow-sm ${
                          isWishlisted
                            ? 'bg-red-500 text-white shadow-red-200'
                            : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                        }`}
                        title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Product Image Container */}
                    <div className="w-full h-52 sm:h-56 rounded-2xl flex items-center justify-center p-1 my-2 bg-neutral-50/70 group-hover:bg-neutral-100/80 transition-colors relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-2 pt-1">
                      {/* Rating Stars & Score */}
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center text-amber-400">
                          {[...Array(product.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-neutral-500 font-mono">
                          5.0
                        </span>
                      </div>

                      {/* Product Title */}
                      <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 truncate group-hover:text-neutral-950">
                        {product.name}
                      </h4>

                      {/* Footer Row: Price & Cart Button */}
                      <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                        <div>
                          <span className="text-xs text-neutral-400 block font-normal text-[10px] uppercase tracking-wider">
                            Price
                          </span>
                          <span className="text-base font-black text-neutral-950 font-sans">
                            ${product.price}
                          </span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart?.(product);
                          }}
                          className="flex cursor-pointer items-center gap-1.5 bg-neutral-950 hover:bg-neutral-800 active:scale-95 text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                          title="Add to Cart"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add To Cart</span>
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
