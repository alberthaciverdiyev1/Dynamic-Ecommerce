// ProductCard01 JavaScript
function initProductCard01() {
    const cartButtons = document.querySelectorAll('.pc-01-add-to-cart');

    cartButtons.forEach(btn => {
        // Event listener çakışmasını önlemek için
        if (btn.getAttribute('data-listener') !== 'true') {
            btn.addEventListener('click', (e) => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');

                console.log(`Ürün səbətə əlavə edildi: ${name} (ID: ${id})`);

                // Basit bir feedback
                const originalText = btn.innerText;
                btn.innerText = 'Əlavə edildi!';
                btn.classList.replace('bg-gray-900', 'bg-green-600');

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.replace('bg-green-600', 'bg-gray-900');
                }, 2000);
            });
            btn.setAttribute('data-listener', 'true');
        }
    });
}

// Astro View Transitions ile uyumlu çalışması için
document.addEventListener('astro:page-load', initProductCard01);
// İlk yükleme için
initProductCard01();