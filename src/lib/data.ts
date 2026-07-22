export interface FurnitureProduct {
  id: string;
  name: string;
  category: "living" | "bedroom" | "dining" | "office" | "custom" | "outdoor";
  roomCollection: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  rating: number;
  reviewCount: number;
  images: string[];
  rotational360Images?: string[];
  woodType: string;
  finish: string;
  fabricOption?: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    seatHeight?: string;
  };
  warranty: string;
  inStock: boolean;
  description: string;
  features: string[];
  careInstructions: string[];
  availableColors: { name: string; hex: string }[];
  availableFinishes: { name: string; hex: string }[];
}

export interface RoomHotspot {
  id: string;
  productId: string;
  productName: string;
  category: string;
  price: number;
  topPercent: number;
  leftPercent: number;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  productBought: string;
  verified: boolean;
  userImage?: string;
  roomPhoto?: string;
}

export interface OfferBundle {
  id: string;
  title: string;
  badge: string;
  originalPrice: number;
  offerPrice: number;
  discountPercentage: number;
  itemsIncluded: string[];
  validTill: string;
  image: string;
  description: string;
}

export const BRAND_INFO = {
  name: "Tirumala Furniture",
  tagline: "Master Crafted Teak & Luxury Interiors Since 1998",
  heroSubtitle: "Transforming spaces into timeless sanctuaries. Experience 100% Solid Teak Wood craftsmanship, custom tailored dimensions, and white-glove delivery.",
  phone: "+91 98855 33343",
  altPhone: "+91 98855 33343",
  email: "concierge@tirumalafurniture.com",
  address: "Shop No. 8, 4-2, Charwadan Lane No. 2, Near Court, Azam Pura, Siddipet, Telangana 502103",
  workingHours: "Monday – Sunday: 10:00 AM – 9:00 PM (Open 7 Days a Week)",
  yearsOfLegacy: 28,
  happyCustomersCount: "45,000+",
  projectsCompleted: "12,500+",
  googleRating: 4.9,
  googleReviewCount: 1480,
  warrantyYears: 10,
  coordinates: {
    lat: 18.1018,
    lng: 78.8520,
  },
};

export const CATEGORIES = [
  {
    id: "living",
    name: "Living Room",
    count: 34,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "Handcrafted Teak Sofas, Sculpted Coffee Tables, Sectionals & Media Consoles.",
  },
  {
    id: "bedroom",
    name: "Bedroom Suite",
    count: 28,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Royal Teak Storage Beds, Custom Wardrobes, Ottoman Benches & Vanity Tables.",
  },
  {
    id: "dining",
    name: "Dining Room",
    count: 22,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    description: "Italian Marble & Teak Dining Sets, Sculpted Dining Chairs & Buffet Sideboards.",
  },
  {
    id: "office",
    name: "Executive Office",
    count: 16,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    description: "Ergonomic Top-Grain Leather Chairs, Solid Wood Desks & Bookshelf Walls.",
  },
  {
    id: "custom",
    name: "Custom Furniture",
    count: 45,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description: "Bespoke dimensions, personalized fabric choices, and custom interior carpentry.",
  },
  {
    id: "outdoor",
    name: "Patio & Outdoor",
    count: 14,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "All-weather Teak Loungers, Deck Dining & UV-Resistant Outdoor Cushions.",
  },
];

