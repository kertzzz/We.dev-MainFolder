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

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data via AJAX to Web3Forms API
    let formData = new FormData(event.target);

    fetch(event.target.action, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // If successful, show confirmation and reset the form for the next message
                showConfirmationMessage(); // Show confirmation message
                resetForm(); // Reset form after submission
            } else {
                // Handle any errors if the submission failed
                alert('There was an issue submitting your form. Please try again.');
            }
        })
        .catch(error => {
            // If there's an error with the fetch request
            alert('Error: ' + error.message);
        });
}

// Show the confirmation message
function showConfirmationMessage() {
    document.getElementById("confirmation-message").style.display = "block";

    // After a brief delay, reset the form and show it again
    setTimeout(() => {
        resetForm();
        document.getElementById("confirmation-message").style.display = "none";
    }, 3000); // Wait for 3 seconds before resetting
}

// Reset the form for the next submission
function resetForm() {
    // Reset the form fields
    document.getElementById("Form-box").reset();
}