import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"de-que-trata-el-juego\">De que trata el juego</h2>\n<p>Es un videojuego de mecánicas simples que pone al jugador en las plumas de un dino que debe esquivar los huesos a la vez que se mantiene en el aire</p>\n<h2 id=\"controles\">Controles</h2>\n<h3 id=\"jugador-1\">Jugador 1</h3>\n<p><strong>ESPACE</strong>: Para saltar</p>\n<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/flappy-dino.mp4\"><img src=\"/img/games/flappy-dino.png\" alt=\"Flappy Dino Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego Flappy Dino","summary":"He creado el Flappy Dino en html, css y js para un navegador","date":"05 04 2024","draft":false,"tags":["Juego","Html","Javascript","Css"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/06-flappy-dino/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/06-flappy-dino/"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/06-flappy-dino/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## De que trata el juego\r\nEs un videojuego de mecánicas simples que pone al jugador en las plumas de un dino que debe esquivar los huesos a la vez que se mantiene en el aire\r\n\r\n## Controles\r\n\r\n### Jugador 1\r\n**ESPACE**: Para saltar \r\n\r\n## Gameplay\r\n[![Flappy Dino Game](/img/games/flappy-dino.png)](/video/gameplay/flappy-dino.mp4)\r\n\r\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"de-que-trata-el-juego","text":"De que trata el juego"},{"depth":2,"slug":"controles","text":"Controles"},{"depth":3,"slug":"jugador-1","text":"Jugador 1"},{"depth":2,"slug":"gameplay","text":"Gameplay"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
