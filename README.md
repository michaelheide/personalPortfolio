# Personal Portfolio

A modern, responsive portfolio website built with Astro 5.1 and Tailwind CSS 4.0.

![Astro](https://img.shields.io/badge/Astro-5.1-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)

## Features

- **Dark/Light Theme** - System preference detection with manual toggle
- **Responsive Design** - Mobile-first approach, works on all devices
- **Animated Gradient Blobs** - Smooth floating background animations
- **Scroll Reveal Animations** - Content animates in as you scroll
- **SEO Optimized** - Open Graph meta tags and JSON-LD structured data
- **Accessibility** - Skip link, keyboard navigation, reduced motion support
- **Copy-to-Clipboard** - One-click email copying in contact section
- **View Transitions** - Smooth page transitions via Astro

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.1 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Utility-first CSS |
| [TypeScript](https://www.typescriptlang.org) | 5.7 | Type safety |

## Project Structure

```
src/
├── assets/           # Static assets (images)
├── components/
│   ├── common/       # Reusable primitives (Button)
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Skills, Projects, Contact
│   ├── seo/          # BaseHead, JsonLd
│   └── ui/           # ProjectCard, SkillBadge, ThemeToggle, etc.
├── data/             # Static data files
│   ├── site.ts       # Site configuration
│   ├── projects.ts   # Project entries
│   └── skills.ts     # Skill categories
├── layouts/          # Page layouts (BaseLayout)
├── pages/            # Route pages (index, 404)
├── styles/           # Global CSS with design tokens
└── types/            # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 22 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/michaelheide/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Customization

### Personal Information

Edit `src/data/site.ts` to update your details:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Name',
  title: 'Your Name | Your Role',
  description: 'Your professional description...',
  url: 'https://yoursite.com',
  email: 'your@email.com',
  location: 'Your City, Country',
  timezone: 'Your Timezone',
  roles: ['Role 1', 'Role 2'],
  socials: [
    { name: 'GitHub', url: 'https://github.com/you', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/you', icon: 'linkedin' },
  ],
};
```

### Projects

Add or modify projects in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'project-slug',
    title: 'Project Title',
    description: 'Short description for cards',
    longDescription: 'Detailed description...',
    image: '/images/project.jpg',
    technologies: ['React', 'TypeScript', 'Node.js'],
    featured: true,        // Optional: highlight on homepage
    liveUrl: 'https://..', // Optional: live demo link
    githubUrl: 'https://..', // Optional: source code link
  },
];
```

### Skills

Update skill categories in `src/data/skills.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    name: 'Category Name',
    icon: 'icon-name',
    skills: [
      { name: 'Skill 1' },
      { name: 'Skill 2' },
    ],
  },
];
```

### Design Tokens

Customize colors, shadows, and fonts in `src/styles/global.css`:

```css
@theme {
  /* Background colors */
  --color-bg-primary: #0f0d1a;
  --color-bg-soft: #1a1625;
  --color-bg-card: #241f33;

  /* Text colors */
  --color-text-heading: #f5f3ff;
  --color-text-body: #c4bfdb;
  --color-text-muted: #8b85a3;

  /* Accent colors (violet/purple) */
  --color-accent-light: #c4b5fd;
  --color-accent-medium: #a78bfa;
  --color-accent-dark: #8b5cf6;
}
```

Light theme overrides are defined in `:root.light` selector.

## Component Architecture

### Layout Components
- **BaseLayout** - Main page wrapper with head, header, content, footer
- **Header** - Navigation with logo, nav links, theme toggle
- **Footer** - Social links and copyright

### Section Components
- **Hero** - Landing section with name, roles, CTA buttons
- **About** - Professional summary and profile
- **Skills** - Categorized skill badges
- **Projects** - Featured project cards
- **Contact** - Contact form and email

### UI Components
- **Button** - Primary/secondary button variants
- **ProjectCard** - Project display with image and tech tags
- **SkillBadge** - Individual skill pill
- **ThemeToggle** - Dark/light mode switcher
- **GradientBlob** - Animated background decoration
- **SectionHeader** - Consistent section headings
- **SocialLink** - Social media icon links

### SEO Components
- **BaseHead** - Meta tags, Open Graph, Twitter cards
- **JsonLd** - Structured data for search engines

## Design System

### Color Palette

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--color-bg-primary` | `#0f0d1a` | `#ffffff` |
| `--color-bg-soft` | `#1a1625` | `#faf8ff` |
| `--color-bg-card` | `#241f33` | `#f5f3ff` |
| `--color-text-heading` | `#f5f3ff` | `#1a1a2e` |
| `--color-text-body` | `#c4bfdb` | `#4a4a68` |
| `--color-accent-medium` | `#a78bfa` | `#a78bfa` |

### Typography

- **Font Family**: Inter (variable weight 100-900)
- **Body Line Height**: 1.6

### CSS Utilities

| Class | Description |
|-------|-------------|
| `.gradient-text` | Violet gradient text effect |
| `.glass` | Glassmorphism blur effect |
| `.card-soft` | Soft card with hover lift |
| `.btn-primary` | Gradient primary button |
| `.btn-secondary` | Outlined secondary button |
| `.container` | Centered max-width container |

### Animations

| Class | Description |
|-------|-------------|
| `.animate-blob` | Floating blob movement |
| `.animate-fade-in-up` | Fade in from below |
| `.scroll-reveal` | Reveal on scroll (JS-powered) |
| `.stagger-1` to `.stagger-5` | Staggered animation delays |

## Deployment

Build the static site:

```bash
npm run build
```

The output will be in the `dist/` directory. Deploy to any static hosting:

- **[Vercel](https://vercel.com)** - Zero-config Astro support
- **[Netlify](https://netlify.com)** - Drag and drop or Git integration
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Fast global CDN

## Path Aliases

TypeScript path aliases are configured for cleaner imports:

```typescript
import { siteConfig } from '@data/site';
import Button from '@components/common/Button.astro';
import type { Project } from '@types';
```

| Alias | Path |
|-------|------|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@data/*` | `src/data/*` |
| `@types/*` | `src/types/*` |

## License

MIT License - feel free to use this template for your own portfolio.
