// Navbar 02 JavaScript
function initNavbar02() {
    const nav = document.querySelector('.nav-v2');
    const searchInput = document.getElementById('nav-search-v2');

    // 1. Scroll Efekti
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });

    // 2. Arama Çubuğu Simülasyonu
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value;
                console.log(`Axtarış edilir: ${query}`);
                // .NET API arama sayfasına yönlendirilebilir:
                // window.location.href = `/web/search?q=${query}`;
            }
        });
    }
}

// Astro View Transitions desteği
document.addEventListener('astro:page-load', initNavbar02);
initNavbar02();