const slideMenu = document.querySelector('.slide-menu');
const hamburg = document.querySelector('.hamburg');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');

let menuOpen = false;

hamburg.addEventListener('click', () => {
    if (!menuOpen) {
        slideMenu.classList.add('ativo');
        hamburg.classList.add('ativo');
        l1.classList.add('ativo');
        l2.classList.add('ativo');
        l3.classList.add('ativo');
        menuOpen = true;
    } else {
        slideMenu.classList.remove('ativo');
        hamburg.classList.remove('ativo');
        l1.classList.remove('ativo');
        l2.classList.remove('ativo');
        l3.classList.remove('ativo');
        menuOpen = false;
      }
})