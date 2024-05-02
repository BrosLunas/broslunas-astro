import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_Bj5QVzUT.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { b as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, d as renderTemplate, e as renderComponent, u as unescapeHTML } from './astro/server_olVhGsB1.mjs';
import 'kleur/colors';

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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md": () => import('./index_CUmqWm1C.mjs'),"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md": () => import('./index_Dqwk13xh.mjs'),"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md": () => import('./index_DyNWKdKP.mjs'),"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md": () => import('./index_B1aAGwbu.mjs'),"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx": () => import('./index_uxqC1Pit.mjs'),"/src/content/legal/privacy.md": () => import('./privacy_DaZ4DrbL.mjs'),"/src/content/legal/terms.md": () => import('./terms_CDlSP_wn.mjs'),"/src/content/projects/02-arkanoid/index.md": () => import('./index_g8F5KWaX.mjs'),"/src/content/projects/juegos/01-snake/index.md": () => import('./index_BVUv83kI.mjs'),"/src/content/projects/project-3/index.md": () => import('./index_PdExWrOu.mjs'),"/src/content/projects/project-4/index.md": () => import('./index_B-rVIif4.mjs'),"/src/content/work/apple.md": () => import('./apple_CBtKfYrW.mjs'),"/src/content/work/facebook.md": () => import('./facebook_Dl7_7KGl.mjs'),"/src/content/work/google.md": () => import('./google_ClaYmZYO.mjs'),"/src/content/work/mcdonalds.md": () => import('./mcdonalds_Cnq5Rq4i.mjs')});
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
lookupMap = {"work":{"type":"content","entries":{"apple":"/src/content/work/apple.md","facebook":"/src/content/work/facebook.md","mcdonalds":"/src/content/work/mcdonalds.md","google":"/src/content/work/google.md"}},"legal":{"type":"content","entries":{"privacy":"/src/content/legal/privacy.md","terms":"/src/content/legal/terms.md"}},"projects":{"type":"content","entries":{"project-4":"/src/content/projects/project-4/index.md","02-arkanoid":"/src/content/projects/02-arkanoid/index.md","project-3":"/src/content/projects/project-3/index.md","juegos/01-snake":"/src/content/projects/juegos/01-snake/index.md"}},"blog":{"type":"content","entries":{"tutorial/01-astro-sphere-file-structure":"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md","tutorial/03-astro-sphere-add-new-post-or-projects":"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md","tutorial/05-astro-sphere-writing-mdx":"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx","tutorial/02-astro-sphere-getting-started":"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md","tutorial/04-astro-sphere-writing-markdown":"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/tutorial/01-astro-sphere-file-structure/index.md": () => import('./index_q0u-ltq6.mjs'),"/src/content/blog/tutorial/02-astro-sphere-getting-started/index.md": () => import('./index_BKzjWRgF.mjs'),"/src/content/blog/tutorial/03-astro-sphere-add-new-post-or-projects/index.md": () => import('./index_DFyKh8KS.mjs'),"/src/content/blog/tutorial/04-astro-sphere-writing-markdown/index.md": () => import('./index_GHZtEyeA.mjs'),"/src/content/blog/tutorial/05-astro-sphere-writing-mdx/index.mdx": () => import('./index_BVV8-qyv.mjs'),"/src/content/legal/privacy.md": () => import('./privacy_Co_ePYAp.mjs'),"/src/content/legal/terms.md": () => import('./terms_BcyQ3I6H.mjs'),"/src/content/projects/02-arkanoid/index.md": () => import('./index_BTfAb_0E.mjs'),"/src/content/projects/juegos/01-snake/index.md": () => import('./index_D3QGo438.mjs'),"/src/content/projects/project-3/index.md": () => import('./index_BcItjnJ2.mjs'),"/src/content/projects/project-4/index.md": () => import('./index_BjYA-5g-.mjs'),"/src/content/work/apple.md": () => import('./apple_CZxynVJB.mjs'),"/src/content/work/facebook.md": () => import('./facebook_C07V-unA.mjs'),"/src/content/work/google.md": () => import('./google_DvnBIPnY.mjs'),"/src/content/work/mcdonalds.md": () => import('./mcdonalds_CtgWzekQ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

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
    TEXT: "Inicio",
    HREF: "/"
  },
  {
    TEXT: "Blog",
    HREF: "/blog"
  },
  {
    TEXT: "Proyectos",
    HREF: "/projects"
  },
  {
    TEXT: "Trabajos",
    HREF: "/works"
  }
];
const SOCIALS = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "pablo.luna.perez.008@gmail.com",
    HREF: "mailto:pablo.luna.perez.008@gmail.com"
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
    HREF: "https://bit.ly/ig-broslunas"
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@Broslunas",
    HREF: "https://bit.ly/twitter-broslunas"
  }
];

export { BLOG as B, LINKS as L, PROJECTS as P, SITE as S, WORK as W, SEARCH as a, SOCIALS as b, getCollection as g };
