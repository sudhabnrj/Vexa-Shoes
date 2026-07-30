import React from 'react';
import { ArrowUpRight, Star, Heart, ShoppingBag } from 'lucide-react';
import { Product, PRODUCTS_GRID_1 } from '../data/products';

interface ProductGridSectionProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onExploreCategory: () => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  onExploreCategory,
  onAddToCart,
}) => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 8-Tile Grid (2 rows x 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

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
                className="group justify-center flex cursor-pointer w-full items-center gap-3 border border-white/20 hover:border-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
              >
                <span>Explore Now</span>
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Tiles 2-8: Redesigned Product Cards */}
          {PRODUCTS_GRID_1.map((product) => {
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
                    className={`p-2 rounded-full transition-all shadow-sm ${isWishlisted
                      ? 'bg-red-500 text-white shadow-red-200'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                      }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Product Image Container */}
                <div className="w-full h-56 sm:h-64 rounded-2xl flex items-center justify-center p-1 my-2 bg-neutral-50/70 group-hover:bg-neutral-100/80 transition-colors relative overflow-hidden">
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
    </section>
  );
};

