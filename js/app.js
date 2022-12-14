const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  })
);

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar-background', window.scrollY > 0);
});

window.addEventListener('scroll', () => {
  navMenu.classList.toggle('nav-menu-background-color', window.scrollY > 0);
});

var images = document.querySelectorAll('.parallax');
new simpleParallax(images, {
  transition: 'cubic-bezier(0,0,0,1)',
  orientation: 'up',
});

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        250,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
