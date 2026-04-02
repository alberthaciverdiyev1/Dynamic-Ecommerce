function initLogin01() {
    const form = document.querySelector('#loginForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('.login-01-submit');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Loading Efekti
            submitBtn.classList.add('opacity-70', 'pointer-events-none');
            submitBtn.querySelector('span').innerText = "Yoxlanılır...";

            console.log('API-yə göndərilən məlumat:', data);

            // Sizin .NET API-niz burada çağırılacaq:
            // const response = await fetch('api/auth/login', { method: 'POST', body: JSON.stringify(data) });

            setTimeout(() => {
                alert("Giriş uğurludur! (Simulyasiya)");
                submitBtn.classList.remove('opacity-70', 'pointer-events-none');
                submitBtn.querySelector('span').innerText = "DAXİL OL";
            }, 1500);
        });
    }
}

document.addEventListener('astro:page-load', initLogin01);
initLogin01();