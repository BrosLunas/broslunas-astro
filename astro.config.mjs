import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: "https://broslunas.com",
  integrations: [mdx(), sitemap(), solidJs(), 
    tailwind({ 
      applyBaseStyles: false 
    }), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  redirects: {
    '/projects/minecraft': '/projects',
    '/projects/juegos': '/projects',
    '/yt': '/youtube',
    '/sn': '/social-network',
    '/social-network': '/redes-sociales',
    '/wiki': '/wikis',
    '/wiki/[...slug]': '/wikis/[...slug]',
    '/modpacks': '/modpack',
    '/modpacks/[...slug]': '/modpack/[...slug]',
    '/proyectos/[...slug]': '/projects/[...slug]',
    '/post/[...slug]': '/blog/[...slug]',
    '/publicacion/[...slug]': '/blog/[...slug]',
    '/redes-sociales': '/rss',
  }
})