export const PRODUCTS: FurnitureProduct[] = [
  {
    id: "tf-sofa-royal-01",
    name: "Royal Teak Sovereign 3-Seater & Recliner Set",
    category: "living",
    roomCollection: "Living Room",
    price: 145000,
    originalPrice: 175000,
    tag: "Best Seller",
    rating: 4.9,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    ],
    woodType: "Grade-A Burma Teak Wood",
    finish: "Walnut Matte Polish",
    fabricOption: "Italian High-Performance Stain-Shield Velvet",
    dimensions: {
      length: "88 inches (223 cm)",
      width: "38 inches (96 cm)",
      height: "36 inches (91 cm)",
      seatHeight: "18 inches (45 cm)",
    },
    warranty: "10-Year Structural Teak Warranty",
    inStock: true,
    description: "Handcrafted from Grade-A seasoned Burma Teak Wood, the Sovereign Set balances stately grandeur with plush ergonomic relaxation. Features deep 40-density HR foam cushioning and hand-stitched Italian Velvet upholstery.",
    features: [
      "100% Solid Seasoned Burma Teak Structure",
      "Stain-resistant breathable fabric with liquid-repellent technology",
      "Reinforced mortise & tenon joinery for multi-generational durability",
      "Customizable fabric and wood polish shades on request",
    ],
    careInstructions: [
      "Wipe clean with a dry soft microfiber cloth daily",
      "Avoid direct harsh chemicals; use teak-safe wax polish bi-annually",
      "Vacuum fabric cushions monthly with soft brush attachment",
    ],
    availableColors: [
      { name: "Royal Emerald Velvet", hex: "#0F4C3A" },
      { name: "Teak Warm Natural", hex: "#8B5A2B" },
      { name: "Slate Charcoal", hex: "#2F3E46" },
      { name: "Champagne Cream", hex: "#F3E5AB" },
    ],
    availableFinishes: [
      { name: "Walnut Matte", hex: "#3D2314" },
      { name: "Teak Natural Gloss", hex: "#B87333" },
      { name: "Heritage Dark Mahogany", hex: "#2B1B17" },
    ],
  },
  {
    id: "tf-bed-imperial-02",
    name: "Imperial Teak King Storage Bed with Upholstered Headboard",
    category: "bedroom",
    roomCollection: "Master Bedroom",
    price: 128000,
    originalPrice: 149000,
    tag: "Luxury Pick",
    rating: 4.95,
    reviewCount: 98,
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    woodType: "Solid CP Teak Wood",
    finish: "Natural Honey Teak Grain",
    fabricOption: "Tufted Italian Top-Grain Leather",
    dimensions: {
      length: "82 inches (208 cm)",
      width: "76 inches (193 cm)",
      height: "54 inches (137 cm)",
    },
    warranty: "10-Year Anti-Termite & Structural Warranty",
    inStock: true,
    description: "The Imperial King Bed commands attention with its high-tufted leather headboard framed in solid teak wood molding. Fitted with heavy-duty hydraulic gas lifts for effortless under-bed storage access.",
    features: [
      "German hydraulic lift mechanism with 10,000 cycle test certification",
      "Plywood-lined storage compartments with moisture barrier coating",
      "Ergonomic angled headboard design for comfortable midnight reading",
      "Available in King, Queen, and Custom Super-King sizes",
    ],
    careInstructions: [
      "Use leather conditioner once every 6 months",
      "Keep away from direct heat sources",
      "Clean teak frame with beeswax polish",
    ],
    availableColors: [
      { name: "Saddle Tan Leather", hex: "#964B00" },
      { name: "Midnight Black Leather", hex: "#111111" },
      { name: "Ivory Beige Linen", hex: "#E8DCC4" },
    ],
    availableFinishes: [
      { name: "Honey Teak Natural", hex: "#D49B4B" },
      { name: "Rosewood Dark", hex: "#4A1525" },
    ],
  },
  {
    id: "tf-dining-marble-03",
    name: "Heritage 8-Seater Italian Marble & Teak Dining Table Set",
    category: "dining",
    roomCollection: "Dining Room",
    price: 185000,
    originalPrice: 215000,
    tag: "Flagship",
    rating: 5.0,
    reviewCount: 86,
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80",
    ],
    woodType: "Burma Teak Base with Statuario Italian Marble Top",
    finish: "Polished Clear Satin",
    dimensions: {
      length: "96 inches (243 cm)",
      width: "44 inches (111 cm)",
      height: "30 inches (76 cm)",
    },
    warranty: "10-Year Warranty on Teak Frame & Marble Polish",
    inStock: true,
    description: "A monumental center piece crafted with imported Statuario Italian Marble featuring gold-accented grey veining, resting gracefully on a hand-carved double pedestal solid teak framework.",
    features: [
      "Sealed marble tabletop with anti-stain nanotechnology coating",
      "Includes 8 cushioned solid teak dining armchairs",
      "Hand-carved beveling along table edges",
      "Scratch-resistant satin protective lacquer",
    ],
    careInstructions: [
      "Clean marble surface with pH-neutral marble cleaner",
      "Always use coasters for hot pans and cold beverage decanters",
    ],
    availableColors: [
      { name: "Statuario White Marble", hex: "#F5F5F5" },
      { name: "Nero Marquina Black", hex: "#1C1C1C" },
    ],
    availableFinishes: [
      { name: "Burma Teak Satin", hex: "#8B5A2B" },
      { name: "Walnut Dark Satin", hex: "#3D2314" },
    ],
  },
  {
    id: "tf-office-exec-04",
    name: "Presidential Solid Teak Executive Desk & Leather Swivel Chair",
    category: "office",
    roomCollection: "Executive Office",
    price: 98000,
    originalPrice: 115000,
    tag: "Trending",
    rating: 4.88,
    reviewCount: 64,
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    ],
    woodType: "Solid Teak & Brass Hardware",
    finish: "Dark Antique Walnut",
    dimensions: {
      length: "72 inches (182 cm)",
      width: "34 inches (86 cm)",
      height: "30 inches (76 cm)",
    },
    warranty: "10-Year Structural Warranty",
    inStock: true,
    description: "Designed for corporate leaders and luxury home offices. Features integrated cable management channels, soft-close Blum drawer slides, locked file drawer, and matching executive leather swivel chair.",
    features: [
      "Concealed power outlet & USB-C fast charging grommet",
      "Full grain Italian leather trim on desk writing pad",
      "High-back ergonomic office chair with lumbar tilt lock",
    ],
    careInstructions: [
      "Clean leather with specialized hide balm",
      "Keep desktop dry and wipe spills immediately",
    ],
    availableColors: [
      { name: "Cognac Brown Leather", hex: "#7B3F00" },
      { name: "Classic Navy Leather", hex: "#000080" },
    ],
    availableFinishes: [
      { name: "Antique Walnut", hex: "#3D2314" },
      { name: "Natural Teak Satin", hex: "#8B5A2B" },
    ],
  },
  {
    id: "tf-living-console-05",
    name: "Artisan Teakwood Floating TV Unit & Media Console",
    category: "living",
    roomCollection: "Living Room",
    price: 64000,
    originalPrice: 78000,
    tag: "Popular",
    rating: 4.92,
    reviewCount: 112,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    woodType: "Solid CP Teak Wood & Fluted Glass Doors",
    finish: "Natural Teak & Brushed Gold Hardware",
    dimensions: {
      length: "78 inches (198 cm)",
      width: "18 inches (45 cm)",
      height: "22 inches (55 cm)",
    },
    warranty: "10-Year Warranty",
    inStock: true,
    description: "A mid-century modern statement console featuring fluted teak door panels, smoked tempered glass compartments for AV equipment, and concealed ambient LED backlight channels.",
    features: [
      "Acoustically transparent fluted wood doors for soundbars",
      "Heavy-duty wall mounting brackets included",
      "Ventilation slots for gaming consoles and amplifiers",
    ],
    careInstructions: [
      "Clean glass panels with non-abrasive glass spray",
      "Dust wood louvers with a soft feather duster",
    ],
    availableColors: [
      { name: "Warm Teak & Smoked Glass", hex: "#8B5A2B" },
      { name: "Dark Ebony & Amber Glass", hex: "#1A1A1A" },
    ],
    availableFinishes: [
      { name: "Honey Satin", hex: "#D49B4B" },
      { name: "Espresso Walnut", hex: "#2F1B14" },
    ],
  },
  {
    id: "tf-custom-wardrobe-06",
    name: "Bespoke 6-Door Solid Teak Walk-in Wardrobe System",
    category: "custom",
    roomCollection: "Master Bedroom",
    price: 245000,
    originalPrice: 285000,
    tag: "Custom Made",
    rating: 5.0,
    reviewCount: 42,
    images: [
      "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    ],
    woodType: "Solid Seasoned Teak & Tinted Glass Doors",
    finish: "Smoked Walnut & Rose Gold Accents",
    dimensions: {
      length: "120 inches (304 cm)",
      width: "24 inches (60 cm)",
      height: "96 inches (243 cm)",
    },
    warranty: "10-Year Anti-Warp & Hinge Warranty",
    inStock: true,
    description: "Fully customized walk-in wardrobe tailored to your room dimensions. Features integrated motion-sensor warm LED lighting, velvet jewelry drawers, digital safe box, and pull-out trouser racks.",
    features: [
      "Custom internal layout tailored to your wardrobe preferences",
      "Automated sensor LED strip lights inside all bays",
      "Hettich soft-close German sliding mechanism",
      "Built-in velvet organizer for watches & fine jewelry",
    ],
    careInstructions: [
      "Clean tinted glass with microfiber cloth",
      "Condition internal cedar/teak wood yearly",
    ],
    availableColors: [
      { name: "Smoked Bronze & Walnut", hex: "#3D2314" },
      { name: "Frosted Glass & Champagne Teak", hex: "#D49B4B" },
    ],
    availableFinishes: [
      { name: "Walnut Stain", hex: "#3D2314" },
      { name: "Teak Natural", hex: "#8B5A2B" },
    ],
  },
];

