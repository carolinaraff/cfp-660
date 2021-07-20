// menu
const menuIconBar = document.querySelector('.menu-btn__bar-2');
const sideBar = document.querySelector('.side-bar-nav');

// cursos descriptions
const cursoBox = document.querySelectorAll('.cursos__list-item__button');
const cursoDescription = document.querySelectorAll('.cursos__list-item__description');
const closeDescription = document.querySelectorAll('.close-button-wrapper');


function sideBarAnimation() {  
    menuIconBar.classList.toggle("translate");
    sideBar.classList.toggle("toggle");
}


cursoBox.forEach((box, i) => {
    cursoBox[i].addEventListener('click', () => {
        cursoDescription.forEach((description, i) => {
            cursoDescription[i].classList.remove('display');
        });
        cursoDescription[i].classList.add('display');
    });
});

closeDescription.forEach((close, i) => {
    closeDescription[i].addEventListener('click', () => {
        cursoDescription.forEach((description, i) => {
            cursoDescription[i].classList.remove('display');
        });
    });
});
