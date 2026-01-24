# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Architecture

This is a personal portfolio website built with **Astro 5.1** and **Tailwind CSS 4.0**, using TypeScript throughout.

### Directory Structure

- `src/pages/` - Route pages (single index.astro homepage)
- `src/components/` - Component hierarchy:
  - `common/` - Reusable primitives (Button)
  - `layout/` - Header, Footer
  - `sections/` - Full-page sections (Hero, About, Skills, Projects, Contact)
  - `seo/` - SEO components (BaseHead, JsonLd)
  - `ui/` - UI components (ProjectCard, SkillBadge, ThemeToggle, GradientBlob)
- `src/data/` - Static data files (site.ts, projects.ts, skills.ts)
- `src/types/` - TypeScript interfaces
- `src/styles/` - Global CSS with design tokens
- `src/layouts/` - Page layouts (BaseLayout)

### Path Aliases

TypeScript path aliases are configured in tsconfig.json:
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@data/*` → `src/data/*`
- `@types/*` → `src/types/*`

### Key Patterns

- **Theme System**: Dark/light mode via CSS custom properties and localStorage, toggled by ThemeToggle component
- **Design Tokens**: Defined in `src/styles/global.css` with violet/purple accent colors
- **Data-Driven Content**: Projects and skills are defined in `src/data/` and typed in `src/types/`
- **Animations**: Custom keyframes (blob-float, fade-in-up, scroll-reveal) defined in global CSS
