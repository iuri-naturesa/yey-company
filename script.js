const mobileButton = document.querySelector(".menu-btn");
const mobileLink = document.querySelectorAll(".listaJS");

function toggleMenu() {
  const mobileMenu = document.querySelector(".header-links");
  mobileMenu.classList.toggle("ativo");
}
mobileButton.addEventListener("click", toggleMenu);

mobileLink.forEach((event) => {
  event.addEventListener("click", toggleMenu);
});
