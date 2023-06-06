// Get the menu links
const menuLinks = document.querySelectorAll('.menu-link');

// Add click event listeners to each menu link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Slide back the slide-menu by unchecking the menu-toggle checkbox
    document.getElementById('menu-toggle').checked = false;
  });
});
