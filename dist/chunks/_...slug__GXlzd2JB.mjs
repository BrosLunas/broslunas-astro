import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_olVhGsB1.mjs';
import 'kleur/colors';
import { g as getCollection, S as SITE } from './consts_C8-E-hy3.mjs';
import { f as formatDate, $ as $$PageLayout } from './PageLayout_DgiX0j3w.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from './BottomLayout_BaD7dg-e.mjs';

const $$Astro = createAstro("https://broslunas.vercel.app");
async function getStaticPaths() {
  const docs = await getCollection("legal");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const doc = Astro2.props;
  const { title, date } = doc.data;
  const { Content } = await doc.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": `${title} for ${SITE.TITLE}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> <div class="page-heading"> ${title} </div> <p class="font-normal opacity-75">
Last updated: ${formatDate(date)} </p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/legal/[...slug].astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/legal/[...slug].astro";
const $$url = "/legal/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
