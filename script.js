const mobileButton = document.querySelector(".menu-btn");

function toggleMenu() {
  const mobileMenu = document.querySelector(".header-links");
  mobileMenu.classList.toggle("ativo");
}
mobileButton.addEventListener("click", toggleMenu);
