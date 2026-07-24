import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://casacantu.com',
  vite: {
    optimizeDeps: {
      exclude: ['gsap']
    }
  }
});