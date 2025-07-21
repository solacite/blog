window.addEventListener('load', () => {
    const btn = document.getElementById('scrollBtn');

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