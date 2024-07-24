---
title: "Primera Wiki"
summary: "La primera wiki esta disponible a partir de estos momentos"
date: "07 24 2024"
draft: false
tags:
- "No Tag"
projectUrl: /wikis
wikisDemoUrl: /wikis
wikisLinkUrl: /wikis
wikisRepoUrl: /wikis
wikisDownloadUrl: /wikis

---
## Que es Broslunas Wiki
Aqui podras enconctrar dentro de cada proyecto, al lado del botón de <b>Probar Demo</b> y <b>Ver Repositorio</b>, con un boton de <b>Leer Wiki</b>

<button class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend" id="spoiler-button">SPOILER</button>
<div id="spoiler-content" class="hidden">
    <img src="/assets/img/wiki/leer-wiki.png" alt="Imagen Spoiler">
</div>
Aqui podras encontrar de que trata un juego, cuales son los controles, hasta podras ver un <b>Gameplay</b> corto del funcionamiento de este.


> Escrito por **Broslunas**

<style>
    .hidden {
    display: none;
    }

    #spoiler-content {
    margin-top: 10px;
    }

    button {
    padding: 10px 20px;
    border: 1px solid;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    }

    button:hover{
    border: 1px solid;
    border-radius: 25px;
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('spoiler-button');
    const content = document.getElementById('spoiler-content');

    if (button && content) {
        button.addEventListener('click', function() {
            content.classList.toggle('hidden');
        });
    } else {
        if (!button) {
            console.error("El botón con el ID 'spoiler-button' no se encontró en el DOM.");
        }
        if (!content) {
            console.error("El contenido con el ID 'spoiler-content' no se encontró en el DOM.");
        }
    }
});
</script>