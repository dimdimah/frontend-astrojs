import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
    proxy: {
      '/api': 'http://localhost:3221'
    }
  },
  integrations: [tailwind()]
});