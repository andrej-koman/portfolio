import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://koman.dev';

export default defineConfig({
  site,
  trailingSlash: 'always',

  i18n: {
    locales: ['en', 'sl'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', sl: 'sl' } } })],
});