
// let offset = 0;
// const sliderLine = document.querySelector('.slider-line')

// const buttonNext = document.querySelector('.slider-next')
// const buttonPrev = document.querySelector('.slider-prev')

// buttonNext.addEventListener('click', onButtonClickNext)
// buttonPrev.addEventListener('click', onButtonClickPrev)

// function onButtonClickNext(){
//     offset += 1550;
//     if (offset > 3100) {
//         offset = 0;
//     }
//     sliderLine.style.left = - offset + 'px';
// }

// function onButtonClickPrev(){
//     offset -= 1550;
//     if (offset < 0) {
//         offset = 3100;
//     }
//     sliderLine.style.left = - offset + 'px';
// }

const images = document.querySelectorAll('.slider-img');
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');
const buttonNext = document.querySelector('.slider-next')
const buttonPrev = document.querySelector('.slider-prev')

buttonNext.addEventListener('click', onButtonClickNext)
buttonPrev.addEventListener('click', onButtonClickPrev)
 
let count = 0; //посилання на активний слайдер
let width;

function init() {
    width = slider.offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.objectFit = 'cover';
    }
    );
    rollSlider();
}

window.addEventListener('resize', init)
init()


function onButtonClickNext() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

function onButtonClickPrev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
