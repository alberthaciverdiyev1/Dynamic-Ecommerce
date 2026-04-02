// Footer 2 JavaScript
console.log('Footer 02 Script Loaded');

// Sosyal Medya İkonlarına Tıklanma Takibi (Örnek)
const socialLinksV2 = document.querySelectorAll('.social-icon-v2');

socialLinksV2.forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.getAttribute('aria-label');
        console.log(`Sosyal Medya Tıklandı: ${platform}`);
        // Buraya analitik gönderme mantığı eklenebilir
    });
});