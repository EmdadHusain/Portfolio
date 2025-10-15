const menuBtn = document.querySelector('.menu-btn');
const menuArea = document.querySelector('.menu-area');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuArea.classList.add('show');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuArea.classList.remove('show');
    showMenu = false;
  }
}
