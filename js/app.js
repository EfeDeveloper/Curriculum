$(document).ready(function () {
  const bars = document.querySelectorAll(".progress_bar");

  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  // Contador

  const counters = document.querySelectorAll(".counter");

  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let target = +counter.dataset.count;
      let step = target / 100;

      let countIt = function () {
        let displayedCount = +counter.innerText;
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + step);
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };
      countIt();
    });
  }

  let counterSection = document.querySelector(".counter_section");
  let options = {
    rootMargin: "0px 0px -200px 0px",
  };
  let done = 0;

  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && done !== 1) {
      done = 1;
      runCounter();
    }
  }, options);

  sectionObserver.observe(counterSection);

  // filtro de imagenes

  var $wrapper = $(".portfolio_wrapper");

  // Iniciando isotope

  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  let links = document.querySelectorAll(".tabs a");

  links.forEach((link) => {
    let selector = link.dataset.filter;
    link.addEventListener("click", function (e) {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  // MagnificPopup plugin -- imagenes PopUp

  $(".magnific").magnificPopup({
    // Opciones de inicialización
    type: "image",
    preload: true,
    showCloseBtn: false,
    type: "image",
      gallery: {
      enabled: true,
      preload: [0, 1],
      navigateByImgClick: true,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // marcador del botón de dirección
      tPrev: "Anterior",
      tNext: "Siguiente",
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // marcado del contador
    },
    zoom: {
      enabled: true,

      duration: 450, // duración del efecto, en milisegundos
      easing: "ease-in-out", // Función de suavizado de transición en CSS

      /* La función "opener" debe devolver el elemento desde el que se ampliará la ventana emergente
         y a qué ventana emergente se reducirá
         Por defecto busca una etiqueta de imagen: */
      opener: function (openerElement) {
        /* "openerElement" es el elemento en el que se inicializó la ventana emergente, en este caso su etiqueta <a>
           no necesita agregar la opción "opener" si este código coincide con sus necesidades, es predeterminada. */
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});
