import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DgR-yEYm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El dia de hoy me he decidido por crear un mod para minecraft 1.18 para poder mejorar la exploracion en el end ya que considero que esta muy mal aprovechada y al ver que mojang (el autor oficial de minecraft) no ha dado ningun tipo de señal de que lo vaya a mejorar, pues ya he decidido yo crearlo</p>\n<h2 id=\"requisitos\">Requisitos</h2>\n<p>Para poder usar el End Xpansion, es necesario tener Minecraft Java con la version de Forge 1.18, ya que el mod ha sido creado para esa version.</p>\n<h2 id=\"como-descargar\">Como descargar</h2>\n<p>Puedes descargarlo en la pagina de Courseforge, una de las mas utilizadas en todo el mundo</p>\n<ul>\n<li><strong>Courseforge</strong>: <a href=\"https://www.curseforge.com/minecraft/mc-mods/end-xpansion\">DESCARGAR</a></li>\n</ul>\n<h2 id=\"imagenes\">Imagenes</h2>\n<p><img src=\"/img/end-xpansion/content.png\" alt=\"Contenido Mod\"></p>\n<p><img src=\"/img/end-xpansion/armor.png\" alt=\"Armadura\"></p>\n<p><img src=\"/img/end-xpansion/ore.png\" alt=\"Ores\"></p>\n<p><img src=\"/img/end-xpansion/structure.png\" alt=\"Estructura\"></p>\n<blockquote>\n<p>Escrito por <strong>Broslunas</strong></p>\n</blockquote>";

				const frontmatter = {"title":"End Xpansion | 1.18 |","summary":"He creado un nuevo mods que mejora la exploracion en el END","date":"05 06 2024","draft":false,"tags":["Minecraft","End Xpansion"],"downloadUrl":"https://www.curseforge.com/minecraft/mc-mods/end-xpansion"};
				const file = "C:/Users/pablo/OneDrive/Documentos/GitHub/broslunas-astro/src/content/projects/minecraft/end-xpansion/index.md";
				const url = undefined;
				function rawContent() {
					return "El dia de hoy me he decidido por crear un mod para minecraft 1.18 para poder mejorar la exploracion en el end ya que considero que esta muy mal aprovechada y al ver que mojang (el autor oficial de minecraft) no ha dado ningun tipo de señal de que lo vaya a mejorar, pues ya he decidido yo crearlo\r\n\r\n## Requisitos\r\nPara poder usar el End Xpansion, es necesario tener Minecraft Java con la version de Forge 1.18, ya que el mod ha sido creado para esa version.\r\n\r\n## Como descargar\r\nPuedes descargarlo en la pagina de Courseforge, una de las mas utilizadas en todo el mundo\r\n- **Courseforge**: [DESCARGAR](https://www.curseforge.com/minecraft/mc-mods/end-xpansion)\r\n\r\n## Imagenes\r\n![Contenido Mod](/img/end-xpansion/content.png)\r\n\r\n![Armadura](/img/end-xpansion/armor.png)\r\n\r\n![Ores](/img/end-xpansion/ore.png)\r\n\r\n![Estructura](/img/end-xpansion/structure.png)\r\n\r\n> Escrito por **Broslunas**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"requisitos","text":"Requisitos"},{"depth":2,"slug":"como-descargar","text":"Como descargar"},{"depth":2,"slug":"imagenes","text":"Imagenes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
