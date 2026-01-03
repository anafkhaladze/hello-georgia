const burger = document.getElementById("burger");
const nav = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});
