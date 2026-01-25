export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.getInTouch': 'Get in Touch',
    'nav.skipToContent': 'Skip to main content',

    // Hero Section
    'hero.greeting': "Hi, I'm",
    'hero.tagline':
      'I craft elegant digital experiences with modern technologies, turning complex challenges into simple, beautiful solutions.',
    'hero.viewWork': 'View Work',
    'hero.getInTouch': 'Get in Touch',
    'hero.scrollToAbout': 'Scroll to About section',

    // About Section
    'about.title': 'About Me',
    'about.bio1':
      "From co-founding a digital agency to teaching web engineering at Hochschule RheinMain, my journey has always been about building meaningful software and sharing knowledge. With over 8 years of experience, I've grown from SEO enthusiast to certified software architect leading cross-functional teams.",
    'about.bio2':
      "Today, I specialize in high-performance React applications for resource-constrained devices like SmartTVs and Set-Top-Boxes, working with major media companies like RTL. I'm passionate about accessibility, AI-augmented development, and creating software that makes a real difference—like health tech for diabetes management.",
    'about.downloadCV': 'Download CV',

    // Role Cards
    'about.role.architect.title': 'Certified Software Architect',
    'about.role.architect.description':
      'iSAQB CPSA-FL certified. Designing scalable systems and leading teams of up to 8 developers.',
    'about.role.developer.title': 'Fullstack Developer',
    'about.role.developer.description':
      'Building high-performance apps for web, mobile, and SmartTV platforms with React & React Native.',
    'about.role.lecturer.title': 'University Lecturer',
    'about.role.lecturer.description':
      'Teaching React, Next.js, and Web Engineering at Hochschule RheinMain. Passionate about sharing knowledge.',

    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.description':
      'A curated selection of technologies and tools I work with to build modern applications.',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.description':
      'A selection of projects that showcase my skills and passion for building great software.',
    'projects.featured': 'Featured',
    'projects.liveDemo': 'Live Demo',
    'projects.github': 'GitHub',

    // Contact Section
    'contact.title': "Let's Connect",
    'contact.description':
      "Have a project in mind or just want to chat? I'd love to hear from you.",
    'contact.emailMe': 'Email me at',
    'contact.copyEmail': 'Copy email to clipboard',
    'contact.orFindMe': 'or find me on',

    // Footer
    'footer.allRightsReserved': 'All rights reserved.',

    // 404 Page
    '404.title': 'Page Not Found',
    '404.description': "The page you're looking for doesn't exist or has been moved.",
    '404.backHome': 'Back to Home',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.skills': 'Skills',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.getInTouch': 'Kontakt',
    'nav.skipToContent': 'Zum Hauptinhalt springen',

    // Hero Section
    'hero.greeting': 'Hi, ich bin',
    'hero.tagline':
      'Ich erschaffe elegante digitale Erlebnisse mit modernen Technologien und verwandle komplexe Herausforderungen in einfache, schöne Lösungen.',
    'hero.viewWork': 'Projekte ansehen',
    'hero.getInTouch': 'Kontakt',
    'hero.scrollToAbout': 'Zum Abschnitt Über mich scrollen',

    // About Section
    'about.title': 'Über mich',
    'about.bio1':
      'Von der Mitgründung einer Digitalagentur bis zur Lehre für Web Engineering an der Hochschule RheinMain – mein Weg dreht sich immer um das Entwickeln bedeutungsvoller Software und das Teilen von Wissen. Mit über 8 Jahren Erfahrung bin ich vom SEO-Enthusiasten zum zertifizierten Software-Architekten gewachsen, der funktionsübergreifende Teams leitet.',
    'about.bio2':
      'Heute bin ich spezialisiert auf hochperformante React-Anwendungen für ressourcenbeschränkte Geräte wie SmartTVs und Set-Top-Boxen und arbeite mit großen Medienunternehmen wie RTL. Ich begeistere mich für Barrierefreiheit, KI-gestützte Entwicklung und Software, die einen echten Unterschied macht – wie Health-Tech für Diabetes-Management.',
    'about.downloadCV': 'Lebenslauf herunterladen',

    // Role Cards
    'about.role.architect.title': 'Zertifizierter Software-Architekt',
    'about.role.architect.description':
      'iSAQB CPSA-FL zertifiziert. Entwickle skalierbare Systeme und leite Teams mit bis zu 8 Entwicklern.',
    'about.role.developer.title': 'Fullstack-Entwickler',
    'about.role.developer.description':
      'Entwickle hochperformante Apps für Web, Mobile und SmartTV-Plattformen mit React & React Native.',
    'about.role.lecturer.title': 'Dozent an der Hochschule',
    'about.role.lecturer.description':
      'Unterrichte React, Next.js und Web Engineering an der Hochschule RheinMain. Teile leidenschaftlich gern Wissen.',

    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.description':
      'Eine kuratierte Auswahl an Technologien und Tools, mit denen ich moderne Anwendungen entwickle.',

    // Projects Section
    'projects.title': 'Ausgewählte Projekte',
    'projects.description':
      'Eine Auswahl an Projekten, die meine Fähigkeiten und meine Leidenschaft für großartige Software zeigen.',
    'projects.featured': 'Featured',
    'projects.liveDemo': 'Live Demo',
    'projects.github': 'GitHub',

    // Contact Section
    'contact.title': 'Lass uns vernetzen',
    'contact.description':
      'Du hast ein Projekt im Kopf oder möchtest einfach plaudern? Ich freue mich von dir zu hören.',
    'contact.emailMe': 'Schreib mir an',
    'contact.copyEmail': 'E-Mail in Zwischenablage kopieren',
    'contact.orFindMe': 'oder finde mich auf',

    // Footer
    'footer.allRightsReserved': 'Alle Rechte vorbehalten.',

    // 404 Page
    '404.title': 'Seite nicht gefunden',
    '404.description': 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    '404.backHome': 'Zur Startseite',
  },
} as const;
