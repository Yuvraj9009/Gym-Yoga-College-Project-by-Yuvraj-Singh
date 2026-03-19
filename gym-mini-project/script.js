document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Name validation
            if (name === '') {
                nameError.style.display = 'block';
                nameError.innerText = 'Name is required';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                emailError.style.display = 'block';
                emailError.innerText = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.style.display = 'block';
                emailError.innerText = 'Invalid email format';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Message validation
            if (message === '') {
                messageError.style.display = 'block';
                messageError.innerText = 'Message is required';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }

            if (isValid) {
                alert('Thank you for contacting us! Your message has been sent successfully.');
                contactForm.reset();
            }
        });
    }

    // Search filter for Gym Exercises
    const searchInput = document.getElementById('exerciseSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const filter = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const title = card.querySelector('.card-title').innerText.toLowerCase();
                if (title.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
