export type PageType = 'home' | 'about' | 'services' | 'family' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  iconName: string;
  featured?: boolean;
}

export interface CreativeDivision {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website?: string;
  image: string;
  category: string;
  highlights: string[];
  featured?: boolean;
}

export interface ArtItem {
  id: string;
  title: string;
  artist?: string;
  category: string;
  year: string;
  medium: string;
  image: string;
  description: string;
  dimensions?: string;
  location?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization?: string;
  inquiryType: 'Commission' | 'Exhibition' | 'Collaboration' | 'Artist Development' | 'Consultancy' | 'General';
  serviceType?: string;
  budget?: string;
  message: string;
}
