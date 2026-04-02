function initNavbar03() {
    const links = document.querySelectorAll('.nav-v3-link');

    // Sayfa değiştikçe aktif linki güncelleme mantığı
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

document.addEventListener('astro:page-load', initNavbar03);
initNavbar03();