// Get the menu links
const menuLinks = document.querySelectorAll('.menu-link');

// Add click event listeners to each menu link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Slide back the slide-menu by unchecking the menu-toggle checkbox
    document.getElementById('menu-toggle').checked = false;
  });
});

const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicators .indicator');

carousel.addEventListener('scroll', () => {
  const projectWidth = carousel.offsetWidth;
  const currentProjectIndex = Math.round(carousel.scrollLeft / projectWidth);

  indicators.forEach((indicator, index) => {
    if (index === currentProjectIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
});

