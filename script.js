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

// Auto-slide every 8 seconds
setInterval(nextSlide, 6000);

// explain why rice up scroll section
const scrollItems = document.querySelectorAll('.scroll-item');

  window.addEventListener('scroll', () => {
    let index = 0;

    scrollItems.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        index = i;
      }
    });

    scrollItems.forEach((item, i) => {
      item.style.backgroundImage = `url('${scrollItems[index].dataset.bg}')`;
    });
  });
