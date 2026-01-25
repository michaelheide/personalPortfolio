import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Michael Heide',
  title: 'Michael Heide | Fullstack-Entwickler & Software-Architekt',
  description:
    'Fullstack-Entwickler und zertifizierter Software-Architekt aus dem Raum Frankfurt / Rhein-Main-Gebiet mit über 8 Jahren Erfahrung in der Entwicklung hochperformanter Anwendungen und der Leitung funktionsübergreifender Teams.',
  url: 'https://michaelheide.dev',
  email: 'mail@heidemichael.de',
  location: 'Kelsterbach, Deutschland',
  timezone: 'MEZ (UTC+1)',
  roles: ['Fullstack-Entwickler', 'Software-Architekt', 'AI Context Engineer'],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/michaelheide',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/michael-heide-9765b1136',
      icon: 'linkedin',
    },
    {
      name: 'X',
      url: 'https://x.com/HeideMicha75450',
      icon: 'x',
    },
  ],
  twitterHandle: '@HeideMicha75450',
  ogImage: '/og-image.png',
  address: {
    addressLocality: 'Kelsterbach',
    addressRegion: 'Hessen',
    postalCode: '65451',
    addressCountry: 'DE',
  },
  geo: {
    latitude: '50.0611',
    longitude: '8.5300',
  },
  serviceArea: 'Frankfurt / Rhein-Main-Gebiet',
};
