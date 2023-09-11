const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenmu);

function toggleDesktopMenmu() {
    
    desktopMenu.classList.toggle('inactive');


}