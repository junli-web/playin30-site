// Hand-drawn illustrations, inlined as SVG strings so their handwritten labels
// use the page's self-hosted fonts. Each exists in an English and a Chinese version.
import type { Lang } from '../i18n/ui';

const files = import.meta.glob('../illustrations/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export function art(name: string, lang: Lang): string {
  const svg = files[`../illustrations/${name}-${lang}.svg`];
  if (!svg) throw new Error(`Missing illustration: ${name}-${lang}`);
  return svg;
}
