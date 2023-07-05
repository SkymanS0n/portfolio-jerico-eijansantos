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

var footer = document.querySelector("footer");
var footerHeight = footer.offsetHeight;
var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", function() {
  var newScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  if (newScrollPosition > scrollPosition) {
    if (newScrollPosition + windowHeight >= documentHeight) {
      footer.classList.remove("footer-fixed");
    }
  } else {
    if (newScrollPosition === 0) {
      footer.classList.remove("footer-fixed");
    } else if (newScrollPosition + windowHeight < documentHeight) {
      footer.classList.add("footer-fixed");
    }
  }

  scrollPosition = newScrollPosition;
});

const devProcess = document.querySelector('.dev-process');

devProcess.addEventListener('click', function() {
  devProcess.classList.toggle('open');
});



// Get all the source-code elements by their class name
var sourceCodeElements = document.getElementsByClassName('source-code');

// Get all the doc-options elements by their class name
var docOptionsElements = document.getElementsByClassName('doc-options');

// Function to show the associated doc-options element
function showDocOptions() {
  // Get the index of the hovered source-code element
  var index = Array.prototype.indexOf.call(sourceCodeElements, this);

  // Show the associated doc-options element with transition effect
  docOptionsElements[index].style.display = 'flex';
  setTimeout(function () {
    docOptionsElements[index].style.opacity = '1';
  }, 10);
}

// Function to hide the associated doc-options element
function hideDocOptions() {
  // Get the index of the associated doc-options element
  var index = Array.prototype.indexOf.call(docOptionsElements, this);

  // Hide the associated doc-options element with transition effect
  docOptionsElements[index].style.opacity = '0';
  setTimeout(function () {
    docOptionsElements[index].style.display = 'none';
  }, 300); // Adjust the delay time to match the transition duration
}

// Attach event handlers to show the associated doc-options element when hovering over the source-code element
for (var i = 0; i < sourceCodeElements.length; i++) {
  sourceCodeElements[i].addEventListener('mouseenter', showDocOptions);
}

// Attach event handlers to hide the associated doc-options element when mouse leaves it
for (var i = 0; i < docOptionsElements.length; i++) {
  docOptionsElements[i].addEventListener('mouseleave', hideDocOptions);
}














