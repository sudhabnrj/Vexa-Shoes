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
    image: ASSETS.p7,
    colorway: 'Gold Edition White',
    description: 'Luxury Parisian court silhouette featuring metallic foil gold embossing and wax laces.'
  },
  {
    id: 'p8',
    name: 'AURA PHANTOM',
    category: 'Sneakers',
    price: 320,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p8,
    colorway: 'Obsidian Black',
    description: 'Next-gen stealth lifestyle sneaker with dynamic kinetic responsiveness.'
  },
  {
    id: 'p9',
    name: 'VEXA SPEED',
    category: 'Sneakers',
    price: 290,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p9,
    colorway: 'Futuristic Stealth Gray',
    description: 'Aerodynamic running silhouette engineered for maximum energy return and speed.'
  },
  {
    id: 'p10',
    name: 'AURA APEX',
    category: 'Running',
    price: 310,
    rating: 5,
    sizes: 'XS - XXXL',
    image: ASSETS.p10,
    colorway: 'Hyper Red / Crimson Black',
    description: 'High-propulsion road runner featuring responsive 3D aero-weave geometry.'
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
    image: ASSETS.p8,
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
    image: ASSETS.p9,
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
    image: ASSETS.p10,
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
    image: ASSETS.p1,
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
    image: ASSETS.p2,
    colorway: 'Crimson Surge',
    description: 'Heavy lifter stability sneaker with flat heel surface and locked-down midfoot strap.'
  }
];

export const TOP_FEATURED_PRODUCTS = [
  {
    id: 'f1',
    name: 'AIR MAX TECH',
    image: 'https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?q=80&w=1115&auto=format&fit=crop',
    colorway: 'Carbon Black / Ember'
  },
  {
    id: 'f2',
    name: 'PULSE RUNNER',
    image: 'https://images.unsplash.com/photo-1574946943172-4800feadfab7?q=80&w=764&auto=format&fit=crop',
    colorway: 'Reflective Orange'
  }
];

export const LOOKBOOK_IMAGES = [
  {
    id: 'l1',
    title: 'TERRA HIKING EDITION',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop'
  },
  {
    id: 'l2',
    title: 'AURA CLASSIC LEATHER',
    image: 'https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=1172&auto=format&fit=crop'
  },
  {
    id: 'l3',
    title: 'DOMINA TITAN TACTICAL',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop'
  },
  {
    id: 'l4',
    title: 'AURA NOVA NITRO RUNNER',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=880&auto=format&fit=crop'
  },
  {
    id: 'l5',
    title: 'AURA ECHO 01 FROST',
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=765&auto=format&fit=crop'
  },
  {
    id: 'l6',
    title: 'HERITAGE 74 SUEDE',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=715&auto=format&fit=crop'
  }
];
