const menuBTN = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBTN.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    //dropdownMenu.classList.toggle('active');
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const floatbox = document.getElementById('float-box');
const DetailsBTN = document.getElementById('Details');
const closeBTN = document.getElementById('close-btn');

DetailsBTN.addEventListener('click', () => {
    floatbox.classList.toggle('active');
});

closeBTN.addEventListener('click', () => {
    floatbox.classList.remove('active');
});




