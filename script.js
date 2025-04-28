
// Responsive Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Filter Properties
function filterProperties() {
    const typeFilter = document.getElementById('typeFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    const cards = document.querySelectorAll('.property-card');

    cards.forEach(card => {
        const type = card.getAttribute('data-type');
        const location = card.getAttribute('data-location');

        if ((typeFilter === 'all' || typeFilter === type) &&
            (locationFilter === 'all' || locationFilter === location)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Properties
function searchProperties() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.property-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize Swiper
const sliders = document.querySelectorAll('.property-slider');
sliders.forEach(slider => {
    new Swiper(slider, {
        loop: true,
        navigation: {
            nextEl: slider.querySelector('.swiper-button-next'),
            prevEl: slider.querySelector('.swiper-button-prev'),
        }
    });
});
