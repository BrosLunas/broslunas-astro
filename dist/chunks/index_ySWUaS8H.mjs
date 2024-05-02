import { a as createAstro, b as createComponent$1, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_olVhGsB1.mjs';
import 'kleur/colors';
import { g as getCollection, B as BLOG } from './consts_C8-E-hy3.mjs';
import { c as cn, $ as $$PageLayout } from './PageLayout_DgiX0j3w.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from './BottomLayout_BaD7dg-e.mjs';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, createEffect, For } from 'solid-js';
import { A as ArrowCard } from './ArrowCard_6G6q2aNC.mjs';

var _tmpl$ = ["<div", ' class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5">', '</ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">SHOWING <!--$-->', "<!--/--> OF <!--$-->", '<!--/--> POSTS</div><ul class="flex flex-col gap-3">', "</ul></div></div></div>"], _tmpl$2 = ["<li", "><button", "><svg", '><use href="', '"', '></use><use href="', '"', "></use></svg><!--$-->", "<!--/--></button></li>"], _tmpl$3 = ["<li", ">", "</li>"];
function Blog({
  data,
  tags
}) {
  const [filter, setFilter] = createSignal(/* @__PURE__ */ new Set());
  const [posts, setPosts] = createSignal([]);
  createEffect(() => {
    setPosts(data.filter((entry) => Array.from(filter()).every((value) => entry.data.tags.some((tag) => tag.toLowerCase() === String(value).toLowerCase()))));
  });
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
    each: tags,
    children: (tag) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("class", escape(cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-black/5 dark:bg-white/10", "hover:bg-black/10 hover:dark:bg-white/15", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white"), true), false), ssrAttribute("class", escape(cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white"), true), false), `/ui.svg#square`, ssrAttribute("class", escape(cn(!filter().has(tag) ? "block" : "hidden"), true), false), `/ui.svg#square-check`, ssrAttribute("class", escape(cn(filter().has(tag) ? "block" : "hidden"), true), false), escape(tag))
  })), escape(posts().length), escape(data.length), escape(posts().map((post) => ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(ArrowCard, {
    entry: post
  }))))));
}

const $$Astro = createAstro("https://broslunas.vercel.app");
const $$Index = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${BLOG.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Blog", Blog, { "client:load": true, "tags": tags, "data": posts, "client:component-hydration": "load", "client:component-path": "@components/Blog", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
