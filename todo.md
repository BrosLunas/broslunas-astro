# Assets
 ↑ ↓ ← →

# Encontrar nuevos juegos

# Add Projects

# Wikis

# Spoiler

<button class="border border-black/25 dark:border-white/25 py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-neutral-500 dark:bg-neutral-900 text-white dark:text-white hover:opacity-75 blend" id="spoiler-button">SPOILER</button>
<div id="spoiler-content" class="hidden">
    <img src="spoiler.png" alt="Imagen Spoiler">
</div>


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

# Carrousel

<!-- Carrousel  -->
      <section class="animate">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">Imagenes</h1>
        <article>
            <div class="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src="/assets/img/end-xpansion/content.png" alt="Imagen 1">
                        <p>Contenido</p>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/end-xpansion/armor.png" alt="Imagen 2">
                        <p>Armadura</p>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/end-xpansion/ore.png" alt="Imagen 3">
                        <p>Ores</p>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/end-xpansion/structure.png" alt="Imagen 4">
                        <p>Estructura</p>
                    </div>
                </div>
                <div class="carousel-controls">
                    <button class="carousel-control prev">←</button>
                    <button class="carousel-control next">→</button>
                </div>
            </div>
        </article>
      </section>

      <style>
    .carousel {
        width: 80%;
        max-width: 600px;
        overflow: hidden;
        position: relative;
    }
    .carousel-inner {
        display: flex;
        transition: transform 0.5s ease;
    }
    .carousel-item {
        min-width: 100%;
        box-sizing: border-box;
    }
    .carousel-item img {
        width: 100%;
        vertical-align: top;
    }
    .carousel-item p {
        text-align: center;
        margin: 10px 0;
    }
    .carousel-controls {
        position: absolute;
        top: 50%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        transform: translateY(-50%);
    }
    .carousel-control {
        background-color: rgba(0,0,0,0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
      let currentIndex = 0;

      const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
      const items = document.querySelectorAll('.carousel-item');
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');

      if (!carouselInner || !items.length || !prevButton || !nextButton) {
          console.error('No se encontraron todos los elementos necesarios del carrusel.');
          return;
      }

      const totalItems = items.length;

      prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
          updateCarousel();
      });

      nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
          updateCarousel();
      });

      function updateCarousel() {
          const offset = -currentIndex * 100;
          carouselInner.style.transform = `translateX(${offset}%)`;
      }
  });
</script>