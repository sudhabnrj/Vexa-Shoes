import React, { useState } from 'react';
import { X, Search, Star } from 'lucide-react';
import { Product, PRODUCTS_GRID_1, PRODUCTS_CATEGORY_SECTION } from '../data/products';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allProducts = [...PRODUCTS_GRID_1, ...PRODUCTS_CATEGORY_SECTION];

  const results = query.trim()
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.colorway?.toLowerCase().includes(query.toLowerCase())
      )
    : allProducts.slice(0, 4); // show trending if empty

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md p-4 sm:p-8 flex items-start justify-center pt-16 sm:pt-24 animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative border border-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-6 h-6 text-neutral-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search sneakers, boots, or categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-lg sm:text-xl font-bold text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase text-neutral-400 tracking-wider">
            {query.trim() ? `Found ${results.length} results` : 'Popular Searches'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
            {results.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-50 hover:bg-neutral-100 cursor-pointer border border-neutral-200/60 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-0.5">
                  <h5 className="text-xs font-black uppercase text-neutral-900 tracking-wide">
                    {p.name}
                  </h5>
                  <p className="text-[10px] text-neutral-500 font-mono">
                    {p.category} • {p.sizes}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-900">${p.price}</span>
                    <div className="flex text-yellow-400 text-[10px]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-0.5 text-neutral-600 font-semibold">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
