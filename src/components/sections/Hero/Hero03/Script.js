import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';

function initHeroSwiper() {
    const swiper = new Swiper('.mainHeroSwiper', {
        modules: [Navigation, Pagination, Autoplay, Parallax],
        parallax: true,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// Astro View Transitions uyumu
document.addEventListener('astro:page-load', initHeroSwiper);
initHeroSwiper();