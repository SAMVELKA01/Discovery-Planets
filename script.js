// Smooth scrolling for navigation links
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Code pour le carousel des planètes
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");
const navDots = document.querySelector(".carousel-nav");

// Créer les points de navigation
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.classList.add("nav-dot");
  if (index === 0) dot.classList.add("active");
  navDots.appendChild(dot);
});

const dots = Array.from(navDots.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const slidesPerView = 3; // Nombre de slides visibles à la fois
let currentIndex = 0;

// Fonction pour mettre à jour la position du carousel
const updateCarousel = (index) => {
  const offset = -index * slideWidth;
  track.style.transform = `translateX(${offset}px)`;

  // Mettre à jour les points de navigation
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  // Mettre à jour les boutons
  prevButton.disabled = index === 0;
  nextButton.disabled = index >= slides.length - slidesPerView;
};

// Gestionnaire d'événements pour le bouton suivant
nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - slidesPerView) {
    currentIndex++;
    updateCarousel(currentIndex);
  }
});

// Gestionnaire d'événements pour le bouton précédent
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel(currentIndex);
  }
});

// Gestionnaire d'événements pour les points de navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

// Initialiser le carousel
updateCarousel(0);
