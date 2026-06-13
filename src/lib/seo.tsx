import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  schema?: object;
}

const SITE = 'https://shelbymedicalpavilion.ae';

export function Seo({ title, description, path = '', schema }: SeoProps) {
  const url = `${SITE}${path}`;
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Shelby Medical Pavilion',
    description,
    url,
    telephone: '+971506982268',
    email: 'shelbydevelopmentsae@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    medicalSpecialty: [
      'Cardiology', 'Pediatrics', 'Dermatology', 'Orthopedics',
      'Gynecology', 'Family Medicine', 'Internal Medicine', 'ENT',
    ],
  };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_AE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <script type="application/ld+json">
        {JSON.stringify(schema ?? baseSchema)}
      </script>
    </Helmet>
  );
}
