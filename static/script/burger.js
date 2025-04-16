const burger = document.querySelector('.burger');
  const navMenu = document.getElementById('nav-menu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });