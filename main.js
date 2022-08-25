window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // Linha Alvo
  const targetLine = scrollY + innerHeight / 2;

  //Verificar se a sessão passou da linha
  // Quais dados vou precisar?

  // O topo da seção
  const sectionTop = section.offsetTop;

  // A altura da seção
  const sectionHeight = section.offsetHeight;

  //O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;


  // Verificar se a base está abaixo da linha alvo

  // A seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;

  //O final da seção passou da linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;


  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id'); 
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
  const scrollNavigation = document.querySelector('#navigation');

  if (scrollY > 0) {
    scrollNavigation.classList.add('scroll');
  } else {
    scrollNavigation.classList.remove('scroll');
  }
}


function showBackToTopButtonOnScroll() {
  const backToTopButton = document.querySelector('#backToTopButton');

  if (scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
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