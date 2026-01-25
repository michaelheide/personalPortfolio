import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove leading slash for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // For default language (en), don't add prefix
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }

  // For other languages, add the language prefix
  return `/${lang}/${cleanPath}`;
}

export function getAlternateLanguage(currentLang: Lang): Lang {
  return currentLang === 'en' ? 'de' : 'en';
}

export function getHomeUrl(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
