const track = document.querySelector('.carousel-track');
const slide = Array.from(track.children);
const nav = document.querySelector('.carousel-nav');
const dotsNav = Array.from(nav.children);

const slideWidth = slide[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slide.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

nav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.carousel-slide');
    const currentDot = nav.querySelector('.current-slide');
    const dotsIndex = dotsNav.findIndex(dot => dot === targetDot);
    const targetSlide = slide[dotsIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});
