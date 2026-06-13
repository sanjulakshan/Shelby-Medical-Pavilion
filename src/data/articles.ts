import type { Article } from '@/types';

const img = (s: string) => `https://images.unsplash.com/${s}?auto=format&fit=crop&w=800&q=80`;

export const articles: Article[] = [
  { id: 'preventive-tips', title: '7 Preventive Healthcare Tips for a Healthier You', excerpt: 'Simple, evidence-based habits to protect your long-term health and catch problems early.', category: 'Preventive Care', readTime: '5 min', date: '2024-11-12', image: img('photo-1505751172876-fa1923c5c528') },
  { id: 'heart-health', title: 'Heart Health Awareness: Know Your Numbers', excerpt: 'Understanding blood pressure, cholesterol, and the lifestyle changes that protect your heart.', category: 'Cardiology', readTime: '6 min', date: '2024-10-28', image: img('photo-1559757175-0eb30cd8c063') },
  { id: 'managing-stress', title: 'Managing Stress Effectively in a Fast-Paced City', excerpt: 'Practical strategies for professionals to reduce stress and protect mental wellbeing.', category: 'Wellness', readTime: '4 min', date: '2024-10-15', image: img('photo-1506126613408-eca07ce68773') },
  { id: 'childrens-health', title: "Children's Health Essentials Every Parent Should Know", excerpt: 'From vaccinations to nutrition — building strong foundations for your child.', category: 'Pediatrics', readTime: '5 min', date: '2024-09-30', image: img('photo-1576765608535-5f04d1e3f289') },
  { id: 'skin-care-uae', title: 'Skin Care in the UAE Climate: A Dermatologist Guide', excerpt: 'How heat, humidity, and sun exposure affect your skin — and how to protect it.', category: 'Dermatology', readTime: '5 min', date: '2024-09-18', image: img('photo-1556228578-8c89e6adf883') },
  { id: 'diabetes-management', title: 'Living Well with Diabetes: A Complete Guide', excerpt: 'Diet, monitoring, and treatment strategies to manage diabetes confidently.', category: 'Internal Medicine', readTime: '7 min', date: '2024-09-05', image: img('photo-1607619056574-7b8d3ee536b2') },
];
