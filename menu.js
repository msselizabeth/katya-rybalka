
// const refs = {
//       openMenuBtn: document.querySelector('.open-mob-menu'),
//     //   closeMenuBtn: document.querySelector('[data-menu-close]'),
//       menu: document.querySelector('.modile-menu'),
// };

const openMenuBtn = document.querySelector('.open-mob-menu');
const menu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-mob-menu')

  
openMenuBtn.addEventListener('click', toggleModal);
closeMenuBtn.addEventListener('click', toggleModal)

function toggleModal(e) {
    e.preventDefault();
    menu.classList.toggle('is-open');
  
    }

// function closeModal(event) {
//     event.preventDefault();
//     if (event.target === event.currentTarget) {
//         menu.classList.remove('is-open');
//     }
    
//     console.log(event.target);
//     console.log(event.currentTarget);

// }
