import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/tetris.mp4\"><img src=\"/img/games/tetris.png\" alt=\"Tetris Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego Tetris","summary":"He creado el tetris en html, css y js para un navegador","date":"04 29 2024","draft":false,"tags":["Juego","2D"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/03-tetris/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/03-tetris","wikiUrl":"/wiki/juegos/2d/tetris/"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/projects/juegos-2d/03-tetris/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Gameplay\r\n[![Tetris Game](/img/games/tetris.png)](/video/gameplay/tetris.mp4)\r\n\r\n> Escrito por **Broslunas**\r\n";
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
