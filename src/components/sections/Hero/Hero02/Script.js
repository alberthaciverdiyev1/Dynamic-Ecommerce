// Hero 02 JavaScript
function initHero02() {
    console.log('Hero 02 Script Loaded');

    // Basit AOS (Animate On Scroll) Simülasyonu
    const animatedElements = document.querySelectorAll('[data-aos]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target); // Sadece bir kez tetiklensin
                }
            });
        }, {
            threshold: 0.1 // %10 göründüğünde tetikle
        });

        animatedElements.forEach((el) => {
            observer.observe(el);
        });
    } else {
        // Fallback: Observer desteklemeyen tarayıcılar için direkt göster
        animatedElements.forEach((el) => {
            el.classList.add('aos-animate');
        });
    }
}

// Astro View Transitions desteği
document.addEventListener('astro:page-load', initHero02);
initHero02();