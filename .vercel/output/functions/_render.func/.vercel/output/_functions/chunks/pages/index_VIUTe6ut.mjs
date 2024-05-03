import { c as createAstro, d as createComponent$1, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$TopLayout, a as $$BottomLayout } from './__D6nvOwW6.mjs';
import { f as formatDate, c as cn, B as BLOG, a as $$PageLayout, P as PROJECTS, b as SEARCH, W as WORK, d as SOCIALS, e as $$MeteorShower, g as $$TwinklingStars, S as SITE } from './404_BTJsiKTR.mjs';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, createEffect, For } from 'solid-js';
import Fuse from 'fuse.js';

var _tmpl$$3 = ["<a", ' href="', '" class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"><div class="w-full group-hover:text-black group-hover:dark:text-white blend"><div class="flex flex-wrap items-center gap-2"><!--$-->', '<!--/--><div class="text-sm uppercase">', '</div></div><div class="font-semibold mt-3 text-black dark:text-white">', '</div><div class="text-sm line-clamp-2">', '</div><ul class="flex flex-wrap mt-2 gap-1">', '</ul></div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"><line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline></svg></a>'], _tmpl$2$3 = ["<div", ' class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">', "</div>"], _tmpl$3$3 = ["<li", ' class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">', "</li>"];
function ArrowCard({
  entry,
  pill
}) {
  return ssr(_tmpl$$3, ssrHydrationKey(), `/${escape(entry.collection, true)}/${escape(entry.slug, true)}`, pill && ssr(_tmpl$2$3, ssrHydrationKey(), entry.collection === "blog" ? "post" : "project"), escape(formatDate(entry.data.date)), escape(entry.data.title), escape(entry.data.summary), escape(entry.data.tags.map((tag) => (
    // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
    ssr(_tmpl$3$3, ssrHydrationKey(), escape(tag))
  ))));
}

var _tmpl$$2 = ["<div", ' class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5">', '</ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">MOSTRANDO <!--$-->', "<!--/--> de <!--$-->", '<!--/--> PUBLICAICONES</div><ul class="flex flex-col gap-3">', "</ul></div></div></div>"], _tmpl$2$2 = ["<li", "><button", "><svg", '><use href="', '"', '></use><use href="', '"', "></use></svg><!--$-->", "<!--/--></button></li>"], _tmpl$3$2 = ["<li", ">", "</li>"];
function Blog({
  data,
  tags
}) {
  const [filter, setFilter] = createSignal(/* @__PURE__ */ new Set());
  const [posts, setPosts] = createSignal([]);
  createEffect(() => {
    setPosts(data.filter((entry) => Array.from(filter()).every((value) => entry.data.tags.some((tag) => tag.toLowerCase() === String(value).toLowerCase()))));
  });
  return ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent(For, {
    each: tags,
    children: (tag) => ssr(_tmpl$2$2, ssrHydrationKey(), ssrAttribute("class", escape(cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-black/5 dark:bg-white/10", "hover:bg-black/10 hover:dark:bg-white/15", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white"), true), false), ssrAttribute("class", escape(cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white"), true), false), `/ui.svg#square`, ssrAttribute("class", escape(cn(!filter().has(tag) ? "block" : "hidden"), true), false), `/ui.svg#square-check`, ssrAttribute("class", escape(cn(filter().has(tag) ? "block" : "hidden"), true), false), escape(tag))
  })), escape(posts().length), escape(data.length), escape(posts().map((post) => ssr(_tmpl$3$2, ssrHydrationKey(), escape(createComponent(ArrowCard, {
    entry: post
  }))))));
}

const $$Astro$4 = createAstro("https://broslunas.vercel.app");
const $$Index$4 = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${BLOG.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Blog", Blog, { "client:load": true, "tags": tags, "data": posts, "client:component-hydration": "load", "client:component-path": "@components/Blog", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/index.astro", void 0);

const $$file$4 = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/index.astro";
const $$url$4 = "/blog";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