export const ROOM_HOTSPOTS: RoomHotspot[] = [
  {
    id: "hotspot-1",
    productId: "tf-sofa-royal-01",
    productName: "Royal Teak Sovereign Sofa",
    category: "Living Room",
    price: 145000,
    topPercent: 54,
    leftPercent: 32,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hotspot-2",
    productId: "tf-living-console-05",
    productName: "Artisan Teak Floating Console",
    category: "Living Room",
    price: 64000,
    topPercent: 38,
    leftPercent: 78,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hotspot-3",
    productId: "tf-bed-imperial-02",
    productName: "Imperial Teak King Storage Bed",
    category: "Master Bedroom",
    price: 128000,
    topPercent: 48,
    leftPercent: 45,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hotspot-4",
    productId: "tf-dining-marble-03",
    productName: "Heritage Italian Marble Dining Set",
    category: "Dining Room",
    price: 185000,
    topPercent: 58,
    leftPercent: 50,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Dr. K. Srinivas Rao",
    city: "Jubilee Hills, Hyderabad",
    rating: 5,
    date: "14 June 2026",
    comment: "Tirumala Furniture crafted a complete 5-BHK luxury teak wood package for our new villa. The quality of Burma Teak and finishing is completely unmatched. Their delivery team installed everything with extreme care.",
    productBought: "Bespoke Villa Teak Collection",
    verified: true,
    userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    roomPhoto: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rev-2",
    name: "Priya & Rajesh Varma",
    city: "Siddipet, Telangana",
    rating: 5,
    date: "02 May 2026",
    comment: "We customized our 8-seater dining table with Italian Marble and teak chairs. Visited their flagship showroom in Siddipet and the staff gave us complete transparency on wood seasoning and grain selection.",
    productBought: "Heritage Italian Marble Dining Set",
    verified: true,
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    roomPhoto: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rev-3",
    name: "Ar. Ananya Deshmukh",
    city: "Principal Interior Architect",
    rating: 5,
    date: "28 April 2026",
    comment: "As an architect, I recommend Tirumala Furniture to all my high-net-worth clients. Their joinery precision, kiln-seasoned teak wood guarantee, and 10-year warranty make them the top brand in South India.",
    productBought: "Custom Office & Living Projects",
    verified: true,
    userImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    roomPhoto: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rev-4",
    name: "Vikram & Madhuri Reddy",
    city: "Gachibowli, Hyderabad",
    rating: 5,
    date: "19 March 2026",
    comment: "The Imperial Teak Storage Bed exceeded our expectations! Heavy-duty hydraulic lift mechanism works effortlessly and the headboard leather craftsmanship is pure luxury.",
    productBought: "Imperial Teak King Storage Bed",
    verified: true,
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    roomPhoto: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rev-5",
    name: "Rohan & Sneha Kulkarni",
    city: "Secunderabad",
    rating: 5,
    date: "10 February 2026",
    comment: "Ordered a complete bespoke walk-in teak wardrobe system. The automated sensor LED lighting and German soft-close drawers make it look straight out of an international design magazine.",
    productBought: "Bespoke 6-Door Walk-in Wardrobe",
    verified: true,
    userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    roomPhoto: "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=800&q=80",
  },
];

