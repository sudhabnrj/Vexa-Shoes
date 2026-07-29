import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promo.trim().toUpperCase() === 'IKA4' || promo.trim().toUpperCase() === 'SAVE20') {
      setDiscount(subtotal * 0.2);
    } else if (promo.trim()) {
      alert('Invalid promo code. Try "IKA4" or "SAVE20" for 20% off!');
    }
  };

  const handleCheckout = () => {
    setIsCheckedOut(true);
    setTimeout(() => {
      onClearCart();
      setIsCheckedOut(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-neutral-900" />
              <h3 className="text-lg font-black uppercase text-neutral-950 font-sans tracking-tight">
                Your Bag ({items.reduce((a, b) => a + b.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {isCheckedOut ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-neutral-950 uppercase font-sans">
                  Order Confirmed!
                </h4>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Thank you for shopping at IKA4. Your items are being packed and prepared for shipment.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-neutral-400 py-12">
                <ShoppingBag className="w-16 h-16 stroke-1" />
                <p className="text-sm font-semibold">Your bag is currently empty.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex items-center gap-4 bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200/60"
                >
                  <div className="w-20 h-20 bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <h5 className="text-xs font-black uppercase text-neutral-950 tracking-wider">
                      {item.product.name}
                    </h5>
                    <p className="text-[11px] text-neutral-500 font-mono">
                      Size: {item.size}
                    </p>
                    <p className="text-xs font-bold text-neutral-900">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-white text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="px-2 py-0.5 font-bold hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="px-2.5 font-bold text-neutral-800">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="px-2 py-0.5 font-bold hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.size)}
                        className="text-neutral-400 hover:text-red-500 p-1"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Order Summary */}
          {items.length > 0 && !isCheckedOut && (
            <div className="p-6 border-t border-neutral-100 space-y-4 bg-white">
              
              {/* Promo Code input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. IKA4)"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl text-xs bg-neutral-100 border border-neutral-200 focus:outline-none focus:border-neutral-900"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-neutral-200 text-neutral-900 text-xs font-bold hover:bg-neutral-300"
                >
                  Apply
                </button>
              </form>

              {/* Price details */}
              <div className="space-y-1.5 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (20%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-neutral-950 pt-2 border-t border-neutral-100">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
