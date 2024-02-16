let menuBtn = document.querySelector('.header .menu-close-btn-box .fa-bars');
let closeBtn = document.querySelector('.header .menu-close-btn-box .fa-xmark');
let header = document.querySelector('.header')

menuBtn.addEventListener('click', function() {
    header.classList.add('active')
})

closeBtn.addEventListener('click', function() {
    header.classList.remove('active')
})