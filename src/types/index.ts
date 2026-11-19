export type PageId = 'home' | 'about' | 'services' | 'work' | 'contact';

export type ProjectCategory = 'all' | 'Branding' | 'Website Design' | 'Digital Campaigns' | 'Creative Advertising';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Branding' | 'Website Design' | 'Digital Campaigns' | 'Creative Advertising';
  tags: string[];
  year: string;
  image: string;
  secondaryImage?: string;
  description: string;
  fullStory?: string;
  deliverables: string[];
  externalUrl?: string;
  isRealClient: boolean; // clearly distinguish real clients vs conceptual demonstrations
  status?: string; // e.g. "Live Project", "Coming Soon", "Demonstration Concept"
  featured?: boolean;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  capabilities: string[];
  deliverables: string[];
  image: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  client: string;
  isConcept?: boolean;
}
