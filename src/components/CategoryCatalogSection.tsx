import React, { useState } from 'react';
import { Star, Heart, ChevronRight, ShoppingBag } from 'lucide-react';
import { Product, PRODUCTS_GRID_1, PRODUCTS_CATEGORY_SECTION } from '../data/products';

interface CategoryCatalogSectionProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onAddToCart?: (product: Product) => void;
}

export const CategoryCatalogSection: React.FC<CategoryCatalogSectionProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
  onAddToCart,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [startIndex, setStartIndex] = useState<number>(0);

  const filters = ['All', 'Running', 'Basketball', 'Sneakers', 'Gym', 'Hiking', 'Formal'];

  const allProducts = [...PRODUCTS_GRID_1, ...PRODUCTS_CATEGORY_SECTION];

  const filteredProducts = selectedFilter === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === selectedFilter);

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : allProducts;

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    setStartIndex(0);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % productsToDisplay.length);
  };

  const visibleProducts = [
    ...productsToDisplay.slice(startIndex % productsToDisplay.length),
    ...productsToDisplay.slice(0, startIndex % productsToDisplay.length),
  ].slice(0, 4);

  return (
    <section className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 uppercase leading-none font-sans">
            CATEGORY
          </h3>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterSelect(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Row with Floating Right Chevron Button */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibleProducts.map((product) => {
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

          {/* Right Slide Next Button overlay */}
          <button
            onClick={handleNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black text-white rounded-xl shadow-xl flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all border border-white/20"
            title="Next Products"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};
