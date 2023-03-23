const body = document.querySelector('body');

const closeModalImageBtn = document.querySelector('.modal-img-close-btn');
const backdrop = document.querySelector('.backdrop');

const imageInnerModal = document.querySelector('.modal-img');
const currentImages = document.querySelectorAll('.js-img');
const fishesImages = document.querySelectorAll('.fishes__list--item-img');


if (currentImages.length > 0) {
    for (let i = 0; i < currentImages.length; i++){
        const img = currentImages[i];
        console.log(img);
        img.addEventListener('click', onOpenImage);
    }
}
if (fishesImages.length > 0) {
    for (let i = 0; i < fishesImages.length; i++){
        const imgFish = fishesImages[i];
        imgFish.addEventListener('click', onOpenImage);
    }
}

backdrop.addEventListener('click', onCloseImage);
closeModalImageBtn.addEventListener('click', onCloseImageByButon);

function onOpenImage(event) {
    event.preventDefault();
    const currentModalImg = event.currentTarget.src;
    backdrop.classList.remove('is-hidden');
    imageInnerModal.src = currentModalImg;
}

function onCloseImage(event) {
    event.preventDefault();
    if (event.currentTarget === event.target) {
        backdrop.classList.add('is-hidden');
        return;
    }
}

function onCloseImageByButon() {
    backdrop.classList.add('is-hidden');
}