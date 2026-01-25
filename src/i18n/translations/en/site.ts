import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Michael Heide',
  title: 'Michael Heide | Fullstack Developer & Software Architect',
  description:
    'Fullstack Developer and Certified Software Architect based in the Frankfurt / Rhein Main Area with 8+ years of experience crafting high-performance applications and leading cross-functional teams.',
  url: 'https://michaelheide.dev',
  email: 'mail@heidemichael.de',
  location: 'Kelsterbach, Germany',
  timezone: 'CET (UTC+1)',
  roles: ['Fullstack Developer', 'Software Architect', 'AI Context Engineer'],
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
  serviceArea: 'Frankfurt / Rhein Main Area',
};
