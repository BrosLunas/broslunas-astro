import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Broslunas Center",
  DESCRIPTION: "Bienvenidos a Broslunas Center, Un portafolio web para desarrolladores.",
  AUTHOR: "Broslunas",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabajos",
  DESCRIPTION: "Sitios donde he trabajado.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Publicaciones sobre el desarrollo.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos donde he estado implicado.",
}

//Games Page
export const GAMES: Page = {
  TITLE: "Juegos",
  DESCRIPTION: "Juegos que he creado.",
}

//Status Page
export const STATUS: Page = {
  TITLE: "Status",
  DESCRIPTION: "Mira el estado de la pagina.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar cualquier publicacion o proyecto.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Trabajos", 
    HREF: "/works", 
  },
  { 
    TEXT: "Games", 
    HREF: "https://games-broslunas.vercel.app/game/", 
  },
  { 
    TEXT: "Status", 
    HREF: "https://hetrixtools.com/r/b0333544f0759908d2f94f81a19cfd62/", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "pablo.luna.perez.008@gmail.com",
    HREF: "mailto:pablo.luna.perez.008@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Broslunas",
    HREF: "https://github.com/broslunas"
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "@_pablito_luna_",
    HREF: "https://bit.ly/ig-broslunas",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@Broslunas",
    HREF: "https://bit.ly/twitter-broslunas",
  },
]

