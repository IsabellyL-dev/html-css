//Script do carrossel de imagens
    const imagens = document.getElementById("images");
    const botoes = document.querySelectorAll(".buttons li");
    const totalSlides = botoes.length;
    let slideAtual = 0;

    function mudarSlide(index) {
      slideAtual = index;
      imagens.style.transform = `translateX(-${100 * slideAtual}%)`;

      botoes.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });
    }

    function autoPlay() {
      slideAtual = (slideAtual + 1) % totalSlides;
      mudarSlide(slideAtual);
    }

    setInterval(autoPlay, 4000); // troca de slide a cada 4 segundo

  //Script area sobre os personagens
  
const track = document.getElementById('carouselTrack2');
const container = document.querySelector('.carousel-container2');
const slides = track.children;
const totalSlides1 = slides.length;
let index = 0;

// Descobre quantos slides cabem na tela
function getVisibleSlides() {
  const containerWidth = container.offsetWidth;
  const slideWidth = slides[0].offsetWidth;
  return Math.floor(containerWidth / slideWidth);
}

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  const visibleSlides = getVisibleSlides();
  if (index < totalSlides1 - visibleSlides) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = totalSlides1 - getVisibleSlides();
  }
  updateCarousel();
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);

window.addEventListener('resize', updateCarousel);



// Trocar de idioma
const selectPais = document.getElementById("pais");

selectPais.addEventListener("change", function () {
  const selected = this.value.toLowerCase();
  const currentPage = window.location.pathname.toLowerCase();

  if (selected === "mexico" && !currentPage.includes("index-es.html")) {
    window.location.href = "index-es.html";
  } else if (selected === "brasil" && !currentPage.includes("index.html")) {
    window.location.href = "index.html";
  }
});
// Seleciona o idioma correto baseado na página atual
window.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("index-es.html")) {
    selectPais.value = "mexico";
  } else {
    selectPais.value = "brasil";
  }
});

//
AOS.init({
  duration: 2000, // duração da animação em milissegundos
  once: false    // anima apenas uma vez, não a cada rolagem
});




