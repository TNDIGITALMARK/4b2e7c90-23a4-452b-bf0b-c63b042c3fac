export interface CowBreed {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  origin: string;
  primaryPurpose: 'dairy' | 'beef' | 'dual-purpose';
  characteristics: {
    size: 'small' | 'medium' | 'large';
    temperament: string;
    colors: string[];
    averageWeight: {
      male: number;
      female: number;
    };
    milkProduction?: number; // liters per year
    lifespan: number; // years
  };
  physicalTraits: {
    height: {
      male: number;
      female: number;
    };
    distinguishingFeatures: string[];
    coatPattern: string;
  };
  careRequirements: {
    climate: string[];
    diet: string[];
    spaceNeeds: string;
    specialNeeds: string[];
  };
  economicValue: {
    popularity: number; // 1-10 scale
    marketDemand: 'low' | 'medium' | 'high';
    costToRaise: 'low' | 'medium' | 'high';
  };
  images: {
    primary: string;
    gallery: string[];
    thumbnails: string[];
  };
  funFacts: string[];
  history: string;
  breedingInfo: {
    gestationPeriod: number; // days
    averageLitterSize: number;
    breedingAge: number; // months
  };
  healthInfo: {
    commonIssues: string[];
    vaccinations: string[];
    geneticTraits: string[];
  };
  tags: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CowFact {
  id: string;
  title: string;
  content: string;
  category: 'nutrition' | 'behavior' | 'anatomy' | 'environment' | 'history' | 'culture';
  icon: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  ageGroup: 'children' | 'teens' | 'adults' | 'all';
  readTime: number; // minutes
  sources: string[];
  images?: string[];
  tags: string[];
  featured: boolean;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'dairy' | 'meat' | 'leather' | 'other';
  subcategory: string;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    fat: number;
    calcium?: number;
    vitamins: string[];
  };
  productionProcess: string;
  sustainability: {
    environmentalImpact: 'low' | 'medium' | 'high';
    animalWelfare: string;
    carbonFootprint: number; // kg CO2 equivalent
  };
  culturalSignificance: string;
  images: string[];
  relatedBreeds: string[]; // breed IDs
  facts: string[];
  createdAt: Date;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'breeds' | 'farming' | 'products' | 'culture' | 'education';
  breed?: string; // breed ID if related to specific breed
  photographer: string;
  location: string;
  tags: string[];
  featured: boolean;
  dimensions: {
    width: number;
    height: number;
  };
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'education' | 'farming' | 'culture' | 'news' | 'research';
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  featuredImage: string;
  images: string[];
  tags: string[];
  readTime: number; // minutes
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CulturalReference {
  id: string;
  title: string;
  description: string;
  category: 'mythology' | 'religion' | 'folklore' | 'modern' | 'historical';
  culture: string; // e.g., "Hindu", "Celtic", "American"
  region: string;
  significance: string;
  images: string[];
  relatedBreeds?: string[]; // breed IDs
  sources: string[];
  tags: string[];
  createdAt: Date;
}

export interface SearchFilters {
  breeds?: {
    purpose?: CowBreed['primaryPurpose'][];
    size?: CowBreed['characteristics']['size'][];
    origin?: string[];
    popularity?: number[];
  };
  facts?: {
    category?: CowFact['category'][];
    difficulty?: CowFact['difficulty'][];
    ageGroup?: CowFact['ageGroup'][];
  };
  products?: {
    category?: Product['category'][];
    sustainability?: Product['sustainability']['environmentalImpact'][];
  };
  gallery?: {
    category?: GalleryImage['category'][];
    breed?: string[];
  };
}

export interface ComparisonData {
  breeds: CowBreed[];
  criteria: string[];
}

export interface Newsletter {
  id: string;
  email: string;
  preferences: {
    breeds: boolean;
    facts: boolean;
    products: boolean;
    culture: boolean;
    news: boolean;
  };
  subscribedAt: Date;
  active: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: 'general' | 'education' | 'research' | 'collaboration' | 'media';
  urgent: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
}