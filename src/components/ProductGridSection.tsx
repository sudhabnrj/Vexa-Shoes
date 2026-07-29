import React from 'react';
import { ArrowUpRight, Star, Heart } from 'lucide-react';
import { Product, PRODUCTS_GRID_1 } from '../data/products';

interface ProductGridSectionProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onExploreCategory: () => void;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  onExploreCategory,
}) => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 8-Tile Grid (2 rows x 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Tile 1: Featured Dark Promo Card */}
          <div className="bg-neutral-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight font-sans">
                FIND YOUR<br />PERFECT<br />PAIR
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                From casual essentials to performance-driven sneakers, explore shoes crafted to match your lifestyle.
              </p>
            </div>

            <div>
              <button
                onClick={onExploreCategory}
                className="group inline-flex items-center gap-3 border border-white/20 hover:border-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
              >
                <span>Explore Now</span>
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Tiles 2-8: Product Cards */}
          {PRODUCTS_GRID_1.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group relative bg-neutral-100 hover:bg-neutral-150 rounded-3xl p-3 flex flex-col justify-between transition-all duration-300 border border-neutral-200/60 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                {/* Wishlist Button Overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product);
                  }}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
                    isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white text-neutral-700'
                  }`}
                  title="Toggle Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                {/* Product Image */}
                <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden flex items-center justify-center p-2 mb-3 bg-white/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Black Bottom Banner Bar */}
                <div className="bg-neutral-950 text-white p-3 sm:p-3.5 rounded-2xl flex items-center justify-between text-xs font-medium">
                  
                  {/* Left Name & Size */}
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold tracking-wider uppercase text-xs sm:text-xs text-white">
                      {product.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 font-mono">
                      {product.sizes}
                    </p>
                  </div>

                  {/* Right Stars & Price */}
                  <div className="flex flex-col items-end space-y-0.5">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-white">
                      ${product.price}
                    </span>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
