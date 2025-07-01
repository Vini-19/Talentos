// Slider automático
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto deslizar cada 4 segundos
setInterval(() => {
  nextSlide();
}, 4000);

// Menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
