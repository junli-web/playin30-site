import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// English lives at the root, Chinese under /zh/. Slugs are identical in both
// languages so the sitemap can pair them as hreflang alternates automatically.
export default defineConfig({
  site: 'https://playin30.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
        sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
