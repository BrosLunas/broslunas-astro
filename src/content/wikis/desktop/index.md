---
title: "Desktop"
summary: "Wiki de Broslunas Desktop"
date: "07 27 2024"
draft: false
tags:
- Desktop
projectUrl: /projects/broslunas-desktop
wikisRepoUrl: https://github.com/BrosLunas/broslunas-desktop
wikisDownloadUrl: /downloads/desktop/broslunas-v1.0.0.rar
---
# Información
En el estupendo dia de hoy he decidido crear una version portable de nuestro sitio web para dispositivos windows muy facil de descargar y de usar.

# Requisitos
Para poder usar la version portable de Broslunas Desktop, es necesario tener un ordenador windows da igual la version de que estes utilizando siempre y cuando sea Windows 8 o superior

# Descargar
<li><b>Mega:</b> <a target="_blank" href="https://mega.nz/folder/l1JjnbTQ">Haz Click Aqui</a> (<i>Recomendado</i>)
<button class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend" id="spoiler-button">Contraseña</button>
    <div id="spoiler-content" class="hidden">
        <p><b>VRCegWUlnntAe9jtn5XzjA</b></p>
    </div>
</li> 
<li><b>Local:</b> <a href="/downloads/desktop/broslunas-v1.0.0.rar">Haz Click Aqui</a></li>

# Video
Aquí le dejamos un corto video de como utilizar la web
<video class="container video" style="" controls muted>
    <source src="/assets/video/app/desktop.mp4" type="video/mp4">
</video>

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