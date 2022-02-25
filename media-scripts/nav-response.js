const navToggle = document.querySelector(".btn-menu-ham")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle("nav-menu_visible")
})