// Newsletter Formu Yönetimi
const newsletterForm = document.getElementById('footer-newsletter');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value) {
            console.log('Abunəlik istəyi göndərildi:', emailInput.value);

            // Butonu geçici olarak değiştir
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Uğurlu!';
            btn.style.backgroundColor = '#22c55e'; // Yeşil renk
            emailInput.value = '';

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        }
    });
}