import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_DgR-yEYm.mjs';
import 'kleur/colors';
/* empty css                           */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$Astro$5 = createAstro("https://broslunas.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/open-graph.jpg" } = Astro2.props;
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="/img/favicon.png"><meta name="generator"', '><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- RSS Feed --><link rel="alternate" type="application/rss+xml"', "", '><!-- Global Scripts --><script src="/js/theme.js"><\/script><script src="/js/scroll.js"><\/script><script src="/js/animate.js"><\/script><!-- <ViewTransitions  /> -->'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "title"), addAttribute(`${Astro2.site}rss.xml`, "href"));
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/BaseHead.astro", void 0);

const SITE = {
  TITLE: "Broslunas Center",
  DESCRIPTION: "Bienvenidos a Broslunas Center, Un portafolio web para desarrolladores.",
  AUTHOR: "Broslunas"
};
const WORK = {
  TITLE: "Trabajos",
  DESCRIPTION: "Sitios donde he trabajado."
};
const BLOG = {
  TITLE: "Blog",
  DESCRIPTION: "Publicaciones sobre el desarrollo."
};
const PROJECTS = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos donde he estado implicado."
};
const SEARCH = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar cualquier publicacion o proyecto."
};
const LINKS = [
  {
    TEXT: "Blog",
    HREF: "/blog"
  },
  {
    TEXT: "Proyectos",
    HREF: "/projects"
  },
  {
    TEXT: "Juegos",
    HREF: "/juegos"
  },
  {
    TEXT: "Contacto",
    HREF: "/contacto"
  },
  {
    TEXT: "Mario",
    HREF: "https://mario-broslunas.vercel.app"
  },
  {
    TEXT: "Status",
    HREF: "https://hetrixtools.com/r/b0333544f0759908d2f94f81a19cfd62/"
  }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}
function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

