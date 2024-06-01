import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/zelda.mp4\"><img src=\"/img/games/zelda.png\" alt=\"Zelda Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego 3D | Zelda","summary":"He creado el Zelda en html, js y blender para un navegador","date":"05 29 2024","draft":false,"tags":["Juego","3D"],"demoUrl":"https://zelda-broslunas.vercel.app/","repoUrl":"https://github.com/BrosLunas/broslunas-zelda","wikiUrl":"/wiki/juegos/3d/zelda/"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/projects/juegos-3d/01-zelda/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Gameplay\r\n[![Zelda Game](/img/games/zelda.png)](/video/gameplay/zelda.mp4)\r\n\r\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"gameplay","text":"Gameplay"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
