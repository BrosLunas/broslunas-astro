import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El dia de hoy me he decidido por crear una nueva seccion dentro del sitio web llamada <a href=\"/projects\">Juegos</a> y filtra los resultados por juegos.</p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Nueva Seccion (Juegos)","summary":"Bienvenidos al primer post del blog","date":"May 2 2024","draft":false,"tags":["Juego","2Ds","Novedades"]};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/blog/nueva seccion (juegos)/index.md";
				const url = undefined;
				function rawContent() {
					return "El dia de hoy me he decidido por crear una nueva seccion dentro del sitio web llamada [Juegos](/projects) y filtra los resultados por juegos.\r\n\r\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
