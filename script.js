document.addEventListener("DOMContentLoaded", () => {

    // ===== LANGUAGE =====
    const toggle = document.getElementById("langToggle");
    let isEnglish = true;

    if (toggle) {
        toggle.addEventListener("click", () => {
            isEnglish = !isEnglish;

            document.querySelectorAll("[data-en]").forEach(el => {
                if (el.dataset.en && el.dataset.np) {
                    el.textContent = isEnglish ? el.dataset.en : el.dataset.np;
                }
            });

            toggle.textContent = isEnglish ? "NP" : "EN";
        });
    }

    // ===== NAV =====
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===== GALLERY CLICK =====
    const galleryImages = document.querySelectorAll(".gallery-item img");

    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener("click", () => {
                window.open(img.src, "_blank");
            });
        });
    }

});