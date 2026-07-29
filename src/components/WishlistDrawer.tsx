import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  onRemoveFromWishlist,
  onMoveToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <h3 className="text-lg font-black uppercase text-neutral-950 font-sans tracking-tight">
                Wishlist ({products.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-neutral-400 py-12">
                <Heart className="w-16 h-16 stroke-1" />
                <p className="text-sm font-semibold">Your wishlist is empty.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              products.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200/60"
                >
                  <div className="w-20 h-20 bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <h5 className="text-xs font-black uppercase text-neutral-950 tracking-wider">
                      {p.name}
                    </h5>
                    <p className="text-xs font-bold text-neutral-900">
                      ${p.price}
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => {
                          onMoveToCart(p);
                          onRemoveFromWishlist(p);
                        }}
                        className="px-3 py-1 rounded-full bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-neutral-800"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Cart</span>
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(p)}
                        className="p-1 text-neutral-400 hover:text-red-500"
                        title="Remove from Wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
