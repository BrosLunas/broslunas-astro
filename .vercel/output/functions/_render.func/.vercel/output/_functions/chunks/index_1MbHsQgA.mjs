import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"de-que-trata-el-juego\">De que trata el juego</h2>\n<p>El objetivo de Pong es derrotar al oponente siendo el primero en acumular diez puntos. Para ello el jugador tiene que conseguir que el oponente pierda la pelota, con lo que conseguirá un punto. Pong se puede jugar con dos jugadores o con una versión de jugador contra la computadora.</p>\n<h2 id=\"controles\">Controles</h2>\n<h3 id=\"jugador-1\">Jugador 1</h3>\n<p><strong>Q</strong>: Para subir el player <br>\n<strong>A</strong>: Para bajar el player</p>\n<h3 id=\"jugador-2\">Jugador 2</h3>\n<p><strong>⬆</strong>: Para subir el player <br>\n<strong>⬇</strong>: Para bajar el player</p>\n<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/pingpong.mp4\"><img src=\"/img/games/pingpong.png\" alt=\"Ping Pong Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego PingPong","summary":"He creado el pingpong en html, css y js para un navegador","date":"05 03 2024","draft":false,"tags":["Juego","Html","Javascript","Css"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/05-pingpong/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/05-pingpong"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/05-pingpong/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## De que trata el juego\r\nEl objetivo de Pong es derrotar al oponente siendo el primero en acumular diez puntos. Para ello el jugador tiene que conseguir que el oponente pierda la pelota, con lo que conseguirá un punto. Pong se puede jugar con dos jugadores o con una versión de jugador contra la computadora.\r\n\r\n## Controles\r\n\r\n### Jugador 1\r\n**Q**: Para subir el player \\\r\n**A**: Para bajar el player\r\n\r\n### Jugador 2\r\n**⬆**: Para subir el player \\\r\n**⬇**: Para bajar el player\r\n\r\n## Gameplay\r\n[![Ping Pong Game](/img/games/pingpong.png)](/video/gameplay/pingpong.mp4)\r\n\r\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"de-que-trata-el-juego","text":"De que trata el juego"},{"depth":2,"slug":"controles","text":"Controles"},{"depth":3,"slug":"jugador-1","text":"Jugador 1"},{"depth":3,"slug":"jugador-2","text":"Jugador 2"},{"depth":2,"slug":"gameplay","text":"Gameplay"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
