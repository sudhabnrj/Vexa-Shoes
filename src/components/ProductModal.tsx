import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const sizes = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'];
  const [selectedSize, setSelectedSize] = useState<string>('US 9');
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-neutral-100 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="md:w-1/2 bg-neutral-100 p-8 flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <span className="absolute bottom-4 left-4 text-xs font-mono font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-neutral-800">
            {product.category}
          </span>
        </div>

        {/* Details Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                IKA4 FOOTWEAR
              </span>
              <div className="flex items-center text-yellow-400 text-xs font-bold gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span>5.0 (48 reviews)</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight font-sans">
              {product.name}
            </h3>

            <p className="text-xl font-bold text-neutral-900">
              ${product.price}
            </p>

            <p className="text-xs text-neutral-600 leading-relaxed">
              {product.description || 'Engineered with high-rebound cushioning and premium materials for peak comfort and street elegance.'}
            </p>

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                Select Size:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedSize === size
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                Quantity:
              </span>
              <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 font-bold text-neutral-700 hover:bg-neutral-200"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-neutral-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 font-bold text-neutral-700 hover:bg-neutral-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-950 hover:bg-neutral-800 text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added To Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart - ${(product.price * quantity).toFixed(0)}</span>
                </>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`p-3.5 rounded-full border transition-colors ${
                isWishlisted
                  ? 'bg-red-500 border-red-500 text-white'
                  : 'border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
              title="Toggle Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
