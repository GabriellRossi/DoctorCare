function onScroll() {

  const scrollNavigation = document.querySelector('#navigation');

  if (scrollY > 0) {
    scrollNavigation.classList.add('scroll');
  } else {
    scrollNavigation.classList.remove('scroll');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`);