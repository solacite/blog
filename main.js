// button

const scrollBtn = document.getElementById('scrollBtn');

function hideButton() {
    if (!scrollBtn.classList.contains('fadeOut')) {
        scrollBtn.classList.remove('fadeIn');
        scrollBtn.classList.add('fadeOut');

        setTimeout(() => {
            scrollBtn.style.display = 'none';
        }, 150)
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hideButton();
    }
})

window.addEventListener('load', () => {
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            })
            hideButton();
        })
    }
});

// nav

// mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// close mobile menu after link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// add scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});