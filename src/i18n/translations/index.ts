import type { Lang } from '@i18n/ui';
import type { SiteConfig, Project } from '@/types';

import { siteConfig as enSiteConfig } from './en/site';
import { siteConfig as deSiteConfig } from './de/site';
import { projects as enProjects } from './en/projects';
import { projects as deProjects } from './de/projects';

const siteConfigs: Record<Lang, SiteConfig> = {
  en: enSiteConfig,
  de: deSiteConfig,
};

const projectsData: Record<Lang, Project[]> = {
  en: enProjects,
  de: deProjects,
};

export function getSiteConfig(lang: Lang): SiteConfig {
  return siteConfigs[lang];
}

export function getProjects(lang: Lang): Project[] {
  return projectsData[lang];
}
