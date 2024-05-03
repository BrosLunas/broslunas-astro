import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"de-que-trata-el-juego\">De que trata el juego</h2>\n<p>En el juego, consiste en que el jugador o usuario controla a una serpiente, que se desplaza a velocidad constante dentro de un plano delimitado, recogiendo alimentos (o algún otro elemento), tratando de evitar golpearse contra paredes que rodean el área de juego o su propia cola</p>\n<h2 id=\"gameplay\">Gameplay</h2>\n<p><a href=\"/video/gameplay/snake.mp4\"><img src=\"/img/games/snake.png\" alt=\"Snake Game\"></a></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Juego snake","summary":"He creado el juego de snake en html, css y js para un navegador","date":"04 25 2024","draft":false,"tags":["Juego","Html","Javascript","Css"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/01-snake/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/01-snake"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/juegos/01-snake/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## De que trata el juego\nEn el juego, consiste en que el jugador o usuario controla a una serpiente, que se desplaza a velocidad constante dentro de un plano delimitado, recogiendo alimentos (o algún otro elemento), tratando de evitar golpearse contra paredes que rodean el área de juego o su propia cola\n\n## Gameplay\n[![Snake Game](/img/games/snake.png)](/video/gameplay/snake.mp4)\n\n> Escrito por **Broslunas**";
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