export const OFFER_BUNDLES: OfferBundle[] = [
  {
    id: "offer-living-grand",
    title: "Grand Royal Living Room Set",
    badge: "Festival Bundle Savings",
    originalPrice: 287000,
    offerPrice: 235000,
    discountPercentage: 18,
    itemsIncluded: [
      "Sovereign 3-Seater Teak Velvet Sofa",
      "2 Matching Single Recliner Armchairs",
      "Artisan Teak Floating TV Unit",
      "Sculpted Teak & Glass Coffee Table",
    ],
    validTill: "31 August 2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "Complete living room makeover package crafted in 100% Solid Burma Teak with complimentary interior design consultation.",
  },
  {
    id: "offer-master-suite",
    title: "Imperial Master Bedroom Collection",
    badge: "Limited Showroom Offer",
    originalPrice: 310000,
    offerPrice: 259000,
    discountPercentage: 16,
    itemsIncluded: [
      "Imperial Teak King Storage Bed",
      "2 Solid Teak Nightstands with Wireless Charger",
      "Matching Leather Ottoman Bench",
      "Orthopedic 10-Inch Pocket Spring Mattress",
    ],
    validTill: "31 August 2026",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "The ultimate bedroom luxury bundle designed for serene sleep and grand aesthetics.",
  },
];

