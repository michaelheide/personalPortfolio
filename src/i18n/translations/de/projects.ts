import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'rtl-plus-streaming',
    title: 'RTL+ Streaming-Plattform',
    description:
      'Hochperformante Streaming-App für SmartTV- und Set-Top-Box-Plattformen mit Millionen von Zuschauern in Deutschland.',
    longDescription:
      'Entwicklung der SmartTV- und Set-Top-Box-Anwendung für RTL+, Deutschlands führenden Streaming-Dienst. Fokus auf Performance-Optimierung für ressourcenbeschränkte Geräte, Implementierung effizienter Rendering-Strategien und Speicherverwaltung für flüssige Wiedergabe und Navigation.',
    image: '/images/project-1.jpg',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Zustand', 'Playwright'],
    featured: true,
  },
  {
    id: 'diddi-smart-health',
    title: 'Diddi Smart Health Plattform',
    description:
      'Plattformübergreifende Diabetes-Management-App mit Echtzeit-Ernährungstracking und Gesundheitseinblicken.',
    longDescription:
      'Entwicklung einer umfassenden Diabetes-Management-Plattform, die Nutzern hilft, ihre Ernährung zu tracken, ihren Zustand zu verwalten und Gesundheitseinblicke zu gewinnen. Die App kombiniert ein Web-Dashboard mit nativen mobilen Apps für eine nahtlose plattformübergreifende Erfahrung.',
    image: '/images/project-2.jpg',
    technologies: ['React Native', 'Expo', 'Next.js', 'Spring Boot', 'MongoDB'],
  },
  {
    id: 'white-label-platform',
    title: 'White-Label-Plattform',
    description:
      'Skalierbare Architektur für mehrere Kundenmarken mit wiederverwendbaren Komponenten und Design-System.',
    longDescription:
      'Design und Implementierung einer White-Label-Plattform-Architektur bei AOE, die schnelle Bereitstellung maßgeschneiderter Lösungen für mehrere Kundenmarken ermöglicht. Mit gemeinsamer Komponentenbibliothek, flexiblem Theming-System und effizientem Content-Management.',
    image: '/images/project-3.jpg',
    technologies: ['React', 'TypeScript', 'Next.js', 'Apollo GraphQL', 'Storybook'],
  },
  {
    id: 'erp-cloud-migration',
    title: 'ERP Cloud-Migration',
    description:
      'Modernisierung eines Legacy-ERP-Systems zu Cloud-basierter Architektur mit Web- und Mobile-Interfaces.',
    longDescription:
      'Technische Leitung der Modernisierung eines Legacy-ERP-Systems mit Migration zu einer Cloud-basierten Architektur. Entwicklung von Web- und Mobile-Interfaces für flexiblen Zugriff auf Geschäftsprozesse bei gleichzeitiger Wahrung von Datenintegrität und Sicherheit.',
    image: '/images/project-4.jpg',
    technologies: ['React', 'React Native', 'Spring Boot', 'Kotlin', 'Docker'],
  },
];
