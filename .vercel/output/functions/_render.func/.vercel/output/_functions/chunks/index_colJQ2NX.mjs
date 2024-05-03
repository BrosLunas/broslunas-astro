import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"de-que-trata-el-juego\">De que trata el juego</h2>\n<p>Pac-Man fue creado por el diseñador Toru Iwatani, de la empresa japonesa Namco. El juego consiste en conducir a Pac-Man, una bola amarilla que abre y cierra la boca, por un laberinto. Suma puntos cuando come aquello que encuentra a su paso, bolitas y diferentes frutas, pero debe esquivar a cuatro fantasmas.</p>\n<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/pacman.mp4\"><img src=\"/img/games/pacman.png\" alt=\"Pacman Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego Pacman","summary":"He creado el pacman en html, css y js para un navegador","date":"05 02 2024","draft":false,"tags":["Juego","Html","Javascript","Css"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/04-pacman/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/04-pacman"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/04-pacman/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## De que trata el juego\r\nPac-Man fue creado por el diseñador Toru Iwatani, de la empresa japonesa Namco. El juego consiste en conducir a Pac-Man, una bola amarilla que abre y cierra la boca, por un laberinto. Suma puntos cuando come aquello que encuentra a su paso, bolitas y diferentes frutas, pero debe esquivar a cuatro fantasmas.\r\n\r\n## Gameplay\r\n[![Pacman Game](/img/games/pacman.png)](/video/gameplay/pacman.mp4)\r\n\r\n> Escrito por **Broslunas**";
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
