import { defineConfig, envField } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  server: {
    proxy: {
      '/api': ''
    }
  },
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        API_PORT: envField.number({
          context: 'server',
          access: 'secret',
          default: 7000
        }),
        PUBLIC_API_URL: envField.string({
          context: 'server',
          access: 'public',
          default: import.meta.env.BASE_URL
        }),
      }
    }
  }
});