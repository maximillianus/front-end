// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop; // not quite understand what this for

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  };
};

// Hamburger animation
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active') //switch between classes
  navMenu.classList.toggle('hidden') //switch between classes
});

