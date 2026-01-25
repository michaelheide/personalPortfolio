import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'rtl-plus-streaming',
    title: 'RTL+ Streaming Platform',
    description:
      'High-performance streaming app for SmartTV and Set-Top-Box platforms reaching millions of viewers across Germany.',
    longDescription:
      "Developed the SmartTV and Set-Top-Box application for RTL+, Germany's leading streaming service. Focused on performance optimization for resource-constrained devices, implementing efficient rendering strategies and memory management to ensure smooth playback and navigation.",
    image: '/images/project-1.jpg',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Zustand', 'Playwright'],
    featured: true,
  },
  {
    id: 'diddi-smart-health',
    title: 'Diddi Smart Health Platform',
    description:
      'Cross-platform diabetes management app with real-time nutritional tracking and health insights.',
    longDescription:
      'Building a comprehensive diabetes management platform that helps users track nutrition, manage their condition, and gain health insights. The app combines a web dashboard with native mobile apps for seamless cross-platform experience.',
    image: '/images/project-2.jpg',
    technologies: ['React Native', 'Expo', 'Next.js', 'Spring Boot', 'MongoDB'],
  },
  {
    id: 'white-label-platform',
    title: 'White-label Platform',
    description:
      'Scalable architecture serving multiple client brands with reusable components and design system.',
    longDescription:
      'Designed and implemented a white-label platform architecture at AOE that enables rapid deployment of customized solutions for multiple client brands. Features a shared component library, flexible theming system, and efficient content management.',
    image: '/images/project-3.jpg',
    technologies: ['React', 'TypeScript', 'Next.js', 'Apollo GraphQL', 'Storybook'],
  },
  {
    id: 'erp-cloud-migration',
    title: 'ERP Cloud Migration',
    description:
      'Modernization of legacy ERP system to cloud-based architecture with web and mobile interfaces.',
    longDescription:
      'Led the technical modernization of a legacy ERP system, migrating to a cloud-based architecture. Developed both web and mobile interfaces to provide users with flexible access to business operations while maintaining data integrity and security.',
    image: '/images/project-4.jpg',
    technologies: ['React', 'React Native', 'Spring Boot', 'Kotlin', 'Docker'],
  },
];
