import type { Site, Page, Links } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Broslunas",
  DESCRIPTION: "Bienvenidos a Broslunas Center. Un portfolio web para desarrolladores. Aquí podrás encontrar infinidad de proyectos y mucho mas para empezar con tu desarrollo web.",
  AUTHOR: "Broslunas",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabajos",
  DESCRIPTION: "Estás buscando mi repertorio de trabajos a lo largo de mi carrera. Aquí los encontrarás",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Blog personal donde podrás encontrar todas las publicaciones relacionadas con broslunas.com.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos que he realizado y podrás encontrar junto al repositorio de Github y una Demo.",
}

// Contacto Page 
export const CONTACTO: Page = {
  TITLE: "Contacto",
  DESCRIPTION: "¿Quieres contactarme y no sabes cómo? Haz click aquí y rellena el siguiente formulario.",
}

// Newsletter Page 
export const NEWSLETTER: Page = {
  TITLE: "Newsletter",
  DESCRIPTION: "¿Quieres estar al tanto de todas las novedades del sitio web por correo electrónico? Suscríbete a nuestra Newsletter.",
}

// Contacto Page 
export const ENVIADO: Page = {
  TITLE: "Formulario Enviado",
  DESCRIPTION: "Muchas gracias por enviar el formulario.",
}

// Contacto Page 
export const MODPACK: Page = {
  TITLE: "Modpack",
  DESCRIPTION: "Modpack Oficial de Broslunas para la version 1.20.1.",
}

// Broslunas Page 
export const BROSLUNAS: Page = {
  TITLE: "Sobre Mi",
  DESCRIPTION: "Obtén un poco mas de información sobre Broslunas.",
}

// Juegos Page 
export const JUEGOS: Page = {
  TITLE: "Juegos",
  DESCRIPTION: "¿Estás buscando juegos clásicos o mas únicos? Estás en el lugar correcto.",
}

// InfoJuegos Page 
export const INFOJUEGOS: Page = {
  TITLE: "Info Juegos",
  DESCRIPTION: "¿Estás buscando información sobre juegos? Estás en el lugar correcto.",
}

// Wikis Page 
export const WIKIS: Page = {
  TITLE: "Wikis",
  DESCRIPTION: "¿Estás perdido y no sabes como usar los proyectos o los juegos? Es tan fácil como verlos en la wiki.",
}

// YT Page 
export const YOUTUBE: Page = {
  TITLE: "YouTube",
  DESCRIPTION: "Mira todos los videos recién subidos a mi canal de YouTube.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar cualquier publicación o proyecto.",
}

// Error 404 Page
export const ERROR404: Page = {
  TITLE: "Error 404",
  DESCRIPTION: "La página que estas intentando buscar, no esta disponible en este momento.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Proyectos", 
    HREF: "/projects",
    SUBLINKS: [
      { TEXT: "FileDrop", HREF: "/projects/filedrop" },
      { TEXT: "Code", HREF: "/projects/code" },
      { TEXT: "End Xpansion", HREF: "/projects/minecraft/end-xpansion" },
      { TEXT: "Tier List", HREF: "/projects/tierlist" },
      { TEXT: "Shortlink", HREF: "/projects/shortlink" },
      { TEXT: "Cloud", HREF: "/projects/broslunas-cloud" },
      { TEXT: "Brosflix", HREF: "/projects/brosflix/renacimiento" },
    ]
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
    SUBLINKS: [
      { TEXT: "Aprende JS", HREF: "/blog/aprendejs" },
      { TEXT: "Wikis 2.0", HREF: "/blog/wikis/v-2" },
      { TEXT: "Cloud Updates", HREF: "/blog/cloud/updates" },
      { TEXT: "Android & Desktop", HREF: "/blog/broslunas" },
      { TEXT: "Primer Post", HREF: "/blog/primer-post" },
    ]
  },
  { 
    TEXT: "Wikis",
    HREF: "/wikis",
  },
  { 
    TEXT: "Modpacks", 
    HREF: "/modpack", 
    SUBLINKS: [
      { TEXT: "Broslunas Modpack", HREF: "/modpack/broslunas-modpack" },
    ]
  },
  {
    TEXT: "Games",
    HREF: "https://games.broslunas.com/",
    SUBLINKS: [
      { TEXT: "Snake", HREF: "https://games.broslunas.com/01-snake" },
      { TEXT: "Arkanoid", HREF: "https://games.broslunas.com/02-arkanoid-game" },
      { TEXT: "Tetris", HREF: "https://games.broslunas.com/03-tetris" },
      { TEXT: "Pacman", HREF: "https://games.broslunas.com/04-pacman" },
      { TEXT: "Ping Pong", HREF: "https://games.broslunas.com/05-pingpong" },
      { TEXT: "Orbita", HREF: "https://games.broslunas.com/07-orbita" },
      { TEXT: "Copycat", HREF: "https://games.broslunas.com/09-copycat" },
      { TEXT: "Buscaminas", HREF: "https://games.broslunas.com/10-buscaminas" },
      { TEXT: "Tower Blocks", HREF: "https://games.broslunas.com/11-tower-blocks" },
      { TEXT: "Simon", HREF: "https://games.broslunas.com/13-simon" },
      { TEXT: "UNO", HREF: "https://uno.broslunas.com/" },
      { TEXT: "Zelda", HREF: "https://zelda.broslunas.com/" },
    ]
  },
  
  { 
    TEXT: "Code", 
    HREF: "https://code.broslunas.com/", 
  },
  { 
    TEXT: "FileDrop", 
    HREF: "https://filedrop.broslunas.com/", 
  },
  { 
    TEXT: "Cursos", 
    HREF: "https://cursos.broslunas.com/", 
    SUBLINKS: [
      { TEXT: "Aprende JS", HREF: "https://aprendejs.broslunas.com" },
      { TEXT: "Astro (Próximamente)", HREF: "https://cursos.broslunas.com/curso-no-disp" },
      { TEXT: "Node JS (Próximamente)", HREF: "https://cursos.broslunas.com/curso-no-disp" },
      { TEXT: "React (Próximamente)", HREF: "https://cursos.broslunas.com/curso-no-disp" },
    ]
  },
  { 
    TEXT: "AiQr", 
    HREF: "https://aiqr.broslunas.com/", 
  },
  { 
    TEXT: "Uptime", 
    HREF: "https://uptime.broslunas.com", 
  },
]
