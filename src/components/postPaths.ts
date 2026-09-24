import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

/** Static paths for one language. hasAlternate tells the layout whether the other language has the same slug. */
export async function postPaths(lang: Lang) {
  const all = await getCollection('blog', (e) => !e.data.draft);
  const slugOf = (id: string) => id.split('/')[1].replace(/\.mdx?$/, '');
  const otherSlugs = new Set(all.filter((e) => e.data.lang !== lang).map((e) => slugOf(e.id)));
  return all
    .filter((e) => e.data.lang === lang)
    .map((entry) => ({ params: { slug: entry.slug.split('/')[1] }, props: { entry, hasAlternate: otherSlugs.has(slugOf(entry.id)) } }));
}
