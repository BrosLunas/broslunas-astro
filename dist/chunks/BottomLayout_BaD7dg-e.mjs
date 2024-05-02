import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, g as renderSlot } from './astro/server_olVhGsB1.mjs';
import 'kleur/colors';
import { a as $$Container } from './PageLayout_DgiX0j3w.mjs';

const $$Astro$1 = createAstro("https://broslunas.vercel.app");
const $$TopLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TopLayout;
  return renderTemplate`${maybeRenderHead()}<div class="pt-36 pb-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/TopLayout.astro", void 0);

const $$Astro = createAstro("https://broslunas.vercel.app");
const $$BottomLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BottomLayout;
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 py-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/layouts/BottomLayout.astro", void 0);

export { $$TopLayout as $, $$BottomLayout as a };
