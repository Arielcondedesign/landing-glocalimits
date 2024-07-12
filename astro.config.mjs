import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl'

const { MODE, STORYBLOK_ACCESS_TOKEN } = import.meta.env

let server = {}

if (MODE === 'development') {
  server = {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true,
      },
    },
  }
}


// https://astro.build/config
export default defineConfig({
  site: "https://master--kreatif-software.netlify.app",

  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs" }),
    storyblok({
      accessToken: STORYBLOK_ACCESS_TOKEN,
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

  ...server,
});