var _tmpl$$1 = ["<div", ' class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5">', '</ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">MOSTRANDO <!--$-->', "<!--/--> de <!--$-->", '<!--/--> PROYECTOS</div><ul class="flex flex-col gap-3">', "</ul></div></div></div>"], _tmpl$2$1 = ["<li", "><button", "><svg", '><use href="', '"', '></use><use href="', '"', "></use></svg><!--$-->", "<!--/--></button></li>"], _tmpl$3$1 = ["<li", ">", "</li>"];
function Projects({
  data,
  tags
}) {
  const [filter, setFilter] = createSignal(/* @__PURE__ */ new Set());
  const [projects, setProjects] = createSignal([]);
  createEffect(() => {
    setProjects(data.filter((entry) => Array.from(filter()).every((value) => entry.data.tags.some((tag) => tag.toLowerCase() === String(value).toLowerCase()))));
  });
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(For, {
    each: tags,
    children: (tag) => ssr(_tmpl$2$1, ssrHydrationKey(), ssrAttribute("class", escape(cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-black/5 dark:bg-white/10", "hover:bg-black/10 hover:dark:bg-white/15", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white"), true), false), ssrAttribute("class", escape(cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white"), true), false), `/ui.svg#square`, ssrAttribute("class", escape(cn(!filter().has(tag) ? "block" : "hidden"), true), false), `/ui.svg#square-check`, ssrAttribute("class", escape(cn(filter().has(tag) ? "block" : "hidden"), true), false), escape(tag))
  })), escape(projects().length), escape(data.length), escape(projects().map((project) => ssr(_tmpl$3$1, ssrHydrationKey(), escape(createComponent(ArrowCard, {
    entry: project
  }))))));
}

const $$Astro$3 = createAstro("https://broslunas.vercel.app");
const $$Index$3 = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const tags = [...new Set(projects.flatMap((project) => project.data.tags))].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${PROJECTS.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Projects", Projects, { "client:load": true, "tags": tags, "data": projects, "client:component-hydration": "load", "client:component-path": "@components/Projects", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/projects/index.astro", void 0);

const $$file$3 = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/projects/index.astro";
const $$url$3 = "/projects";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

var _tmpl$ = ["<div", ' class="flex flex-col"><div class="relative"><input name="search" type="text"', ' autocomplete="off" spellcheck="false" placeholder="¿Que estas buscando?" class="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"><svg class="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current"><use href="', '"></use></svg></div><!--$-->', "<!--/--></div>"], _tmpl$2 = ["<div", ' class="mt-12"><div class="text-sm uppercase mb-2">Found <!--$-->', "<!--/--> results for <!--$-->", '<!--/--></div><ul class="flex flex-col gap-3">', "</ul></div>"], _tmpl$3 = ["<li", ">", "</li>"];
function Search({
  data
}) {
  const [query, setQuery] = createSignal("");
  const [results, setResults] = createSignal([]);
  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4
  });
  createEffect(() => {
    if (query().length < 2) {
      setResults([]);
    } else {
      setResults(fuse.search(query()).map((result) => result.item));
    }
  });
  return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("value", escape(query(), true), false), `/ui.svg#search`, query().length >= 2 && results().length >= 1 && ssr(_tmpl$2, ssrHydrationKey(), escape(results().length), `'${escape(query())}'`, escape(results().map((result) => ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(ArrowCard, {
    entry: result,
    pill: true
  })))))));
}

