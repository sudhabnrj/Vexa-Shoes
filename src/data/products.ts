import { ASSETS } from './assets';

export interface Product {
  id: string;
  name: string;
  category: 'Running' | 'Basketball' | 'Sneakers' | 'Gym' | 'Hiking' | 'Formal' | 'Lifestyle';
  price: number;
  rating: number;
  sizes: string;
  image: string;
  isFeatured?: boolean;
  colorway?: string;
  description?: string;
}

export const PRODUCTS_GRID_1: Product[] = [
  {
    id: 'p1',
    name: 'TERRA HIKING',
    category: 'Hiking',
    price: 350,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p1,
    colorway: 'Earth Brown',
    description: 'All-terrain hiking boot engineered for ultimate grip, durability and ankle stability.'
  },
  {
    id: 'p2',
    name: 'AURA CLASSIC',
    category: 'Sneakers',
    price: 200,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p2,
    colorway: 'Monochrome White',
    description: 'Timeless low-top minimal design crafted with premium full-grain Italian leather.'
  },
  {
    id: 'p3',
    name: 'DOMINA TITAN',
    category: 'Gym',
    price: 300,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p3,
    colorway: 'Stealth Black',
    description: 'Chunky tactical sole with reinforced toe cap and micro-gel impact absorption.'
  },
  {
    id: 'p4',
    name: 'AURA NOVA',
    category: 'Running',
    price: 150,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p4,
    colorway: 'Slate Gray / Neon',
    description: 'Ultralight performance road runner featuring energy return nitrogen-infused foam.'
  },
  {
    id: 'p5',
    name: 'AURA ECHO 01',
    category: 'Sneakers',
    price: 200,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p5,
    colorway: 'Pure Frost',
    description: 'Multi-textured layered upper with futuristic speed lacing and translucent heel clip.'
  },
  {
    id: 'p6',
    name: 'HERITAGE 74',
    category: 'Formal',
    price: 100,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p6,
    colorway: 'Suede Beige',
    description: 'Vintage-inspired court shoe rendered in butter-soft pigskin suede and gum sole.'
  },
  {
    id: 'p7',
    name: 'AURA PARIS',
    category: 'Sneakers',
    price: 350,
    rating: 5,
    sizes: 'XS - XXXL',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
    colorway: 'Gold Edition White',
    description: 'Luxury Parisian court silhouette featuring metallic foil gold embossing and wax laces.'
  }
];

export const PRODUCTS_CATEGORY_SECTION: Product[] = [
  {
    id: 'c1',
    name: 'G.T. CUT 2',
    category: 'Basketball',
    price: 350,
    rating: 5,
    sizes: 'XS - XXXL',
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800&auto=format&fit=crop',
    colorway: 'Volcanic Black / Lime',
    description: 'High-traction hardwood basketball shoe designed for rapid direction changes and explosive vertical hops.'
  },
  {
    id: 'c2',
    name: 'EXPLORER',
    category: 'Hiking',
    price: 300,
    rating: 5,
    sizes: 'XS - XXXL',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    colorway: 'Moss Green / Ochre',
    description: 'Waterproof trail footwear with Vibram rubber outsole and quick-dry lining.'
  },
  {
    id: 'c3',
    name: 'NEBULA ELITE',
    category: 'Running',
    price: 250,
    rating: 5,
    sizes: 'XS - XXXL',
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=800&auto=format&fit=crop',
    colorway: 'Midnight Orange',
    description: 'Carbon fiber plate technology paired with maximum cushion matrix for marathon performance.'
  },
  {
    id: 'c4',
    name: 'AURELIUS',
    category: 'Formal',
    price: 200,
    rating: 5,
    sizes: 'XS - XXXL',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
    colorway: 'Clean Ivory',
    description: 'Minimalist luxury leather trainer designed for smart-casual wardrobes and executive comfort.'
  },
  {
    id: 'c5',
    name: 'FORCE OVERDRIVE',
    category: 'Gym',
    price: 220,
    rating: 5,
    sizes: 'XS - XXXL',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop',
    colorway: 'Crimson Surge',
    description: 'Heavy lifter stability sneaker with flat heel surface and locked-down midfoot strap.'
  }
];

export const TOP_FEATURED_PRODUCTS = [
  {
    id: 'f1',
    name: 'AIR MAX TECH',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop',
    colorway: 'Carbon Black / Ember'
  },
  {
    id: 'f2',
    name: 'PULSE RUNNER',
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=800&auto=format&fit=crop',
    colorway: 'Reflective Orange'
  }
];

export const LOOKBOOK_IMAGES = [
  {
    id: 'l1',
    title: 'Urban Streetwear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'l2',
    title: 'Minimal Beige Ensemble',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'l3',
    title: 'Monochrome Denim & Kicks',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'l4',
    title: 'Athleisure Comfort',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'l5',
    title: 'Contemporary Layering',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop'
  }
];
