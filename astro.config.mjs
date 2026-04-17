// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://juten10x.github.io',
  base: '/astro-tutorial-empty-temp',
  integrations: [preact()],
});