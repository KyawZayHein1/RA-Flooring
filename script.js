document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav ul li a');
    const gallery = document.querySelector('.gallery');

    const ourServiceTab = document.getElementById('our-service-tab');
    const ourServiceSubtabs = document.getElementById('our-service-subtabs');

    ourServiceTab.addEventListener('click', (event) => {
        event.preventDefault();
        ourServiceSubtabs.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            const imageSrc = link.getAttribute('data-image');
            const text = link.getAttribute('data-text');
            if (imageSrc && text) {
                gallery.innerHTML = `
                    <div class="gallery-content">
                        <img src="${imageSrc}" alt="Gallery Image" class="gallery-image active">
                        <p class="gallery-text">${text}</p>
                    </div>
                `;
            }
        });

        link.addEventListener('click', (event) => {
            event.preventDefault();
            const imageSrc = link.getAttribute('data-image');
            const text = link.getAttribute('data-text');
            if (imageSrc && text) {
                gallery.innerHTML = `
                    <div class="gallery-content">
                        <img src="${imageSrc}" alt="Gallery Image" class="gallery-image active">
                        <p class="gallery-text">${text}</p>
                    </div>
                `;
            }
        });
    });
});
