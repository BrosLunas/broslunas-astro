import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El dia de hoy me he decidido por crear un mod de minecraft para la version 1.18 donde se mejora la exploracion en el END.</p>\n<p>Para mas info haz click <a href=\"/projects/minecraft/end-xpansion\">AQUí</a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"End Xpansion","summary":"End Xpansion 1.18 para minecraft forge","date":"May 4 2024","draft":false,"tags":["Minecraft","Novedades"]};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/blog/end-xpansion/index.md";
				const url = undefined;
				function rawContent() {
					return "El dia de hoy me he decidido por crear un mod de minecraft para la version 1.18 donde se mejora la exploracion en el END.\r\n\r\nPara mas info haz click [AQUí](/projects/minecraft/end-xpansion)\r\n\r\n> Escrito por **Broslunas**";
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
