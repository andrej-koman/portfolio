import { defineConfig } from 'astro/config';

export default defineConfig({
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'sl'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
