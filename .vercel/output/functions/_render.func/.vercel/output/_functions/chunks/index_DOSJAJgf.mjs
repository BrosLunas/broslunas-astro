import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"de-que-trata-el-juego\">De que trata el juego</h2>\n<p>El concepto de Tetris, en contraste, es asombrosamente simple: tienes que rotar y encajar unos bloques de diferentes formas que van cayendo, de manera que no queden espacios entre ellos. Apenas completas una línea horizontal, esta desaparece.</p>\n<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/tetris.mp4\"><img src=\"/img/games/tetris.png\" alt=\"Tetris Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego Tetris","summary":"He creado el tetris en html, css y js para un navegador","date":"04 29 2024","draft":false,"tags":["Juego","Html","Javascript","Css"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/03-tetris/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/03-tetris"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/03-tetris/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## De que trata el juego\nEl concepto de Tetris, en contraste, es asombrosamente simple: tienes que rotar y encajar unos bloques de diferentes formas que van cayendo, de manera que no queden espacios entre ellos. Apenas completas una línea horizontal, esta desaparece.\n\n## Gameplay\n[![Tetris Game](/img/games/tetris.png)](/video/gameplay/tetris.mp4)\n\n> Escrito por **Broslunas**\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"de-que-trata-el-juego","text":"De que trata el juego"},{"depth":2,"slug":"gameplay","text":"Gameplay"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
