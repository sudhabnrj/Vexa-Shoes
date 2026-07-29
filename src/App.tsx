import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DefineSection } from './components/DefineSection';
import { BrandBar } from './components/BrandBar';
import { ProductGridSection } from './components/ProductGridSection';
import { ElevateSection } from './components/ElevateSection';
import { CategoryCatalogSection } from './components/CategoryCatalogSection';
import { PromoBanner } from './components/PromoBanner';
import { LookbookSection } from './components/LookbookSection';
import { BrandWatermark } from './components/BrandWatermark';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { SignInModal } from './components/SignInModal';
import { Product, PRODUCTS_GRID_1, PRODUCTS_CATEGORY_SECTION } from './data/products';

export default function App() {
  // Navigation / Category state
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Interactive Modals and Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Cart & Wishlist Items state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  // Handlers
  const handleAddToCart = (product: Product, size: string, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, size, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleMoveToCart = (product: Product) => {
    handleAddToCart(product, 'US 9', 1);
    setIsCartOpen(true);
  };

  const handleSelectFeaturedById = (id: string) => {
    const all = [...PRODUCTS_GRID_1, ...PRODUCTS_CATEGORY_SECTION];
    const found = all.find((p) => p.id === id) || all[0];
    setSelectedProduct(found);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col justify-between">
      
      {/* Top Header Navigation */}
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlistProducts.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExplore={() => setSelectedProduct(PRODUCTS_GRID_1[3])}
          onSelectFlyknit={() => setSelectedProduct(PRODUCTS_GRID_1[1])}
        />

        {/* Every Step Defines You Section */}
        <DefineSection
          onSelectProduct={(id) => handleSelectFeaturedById(id)}
        />

        {/* Brand Logos Bar */}
        <BrandBar />

        {/* Find Your Perfect Pair - Product Grid */}
        <ProductGridSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onToggleWishlist={(prod) => handleToggleWishlist(prod)}
          wishlistIds={wishlistProducts.map((p) => p.id)}
          onExploreCategory={() => setIsSearchOpen(true)}
        />

        {/* Elevate Your Stride Dual Feature Section */}
        <ElevateSection
          onExplore={() => setSelectedProduct(PRODUCTS_GRID_1[0])}
        />

        {/* Category Filters & Catalog Section */}
        <CategoryCatalogSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onToggleWishlist={(prod) => handleToggleWishlist(prod)}
          wishlistIds={wishlistProducts.map((p) => p.id)}
        />

        {/* Promo Banner Section */}
        <PromoBanner
          onShopNow={() => setSelectedProduct(PRODUCTS_CATEGORY_SECTION[0])}
        />

        {/* Outfit Lookbook Gallery */}
        <LookbookSection />

        {/* Brand Watermark */}
        <BrandWatermark />
      </main>

      {/* Footer */}
      <Footer
        onSelectLink={(link) => {
          if (link === 'Contact us' || link === 'About us') {
            setIsSignInOpen(true);
          } else {
            setIsSearchOpen(true);
          }
        }}
      />

      {/* Interactive Drawers & Overlays */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistProducts.some((p) => p.id === selectedProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveToCart}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />

    </div>
  );
}
