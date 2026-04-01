import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from '@i18n/ui';

export type BlogEntry = CollectionEntry<'blog'>;

export async function getBlogPosts(lang: Lang): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.lang === lang && !data.draft);

  return posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export async function getLatestBlogPosts(lang: Lang, count = 2): Promise<BlogEntry[]> {
  const posts = await getBlogPosts(lang);
  return posts.slice(0, count);
}

export function getBlogPostUrl(slug: string, lang: Lang): string {
  return lang === 'de' ? `/de/blog/${slug}` : `/blog/${slug}`;
}

export function getBlogOverviewUrl(lang: Lang): string {
  return lang === 'de' ? '/de/blog' : '/blog';
}

export function getAlternateBlogLang(lang: Lang): Lang {
  return lang === defaultLang ? 'de' : defaultLang;
}

export async function getTranslatedBlogPost(post: BlogEntry, lang: Lang): Promise<BlogEntry | undefined> {
  const posts = await getBlogPosts(lang);
  return posts.find((entry) => entry.data.translationKey === post.data.translationKey);
}

export function formatBlogDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
