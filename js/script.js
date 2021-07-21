// menu
const menuIconBar = document.querySelector('.menu-btn__bar-2');
const sideBar = document.querySelector('.side-bar-nav');

// cursos side bar list
const cursosBtn = document.getElementById('side-bar-nav__cursos-btn');
// const cursosList = document.querySelector('.side-bar-nav__list-item-cursos');


// cursos descriptions
const cursoBox = document.querySelectorAll('.cursos__list-item__button');
const cursoDescription = document.querySelectorAll('.cursos__list-item__description');
const closeDescription = document.querySelectorAll('.close-button-wrapper');


function sideBarAnimation() {  
    menuIconBar.classList.toggle("translate");
    sideBar.classList.toggle("toggle");
}

cursosBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.side-bar-nav__list-item-cursos').classList.toggle('open');
});


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
