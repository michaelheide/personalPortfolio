import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Next.js' },
      { name: 'Astro' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js' },
      { name: 'Spring Boot' },
      { name: 'Kotlin' },
      { name: 'MongoDB' },
      { name: 'GraphQL' },
      { name: 'REST APIs' },
    ],
  },
  {
    name: 'Architecture',
    icon: 'blocks',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'System Design' },
      { name: 'Microservices' },
      { name: 'CI/CD' },
    ],
  },
  {
    name: 'AI & LLM',
    icon: 'brain',
    skills: [
      { name: 'LLM Integration' },
      { name: 'Prompt Engineering' },
      { name: 'RAG Systems' },
      { name: 'Context Engineering' },
      { name: 'AI Agents' },
      { name: 'Vector DBs' },
    ],
  },
];
