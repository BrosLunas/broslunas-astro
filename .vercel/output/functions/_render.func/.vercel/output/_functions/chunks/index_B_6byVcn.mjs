import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/flappy-dino.mp4\"><img src=\"/img/games/flappy-dino.png\" alt=\"Flappy Dino Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego Flappy Dino","summary":"He creado el Flappy Dino en html, css y js para un navegador","date":"05 04 2024","draft":false,"tags":["Juego","2D"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/06-flappy-dino/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/06-flappy-dino/","wikiUrl":"/wiki/juegos/2d/flappy-dino/"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/projects/juegos-2d/06-flappy-dino/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Gameplay\r\n[![Flappy Dino Game](/img/games/flappy-dino.png)](/video/gameplay/flappy-dino.mp4)\r\n\r\n> Escrito por **Broslunas**";
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
