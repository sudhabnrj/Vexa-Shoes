import React, { useState } from 'react';
import { Star, Heart, ChevronRight } from 'lucide-react';
import { Product, PRODUCTS_CATEGORY_SECTION } from '../data/products';

interface CategoryCatalogSectionProps {
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const CategoryCatalogSection: React.FC<CategoryCatalogSectionProps> = ({
  onSelectProduct,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Running');
  const [startIndex, setStartIndex] = useState<number>(0);

  const filters = ['Running', 'Basketball', 'Sneakers', 'Gym', 'Hiking', 'Formal'];

  const filteredProducts = PRODUCTS_CATEGORY_SECTION.filter(
    (p) => selectedFilter === 'All' || p.category === selectedFilter || true
  );

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % PRODUCTS_CATEGORY_SECTION.length);
  };

  const visibleProducts = [
    ...PRODUCTS_CATEGORY_SECTION.slice(startIndex),
    ...PRODUCTS_CATEGORY_SECTION.slice(0, startIndex),
  ].slice(0, 4);

  return (
    <section className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-widest text-neutral-900 font-sans">
            CATEGORY
          </h3>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group relative bg-neutral-100 hover:bg-neutral-150 rounded-3xl p-3 flex flex-col justify-between transition-all duration-300 border border-neutral-200/60 shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  {/* Wishlist Button */}
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
                      <h4 className="font-extrabold tracking-wider uppercase text-xs text-white">
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
