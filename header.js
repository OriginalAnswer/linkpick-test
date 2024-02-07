window.addEventListener('scroll', () => {
    let targetY = document.querySelector('.profile').getBoundingClientRect().top;
    const h = document.querySelector('header');
    let y = window.scrollY;//창 위치
    if (y > targetY + 100) {
        // h.classList.remove('dpnone')
        h.style.opacity = '1';
    } else {
        // h.classList.add('dpnone')
        h.style.opacity = '0';
    }
});