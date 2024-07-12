import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://astro.build/config
export default defineConfig({
  site: "https://master--kreatif-software.netlify.app",

  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    storyblok({
      accessToken: "QECZX4W5lTkJfEyhKLXxJwtt",
      bridge: {
        customParent: 'https://app.storyblok.com',
      },
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
  ],

  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});