const menuBTN = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBTN.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});


let scrollContainer = document.querySelector(".card-slider");
let backBTN = document.getElementById('backBTN');
let nextBTN = document.getElementById('nextBTN');

nextBTN.addEventListener("click", ()=> {
    scrollContainer.scrollLeft += 900;
});

backBTN.addEventListener("click", ()=> {
    scrollContainer.scrollLeft -= 900;
});



const floatbox = document.getElementById('float-box');
const DetailsBTN = document.getElementById('Details');
const closeBTN = document.getElementById('close-btn');

DetailsBTN.addEventListener('click', ()=> {
    floatbox.classList.toggle('active');
});

closeBTN.addEventListener('click',  ()=> {
    floatbox.classList.remove('active');
});


/*const swiper = new Swiper('.card-slider', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});*/