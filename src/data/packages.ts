import type { HealthPackage } from '@/types';

export const healthPackages: HealthPackage[] = [
  {
    id: 'executive',
    name: 'Executive Health Check',
    price: 'AED 1,499',
    description: 'Comprehensive screening for busy professionals.',
    includes: ['Full blood panel', 'Cardiac assessment', 'ECG & stress test', 'Physician consultation', 'Detailed health report'],
    popular: true,
  },
  {
    id: 'women',
    name: "Women's Health Package",
    price: 'AED 1,199',
    description: "Tailored screening for women's wellness.",
    includes: ['Gynecological exam', 'Pap smear', 'Breast screening', 'Bone density', 'Hormone profile'],
  },
  {
    id: 'men',
    name: "Men's Health Package",
    price: 'AED 1,099',
    description: "Targeted men's health screening.",
    includes: ['Cardiac risk profile', 'Prostate screening', 'Diabetes panel', 'Liver & kidney function', 'Physician review'],
  },
  {
    id: 'family',
    name: 'Family Health Package',
    price: 'AED 2,499',
    description: 'Complete check-ups for the whole family.',
    includes: ['Up to 4 members', 'Pediatric assessment', 'Adult screening', 'Vaccination review', 'Family wellness plan'],
  },
  {
    id: 'corporate',
    name: 'Corporate Wellness Package',
    price: 'Custom',
    description: 'Scalable employee health programs.',
    includes: ['On-site screenings', 'Group health reports', 'Wellness workshops', 'Vaccination drives', 'Dedicated account manager'],
  },
];
