import { A as AstroError, i as UnknownContentCollectionError, d as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, g as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, f as renderSlot, e as addAttribute } from '../astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import { $ as $$Container, f as formatDate, r as readingTime, a as $$PageLayout, S as SITE } from './404_BTJsiKTR.mjs';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_Cr62ogvG.mjs';
import 'clsx';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://broslunas.vercel.app", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/nueva seccion (juegos)/index.md": () => import('../index_BqhPj78V.mjs'),"/src/content/blog/primer post/index.md": () => import('../index_7RC4KBXH.mjs'),"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md": () => import('../index_CUmqWm1C.mjs'),"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md": () => import('../index_Dqwk13xh.mjs'),"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md": () => import('../index_DyNWKdKP.mjs'),"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md": () => import('../index_B1aAGwbu.mjs'),"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx": () => import('../index_uxqC1Pit.mjs'),"/src/content/legal/privacy.md": () => import('../privacy_DaZ4DrbL.mjs'),"/src/content/legal/terms.md": () => import('../terms_CDlSP_wn.mjs'),"/src/content/projects/juegos/01-snake/index.md": () => import('../index_BoVCApk1.mjs'),"/src/content/projects/juegos/02-arkanoid/index.md": () => import('../index_BuySfC1c.mjs'),"/src/content/projects/juegos/03-tetris/index.md": () => import('../index_BJ2yZvwE.mjs'),"/src/content/projects/juegos/04-pacman/index.md": () => import('../index_8V07g-Oq.mjs'),"/src/content/projects/juegos/05-pingpong/index.md": () => import('../index_BiVDNtgV.mjs'),"/src/content/projects/juegos/06-flappy-dino/index.md": () => import('../index_USauY5db.mjs'),"/src/content/projects/juegos/07-orbita/index.md": () => import('../index_CKxrau3_.mjs'),"/src/content/projects/web/broslunas-games/index.md": () => import('../index_DhglhbNZ.mjs'),"/src/content/work/apple.md": () => import('../apple_CBtKfYrW.mjs'),"/src/content/work/facebook.md": () => import('../facebook_Dl7_7KGl.mjs'),"/src/content/work/google.md": () => import('../google_ClaYmZYO.mjs'),"/src/content/work/mcdonalds.md": () => import('../mcdonalds_Cnq5Rq4i.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"legal":{"type":"content","entries":{"privacy":"/src/content/legal/privacy.md","terms":"/src/content/legal/terms.md"}},"work":{"type":"content","entries":{"apple":"/src/content/work/apple.md","google":"/src/content/work/google.md","facebook":"/src/content/work/facebook.md","mcdonalds":"/src/content/work/mcdonalds.md"}},"blog":{"type":"content","entries":{"nueva-seccion-juegos":"/src/content/blog/nueva seccion (juegos)/index.md","tutorial/01-astro-sphere-file-structure":"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md","primer-post":"/src/content/blog/primer post/index.md","tutorial/03-astro-sphere-add-new-post-or-projects":"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md","tutorial/02-astro-sphere-getting-started":"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md","tutorial/04-astro-sphere-writing-markdown":"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md","tutorial/05-astro-sphere-writing-mdx":"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx"}},"projects":{"type":"content","entries":{"juegos/01-snake":"/src/content/projects/juegos/01-snake/index.md","juegos/02-arkanoid":"/src/content/projects/juegos/02-arkanoid/index.md","juegos/04-pacman":"/src/content/projects/juegos/04-pacman/index.md","juegos/03-tetris":"/src/content/projects/juegos/03-tetris/index.md","juegos/05-pingpong":"/src/content/projects/juegos/05-pingpong/index.md","juegos/06-flappy-dino":"/src/content/projects/juegos/06-flappy-dino/index.md","juegos/07-orbita":"/src/content/projects/juegos/07-orbita/index.md","web/broslunas-games":"/src/content/projects/web/broslunas-games/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/nueva seccion (juegos)/index.md": () => import('../index_DfnPY9Zq.mjs'),"/src/content/blog/primer post/index.md": () => import('../index_povYk92u.mjs'),"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md": () => import('../index_DBgCYg_c.mjs'),"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md": () => import('../index_BZ4Noki4.mjs'),"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md": () => import('../index_DqAg8nmL.mjs'),"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md": () => import('../index_ByRDnxEV.mjs'),"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx": () => import('../index_DWKa7EEj.mjs'),"/src/content/legal/privacy.md": () => import('../privacy_CPy2YwZE.mjs'),"/src/content/legal/terms.md": () => import('../terms_CeK7ZTXl.mjs'),"/src/content/projects/juegos/01-snake/index.md": () => import('../index_GBxLVob6.mjs'),"/src/content/projects/juegos/02-arkanoid/index.md": () => import('../index_J4LjnMZA.mjs'),"/src/content/projects/juegos/03-tetris/index.md": () => import('../index_DLo_kQLJ.mjs'),"/src/content/projects/juegos/04-pacman/index.md": () => import('../index_C4caejoO.mjs'),"/src/content/projects/juegos/05-pingpong/index.md": () => import('../index_72H-aVoT.mjs'),"/src/content/projects/juegos/06-flappy-dino/index.md": () => import('../index_DRGLOj4-.mjs'),"/src/content/projects/juegos/07-orbita/index.md": () => import('../index_Bp5OPFwI.mjs'),"/src/content/projects/web/broslunas-games/index.md": () => import('../index_6DvFsR-g.mjs'),"/src/content/work/apple.md": () => import('../apple_QQhtF2CU.mjs'),"/src/content/work/facebook.md": () => import('../facebook_BtXnvuDd.mjs'),"/src/content/work/google.md": () => import('../google_BoNnE8Xc.mjs'),"/src/content/work/mcdonalds.md": () => import('../mcdonalds_CcYq6NZJ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$6 = createAstro("https://broslunas.vercel.app");
const $$TopLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TopLayout;
  return renderTemplate`${maybeRenderHead()}<div class="pt-36 pb-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/TopLayout.astro", void 0);

const $$Astro$5 = createAstro("https://broslunas.vercel.app");
const $$BottomLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BottomLayout;
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 py-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/BottomLayout.astro", void 0);

const $$Astro$4 = createAstro("https://broslunas.vercel.app");
const $$ArticleTopLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ArticleTopLayout;
  const { entry } = Astro2.props;
  const { collection, data, body } = entry;
  const { title, summary, date } = data;
  const demoUrl = collection === "projects" ? data.demoUrl : null;
  const repoUrl = collection === "projects" ? data.repoUrl : null;
  return renderTemplate`${maybeRenderHead()}<div> <a${addAttribute(`/${collection}`, "href")} class="group w-fit p-1.5 gap-1.5 text-sm flex items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Volver a ${collection} </div> </a> <div class="flex flex-wrap text-sm uppercase mt-12 gap-3 opacity-75"> <div class="flex items-center gap-2"> <svg class="size-5 stroke-current"> <use href="/ui.svg#calendar"></use> </svg> ${formatDate(date)} </div> <div class="flex items-center gap-2"> <svg class="size-5 stroke-current"> <use href="/ui.svg#book-open"></use> </svg> ${readingTime(body)} </div> </div> <h1 class="text-3xl font-semibold text-black dark:text-white mt-2"> ${title} </h1> <div class="mt-1"> ${summary} </div> ${(demoUrl || repoUrl) && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${demoUrl && renderTemplate`<a${addAttribute(demoUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <svg class="size-4"> <use href="/ui.svg#globe" class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"></use> </svg> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
