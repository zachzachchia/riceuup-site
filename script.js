document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll respond soon.');
});

// top hero slider
const slides = document.querySelectorAll('.slider-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);
