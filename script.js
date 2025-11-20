// Botón de saludo
document.getElementById("btnSaludo").addEventListener("click", () => {
  document.getElementById("mensaje").textContent = "¡Funciona perfecto en tu Poco X3 Pro!";
});

// Carrusel
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

nextBtn.addEventListener("click", () => {
  index = (index + 1) % track.children.length;
  track.style.transform = `translateX(-${index * 300}px)`;
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + track.children.length) % track.children.length;
  track.style.transform = `translateX(-${index * 300}px)`;
});