Probar Demo
</span> </a>`} ${repoUrl && renderTemplate`<a${addAttribute(repoUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <svg class="size-4"> <use href="/ui.svg#link" class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"></use> </svg> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
Ver Repositorio
</span> </a>`} </div>`} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/ArticleTopLayout.astro", void 0);

const $$Astro$3 = createAstro("https://broslunas.vercel.app");
const $$ArticleBottomLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArticleBottomLayout;
  const { entry } = Astro2.props;
  const { collection } = entry;
  const { Content } = await entry.render();
  const items = (await getCollection(collection)).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const index = items.findIndex((x) => x.slug === entry.slug);
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];
  return renderTemplate`${maybeRenderHead()}<div> <article> ${renderComponent($$result, "Content", Content, {})} </article> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <a${addAttribute(`/${prev.collection}/${prev.slug}`, "href")} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 blend"> <div class="order-2 w-full h-full group-hover:text-black group-hover:dark:text-white blend"> <div class="flex flex-wrap gap-2"> <div class="text-sm uppercase">
Prev
</div> </div> <div class="font-semibold mt-3 text-black dark:text-white"> ${prev.data.title} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="order-1 stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-180"> <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline> </svg> </a> <a${addAttribute(`/${next.collection}/${next.slug}`, "href")} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <div class="w-full h-full text-right group-hover:text-black group-hover:dark:text-white blend"> <div class="text-sm uppercase">
Next
</div> <div class="font-semibold mt-3 text-black dark:text-white"> ${next.data.title} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"> <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline> </svg> </a> </div> </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/ArticleBottomLayout.astro", void 0);

const $$Astro$2 = createAstro("https://broslunas.vercel.app");
async function getStaticPaths$2() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const post = Astro2.props;
  const { title, summary } = post.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": summary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "ArticleTopLayout", $$ArticleTopLayout, { "entry": post })} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "ArticleBottomLayout", $$ArticleBottomLayout, { "entry": post })} </div> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/[...slug].astro", void 0);

const $$file$2 = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/[...slug].astro";
const $$url$2 = "/blog/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://broslunas.vercel.app");
async function getStaticPaths$1() {
  const docs = await getCollection("legal");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const doc = Astro2.props;
  const { title, date } = doc.data;
  const { Content } = await doc.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": `${title} for ${SITE.TITLE}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> <div class="page-heading"> ${title} </div> <p class="font-normal opacity-75">
Last updated: ${formatDate(date)} </p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/legal/[...slug].astro", void 0);

const $$file$1 = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/legal/[...slug].astro";
const $$url$1 = "/legal/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://broslunas.vercel.app");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { title, summary } = project.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": summary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "ArticleTopLayout", $$ArticleTopLayout, { "entry": project })} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "ArticleBottomLayout", $$ArticleBottomLayout, { "entry": project })} </div> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TopLayout as $, ____slug_$2 as _, $$BottomLayout as a, ____slug_$1 as b, ____slug_ as c, getCollection as g };
