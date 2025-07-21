const btn = document.getElementById('scrollBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('hidden');
        btn.style.display = 'none';
    }
})

window.addEventListener('load', () => {
    if (btn) {
        btn.addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            })
            btn.style.display = 'none';
        })
    }
});