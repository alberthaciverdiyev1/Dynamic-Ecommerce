// Category 04 JavaScript
function initCategory04() {
    console.log('Category 04 Script Loaded');

    // AOS (Animate On Scroll) Simülasyonu
    const animatedElements = document.querySelectorAll('.cat-v4 [data-aos]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach((el) => {
            observer.observe(el);
        });
    } else {
        // Fallback
        animatedElements.forEach((el) => {
            el.classList.add('aos-animate');
        });
    }
}

// Astro View Transitions desteği
document.addEventListener('astro:page-load', initCategory04);
initCategory04();