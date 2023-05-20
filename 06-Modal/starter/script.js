'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

/*
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modal.style.display = 'block';
  });*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
/* key down / key press / key up //
// event handler function // e -> event
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') console.log('Esc was pressed');
}); */

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  /*  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
}); */

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