const $$Astro$4 = createAstro("https://broslunas.vercel.app");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Container;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "w-full h-full mx-auto px-5",
    size === "sm" && "max-w-screen-sm",
    size === "md" && "max-w-screen-md",
    size === "lg" && "max-w-screen-lg",
    size === "xl" && "max-w-screen-xl",
    size === "2xl" && "max-w-screen-2xl"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/Container.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$3 = createAstro("https://broslunas.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<header id="header" class="fixed top-0 w-full h-16 z-50 " data-astro-cid-3ef6ksr2> ', ' </header>  <script>\n  function toggleDrawer() {\n    const drawer = document.getElementById("drawer")\n    const drawerButton = document.getElementById("header-drawer-button")\n    drawer?.classList.toggle("open")\n    drawerButton?.classList.toggle("open")\n  }\n\n  function initializeDrawerButton() {\n    const drawerButton = document.getElementById("header-drawer-button")\n    drawerButton?.addEventListener("click", toggleDrawer)\n  }\n\n  document.addEventListener("astro:after-swap", initializeDrawerButton)\n  initializeDrawerButton()\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="relative h-full w-full" data-astro-cid-3ef6ksr2> <div class="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold" data-astro-cid-3ef6ksr2> <a href="/" class="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> ${SITE.TITLE} </div> </a> </div> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2> <nav class="hidden md:flex items-center justify-center text-sm gap-1" data-astro-cid-3ef6ksr2> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("h-8 rounded-full px-3 text-current", "flex items-center justify-center", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"), "class")} data-astro-cid-3ef6ksr2> ${LINK.TEXT} </a>`)} </nav> </div> <div class="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1" data-astro-cid-3ef6ksr2> <a href="/search"${addAttribute(`Buscar en ${SITE.TITLE}`, "aria-label")}${addAttribute(cn("hidden md:flex", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "/search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-3ef6ksr2> <svg class="size-full" data-astro-cid-3ef6ksr2> <use href="/ui.svg#search" data-astro-cid-3ef6ksr2></use> </svg> </a> <button id="header-theme-button"${addAttribute(`Cambiar a tema claro`, "aria-label")}${addAttribute(cn("hidden md:flex", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out"), "class")} data-astro-cid-3ef6ksr2> <svg class="size-full block dark:hidden" data-astro-cid-3ef6ksr2> <use href="/ui.svg#sun" data-astro-cid-3ef6ksr2></use> </svg> <svg class="size-full hidden dark:block" data-astro-cid-3ef6ksr2> <use href="/ui.svg#moon" data-astro-cid-3ef6ksr2></use> </svg> </button> <button id="header-drawer-button"${addAttribute(`Cambiar a tema oscuro`, "aria-label")}${addAttribute(cn("flex md:hidden", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out"), "class")} data-astro-cid-3ef6ksr2> <svg id="drawer-open" class="size-full" data-astro-cid-3ef6ksr2> <use href="/ui.svg#menu" data-astro-cid-3ef6ksr2></use> </svg> <svg id="drawer-close" class="size-full" data-astro-cid-3ef6ksr2> <use href="/ui.svg#x" data-astro-cid-3ef6ksr2></use> </svg> </button> </div> </div> ` }));
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/Header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<footer class="relative bg-white dark:bg-black"> <div class="animate"> <section class="py-5"> ', ' </section> <section class="py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25"> ', ' </section> </div> </footer> <script>\n  function goBackToTop(event) {\n    event.preventDefault()\n    window.scrollTo({\n        top: 0,\n        behavior: "smooth"\n    })\n  }\n\n  function inintializeBackToTop() {\n    const backToTop = document.getElementById("back-to-top")\n    backToTop?.addEventListener("click", goBackToTop)\n  }\n\n  document.addEventListener("astro:after-swap", inintializeBackToTop)\n  inintializeBackToTop()\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-center sm:justify-end"> <button id="back-to-top" aria-label="Back to top of page" class="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Volver al inicio
</div> </button> </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="h-full grid grid-cols-1 sm:grid-cols-2 gap-3"> <div class="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start"> <div class="legal"> <a href="/legal/terminos-de-uso" class="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
Terminos
</a> |
<a href="/legal/politica-de-privacidad" class="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
Privacidad
</a> </div> <div class="text-sm mt-2">
&copy; Broslunas 2024 | Todos los derechos reservados
</div> </div> </div> ` }));
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://broslunas.vercel.app");
const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s> <nav class="flex flex-col items-center space-y-2" data-astro-cid-hxtyo74s> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("flex items-center justify-center px-3 py-1 rounded-full", "text-current hover:text-black dark:hover:text-white", "hover:bg-black/5 dark:hover:bg-white/20", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> ${LINK.TEXT} </a>`)} </nav> <div class="flex gap-1 mt-5" data-astro-cid-hxtyo74s> <a href="/search"${addAttribute(`Busca publicaciones y projectos de ${SITE.TITLE}`, "aria-label")}${addAttribute(cn("size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#search" data-astro-cid-hxtyo74s></use> </svg> </a> <button id="drawer-theme-button"${addAttribute(`Toggle light and dark theme`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="block dark:hidden size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#sun" data-astro-cid-hxtyo74s></use> </svg> <svg class="hidden dark:block size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#moon" data-astro-cid-hxtyo74s></use> </svg> </button> </div> </div> `;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/Drawer.astro", void 0);

const $$Astro$1 = createAstro("https://broslunas.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://broslunas.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE.TITLE}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Drawer", $$Drawer, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/layouts/PageLayout.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$TwinklingStars = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<svg id="twinkle-star" class="template" width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full animate-twinkle"> <circle cx="74" cy="74" r="11" fill="white"></circle> <rect y="141.421" width="200" height="10" transform="rotate(-45 0 141.421)" fill="url(#paint0_linear_4_2)"></rect> <rect x="7.07107" width="200" height="10" transform="rotate(45 7.07107 0)" fill="url(#paint1_linear_4_2)"></rect> <defs> <linearGradient id="paint0_linear_4_2" x1="0" y1="146.421" x2="200" y2="146.421" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.445" stop-color="white"></stop> <stop offset="0.58721" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> <linearGradient id="paint1_linear_4_2" x1="7.07107" y1="5" x2="207.071" y2="5" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.42" stop-color="white"></stop> <stop offset="0.555" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> </defs> </svg> <script>\n  // Generate a twinkle star and append it to the galaxy, remove it after animation.\n  function generateTwinkleStar() {\n    const twinkleStarTemplate = document.getElementById("twinkle-star")\n    if (!twinkleStarTemplate) { return; }\n    // Clone the twinkle star template and set its attributes.\n    const twinkleStar = twinkleStarTemplate.cloneNode(true);\n    twinkleStar.style.position = "absolute";\n    twinkleStar.style.left = Math.floor(Math.random() * window.innerWidth) + "px";\n    twinkleStar.style.top = Math.floor(Math.random() * (window.innerHeight/3)) + "px";\n    twinkleStar.style.width = window.innerWidth < 768 ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";\n    twinkleStar.style.height = twinkleStar.style.width;\n    twinkleStar.classList.add("twinkle");\n    document.getElementById("galaxy").appendChild(twinkleStar);\n\n    // Remove the twinkle star after the animation is completed.\n    setTimeout(() => {\n      twinkleStar.remove();\n    }, 2500);\n  }\n\n  setInterval(generateTwinkleStar, 5000);\n<\/script>'])), maybeRenderHead());
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/TwinklingStars.astro", void 0);

const $$MeteorShower = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="meteors"> <!-- rotations defined in base.css & tailwind.config.mjs --> <div class="shower ur"></div> <div class="shower dr"></div> <div class="shower dl"></div> <div class="shower ul"></div> </div> `;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/components/MeteorShower.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Error 404", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="absolute inset-0 block dark:hidden"> <div id="particles1" class="fixed inset-0"></div> <div id="particles2" class="fixed inset-0"></div> <div id="particles3" class="fixed inset-0"></div> </div>  <div class="absolute inset-0 bg-black hidden dark:block"> <div id="stars1" class="fixed inset-0"></div> <div id="stars2" class="fixed inset-0"></div> <div id="stars3" class="fixed inset-0"></div> </div>  <div id="galaxy" class="fixed inset-0"> <div class="hidden dark:block"> ', " ", ' </div> </div> <script src="/js/bg.js"><\/script>  <section class="relative h-screen w-full"> <div id="planetcont" class="animate absolute inset-0 top-1/4 overflow-hidden"> <div id="crescent" class="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"> <div id="planet" class="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"> <div id="blur" class="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"></div> </div> </div> </div> <div class="animate absolute h-full w-full flex items-center justify-center"> <div class="relative w-full h-full flex items-center justify-center"> <div class="p-5 text-center"> <p class="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">\nError 404\n</p> <p class="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">\nNos acabamos de chocar con un asteriode\n</p> <p class="animated text-sm md:text-base lg:text-lg opacity-75">\nHaz click a continuacion para arreglar la nave.\n</p> <div id="ctaButtons" class="animated flex flex-wrap gap-4 justify-center mt-5"> <a href="/blog" class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">\nLeer Blog\n</a> <a href="/" class="py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend">\nVolver al inicio\n</a> <a href="/projects" class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">\nVer Proyectos\n</a> </div> </div> </div> </div> </section> <div class="relative bg-white dark:bg-black"> <div class="mx-auto max-w-screen-sm p-5 space-y-24 pb-16"></div></div>'])), maybeRenderHead(), renderComponent($$result2, "TwinklingStars", $$TwinklingStars, {}), renderComponent($$result2, "MeteorShower", $$MeteorShower, {})) })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, BLOG as B, PROJECTS as P, SITE as S, WORK as W, _404 as _, $$PageLayout as a, $$MeteorShower as b, $$TwinklingStars as c, cn as d, SEARCH as e, formatDate as f, readingTime as r };
