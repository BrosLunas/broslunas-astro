import { A as AstroError, i as UnknownContentCollectionError, d as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, g as renderComponent, u as unescapeHTML, m as maybeRenderHead, f as renderSlot, c as createAstro, e as addAttribute } from '../astro_DgR-yEYm.mjs';
import 'kleur/colors';
import { $ as $$Container, f as formatDate, r as readingTime, a as $$PageLayout, S as SITE } from './404_mfWxoPts.mjs';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_DiqNbMGo.mjs';
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
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/end-xpansion/index.md": () => import('../index_C0fXiXY2.mjs'),"/src/content/blog/nueva seccion (juegos)/index.md": () => import('../index_K8lERbin.mjs'),"/src/content/blog/primer post/index.md": () => import('../index_dISINIe-.mjs'),"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md": () => import('../index_Cr73eHQE.mjs'),"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md": () => import('../index_DREC3YnT.mjs'),"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md": () => import('../index_DR545HjX.mjs'),"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md": () => import('../index_BMvuNRnt.mjs'),"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx": () => import('../index_BNU9ySj0.mjs'),"/src/content/legal/politica-de-privacidad.md": () => import('../politica-de-privacidad_D1OFAwMo.mjs'),"/src/content/legal/terminos-de-uso.md": () => import('../terminos-de-uso_BAL5K_I5.mjs'),"/src/content/projects/juegos-2d/01-snake/index.md": () => import('../index_iLAE53bT.mjs'),"/src/content/projects/juegos-2d/02-arkanoid/index.md": () => import('../index_CMFlGDQX.mjs'),"/src/content/projects/juegos-2d/03-tetris/index.md": () => import('../index_DzEfthhZ.mjs'),"/src/content/projects/juegos-2d/04-pacman/index.md": () => import('../index_Q0JuyNNT.mjs'),"/src/content/projects/juegos-2d/05-pingpong/index.md": () => import('../index_kN-TQxhQ.mjs'),"/src/content/projects/juegos-2d/06-flappy-dino/index.md": () => import('../index_B1FOZDXN.mjs'),"/src/content/projects/juegos-2d/07-orbita/index.md": () => import('../index_Cu7GKG81.mjs'),"/src/content/projects/juegos-2d/08-coloron/index.md": () => import('../index_CGghA9-A.mjs'),"/src/content/projects/juegos-2d/09-copycat/index.md": () => import('../index_2itUyzXK.mjs'),"/src/content/projects/juegos-2d/10-buscaminas/index.md": () => import('../index_Doeew_4G.mjs'),"/src/content/projects/juegos-2d/11-towerblocks/index.md": () => import('../index_CR9QFOxF.mjs'),"/src/content/projects/juegos-2d/12-mario/index.md": () => import('../index_B2kQg4Zs.mjs'),"/src/content/projects/juegos-2d/13-uno/index.md": () => import('../index_JfYidK_y.mjs'),"/src/content/projects/juegos-3d/01-zelda/index.md": () => import('../index_CYWWyaLi.mjs'),"/src/content/projects/minecraft/end-xpansion/index.md": () => import('../index_BBaS-kjR.mjs'),"/src/content/work/google.md": () => import('../google_7GfizJT4.mjs')});
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
lookupMap = {"legal":{"type":"content","entries":{"politica-de-privacidad":"/src/content/legal/politica-de-privacidad.md","terminos-de-uso":"/src/content/legal/terminos-de-uso.md"}},"work":{"type":"content","entries":{"google":"/src/content/work/google.md"}},"blog":{"type":"content","entries":{"nueva-seccion-juegos":"/src/content/blog/nueva seccion (juegos)/index.md","end-xpansion":"/src/content/blog/end-xpansion/index.md","tutorial/01-astro-sphere-file-structure":"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md","tutorial/02-astro-sphere-getting-started":"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md","tutorial/03-astro-sphere-add-new-post-or-projects":"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md","primer-post":"/src/content/blog/primer post/index.md","tutorial/04-astro-sphere-writing-markdown":"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md","tutorial/05-astro-sphere-writing-mdx":"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx"}},"projects":{"type":"content","entries":{"juegos-2d/02-arkanoid":"/src/content/projects/juegos-2d/02-arkanoid/index.md","juegos-2d/01-snake":"/src/content/projects/juegos-2d/01-snake/index.md","juegos-2d/03-tetris":"/src/content/projects/juegos-2d/03-tetris/index.md","juegos-2d/04-pacman":"/src/content/projects/juegos-2d/04-pacman/index.md","juegos-2d/05-pingpong":"/src/content/projects/juegos-2d/05-pingpong/index.md","juegos-2d/06-flappy-dino":"/src/content/projects/juegos-2d/06-flappy-dino/index.md","juegos-2d/07-orbita":"/src/content/projects/juegos-2d/07-orbita/index.md","juegos-2d/08-coloron":"/src/content/projects/juegos-2d/08-coloron/index.md","juegos-2d/09-copycat":"/src/content/projects/juegos-2d/09-copycat/index.md","juegos-2d/11-towerblocks":"/src/content/projects/juegos-2d/11-towerblocks/index.md","juegos-2d/10-buscaminas":"/src/content/projects/juegos-2d/10-buscaminas/index.md","juegos-2d/12-mario":"/src/content/projects/juegos-2d/12-mario/index.md","juegos-3d/01-zelda":"/src/content/projects/juegos-3d/01-zelda/index.md","minecraft/end-xpansion":"/src/content/projects/minecraft/end-xpansion/index.md","juegos-2d/13-uno":"/src/content/projects/juegos-2d/13-uno/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/end-xpansion/index.md": () => import('../index_Do4B_Bpo.mjs'),"/src/content/blog/nueva seccion (juegos)/index.md": () => import('../index_Cj8sCD8J.mjs'),"/src/content/blog/primer post/index.md": () => import('../index_DxwE-CZE.mjs'),"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md": () => import('../index_BsLqOPB3.mjs'),"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md": () => import('../index_C_DWkTq-.mjs'),"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md": () => import('../index_A5aN-KYh.mjs'),"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md": () => import('../index_C4FSfM4N.mjs'),"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx": () => import('../index_DM_SxOSr.mjs'),"/src/content/legal/politica-de-privacidad.md": () => import('../politica-de-privacidad_CuhyHJoa.mjs'),"/src/content/legal/terminos-de-uso.md": () => import('../terminos-de-uso_CcG0rb0E.mjs'),"/src/content/projects/juegos-2d/01-snake/index.md": () => import('../index_BcYECdPk.mjs'),"/src/content/projects/juegos-2d/02-arkanoid/index.md": () => import('../index_C0orKqAG.mjs'),"/src/content/projects/juegos-2d/03-tetris/index.md": () => import('../index_J94JIp0K.mjs'),"/src/content/projects/juegos-2d/04-pacman/index.md": () => import('../index_C1pL92tY.mjs'),"/src/content/projects/juegos-2d/05-pingpong/index.md": () => import('../index_Bo_2i2vr.mjs'),"/src/content/projects/juegos-2d/06-flappy-dino/index.md": () => import('../index_BhtAU1u-.mjs'),"/src/content/projects/juegos-2d/07-orbita/index.md": () => import('../index_D_wpDAoj.mjs'),"/src/content/projects/juegos-2d/08-coloron/index.md": () => import('../index_Df0xc_I4.mjs'),"/src/content/projects/juegos-2d/09-copycat/index.md": () => import('../index_CZWkNYce.mjs'),"/src/content/projects/juegos-2d/10-buscaminas/index.md": () => import('../index_DxTW8Cj5.mjs'),"/src/content/projects/juegos-2d/11-towerblocks/index.md": () => import('../index_V_XW49dT.mjs'),"/src/content/projects/juegos-2d/12-mario/index.md": () => import('../index_CP5e5Gxy.mjs'),"/src/content/projects/juegos-2d/13-uno/index.md": () => import('../index_BpoJohxu.mjs'),"/src/content/projects/juegos-3d/01-zelda/index.md": () => import('../index_DwuYRn8F.mjs'),"/src/content/projects/minecraft/end-xpansion/index.md": () => import('../index_D8rjPbd3.mjs'),"/src/content/work/google.md": () => import('../google_D2uqsP6y.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$TopLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-36 pb-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/layouts/TopLayout.astro", void 0);

const $$BottomLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 py-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/layouts/BottomLayout.astro", void 0);

const $$Astro$4 = createAstro("https://broslunas.vercel.app");
const $$ArticleTopLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ArticleTopLayout;
  const { entry } = Astro2.props;
  const { collection, data, body } = entry;
  const { title, summary, date } = data;
  const demoUrl = collection === "projects" ? data.demoUrl : null;
  const repoUrl = collection === "projects" ? data.repoUrl : null;
  const wikiUrl = collection === "projects" ? data.wikiUrl : null;
  const downloadUrl = collection === "projects" ? data.downloadUrl : null;
  return renderTemplate`${maybeRenderHead()}<div> <a${addAttribute(`/${collection}`, "href")} class="group w-fit p-1.5 gap-1.5 text-sm flex items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Volver a ${collection} </div> </a> <div class="flex flex-wrap text-sm uppercase mt-12 gap-3 opacity-75"> <div class="flex items-center gap-2"> <svg class="size-5 stroke-current"> <use href="/ui.svg#calendar"></use> </svg> ${formatDate(date)} </div> <div class="flex items-center gap-2"> <svg class="size-5 stroke-current"> <use href="/ui.svg#book-open"></use> </svg> ${readingTime(body)} </div> </div> <h1 class="text-3xl font-semibold text-black dark:text-white mt-2"> ${title} </h1> <div class="mt-1"> ${summary} </div> ${(demoUrl || downloadUrl || repoUrl || wikiUrl) && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${demoUrl && renderTemplate`<a${addAttribute(demoUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
Probar Demo
</span> </a>`} ${repoUrl && renderTemplate`<a${addAttribute(repoUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
Ver Repositorio
</span> </a>`} ${wikiUrl && renderTemplate`<a${addAttribute(wikiUrl, "href")} class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
Leer Wiki
</span> </a>`} ${downloadUrl && renderTemplate`<a${addAttribute(downloadUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
Descargar
</span> </a>`} </div>`} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/layouts/ArticleTopLayout.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<div> <article> ${renderComponent($$result, "Content", Content, {})} </article> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <a${addAttribute(`/${next.collection}/${next.slug}`, "href")} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 blend"> <div class="order-2 w-full h-full group-hover:text-black group-hover:dark:text-white blend"> <div class="flex flex-wrap gap-2"> <div class="text-sm uppercase">
Anterior
</div> </div> <div class="font-semibold mt-3 text-black dark:text-white"> ${next.data.title} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="order-1 stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-180"> <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline> </svg> </a> <a${addAttribute(`/${prev.collection}/${prev.slug}`, "href")} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <div class="w-full h-full text-right group-hover:text-black group-hover:dark:text-white blend"> <div class="text-sm uppercase">
Siguiente
</div> <div class="font-semibold mt-3 text-black dark:text-white"> ${prev.data.title} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"> <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline> </svg> </a> </div> </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/layouts/ArticleBottomLayout.astro", void 0);

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
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/blog/[...slug].astro", void 0);

const $$file$2 = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/blog/[...slug].astro";
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
Ultima modificacion: ${formatDate(date)} </p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/legal/[...slug].astro", void 0);

const $$file$1 = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/legal/[...slug].astro";
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
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TopLayout as $, ____slug_$2 as _, $$BottomLayout as a, ____slug_$1 as b, ____slug_ as c, getCollection as g };
