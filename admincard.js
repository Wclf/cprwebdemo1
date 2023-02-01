const adminCards = document.querySelectorAll('.js-admin-card');
const modalAdmin = document.querySelector('.js-modal-admin');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showadminCard() {
    modalAdmin.classList.add('open');
}

function hideadminCard() {
    modalAdmin.classList.remove('open');
}

for (const adminCard of adminCards) {
    adminCard.addEventListener('click', showadminCard);
}

modalClose.addEventListener('click', hideadminCard);

modalAdmin.addEventListener('click', hideadminCard);

modalContainer.addEventListener('click', function (event) {event.stopPropagation()}) 
