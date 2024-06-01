import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/buscaminas.mp4\"><img src=\"/img/games/buscaminas.png\" alt=\"Buscaminas Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego Buscaminas","summary":"He creado el Buscaminas en html, css y js para un navegador","date":"05 09 2024","draft":false,"tags":["Juego","2D"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/10-buscaminas/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/10-buscaminas/","wikiUrl":"/wiki/juegos/2d/buscaminas/"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/projects/juegos-2d/10-buscaminas/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Gameplay\r\n[![Buscaminas Game](/img/games/buscaminas.png)](/video/gameplay/buscaminas.mp4)\r\n\r\n> Escrito por **Broslunas**";
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
