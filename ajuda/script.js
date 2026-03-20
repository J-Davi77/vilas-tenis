// Mostrar respostas
const faqItens = document.querySelectorAll(".faq-item");

faqItens.forEach((item) => {
    item.querySelector(".faq-pergunta").addEventListener("click", () => {
        const estaAtivo = item.classList.contains("active");

        faqItens.forEach((outroItem) => {
            outroItem.classList.remove("active");
        });

        if (!estaAtivo) {
            item.classList.add("active");
        }
    });
});

// Header responsivo com sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#sidebar-close-btn");
const overlay = document.querySelector("#sidebar-overlay");

function openMenu() {
    overlay.classList.add("show");
}

function closeMenu() {
    overlay.classList.remove("show");
}

menuBtn.addEventListener("click", openMenu);

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMenu();
});

closeMenuBtn.addEventListener("click", closeMenu);
