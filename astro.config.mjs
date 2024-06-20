import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  server: {
    proxy: {
      '/api': 'http://localhost:3221'
    }
  }
});