const $$Astro$2 = createAstro("https://broslunas.vercel.app");
const $$Index$2 = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  const projects = (await getCollection("projects")).filter((post) => !post.data.draft);
  const data = [...posts, ...projects];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": SEARCH.TITLE, "description": SEARCH.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${SEARCH.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Search", Search, { "client:load": true, "data": data, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/search/index.astro", void 0);

const $$file$2 = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/search/index.astro";
const $$url$2 = "/search";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://broslunas.vercel.app");
const $$Index$1 = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const collection = await getCollection("work");
  collection.sort((a, b) => new Date(b.data.dateStart).getTime() - new Date(a.data.dateStart).getTime());
  const work = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  function formatWorkDate(input) {
    if (typeof input === "string")
      return input;
    const month = input.toLocaleDateString("en-US", {
      month: "short"
    });
    const year = new Date(input).getFullYear();
    return `${month} ${year}`;
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": WORK.TITLE, "description": WORK.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${WORK.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <ul> ${work.map((entry) => renderTemplate`<li class="animate border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none"> <div class="text-sm uppercase mb-4"> ${formatWorkDate(entry.data.dateStart)} - ${formatWorkDate(entry.data.dateEnd)} </div> <div class="text-black dark:text-white font-semibold"> ${entry.data.company} </div> <div class="text-sm font-semibold"> ${entry.data.role} </div> <article class="prose dark:prose-invert"> ${renderComponent($$result3, "entry.Content", entry.Content, {})} </article> </li>`)} </ul> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/works/index.astro", void 0);

const $$file$1 = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/works/index.astro";
const $$url$1 = "/works";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://broslunas.vercel.app");
const $$Index = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Inicio", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="absolute inset-0 block dark:hidden"> <div id="particles1" class="fixed inset-0"></div> <div id="particles2" class="fixed inset-0"></div> <div id="particles3" class="fixed inset-0"></div> </div>  <div class="absolute inset-0 bg-black hidden dark:block"> <div id="stars1" class="fixed inset-0"></div> <div id="stars2" class="fixed inset-0"></div> <div id="stars3" class="fixed inset-0"></div> </div>  <div id="galaxy" class="fixed inset-0"> <div class="hidden dark:block"> ', " ", ' </div> </div> <script src="/js/bg.js"><\/script>  <section class="relative h-screen w-full"> <div id="planetcont" class="animate absolute inset-0 top-1/4 overflow-hidden"> <div id="crescent" class="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"> <div id="planet" class="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"> <div id="blur" class="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"></div> </div> </div> </div> <div class="animate absolute h-full w-full flex items-center justify-center"> <div class="relative w-full h-full flex items-center justify-center"> <div class="p-5 text-center"> <p class="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">\nHola, Soy Broslunas\n</p> <p class="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">\nDesarrollador Web\n</p> <p class="animated text-sm md:text-base lg:text-lg opacity-75">\nActualmente desarrollando pagina web con Astro.\n</p> <div id="ctaButtons" class="animated flex flex-wrap gap-4 justify-center mt-5"> <a href="/blog" class="py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend">\nLeer Blog\n</a> <a href="/projects" class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">\nVer Proyectos\n</a> </div> </div> </div> </div> </section> <div class="relative bg-white dark:bg-black"> <div class="mx-auto max-w-screen-sm p-5 space-y-24 pb-16"> <!-- About Section --> <section class="animate"> <article>\nLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate ab animi totam ex quo labore earum laudantium tempora minus, impedit itaque voluptatum doloribus, inventore eveniet? Corrupti, suscipit? Perferendis a inventore exercitationem adipisci iure obcaecati blanditiis repellat eveniet aut expedita quos, eos quaerat ab saepe nesciunt ea. Aliquid, dolore a!\n</article> </section> <!-- Blog Preview Section --> <section class="animate"> <div class="space-y-4"> <div class="flex justify-between"> <p class="font-semibold text-black dark:text-white">\nPublicaciones recientes\n</p> <a href="/blog" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">\nVer mas\n</span> </a> </div> <ul class="space-y-4"> ', ' </ul> </div> </section> <!-- Project Preview Section --> <section class="animate"> <div class="space-y-4"> <div class="flex justify-between"> <p class="font-semibold text-black dark:text-white">\nProyectos recientes\n</p> <a href="/projects" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">\nVer mas\n</span> </a> </div> <ul class="space-y-4"> ', ' </ul> </div> </section> <!-- Contact Section --> <section class="animate"> <div> <p class="font-semibold text-black dark:text-white">\nContacto\n</p> <p>\nContacta conmigo a traves de email o redes sociales.\n</p> <div class="grid grid-cols-4 gap-y-2 mt-4 auto-cols-min"> ', " </div> </div></section> </div> </div> "])), maybeRenderHead(), renderComponent($$result2, "TwinklingStars", $$TwinklingStars, {}), renderComponent($$result2, "MeteorShower", $$MeteorShower, {}), posts.map((post) => renderTemplate`<li> ${renderComponent($$result2, "ArrowCard", ArrowCard, { "entry": post })} </li>`), projects.map((project) => renderTemplate`<li> ${renderComponent($$result2, "ArrowCard", ArrowCard, { "entry": project })} </li>`), SOCIALS.map((social) => renderTemplate`<div class="col-span-1 flex items-center gap-1"> <span class="whitespace-nowrap truncate"> ${social.NAME} </span> </div>
              <div class="col-span-3 truncate"> <a${addAttribute(social.HREF, "href")} target="_blank" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend"> ${social.TEXT} </span> </a> </div>`)) })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/index.astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
