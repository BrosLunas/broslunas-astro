import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Ckf6Kgru.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El dia de hoy me he decidido por crear una nueva seccion dentro del sitio web llamada <a href=\"https://games-broslunas.vercel.app/games/index.html\">Juegos</a>.</p>\n<p>En esta nueva seccion podras investigar todos los juegos que haya creado y poder pasar un buen rato.</p>\n<h2 id=\"requisitos\">Requisitos</h2>\n<p>Para poder jugar a estos juegos, necesitaras un ordenador o computadora en la mayoria de los casos, ya que los controles de estos son las teclas. El unico juego que contiene botones tactiles es el <a href=\"http://broslunas.vercel.app/projects/juegos/03-tetris\">Tetris</a>.</p>\n<p>Si surge cualquier tipo de bug u cualquier comentario, puede dejar una <a href=\"https://github.com/BrosLunas/Web-Page/issues\">Issues</a> y yo estare encantado de responderte.</p>\n<h2 id=\"mas-info\">Mas Info</h2>\n<p>En esa misma pagina, podras encontrar cada juego na mas salga a produccion.</p>\n<h2 id=\"imagen\">Imagen</h2>\n<p><img src=\"/img/broslunas-games.png\" alt=\"Imagen Broslunas Games\"></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"Broslunas Games","summary":"Nuevo sitio web","date":"05 02 2024","draft":false,"tags":["Html","Css","Javascript","Broslunas Games"]};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/Web-Page/src/content/projects/web/broslunas-games/index.md";
				const url = undefined;
				function rawContent() {
					return "El dia de hoy me he decidido por crear una nueva seccion dentro del sitio web llamada [Juegos](https://games-broslunas.vercel.app/games/index.html).\n\nEn esta nueva seccion podras investigar todos los juegos que haya creado y poder pasar un buen rato.\n\n## Requisitos\nPara poder jugar a estos juegos, necesitaras un ordenador o computadora en la mayoria de los casos, ya que los controles de estos son las teclas. El unico juego que contiene botones tactiles es el [Tetris](http://broslunas.vercel.app/projects/juegos/03-tetris).\n\nSi surge cualquier tipo de bug u cualquier comentario, puede dejar una [Issues](https://github.com/BrosLunas/Web-Page/issues) y yo estare encantado de responderte.\n\n## Mas Info\nEn esa misma pagina, podras encontrar cada juego na mas salga a produccion.\n\n## Imagen\n![Imagen Broslunas Games](/img/broslunas-games.png)\n\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"requisitos","text":"Requisitos"},{"depth":2,"slug":"mas-info","text":"Mas Info"},{"depth":2,"slug":"imagen","text":"Imagen"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
