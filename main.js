function onScroll() {

  const scrollNavigation = document.querySelector("#navigation");

  if (scrollY > 0) {
    scrollNavigation.classList.add('scroll')
  } else {
    scrollNavigation.classList.remove('scroll')
  }
}