import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://casacantu.com',
  vite: {
    optimizeDeps: {
      exclude: ['gsap']
    }
  }
});