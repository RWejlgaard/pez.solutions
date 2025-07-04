const menuToggle = document.getElementById('menuToggle');
const container = document.querySelector('.container');
const sidemenu = document.getElementById('sidemenu');

menuToggle.addEventListener('click', () => {
    sidemenu.classList.toggle('collapsed');
    menuToggle.classList.toggle('collapsed');
    container.classList.toggle('menu-collapsed');
});