import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenSignIn: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenSignIn,
  activeCategory,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categories = ['Men', 'Women', 'Kids', 'Lifestyle'];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Left Navigation Links */}
        <nav className="hidden md:flex items-center space-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-neutral-100 text-neutral-900 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Center Brand Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => onSelectCategory('All')}
            className="group flex items-center focus:outline-none"
          >
            <img
              src={ASSETS.logo}
              alt="IKA4 Footwear"
              className="h-8 sm:h-9 md:h-10 object-contain group-hover:scale-105 transition-transform"
            />
          </button>
        </div>

        {/* Right Search & Action Icons */}
        <div className="flex items-center gap-3">
          
          {/* Search Pill */}
          <div 
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200/80 px-4 py-2 rounded-full cursor-pointer transition-colors text-neutral-500 text-sm w-44 lg:w-56"
          >
            <Search className="w-4 h-4 text-neutral-400" />
            <span className="select-none">Q Search</span>
          </div>

          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Sign in Button */}
          <button
            onClick={onOpenSignIn}
            className="hidden sm:inline-flex items-center text-sm font-medium text-neutral-800 hover:text-neutral-950 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors"
          >
            Sign in
          </button>

          {/* Shopping Bag Icon with Badge */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full text-neutral-800 hover:bg-neutral-100 transition-colors"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Wishlist Icon with Badge */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-full text-neutral-800 hover:bg-neutral-100 transition-colors"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-orange-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* User Account Icon */}
          <button
            onClick={onOpenSignIn}
            className="p-2.5 rounded-full text-neutral-800 hover:bg-neutral-100 transition-colors"
            title="User Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full text-neutral-800 hover:bg-neutral-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 space-y-3">
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                  activeCategory === cat ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenSignIn();
                setMobileMenuOpen(false);
              }}
              className="text-left px-4 py-2.5 rounded-xl font-medium text-base text-neutral-900 hover:bg-neutral-100"
            >
              Sign in / Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
