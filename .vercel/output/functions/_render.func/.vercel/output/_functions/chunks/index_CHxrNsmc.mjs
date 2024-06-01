import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"bienvenidos-al-primer-post-de-broslunas\">Bienvenidos al primer post de Broslunas</h2>\n<p>En este blog podras encontrar diferentes updates de todos mis proyectos y nuevas implementaciones en este fantastico sitio web creado con astro</p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Primer post","summary":"Bienvenidos al primer post del blog","date":"May 2 2024","draft":false,"tags":["Bienvenida","Novedades"]};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/blog/primer post/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Bienvenidos al primer post de Broslunas\r\n\r\nEn este blog podras encontrar diferentes updates de todos mis proyectos y nuevas implementaciones en este fantastico sitio web creado con astro\r\n\r\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"bienvenidos-al-primer-post-de-broslunas","text":"Bienvenidos al primer post de Broslunas"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
