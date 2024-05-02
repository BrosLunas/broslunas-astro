import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_olVhGsB1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"de-que-trata-el-juego\">De que trata el juego</h2>\n<p>En el juego, consiste en que el jugador o usuario controla una nave la cual tiene que derribar todos los ladriños que tiene en frente</p>";

				const frontmatter = {"title":"Juego Arkanoid","summary":"He creado el juego de Arkanoid en html, css y js para un navegador","date":"May 2 2024","draft":false,"tags":["Html","Javascript","Css"],"demoUrl":"https://games-broslunas.vercel.app/game/demo/02-arkanoid-game/","repoUrl":"https://github.com/BrosLunas/Web-Page/tree/main/game/demo/02-arkanoid-game"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/02-arkanoid/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## De que trata el juego\nEn el juego, consiste en que el jugador o usuario controla una nave la cual tiene que derribar todos los ladriños que tiene en frente\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"de-que-trata-el-juego","text":"De que trata el juego"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
