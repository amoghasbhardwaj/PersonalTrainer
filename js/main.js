// IMAGE SLIDER
const images = [
  "assets/pose1.jpg",
  "assets/pose2.jpg",
  "assets/pose3.jpg",
  "assets/pose4.jpg"
];

let current = 0;
const imgEl = document.getElementById("heroImg");

setInterval(() => {
  current = (current + 1) % images.length;
  imgEl.src = images[current];
}, 3500);

// COUNTER ANIMATION
const countEl = document.getElementById("count");
let count = 0;
const target = 10000;

const counter = setInterval(() => {
  count += 100;
  if (count >= target) {
    count = target;
    clearInterval(counter);
  }
  countEl.textContent = count;
}, 16);

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
});

// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.achievement-card, .service-card, .transformation-card, .testimonial-card'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});