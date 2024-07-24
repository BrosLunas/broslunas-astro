import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://broslunas.vercel.app",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  redirects: {
    '/projects/minecraft': '/projects',
    '/projects/juegos': '/projects',
    '/yt': '/youtube?source=shortlink',
    '/sn': '/social-network?source=shortlink',
    '/social-network': '/redes-sociales?source=shortlink',
    '/wiki': '/wikis',
  }
})