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