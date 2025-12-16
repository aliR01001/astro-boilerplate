// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/config/global';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  vite: {
    plugins: [tailwindcss()]
  }
});