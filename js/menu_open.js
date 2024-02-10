const menuToggle = document.getElementById('menuToggle');
const container = document.querySelector('.container');
menuToggle.addEventListener('click', () => {
    container.classList.toggle('open');
});