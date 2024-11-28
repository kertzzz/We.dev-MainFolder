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

document.addEventListener("DOMContentLoaded", function () {
    const detailButtons = document.querySelectorAll('.more-details');
    const closeButtons = document.querySelectorAll('.close-btn');

    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const profileId = this.getAttribute('data-profile');
            const profileBox = document.getElementById(`profile-${profileId}`);
            if (profileBox) {
                profileBox.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.floatbox').style.display = 'none';
        });
    });
});

document.getElementById("More_Web").onclick = function () {
    location.href = "WebDevelopment.html";
};

document.getElementById("More_Java").onclick = function () {
    location.href = "JavaDevelopment.html";
};

document.getElementById("More_MobileApp").onclick = function () {
    location.href = "MobileAppDevelopment.html";
};



function handleSubmit(event) {
    event.preventDefault(); 

    let formData = new FormData(event.target);

    fetch(event.target.action, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                showConfirmationMessage(); 
                resetForm(); 
            } else {
                alert('There was an issue submitting your form. Please try again.');
            }
        })
        .catch(error => {
                alert('Error: ' + error.message);
        });
}
function showConfirmationMessage() {
    document.getElementById("confirmation-message").style.display = "block";

    setTimeout(() => {
        resetForm();
        document.getElementById("confirmation-message").style.display = "none";
    }, 3000);
}

function resetForm() {
    document.getElementById("Form-box").reset();
}