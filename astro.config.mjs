// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname),
  })],
});
