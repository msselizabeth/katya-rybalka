
let offset = 0;
const sliderLine = document.querySelector('.slider-line')

const buttonNext = document.querySelector('.slider-next')
const buttonPrev = document.querySelector('.slider-prev')

buttonNext.addEventListener('click', onButtonClickNext)
buttonPrev.addEventListener('click', onButtonClickPrev)

function onButtonClickNext(){
    offset += 1550;
    if (offset > 3100) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
}

function onButtonClickPrev(){
    offset -= 1550;
    if (offset < 0) {
        offset = 3100;
    }
    sliderLine.style.left = - offset + 'px';
}