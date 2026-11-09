// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from '@astrojs/markdown-satteri';
import { satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";
import { satteriHeadingLink } from "satteri-heading-link";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vtbot from "astro-vtbot";

export default defineConfig({
  site: 'https://nickflz.com',

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: satteri({
      features: {
        gfm: true,
        headingAttributes: true,
      },
      hastPlugins: [() =>
        satteriHeadingIdsPlugin(),
      satteriHeadingLink({
        placement: "end",
        icon: "#",
      })
      ],
    }),
  },
  integrations: [mdx(), sitemap(), icon({
    // Explicitly define your icon sources or include sets 
    // so it doesn't default to scanning a local folder that hasn't been created yet.
    include: {
      'mdi:*': ['*']
    }
  }), vtbot()],
});