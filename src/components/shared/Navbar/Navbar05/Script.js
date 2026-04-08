function initNavbar04() {
    const searchInput = document.querySelector('.nav-v4-search-input');
    const catBtn = document.querySelector('.nav-v4-cat-btn');

    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('scale-[1.02]');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('scale-[1.02]');
        });
    }

    if (catBtn) {
        catBtn.addEventListener('click', () => {
            console.log('Kategoriler açılıyor...');
            // Buraya bir mega menü tetikleyicisi gelebilir
        });
    }
}

document.addEventListener('astro:page-load', initNavbar04);
initNavbar04();