export const FAQS = [
  {
    question: "Is all Tirumala furniture made from 100% solid teak wood?",
    answer: "Yes. Every core structural element in our premium collections is crafted from 100% genuine Grade-A Burma Teak or CP Teak wood. We do not use cheap particle board or low-grade MDF for load-bearing framework. Each piece is kiln-dried to less than 10% moisture content for maximum anti-warp stability.",
    category: "Craftsmanship & Wood",
  },
  {
    question: "Do you offer custom dimensions and personalized fabric selections?",
    answer: "Absolutely. We specialize in bespoke furniture customization. You can choose your exact length, width, wood polish finish (Honey Natural, Walnut, Dark Mahogany, Espresso), and select from over 300+ imported velvet, linen, and Italian top-grain leather options.",
    category: "Customization",
  },
  {
    question: "What is covered under the 10-Year Warranty?",
    answer: "Our 10-Year Structural Warranty covers termite protection, wood splitting, frame joints, and structural sagging. Hardware components like German drawer slides and hydraulic bed lifts carry a 5-year replacement guarantee.",
    category: "Warranty & Service",
  },
  {
    question: "How does the Showroom Visit and Quotation process work?",
    answer: "You can click 'Request Official Quote' or 'Book Showroom Visit' on our website. Our interior concierge will contact you on WhatsApp or phone within 15 minutes with a detailed PDF quote, 3D visualization options, and schedule your VIP showroom tour.",
    category: "Quotation & Showroom",
  },
  {
    question: "Do you provide white-glove delivery and installation?",
    answer: "Yes, we provide complimentary white-glove delivery, unboxing, assembly, and positioning by our trained master carpenters across Siddipet, Hyderabad, Telangana, Andhra Pradesh, and major South Indian cities.",
    category: "Delivery & Installation",
  },
];
