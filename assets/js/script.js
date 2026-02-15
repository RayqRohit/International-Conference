const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
      document.body.style.overflow = 'hidden' // Disable scrolling
   })
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
      document.body.style.overflow = '' // Re-enable scrolling
   })
}

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
   link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
      document.body.style.overflow = '' // Re-enable scrolling
   })
})




// Scroll to Top Functionality
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show button when user scrolls down 300px from the top
window.addEventListener('scroll', function () {
   if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
   } else {
      scrollToTopBtn.classList.remove('show');
   }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});
