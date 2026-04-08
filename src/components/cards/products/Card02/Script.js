function initProductCard02() {
    const cards = document.querySelectorAll('.pc-02');

    cards.forEach(card => {
        const addBtn = card.querySelector('.pc-02-add-cart');

        if (addBtn && addBtn.getAttribute('data-active') !== 'true') {
            addBtn.addEventListener('click', (e) => {
                const id = addBtn.getAttribute('data-id');
                console.log(`Ürün ${id} lüks sepete eklendi.`);

                // Şık bir bildirim simülasyonu
                addBtn.innerText = "ƏLAVƏ EDİLDİ";
                setTimeout(() => { addBtn.innerText = "SƏBƏTƏ ƏLAVƏ ET"; }, 2000);
            });
            addBtn.setAttribute('data-active', 'true');
        }
    });
}

document.addEventListener('astro:page-load', initProductCard02);
initProductCard02();