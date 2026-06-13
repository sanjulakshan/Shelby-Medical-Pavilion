export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  experience: number;
  qualifications: string[];
  certifications: string[];
  languages: string[];
  bio: string;
  consultationHours: string;
  image: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  shortDesc: string;
  overview: string;
  services: string[];
  treatments: string[];
  faqs: { q: string; a: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  treatment: string;
}

export interface InsurancePartner {
  id: string;
  name: string;
  coverage: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  popular?: boolean;
}
